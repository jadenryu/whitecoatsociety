from fastapi import FastAPI
import os

# Simple FastAPI app for testing
app = FastAPI(
    title="White Coats Society Backend API - Simple Test",
    description="Minimal version for testing deployment",
    version="1.0.0"
)

# Health check endpoints
@app.get("/")
async def root():
    return {"message": "White Coats Society Backend API - Simple Test", "status": "healthy"}

@app.get("/health")
async def health_check():
    return {"status": "healthy", "version": "1.0.0", "port": os.getenv("PORT", "8000")}

if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port) 