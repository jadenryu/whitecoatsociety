from pydantic import BaseModel, EmailStr, Field
from typing import Optional, List, Dict, Any
from datetime import datetime
from enum import Enum

# User Models
class UserBase(BaseModel):
    email: EmailStr
    display_name: Optional[str] = None
    grade_level: Optional[int] = Field(None, ge=1, le=12)
    preferred_language: str = "en"

class UserCreate(UserBase):
    supabase_user_id: str
    parental_consent: bool = False

class UserUpdate(BaseModel):
    display_name: Optional[str] = None
    grade_level: Optional[int] = Field(None, ge=1, le=12)
    preferred_language: Optional[str] = None

class UserResponse(UserBase):
    id: str
    supabase_user_id: str
    created_at: datetime
    updated_at: datetime
    last_login: Optional[datetime] = None
    is_active: bool
    parental_consent: bool

    class Config:
        from_attributes = True

# Body System Models
class BodySystemBase(BaseModel):
    name: str
    description: Optional[str] = None
    color_theme: Optional[str] = None
    icon_name: Optional[str] = None
    display_order: int

class BodySystemResponse(BodySystemBase):
    id: str
    is_active: bool

    class Config:
        from_attributes = True

# Lesson Models
class DifficultyLevel(str, Enum):
    BEGINNER = "1"
    INTERMEDIATE = "2"
    ADVANCED = "3"

class LessonBase(BaseModel):
    title: str
    description: Optional[str] = None
    content: Optional[Dict[str, Any]] = None
    difficulty_level: DifficultyLevel
    estimated_duration: Optional[int] = None  # in minutes
    prerequisites: Optional[List[str]] = []
    learning_objectives: Optional[List[str]] = []
    display_order: int

class LessonCreate(LessonBase):
    body_system_id: str

class LessonResponse(LessonBase):
    id: str
    body_system_id: str
    is_published: bool
    created_at: datetime

    class Config:
        from_attributes = True

# Progress Models
class UserProgressBase(BaseModel):
    lesson_id: str
    completion_percentage: int = Field(ge=0, le=100)
    time_spent: int = Field(ge=0)  # in seconds

class UserProgressCreate(UserProgressBase):
    user_id: str

class UserProgressUpdate(BaseModel):
    completion_percentage: Optional[int] = Field(None, ge=0, le=100)
    time_spent: Optional[int] = Field(None, ge=0)

class UserProgressResponse(UserProgressBase):
    id: str
    user_id: str
    completed_at: Optional[datetime] = None
    last_accessed: datetime

    class Config:
        from_attributes = True

# Quiz Models
class QuestionType(str, Enum):
    MULTIPLE_CHOICE = "multiple_choice"
    INTERACTIVE_DIAGRAM = "interactive_diagram"
    SCENARIO = "scenario"

class QuizQuestionBase(BaseModel):
    question_text: str
    question_type: QuestionType
    options: Dict[str, Any]
    correct_answer: Dict[str, Any]
    explanation: Optional[str] = None
    difficulty_level: DifficultyLevel
    points: int = 10

class QuizQuestionCreate(QuizQuestionBase):
    body_system_id: str
    lesson_id: Optional[str] = None

class QuizQuestionResponse(QuizQuestionBase):
    id: str
    body_system_id: str
    lesson_id: Optional[str] = None
    created_at: datetime

    class Config:
        from_attributes = True

# Quiz Attempt Models
class QuizAttemptBase(BaseModel):
    lesson_id: Optional[str] = None
    body_system_id: str
    answers: Dict[str, Any]

class QuizAttemptCreate(QuizAttemptBase):
    pass

class QuizAttemptResponse(QuizAttemptBase):
    id: str
    user_id: str
    score: int
    total_questions: int
    time_taken: Optional[int] = None
    adaptive_difficulty: int
    completed_at: datetime

    class Config:
        from_attributes = True

# Virtual Lab Models
class LabType(str, Enum):
    EXPERIMENT = "experiment"
    SIMULATION_3D = "3d_simulation"
    INTERACTIVE_MODEL = "interactive_model"

class VirtualLabBase(BaseModel):
    name: str
    description: Optional[str] = None
    lab_type: LabType
    configuration: Dict[str, Any]
    learning_objectives: Optional[List[str]] = []
    estimated_duration: Optional[int] = None
    difficulty_level: DifficultyLevel

class VirtualLabCreate(VirtualLabBase):
    body_system_id: str

class VirtualLabResponse(VirtualLabBase):
    id: str
    body_system_id: str
    is_published: bool

    class Config:
        from_attributes = True

# Lab Session Models
class LabSessionBase(BaseModel):
    virtual_lab_id: str
    session_data: Dict[str, Any]
    completion_status: str = "in_progress"
    time_spent: int = 0

class LabSessionCreate(LabSessionBase):
    pass

class LabSessionUpdate(BaseModel):
    session_data: Optional[Dict[str, Any]] = None
    completion_status: Optional[str] = None
    time_spent: Optional[int] = None

class LabSessionResponse(LabSessionBase):
    id: str
    user_id: str
    completed_at: Optional[datetime] = None
    created_at: datetime

    class Config:
        from_attributes = True

# Career Models
class HealthcareProfessionalBase(BaseModel):
    name: str
    title: str
    specialty: Optional[str] = None
    bio: Optional[str] = None
    education_path: Optional[List[str]] = []
    day_in_life_video_url: Optional[str] = None
    interview_video_url: Optional[str] = None
    salary_range: Optional[str] = None
    growth_outlook: Optional[str] = None
    avatar_url: Optional[str] = None
    is_featured: bool = False
    display_order: int

class HealthcareProfessionalResponse(HealthcareProfessionalBase):
    id: str

    class Config:
        from_attributes = True

# Dashboard Models
class DashboardStats(BaseModel):
    total_lessons_completed: int
    total_quizzes_taken: int
    total_labs_completed: int
    current_streak: int
    longest_streak: int
    total_badges_earned: int
    overall_progress_percentage: float

class DashboardResponse(BaseModel):
    user: UserResponse
    stats: DashboardStats
    recent_progress: List[UserProgressResponse]
    body_systems_progress: List[Dict[str, Any]]
    upcoming_sessions: List[Dict[str, Any]]

# Search Models
class SearchResult(BaseModel):
    id: str
    title: str
    body: str
    content_type: str
    body_system_id: Optional[str] = None
    difficulty_level: Optional[int] = None
    tags: Optional[List[str]] = []
    relevance_score: Optional[float] = None

class SearchResponse(BaseModel):
    results: List[SearchResult]
    total_count: int
    query: str
    suggestions: Optional[List[str]] = []

# API Response Models
class APIResponse(BaseModel):
    success: bool
    message: str
    data: Optional[Any] = None

class ErrorResponse(BaseModel):
    success: bool = False
    message: str
    error_code: Optional[str] = None
    details: Optional[Dict[str, Any]] = None 