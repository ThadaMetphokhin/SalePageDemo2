// src/types/index.ts

export interface UserQuizData {
  workHours: number;
  stressLevel: 'low' | 'moderate' | 'high';
  healthIssues: {
    sleep: boolean;
    anxiety: boolean;
    focus: boolean;
  };
}

export interface QuizResult {
  peakFocusTime: string;
  recommendation: string;
  energyLevel: string;
  focusScore: number;
  workHours: number;
  stressLevel: 'low' | 'moderate' | 'high';
}

export interface QuestionOption {
  value?: string;
  label: string;
  emoji?: string;
  description?: string;
  key?: string;
  icon?: string;
}

export interface Question {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  type: 'slider' | 'stress' | 'checkbox';
  min?: number;
  max?: number;
  default?: number;
  unit?: string;
  options?: QuestionOption[];
}

export interface QuizComponentProps {
  onComplete?: (result: QuizResult) => void;
  onReset?: () => void;
  className?: string;
}

// Optional: เพิ่ม type สำหรับการคำนวณคะแนน
export interface FocusScoreParams {
  workHours: number;
  stressLevel: 'low' | 'moderate' | 'high';
  healthIssues: {
    sleep: boolean;
    anxiety: boolean;
    focus: boolean;
  };
}

export interface RecommendationParams {
  workHours: number;
  stressLevel: 'low' | 'moderate' | 'high';
  healthIssues: {
    sleep: boolean;
    anxiety: boolean;
    focus: boolean;
  };
}