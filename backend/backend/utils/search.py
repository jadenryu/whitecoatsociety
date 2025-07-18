from typing import List, Optional, Dict, Any
from db.supabase_client import SupabaseDB
from models.schemas import SearchResult, SearchResponse

class SearchService:
    """
    Basic search service - can be extended with Typesense later
    """
    
    def __init__(self):
        self.db = SupabaseDB()
    
    async def search_content(self, query: str, limit: int = 10, offset: int = 0) -> SearchResponse:
        """
        Search across all content types
        For now, this is a basic text search - can be enhanced with Typesense later
        """
        results = []
        
        # Search in lessons
        lesson_results = await self._search_lessons(query, limit // 2)
        results.extend(lesson_results)
        
        # Search in virtual labs
        lab_results = await self._search_labs(query, limit // 2)
        results.extend(lab_results)
        
        # Sort by relevance (basic implementation)
        results = self._rank_results(results, query)
        
        # Apply pagination
        paginated_results = results[offset:offset + limit]
        
        return SearchResponse(
            results=paginated_results,
            total_count=len(results),
            query=query,
            suggestions=self._generate_suggestions(query)
        )
    
    async def _search_lessons(self, query: str, limit: int) -> List[SearchResult]:
        """
        Search in lessons table
        """
        try:
            # Basic text search - can be improved with full-text search
            response = self.db.client.table("lessons").select("id, title, description, body_system_id, difficulty_level").ilike("title", f"%{query}%").limit(limit).execute()
            
            results = []
            for lesson in response.data:
                results.append(SearchResult(
                    id=lesson["id"],
                    title=lesson["title"],
                    body=lesson["description"] or "",
                    content_type="lesson",
                    body_system_id=lesson["body_system_id"],
                    difficulty_level=lesson["difficulty_level"],
                    tags=["lesson", "education"]
                ))
            
            return results
        except Exception as e:
            print(f"Error searching lessons: {e}")
            return []
    
    async def _search_labs(self, query: str, limit: int) -> List[SearchResult]:
        """
        Search in virtual labs table
        """
        try:
            response = self.db.client.table("virtual_labs").select("id, name, description, body_system_id, difficulty_level, lab_type").ilike("name", f"%{query}%").limit(limit).execute()
            
            results = []
            for lab in response.data:
                results.append(SearchResult(
                    id=lab["id"],
                    title=lab["name"],
                    body=lab["description"] or "",
                    content_type="virtual_lab",
                    body_system_id=lab["body_system_id"],
                    difficulty_level=lab["difficulty_level"],
                    tags=["lab", "experiment", lab["lab_type"]]
                ))
            
            return results
        except Exception as e:
            print(f"Error searching labs: {e}")
            return []
    
    def _rank_results(self, results: List[SearchResult], query: str) -> List[SearchResult]:
        """
        Basic ranking algorithm - can be improved with more sophisticated scoring
        """
        query_lower = query.lower()
        
        for result in results:
            score = 0
            
            # Title exact match gets highest score
            if query_lower in result.title.lower():
                score += 10
            
            # Body match gets lower score
            if query_lower in result.body.lower():
                score += 5
            
            # Tag match gets medium score
            for tag in result.tags:
                if query_lower in tag.lower():
                    score += 3
            
            result.relevance_score = score
        
        # Sort by relevance score
        return sorted(results, key=lambda x: x.relevance_score or 0, reverse=True)
    
    def _generate_suggestions(self, query: str) -> List[str]:
        """
        Generate search suggestions - basic implementation
        """
        # This is a basic implementation - can be enhanced with real suggestions
        common_topics = [
            "heart", "cardiovascular", "blood", "circulation",
            "lungs", "respiratory", "breathing", "oxygen",
            "brain", "nervous", "neurons", "reflexes",
            "bones", "skeletal", "muscles", "joints",
            "digestive", "stomach", "nutrients", "enzymes",
            "immune", "white blood cells", "antibodies", "vaccines"
        ]
        
        suggestions = []
        query_lower = query.lower()
        
        for topic in common_topics:
            if query_lower in topic or topic.startswith(query_lower):
                suggestions.append(topic)
        
        return suggestions[:5]  # Return top 5 suggestions
    
    async def get_content_by_body_system(self, body_system_id: str) -> Dict[str, Any]:
        """
        Get all content for a specific body system
        """
        try:
            # Get lessons
            lessons_response = self.db.client.table("lessons").select("*").eq("body_system_id", body_system_id).eq("is_published", True).execute()
            
            # Get virtual labs
            labs_response = self.db.client.table("virtual_labs").select("*").eq("body_system_id", body_system_id).eq("is_published", True).execute()
            
            # Get body system info
            body_system_response = self.db.client.table("body_systems").select("*").eq("id", body_system_id).execute()
            
            return {
                "body_system": body_system_response.data[0] if body_system_response.data else None,
                "lessons": lessons_response.data or [],
                "virtual_labs": labs_response.data or []
            }
        except Exception as e:
            print(f"Error getting content by body system: {e}")
            return {"body_system": None, "lessons": [], "virtual_labs": []}
    
    async def get_popular_content(self, limit: int = 10) -> List[SearchResult]:
        """
        Get popular/trending content - placeholder implementation
        """
        # This is a placeholder - in a real implementation, you'd track view counts, ratings, etc.
        try:
            # Get some featured lessons
            lessons_response = self.db.client.table("lessons").select("id, title, description, body_system_id, difficulty_level").eq("is_published", True).limit(limit).execute()
            
            results = []
            for lesson in lessons_response.data:
                results.append(SearchResult(
                    id=lesson["id"],
                    title=lesson["title"],
                    body=lesson["description"] or "",
                    content_type="lesson",
                    body_system_id=lesson["body_system_id"],
                    difficulty_level=lesson["difficulty_level"],
                    tags=["lesson", "popular"]
                ))
            
            return results
        except Exception as e:
            print(f"Error getting popular content: {e}")
            return [] 