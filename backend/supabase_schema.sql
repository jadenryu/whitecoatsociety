-- White Coats Society Database Schema for Supabase
-- This schema uses Supabase's built-in auth.users table for authentication

-- Enable Row Level Security (RLS) for all tables
-- This ensures users can only access their own data

-- User Profiles table (extends auth.users)
CREATE TABLE user_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    supabase_user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT,
    display_name TEXT,
    grade_level INTEGER CHECK (grade_level >= 1 AND grade_level <= 12),
    preferred_language TEXT DEFAULT 'en',
    parental_consent BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_login TIMESTAMP WITH TIME ZONE,
    is_active BOOLEAN DEFAULT TRUE,
    UNIQUE(supabase_user_id)
);

-- Enable RLS on user_profiles
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Users can only see their own profile
CREATE POLICY "Users can view own profile" ON user_profiles
    FOR SELECT USING (auth.uid() = supabase_user_id);

-- RLS Policy: Users can update their own profile
CREATE POLICY "Users can update own profile" ON user_profiles
    FOR UPDATE USING (auth.uid() = supabase_user_id);

-- RLS Policy: Users can insert their own profile
CREATE POLICY "Users can insert own profile" ON user_profiles
    FOR INSERT WITH CHECK (auth.uid() = supabase_user_id);

