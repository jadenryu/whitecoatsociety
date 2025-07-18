from fastapi import APIRouter, Depends, HTTPException
from typing import Optional
from datetime import datetime

from auth.supabase_auth import get_current_user
from db.supabase_client import SupabaseDB
from models.schemas import UserResponse, UserCreate, UserUpdate, APIResponse, DashboardResponse, DashboardStats

router = APIRouter()

# Initialize database helper
db = SupabaseDB()

@router.get("/me", response_model=UserResponse)
async def get_current_user_profile(current_user: dict = Depends(get_current_user)):
    """
    Get current user's profile information
    """
    # Get user profile from database by Supabase user ID
    user = await db.get_user_by_supabase_id(current_user["id"])
    
    if not user:
        # User doesn't exist in our database yet - create their profile
        user_data = {
            "supabase_user_id": current_user["id"],
            "email": current_user["email"],
            "display_name": current_user.get("user_metadata", {}).get("display_name"),
            "created_at": datetime.now().isoformat(),
            "updated_at": datetime.now().isoformat(),
            "last_login": datetime.now().isoformat(),
            "is_active": True,
            "parental_consent": False  # Will need to be set separately
        }
        
        user = await db.create_user_profile(user_data)
        
        if not user:
            raise HTTPException(status_code=500, detail="Failed to create user profile")
    else:
        # Update last login time
        await db.update_user_profile(user["id"], {"last_login": datetime.now().isoformat()})
    
    return UserResponse(**user)

@router.put("/me", response_model=UserResponse)
async def update_current_user_profile(
    update_data: UserUpdate,
    current_user: dict = Depends(get_current_user)
):
    """
    Update current user's profile information
    """
    # Get user profile from database
    user = await db.get_user_by_supabase_id(current_user["id"])
    
    if not user:
        raise HTTPException(status_code=404, detail="User profile not found")
    
    # Update user profile data
    update_dict = update_data.dict(exclude_unset=True)
    update_dict["updated_at"] = datetime.now().isoformat()
    
    updated_user = await db.update_user_profile(user["id"], update_dict)
    
    if not updated_user:
        raise HTTPException(status_code=500, detail="Failed to update user profile")
    
    return UserResponse(**updated_user)

@router.get("/me/dashboard", response_model=DashboardResponse)
async def get_user_dashboard(current_user: dict = Depends(get_current_user)):
    """
    Get user's personalized dashboard data
    """
    # Get user profile from database
    user = await db.get_user_by_supabase_id(current_user["id"])
    
    if not user:
        raise HTTPException(status_code=404, detail="User profile not found")
    
    # Get user's progress
    progress = await db.get_user_progress(user["id"])
    
    # Get body systems for progress calculation
    body_systems = await db.get_body_systems()
    
    # Calculate dashboard stats (simplified for now)
    total_lessons_completed = len([p for p in progress if p["completion_percentage"] == 100])
    total_quizzes_taken = 0  # We'll implement this when we add quiz tracking
    total_labs_completed = 0  # We'll implement this when we add lab tracking
    current_streak = 0  # We'll implement streak tracking
    longest_streak = 0
    total_badges_earned = 0  # We'll implement badge system
    overall_progress = (sum(p["completion_percentage"] for p in progress) / len(progress)) if progress else 0
    
    stats = DashboardStats(
        total_lessons_completed=total_lessons_completed,
        total_quizzes_taken=total_quizzes_taken,
        total_labs_completed=total_labs_completed,
        current_streak=current_streak,
        longest_streak=longest_streak,
        total_badges_earned=total_badges_earned,
        overall_progress_percentage=overall_progress
    )
    
    # Calculate progress by body system
    body_systems_progress = []
    for body_system in body_systems:
        system_progress = [p for p in progress if p.get("body_system_id") == body_system["id"]]
        avg_progress = (sum(p["completion_percentage"] for p in system_progress) / len(system_progress)) if system_progress else 0
        
        body_systems_progress.append({
            "body_system": body_system,
            "progress_percentage": avg_progress,
            "lessons_completed": len([p for p in system_progress if p["completion_percentage"] == 100]),
            "total_lessons": len(system_progress)
        })
    
    # Get recent progress (last 5 activities)
    recent_progress = sorted(progress, key=lambda x: x.get("last_accessed", ""), reverse=True)[:5]
    
    return DashboardResponse(
        user=UserResponse(**user),
        stats=stats,
        recent_progress=[UserProgressResponse(**p) for p in recent_progress],
        body_systems_progress=body_systems_progress,
        upcoming_sessions=[]  # We'll implement this when we add session scheduling
    )

@router.post("/me/parental-consent")
async def update_parental_consent(current_user: dict = Depends(get_current_user)):
    """
    Update user's parental consent status (for COPPA compliance)
    """
    # Get user profile from database
    user = await db.get_user_by_supabase_id(current_user["id"])
    
    if not user:
        raise HTTPException(status_code=404, detail="User profile not found")
    
    # Update parental consent
    updated_user = await db.update_user_profile(user["id"], {
        "parental_consent": True,
        "updated_at": datetime.now().isoformat()
    })
    
    if not updated_user:
        raise HTTPException(status_code=500, detail="Failed to update parental consent")
    
    return APIResponse(
        success=True,
        message="Parental consent updated successfully",
        data={"parental_consent": True}
    ) 