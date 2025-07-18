import os
from supabase import create_client, Client
from typing import Optional

# Global Supabase client instance
supabase_client: Optional[Client] = None

def get_supabase_client() -> Client:
    """
    Get or create Supabase client instance
    """
    global supabase_client
    
    if supabase_client is None:
        supabase_url = os.getenv("SUPABASE_URL")
        supabase_key = os.getenv("SUPABASE_SERVICE_ROLE_KEY")
        
        if not supabase_url or not supabase_key:
            raise ValueError("SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in environment variables")
        
        supabase_client = create_client(supabase_url, supabase_key)
    
    return supabase_client

def get_anon_supabase_client() -> Client:
    """
    Get Supabase client with anonymous key (for public operations)
    """
    supabase_url = os.getenv("SUPABASE_URL")
    supabase_anon_key = os.getenv("SUPABASE_ANON_KEY")
    
    if not supabase_url or not supabase_anon_key:
        raise ValueError("SUPABASE_URL and SUPABASE_ANON_KEY must be set in environment variables")
    
    return create_client(supabase_url, supabase_anon_key)

# Database helper functions
class SupabaseDB:
    """
    Helper class for common database operations
    """
    
    def __init__(self, use_service_role: bool = True):
        self.client = get_supabase_client() if use_service_role else get_anon_supabase_client()
    
    async def get_user_by_supabase_id(self, supabase_id: str) -> Optional[dict]:
        """
        Get user by Supabase user ID
        """
        try:
            response = self.client.table("user_profiles").select("*").eq("supabase_user_id", supabase_id).execute()
            return response.data[0] if response.data else None
        except Exception as e:
            print(f"Error getting user by Supabase ID: {e}")
            return None
    
    async def create_user_profile(self, user_data: dict) -> Optional[dict]:
        """
        Create a new user profile in the database
        """
        try:
            response = self.client.table("user_profiles").insert(user_data).execute()
            return response.data[0] if response.data else None
        except Exception as e:
            print(f"Error creating user profile: {e}")
            return None
    
    async def update_user_profile(self, user_id: str, update_data: dict) -> Optional[dict]:
        """
        Update user profile data
        """
        try:
            response = self.client.table("user_profiles").update(update_data).eq("id", user_id).execute()
            return response.data[0] if response.data else None
        except Exception as e:
            print(f"Error updating user profile: {e}")
            return None
    
    async def get_user_progress(self, user_id: str) -> list:
        """
        Get user's learning progress
        """
        try:
            response = self.client.table("user_progress").select("*").eq("user_id", user_id).execute()
            return response.data or []
        except Exception as e:
            print(f"Error getting user progress: {e}")
            return []
    
    async def get_lessons_by_body_system(self, body_system_id: str) -> list:
        """
        Get lessons for a specific body system
        """
        try:
            response = self.client.table("lessons").select("*").eq("body_system_id", body_system_id).eq("is_published", True).order("display_order").execute()
            return response.data or []
        except Exception as e:
            print(f"Error getting lessons: {e}")
            return []
    
    async def get_body_systems(self) -> list:
        """
        Get all active body systems
        """
        try:
            response = self.client.table("body_systems").select("*").eq("is_active", True).order("display_order").execute()
            return response.data or []
        except Exception as e:
            print(f"Error getting body systems: {e}")
            return [] 