-- Body Systems (Heart, Lungs, Brain, etc.)
CREATE TABLE body_systems (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    description TEXT,
    color_theme TEXT,
    icon_name TEXT,
    display_order INTEGER,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default body systems
INSERT INTO body_systems (name, description, color_theme, icon_name, display_order, is_active) VALUES
    ('Cardiovascular', 'Heart and circulatory system', '#ef4444', 'Heart', 1, true),
    ('Respiratory', 'Lungs and breathing system', '#3b82f6', 'Wind', 2, true),
    ('Nervous', 'Brain, spinal cord, and nerves', '#8b5cf6', 'Brain', 3, true),
    ('Skeletal', 'Bones and skeletal structure', '#f59e0b', 'Bone', 4, true),
    ('Digestive', 'Stomach and digestive organs', '#10b981', 'Sandwich', 5, true),
    ('Immune', 'Immune system and defense', '#f97316', 'Shield', 6, true);

-- Lessons within each body system
CREATE TABLE lessons (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    body_system_id UUID REFERENCES body_systems(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    content JSONB,
    difficulty_level INTEGER CHECK (difficulty_level IN (1, 2, 3)),
    estimated_duration INTEGER,
    prerequisites TEXT[],
    learning_objectives TEXT[],
    display_order INTEGER,
    is_published BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Quiz questions and question banks
CREATE TABLE quiz_questions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    body_system_id UUID REFERENCES body_systems(id) ON DELETE CASCADE,
    lesson_id UUID REFERENCES lessons(id) ON DELETE CASCADE,
    question_text TEXT NOT NULL,
    question_type TEXT CHECK (question_type IN ('multiple_choice', 'interactive_diagram', 'scenario')),
    options JSONB,
    correct_answer JSONB,
    explanation TEXT,
    difficulty_level INTEGER CHECK (difficulty_level IN (1, 2, 3)),
    points INTEGER DEFAULT 10,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User progress tracking
CREATE TABLE user_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES user_profiles(id) ON DELETE CASCADE,
    lesson_id UUID REFERENCES lessons(id) ON DELETE CASCADE,
    completion_percentage INTEGER DEFAULT 0 CHECK (completion_percentage >= 0 AND completion_percentage <= 100),
    time_spent INTEGER DEFAULT 0,
    completed_at TIMESTAMP WITH TIME ZONE,
    last_accessed TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, lesson_id)
);

-- Enable RLS on user_progress
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Users can only see their own progress
CREATE POLICY "Users can view own progress" ON user_progress
    FOR SELECT USING (user_id IN (SELECT id FROM user_profiles WHERE supabase_user_id = auth.uid()));

-- RLS Policy: Users can update their own progress
CREATE POLICY "Users can update own progress" ON user_progress
    FOR ALL USING (user_id IN (SELECT id FROM user_profiles WHERE supabase_user_id = auth.uid()));

-- Quiz attempts and results
CREATE TABLE quiz_attempts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES user_profiles(id) ON DELETE CASCADE,
    lesson_id UUID REFERENCES lessons(id) ON DELETE CASCADE,
    body_system_id UUID REFERENCES body_systems(id) ON DELETE CASCADE,
    score INTEGER NOT NULL,
    total_questions INTEGER NOT NULL,
    time_taken INTEGER,
    answers JSONB,
    adaptive_difficulty INTEGER DEFAULT 1,
    completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on quiz_attempts
ALTER TABLE quiz_attempts ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Users can only see their own quiz attempts
CREATE POLICY "Users can view own quiz attempts" ON quiz_attempts
    FOR SELECT USING (user_id IN (SELECT id FROM user_profiles WHERE supabase_user_id = auth.uid()));

-- RLS Policy: Users can insert their own quiz attempts
CREATE POLICY "Users can insert own quiz attempts" ON quiz_attempts
    FOR INSERT WITH CHECK (user_id IN (SELECT id FROM user_profiles WHERE supabase_user_id = auth.uid()));

-- Virtual lab experiments
CREATE TABLE virtual_labs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    body_system_id UUID REFERENCES body_systems(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    lab_type TEXT CHECK (lab_type IN ('experiment', '3d_simulation', 'interactive_model')),
    configuration JSONB,
    learning_objectives TEXT[],
    estimated_duration INTEGER,
    difficulty_level INTEGER CHECK (difficulty_level IN (1, 2, 3)),
    is_published BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User lab sessions
CREATE TABLE lab_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES user_profiles(id) ON DELETE CASCADE,
    virtual_lab_id UUID REFERENCES virtual_labs(id) ON DELETE CASCADE,
    session_data JSONB,
    completion_status TEXT DEFAULT 'in_progress',
    time_spent INTEGER DEFAULT 0,
    completed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on lab_sessions
ALTER TABLE lab_sessions ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Users can only see their own lab sessions
CREATE POLICY "Users can view own lab sessions" ON lab_sessions
    FOR SELECT USING (user_id IN (SELECT id FROM user_profiles WHERE supabase_user_id = auth.uid()));

-- RLS Policy: Users can manage their own lab sessions
CREATE POLICY "Users can manage own lab sessions" ON lab_sessions
    FOR ALL USING (user_id IN (SELECT id FROM user_profiles WHERE supabase_user_id = auth.uid()));

-- Healthcare professionals for career section
CREATE TABLE healthcare_professionals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    title TEXT NOT NULL,
    specialty TEXT,
    bio TEXT,
    education_path TEXT[],
    day_in_life_video_url TEXT,
    interview_video_url TEXT,
    salary_range TEXT,
    growth_outlook TEXT,
    avatar_url TEXT,
    is_featured BOOLEAN DEFAULT FALSE,
    display_order INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Community forum posts
CREATE TABLE forum_posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES user_profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    body_system_id UUID REFERENCES body_systems(id) ON DELETE SET NULL,
    post_type TEXT CHECK (post_type IN ('question', 'discussion', 'resource_share')),
    is_pinned BOOLEAN DEFAULT FALSE,
    is_answered BOOLEAN DEFAULT FALSE,
    vote_count INTEGER DEFAULT 0,
    view_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on forum_posts
ALTER TABLE forum_posts ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Everyone can view forum posts
CREATE POLICY "Anyone can view forum posts" ON forum_posts
    FOR SELECT USING (true);

-- RLS Policy: Users can insert their own posts
CREATE POLICY "Users can insert own posts" ON forum_posts
    FOR INSERT WITH CHECK (user_id IN (SELECT id FROM user_profiles WHERE supabase_user_id = auth.uid()));

-- RLS Policy: Users can update their own posts
CREATE POLICY "Users can update own posts" ON forum_posts
    FOR UPDATE USING (user_id IN (SELECT id FROM user_profiles WHERE supabase_user_id = auth.uid()));

-- Forum replies
CREATE TABLE forum_replies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    post_id UUID REFERENCES forum_posts(id) ON DELETE CASCADE,
    user_id UUID REFERENCES user_profiles(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    is_mentor_reply BOOLEAN DEFAULT FALSE,
    is_accepted_answer BOOLEAN DEFAULT FALSE,
    vote_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on forum_replies
ALTER TABLE forum_replies ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Everyone can view forum replies
CREATE POLICY "Anyone can view forum replies" ON forum_replies
    FOR SELECT USING (true);

-- RLS Policy: Users can insert their own replies
CREATE POLICY "Users can insert own replies" ON forum_replies
    FOR INSERT WITH CHECK (user_id IN (SELECT id FROM user_profiles WHERE supabase_user_id = auth.uid()));

-- RLS Policy: Users can update their own replies
CREATE POLICY "Users can update own replies" ON forum_replies
    FOR UPDATE USING (user_id IN (SELECT id FROM user_profiles WHERE supabase_user_id = auth.uid()));

-- Mentors (healthcare professionals who provide guidance)
CREATE TABLE mentors (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES user_profiles(id) ON DELETE CASCADE,
    professional_id UUID REFERENCES healthcare_professionals(id) ON DELETE SET NULL,
    specialties TEXT[],
    bio TEXT,
    is_verified BOOLEAN DEFAULT FALSE,
    is_available BOOLEAN DEFAULT TRUE,
    response_rate DECIMAL(3,2) DEFAULT 0.00,
    total_responses INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User achievements/badges
CREATE TABLE achievements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    description TEXT,
    icon_name TEXT,
    badge_type TEXT CHECK (badge_type IN ('completion', 'streak', 'performance', 'community')),
    requirements JSONB,
    points_awarded INTEGER DEFAULT 0,
    rarity TEXT CHECK (rarity IN ('common', 'uncommon', 'rare', 'epic')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User earned achievements
CREATE TABLE user_achievements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES user_profiles(id) ON DELETE CASCADE,
    achievement_id UUID REFERENCES achievements(id) ON DELETE CASCADE,
    earned_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, achievement_id)
);

-- Enable RLS on user_achievements
ALTER TABLE user_achievements ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Users can only see their own achievements
CREATE POLICY "Users can view own achievements" ON user_achievements
    FOR SELECT USING (user_id IN (SELECT id FROM user_profiles WHERE supabase_user_id = auth.uid()));

-- Learning streaks
CREATE TABLE learning_streaks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES user_profiles(id) ON DELETE CASCADE,
    current_streak INTEGER DEFAULT 0,
    longest_streak INTEGER DEFAULT 0,
    last_activity_date DATE,
    streak_start_date DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id)
);

-- Enable RLS on learning_streaks
ALTER TABLE learning_streaks ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Users can only see their own streaks
CREATE POLICY "Users can view own streaks" ON learning_streaks
    FOR SELECT USING (user_id IN (SELECT id FROM user_profiles WHERE supabase_user_id = auth.uid()));

-- RLS Policy: Users can manage their own streaks
CREATE POLICY "Users can manage own streaks" ON learning_streaks
    FOR ALL USING (user_id IN (SELECT id FROM user_profiles WHERE supabase_user_id = auth.uid()));

-- Q&A sessions with professionals
CREATE TABLE qa_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT,
    professional_id UUID REFERENCES healthcare_professionals(id) ON DELETE SET NULL,
    scheduled_at TIMESTAMP WITH TIME ZONE,
    duration_minutes INTEGER DEFAULT 60,
    max_participants INTEGER DEFAULT 50,
    meeting_url TEXT,
    status TEXT CHECK (status IN ('scheduled', 'live', 'completed', 'cancelled')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Session registrations
CREATE TABLE session_registrations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES user_profiles(id) ON DELETE CASCADE,
    session_id UUID REFERENCES qa_sessions(id) ON DELETE CASCADE,
    registered_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    attended BOOLEAN DEFAULT FALSE,
    UNIQUE(user_id, session_id)
);

-- Enable RLS on session_registrations
ALTER TABLE session_registrations ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Users can only see their own registrations
CREATE POLICY "Users can view own registrations" ON session_registrations
    FOR SELECT USING (user_id IN (SELECT id FROM user_profiles WHERE supabase_user_id = auth.uid()));

-- RLS Policy: Users can manage their own registrations
CREATE POLICY "Users can manage own registrations" ON session_registrations
    FOR ALL USING (user_id IN (SELECT id FROM user_profiles WHERE supabase_user_id = auth.uid()));

-- Content for search indexing
CREATE TABLE search_content (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    content_type TEXT CHECK (content_type IN ('lesson', 'quiz', 'lab', 'video', 'career_profile')),
    content_id UUID NOT NULL,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    tags TEXT[],
    body_system_id UUID REFERENCES body_systems(id) ON DELETE SET NULL,
    difficulty_level INTEGER,
    indexed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX idx_user_profiles_supabase_user_id ON user_profiles(supabase_user_id);
CREATE INDEX idx_user_progress_user_id ON user_progress(user_id);
CREATE INDEX idx_user_progress_lesson_id ON user_progress(lesson_id);
CREATE INDEX idx_quiz_attempts_user_id ON quiz_attempts(user_id);
CREATE INDEX idx_lessons_body_system_id ON lessons(body_system_id);
CREATE INDEX idx_lessons_is_published ON lessons(is_published);
CREATE INDEX idx_virtual_labs_body_system_id ON virtual_labs(body_system_id);
CREATE INDEX idx_forum_posts_user_id ON forum_posts(user_id);
CREATE INDEX idx_forum_replies_post_id ON forum_replies(post_id);
CREATE INDEX idx_search_content_content_type ON search_content(content_type);
CREATE INDEX idx_search_content_body_system_id ON search_content(body_system_id);

-- Create full-text search index
CREATE INDEX idx_search_content_fts ON search_content USING GIN (to_tsvector('english', title || ' ' || body));

-- Functions for automatic user profile creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.user_profiles (supabase_user_id, email, display_name, created_at, updated_at)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'display_name',
    NOW(),
    NOW()
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to automatically create user profile when a new user signs up
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to update user profile updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers to update updated_at timestamp
CREATE TRIGGER update_user_profiles_updated_at
    BEFORE UPDATE ON user_profiles
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_lessons_updated_at
    BEFORE UPDATE ON lessons
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_virtual_labs_updated_at
    BEFORE UPDATE ON virtual_labs
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_forum_posts_updated_at
    BEFORE UPDATE ON forum_posts
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_forum_replies_updated_at
    BEFORE UPDATE ON forum_replies
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_learning_streaks_updated_at
    BEFORE UPDATE ON learning_streaks
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_lab_sessions_updated_at
    BEFORE UPDATE ON lab_sessions
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_search_content_updated_at
    BEFORE UPDATE ON search_content
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column(); 