from fastapi import APIRouter, Depends, HTTPException
from typing import List, Optional
from db.supabase_client import SupabaseDB
from models.schemas import BodySystemResponse, LessonResponse
from auth.supabase_auth import get_optional_user

router = APIRouter()

# Initialize database helper
db = SupabaseDB()

@router.get("/body-systems", response_model=List[BodySystemResponse])
async def get_body_systems(user: Optional[dict] = Depends(get_optional_user)):
    """
    Get all active body systems
    """
    body_systems = await db.get_body_systems()
    return [BodySystemResponse(**system) for system in body_systems]

@router.get("/body-systems/{body_system_id}", response_model=BodySystemResponse)
async def get_body_system(
    body_system_id: str,
    user: Optional[dict] = Depends(get_optional_user)
):
    """
    Get a specific body system by ID
    """
    try:
        response = db.client.table("body_systems").select("*").eq("id", body_system_id).execute()
        
        if not response.data:
            raise HTTPException(status_code=404, detail="Body system not found")
        
        return BodySystemResponse(**response.data[0])
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error retrieving body system: {str(e)}")

@router.get("/body-systems/{body_system_id}/lessons", response_model=List[LessonResponse])
async def get_lessons_by_body_system(
    body_system_id: str,
    user: Optional[dict] = Depends(get_optional_user)
):
    """
    Get all lessons for a specific body system
    """
    lessons = await db.get_lessons_by_body_system(body_system_id)
    return [LessonResponse(**lesson) for lesson in lessons]

@router.get("/lessons/{lesson_id}", response_model=LessonResponse)
async def get_lesson(
    lesson_id: str,
    user: Optional[dict] = Depends(get_optional_user)
):
    """
    Get a specific lesson by ID
    """
    try:
        response = db.client.table("lessons").select("*").eq("id", lesson_id).eq("is_published", True).execute()
        
        if not response.data:
            raise HTTPException(status_code=404, detail="Lesson not found")
        
        return LessonResponse(**response.data[0])
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error retrieving lesson: {str(e)}")

@router.get("/lessons", response_model=List[LessonResponse])
async def get_all_lessons(
    limit: int = 50,
    offset: int = 0,
    difficulty_level: Optional[str] = None,
    user: Optional[dict] = Depends(get_optional_user)
):
    """
    Get all published lessons with optional filtering
    """
    try:
        query = db.client.table("lessons").select("*").eq("is_published", True)
        
        if difficulty_level:
            query = query.eq("difficulty_level", difficulty_level)
        
        response = query.order("display_order").range(offset, offset + limit - 1).execute()
        
        return [LessonResponse(**lesson) for lesson in response.data]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error retrieving lessons: {str(e)}")

@router.post("/lessons/{lesson_id}/complete")
async def mark_lesson_complete(
    lesson_id: str,
    user: dict = Depends(get_optional_user)
):
    """
    Mark a lesson as complete for the current user
    """
    if not user:
        raise HTTPException(status_code=401, detail="Authentication required")
    
    # Get user profile from database
    db_user = await db.get_user_by_supabase_id(user["id"])
    if not db_user:
        raise HTTPException(status_code=404, detail="User profile not found")
    
    try:
        # Check if progress record exists
        progress_response = db.client.table("user_progress").select("*").eq("user_id", db_user["id"]).eq("lesson_id", lesson_id).execute()
        
        if progress_response.data:
            # Update existing progress
            update_response = db.client.table("user_progress").update({
                "completion_percentage": 100,
                "completed_at": "now()",
                "last_accessed": "now()"
            }).eq("user_id", db_user["id"]).eq("lesson_id", lesson_id).execute()
        else:
            # Create new progress record
            insert_response = db.client.table("user_progress").insert({
                "user_id": db_user["id"],
                "lesson_id": lesson_id,
                "completion_percentage": 100,
                "completed_at": "now()",
                "last_accessed": "now()"
            }).execute()
        
        return {"success": True, "message": "Lesson marked as complete"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error marking lesson complete: {str(e)}") 