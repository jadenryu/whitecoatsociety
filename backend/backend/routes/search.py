from fastapi import APIRouter, Depends, Query
from typing import Optional
from utils.search import SearchService
from models.schemas import SearchResponse, SearchResult
from auth.supabase_auth import get_optional_user

router = APIRouter()

# Initialize search service
search_service = SearchService()

@router.get("/", response_model=SearchResponse)
async def search_content(
    q: str = Query(..., description="Search query"),
    limit: int = Query(10, ge=1, le=50, description="Number of results per page"),
    offset: int = Query(0, ge=0, description="Offset for pagination"),
    user: Optional[dict] = Depends(get_optional_user)
):
    """
    Search across all content types (lessons, labs, etc.)
    """
    results = await search_service.search_content(q, limit, offset)
    return results

@router.get("/suggestions")
async def get_search_suggestions(
    q: str = Query(..., description="Partial query for suggestions"),
    user: Optional[dict] = Depends(get_optional_user)
):
    """
    Get search suggestions based on partial query
    """
    suggestions = search_service._generate_suggestions(q)
    return {"suggestions": suggestions}

@router.get("/popular", response_model=list[SearchResult])
async def get_popular_content(
    limit: int = Query(10, ge=1, le=50, description="Number of results"),
    user: Optional[dict] = Depends(get_optional_user)
):
    """
    Get popular/trending content
    """
    results = await search_service.get_popular_content(limit)
    return results

@router.get("/body-system/{body_system_id}")
async def get_content_by_body_system(
    body_system_id: str,
    user: Optional[dict] = Depends(get_optional_user)
):
    """
    Get all content for a specific body system
    """
    content = await search_service.get_content_by_body_system(body_system_id)
    return content 