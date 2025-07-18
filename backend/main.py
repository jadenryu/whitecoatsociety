from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Initialize FastAPI app
app = FastAPI(
    title="White Coats Society Backend API",
    description="Backend API for the White Coats Society educational platform",
    version="1.0.0"
)

# Configure CORS
allowed_origins = [
    "http://localhost:3000",  # Local development
    "https://whitecoatsociety.org",  # Production domain
    "https://www.whitecoatsociety.org",  # Production domain with www
]

# Add Vercel deployment URLs if they exist
if os.getenv("VERCEL_URL"):
    allowed_origins.append(f"https://{os.getenv('VERCEL_URL')}")

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health check endpoints
@app.get("/")
async def root():
    return {"message": "White Coats Society Backend API", "status": "healthy"}

@app.get("/health")
async def health_check():
    return {"status": "healthy", "version": "1.0.0"}

# Include routers only if Supabase environment variables are available
try:
    # Check if required environment variables are set
    supabase_url = os.getenv("SUPABASE_URL")
    supabase_key = os.getenv("SUPABASE_SERVICE_ROLE_KEY")
    
    if supabase_url and supabase_key:
        from routes.users import router as users_router
        from routes.content import router as content_router
        from routes.search import router as search_router

        app.include_router(users_router, prefix="/api/v1/users", tags=["users"])
        app.include_router(content_router, prefix="/api/v1/content", tags=["content"])
        app.include_router(search_router, prefix="/api/v1/search", tags=["search"])
        
        print("✅ All routers loaded successfully")
    else:
        print("⚠️  Supabase environment variables not set - skipping router imports")
        
except Exception as e:
    print(f"⚠️  Error loading routers: {e}")
    print("⚠️  Continuing with basic endpoints only")

# Fallback API endpoints (always available)
@app.get("/api/users/profile")
async def get_user_profile():
    return {"message": "User profile endpoint", "status": "working"}

@app.get("/api/content/body-systems")
async def get_body_systems():
    return {"message": "Body systems endpoint", "status": "working"}

if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port) 