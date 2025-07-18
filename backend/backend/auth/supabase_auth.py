import os
import jwt
from fastapi import HTTPException, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from typing import Optional
from db.supabase_client import get_supabase_client

# HTTP Bearer token security
security = HTTPBearer()

async def verify_supabase_token(credentials: HTTPAuthorizationCredentials = Depends(security)) -> dict:
    """
    Verify Supabase JWT token and return user information
    """
    token = credentials.credentials
    
    try:
        # Get Supabase client
        supabase = get_supabase_client()
        
        # Verify the JWT token with Supabase
        # The token should be a valid Supabase JWT
        response = supabase.auth.get_user(token)
        
        if response.user is None:
            raise HTTPException(
                status_code=401,
                detail="Invalid or expired token"
            )
            
        return {
            "id": response.user.id,
            "email": response.user.email,
            "email_confirmed_at": response.user.email_confirmed_at,
            "user_metadata": response.user.user_metadata,
            "app_metadata": response.user.app_metadata
        }
    except Exception as e:
        raise HTTPException(
            status_code=401,
            detail=f"Token verification failed: {str(e)}"
        )

async def get_current_user(token_data: dict = Depends(verify_supabase_token)) -> dict:
    """
    Get current user information from verified Supabase token
    """
    return {
        "id": token_data.get("id"),
        "email": token_data.get("email"),
        "email_confirmed": token_data.get("email_confirmed_at") is not None,
        "user_metadata": token_data.get("user_metadata", {}),
        "app_metadata": token_data.get("app_metadata", {}),
        "supabase_token": token_data
    }

async def get_optional_user(credentials: Optional[HTTPAuthorizationCredentials] = Depends(HTTPBearer(auto_error=False))) -> Optional[dict]:
    """
    Get user information if token is provided, otherwise return None
    Useful for endpoints that work with or without authentication
    """
    if credentials is None:
        return None
    
    try:
        token_data = await verify_supabase_token(credentials)
        return await get_current_user(token_data)
    except HTTPException:
        return None 