// src/components/Quiz.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Brain,
    ChartLine,
    Clock,
    Heart,
    Zap,
    TrendingUp,
    ChevronRight,
    ChevronLeft,
    Sparkles,
    CheckCircle2,
    AlertCircle,
} from 'lucide-react';
import {
    UserQuizData,
    QuizResult,
    Question,
    QuestionOption,
    QuizComponentProps,
} from '@/types/quiz';

const Quiz: React.FC<QuizComponentProps> = ({
    onComplete,
    onReset,
    className = '',
}) => {
    const [step, setStep] = useState<'quiz' | 'result'>('quiz');
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [quizData, setQuizData] = useState<UserQuizData>({
        workHours: 8,
        stressLevel: 'moderate',
        healthIssues: {
            sleep: false,
            anxiety: false,
            focus: false,
        },
    });
    const [result, setResult] = useState<QuizResult | null>(null);
    const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);

    const questions: Question[] = [
        {
            id: 1,
            title: '⏰ ชั่วโมงการทำงานต่อวัน ?',
            subtitle: 'เลือกช่วงเวลาที่คุณทำงานจริง ๆ',
            icon: Clock,
            type: 'slider',
            min: 4,
            max: 14,
            default: 8,
            unit: 'ชั่วโมง',
        },
        {
            id: 2,
            title: '😟 ระดับความเครียดในแต่ละวัน?',
            subtitle: 'ประเมินระดับความเครียดของคุณ',
            icon: Heart,
            type: 'stress',
            options: [
                {
                    value: 'low',
                    label: 'ต่ำ',
                    emoji: '😊',
                    description: 'รู้สึกผ่อนคลาย',
                },
                {
                    value: 'moderate',
                    label: 'ปานกลาง',
                    emoji: '😐',
                    description: 'มีบ้างแต่จัดการได้',
                },
                {
                    value: 'high',
                    label: 'สูงมาก',
                    emoji: '😰',
                    description: 'เครียดหนัก กังวลบ่อย',
                },
            ],
        },
        {
            id: 3,
            title: '🤔 ปัญหาสุขภาพที่กังวล?',
            subtitle: 'เลือกอาการที่คุณพบเจอ (เลือกได้หลายข้อ)',
            icon: AlertCircle,
            type: 'checkbox',
            options: [
                { key: 'sleep', label: 'นอนไม่หลับ', emoji: '😴', icon: '🌙' },
                { key: 'anxiety', label: 'ใจสั่นไว', emoji: '💓', icon: '⚡' },
                { key: 'focus', label: 'สมาธิสั้น', emoji: '🎯', icon: '🧠' },
            ],
        },
    ];

    const handleSliderChange = (value: number): void => {
        setQuizData({ ...quizData, workHours: value });
    };

    const handleStressSelect = (level: 'low' | 'moderate' | 'high'): void => {
        setQuizData({ ...quizData, stressLevel: level });
    };

    const handleHealthIssueToggle = (
        key: keyof typeof quizData.healthIssues,
    ): void => {
        setQuizData({
            ...quizData,
            healthIssues: {
                ...quizData.healthIssues,
                [key]: !quizData.healthIssues[key],
            },
        });
    };

    const calculateResult = (): QuizResult => {
        const { workHours, stressLevel, healthIssues } = quizData;
        let peakFocusTime = '';
        let recommendation = '';
        let energyLevel = '';
        let focusScore = 0;

        // คำนวณคะแนนโฟกัส
        if (workHours >= 10) focusScore += 40;
        else if (workHours >= 8) focusScore += 30;
        else focusScore += 20;

        if (stressLevel === 'low') focusScore += 30;
        else if (stressLevel === 'moderate') focusScore += 20;
        else focusScore += 10;

        if (!healthIssues.sleep) focusScore += 10;
        if (!healthIssues.anxiety) focusScore += 10;
        if (!healthIssues.focus) focusScore += 10;

        // กำหนดผลลัพธ์ตามข้อมูล
        if (workHours >= 10 && stressLevel === 'high') {
            peakFocusTime = '⏰ 11:00 - 18:30 น.';
            recommendation =
                'ทาน 2 แคปซูลหลังอาหารเช้า + เสริมเที่ยง เหมาะกับ Executive Bundle';
            energyLevel = 'ระดับพลังงาน: สูงมาก (ต้องดูแลเป็นพิเศษ)';
        } else if (workHours >= 8) {
            peakFocusTime = '⏰ 09:30 - 18:00 น.';
            recommendation =
                'แนะนำ The Starter หรือ Executive: ทาน 1 แคปซูลเช้า 1 หลังเที่ยง';
            energyLevel = 'ระดับพลังงาน: สูง (คงที่ตลอดวัน)';
        } else {
            peakFocusTime = '⏰ 10:00 - 16:30 น.';
            recommendation = 'The Starter 1 แคปซูล/วัน หลังมื้อเช้า';
            energyLevel = 'ระดับพลังงาน: ปานกลาง (เหมาะกับงานครีเอทีฟ)';
        }

        if (healthIssues.sleep) recommendation += ' + เสริม L-Theanine ก่อนนอน';
        if (healthIssues.anxiety)
            recommendation += ' + เริ่มครึ่งโดสเพื่อปรับตัว';

        return {
            peakFocusTime,
            recommendation,
            energyLevel,
            focusScore,
            workHours,
            stressLevel,
        };
    };

    const handleSubmit = async (): Promise<void> => {
        setIsAnalyzing(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        const calculatedResult = calculateResult();
        setResult(calculatedResult);
        setIsAnalyzing(false);
        setStep('result');

        // Call onComplete callback if provided
        if (onComplete) {
            onComplete(calculatedResult);
        }
    };

    const handleReset = (): void => {
        setQuizData({
            workHours: 8,
            stressLevel: 'moderate',
            healthIssues: {
                sleep: false,
                anxiety: false,
                focus: false,
            },
        });
        setCurrentQuestion(0);
        setStep('quiz');

        // Call onReset callback if provided
        if (onReset) {
            onReset();
        }
    };

    const nextQuestion = (): void => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            handleSubmit();
        }
    };

    const prevQuestion = (): void => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const getProgress = (): number => {
        return ((currentQuestion + 1) / questions.length) * 100;
    };

    const renderQuestion = (): React.ReactElement => {
        const question = questions[currentQuestion];

        return (
            <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}

                className="space-y-8"
                role="quiz"
            >
                {/* Question Header */}
                <div className="text-center">
                    {/* <div className="inline-flex p-3 bg-gradient-to-br from-[#D4AF37]/10 to-[#B8860B]/10 rounded-full mb-4">
            <question.icon className="w-8 h-8 text-[#D4AF37]" />
          </div> */}
                    <h3 className="mb-2 text-2xl font-bold text-gray-800 md:text-3xl">
                        {question.title}
                    </h3>
                    <p className="text-gray-500">{question.subtitle}</p>
                </div>

                {/* Question Content */}
                <div className="rounded-2xl bg-gradient-to-br from-gray-50 to-white p-6 md:p-8">
                    {question.type === 'slider' && (
                        <div className="space-y-6">
                            <label>
                                <div className="flex items-end justify-between">
                                    <span className="text-gray-600">
                                        {question.min} ชม.
                                    </span>
                                    <div className="text-center">
                                        <span className="text-4xl font-bold text-[#D4AF37]">
                                            {quizData.workHours}
                                        </span>
                                        <span className="ml-1 text-gray-500">
                                            {question.unit}
                                        </span>
                                    </div>
                                    <span className="text-gray-600">
                                        {question.max}+ ชม.
                                    </span>
                                </div>
                            </label>
                            <input
                                type="range"
                                min={question.min}
                                max={question.max}
                                value={quizData.workHours}
                                onChange={(e) =>
                                    handleSliderChange(parseInt(e.target.value))
                                }
                                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-[#D4AF37]"
                            />
                            <div className="mt-4 grid grid-cols-4 gap-2 text-xs text-gray-500">
                                <div className="text-center">ช่วงเช้า</div>
                                <div className="text-center">สาย</div>
                                <div className="text-center">บ่าย</div>
                                <div className="text-center">เย็น</div>
                            </div>
                        </div>
                    )}

                    {question.type === 'stress' && (
                        <div className="grid gap-4">
                            {question.options?.map((option: QuestionOption) => (
                                <motion.button
                                    key={option.value}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() =>
                                        handleStressSelect(
                                            option.value as
                                                | 'low'
                                                | 'moderate'
                                                | 'high',
                                        )
                                    }
                                    className={`cursor-pointer rounded-xl p-4 transition-all duration-300 ${
                                        quizData.stressLevel === option.value
                                            ? 'bg-gradient-to-r from-[#D4AF37] to-[#F3C550] text-white shadow-lg'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl">
                                            {option.emoji}
                                        </span>
                                        <div className="flex-1 text-left">
                                            <p className="font-semibold">
                                                {option.label}
                                            </p>
                                            <p
                                                className={`text-sm ${quizData.stressLevel === option.value ? 'text-white/80' : 'text-gray-500'}`}
                                            >
                                                {option.description}
                                            </p>
                                        </div>
                                        {quizData.stressLevel ===
                                            option.value && (
                                            <CheckCircle2 className="h-5 w-5" />
                                        )}
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    )}

                    {question.type === 'checkbox' && (
                        <div className="grid gap-4">
                            {question.options?.map((option: QuestionOption) => (
                                <motion.button
                                    key={option.key}
                                    whileHover={{ scale: 1.01 }}
                                    onClick={() =>
                                        handleHealthIssueToggle(
                                            option.key as keyof typeof quizData.healthIssues,
                                        )
                                    }
                                    className={`cursor-pointer rounded-xl p-4 text-left transition-all duration-300 ${
                                        quizData.healthIssues[
                                            option.key as keyof typeof quizData.healthIssues
                                        ]
                                            ? 'border-2 border-[#D4AF37] bg-gradient-to-r from-[#D4AF37]/20 to-[#F3C550]/20'
                                            : 'border-2 border-transparent bg-gray-100 hover:bg-gray-200'
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl">
                                            {option.icon}
                                        </span>
                                        <div className="flex-1">
                                            <p className="font-semibold text-gray-800">
                                                {option.label}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                {option.emoji}
                                            </p>
                                        </div>
                                        {quizData.healthIssues[
                                            option.key as keyof typeof quizData.healthIssues
                                        ] && (
                                            <CheckCircle2 className="h-5 w-5 text-[#D4AF37]" />
                                        )}
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-4">
                    {currentQuestion > 0 && (
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={prevQuestion}
                            className="flex-1 cursor-pointer rounded-xl border-2 border-gray-300 px-6 py-3 font-semibold text-gray-700 transition-all hover:border-[#D4AF37] hover:text-black"
                        >
                            <ChevronLeft className="mr-1 inline h-5 w-5" />
                            ย้อนกลับ
                        </motion.button>
                    )}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={nextQuestion}
                        className={`flex-1 cursor-pointer rounded-xl px-6 py-3 font-semibold text-white transition-all ${
                            currentQuestion === questions.length - 1
                                ? 'bg-gradient-to-r from-[#D4AF37] to-[#F3C550] shadow-lg hover:shadow-xl'
                                : 'bg-gray-700 hover:bg-gray-800'
                        }`}
                    >
                        {currentQuestion === questions.length - 1 ? (
                            <>
                                วิเคราะห์ผล{' '}
                                <Sparkles className="ml-1 inline h-5 w-5" />
                            </>
                        ) : (
                            <>
                                ถัดไป{' '}
                                <ChevronRight className="ml-1 inline h-5 w-5" />
                            </>
                        )}
                    </motion.button>
                </div>
            </motion.div>
        );
    };

    return (
        <section
            id="quiz-section"
            className={`relative overflow-hidden bg-gradient-to-b from-[#F9F5E8] to-white py-16 md:py-20 ${className}`}
        >
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-[#D4AF37]/5 blur-3xl"></div>
            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#B8860B]/5 blur-3xl"></div>

            <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 text-center md:mb-12"
                >
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#D4AF37]/10 px-4 py-2">
                        <Brain className="h-5 w-5 text-[#D4AF37]" />
                        <span className="text-sm font-semibold text-[#D4AF37]">
                            AI COGNITIVE ASSESSMENT
                        </span>
                    </div>
                    <h2 className="mb-3 text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl">
                        Find Your Cognitive Baseline
                    </h2>
                    <p className="mx-auto max-w-2xl text-base text-gray-600 md:text-lg">
                        ระบบวิเคราะห์อัจฉริยะ แบบทดสอบ 45 วินาที
                        รับแผนการทานเฉพาะบุคคล
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-2xl sm:p-8 md:p-10"
                >
                    {/* Progress Bar */}
                    {step === 'quiz' && (
                        <div className="mb-8">
                            <div className="mb-2 flex justify-between text-sm text-gray-500">
                                <span>
                                    คำถามที่ {currentQuestion + 1} จาก{' '}
                                    {questions.length}
                                </span>
                                <span>{Math.round(getProgress())}%</span>
                            </div>
                            <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                                <motion.div
                                    className="h-full rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F3C550]"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${getProgress()}%` }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>
                        </div>
                    )}

                    <AnimatePresence mode="wait">
                        {step === 'quiz' && (
                            <motion.div
                                key="quiz"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                {renderQuestion()}
                            </motion.div>
                        )}

                        {step === 'result' && result && (
                            <motion.div
                                key="result"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="space-y-6"
                            >
                                {isAnalyzing ? (
                                    <div className="py-12 text-center">
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: 'linear',
                                            }}
                                            className="inline-block"
                                        >
                                            <Brain className="h-16 w-16 text-[#D4AF37]" />
                                        </motion.div>
                                        <p className="mt-4 text-gray-600">
                                            กำลังวิเคราะห์ข้อมูลของคุณ...
                                        </p>
                                        <p className="mt-2 text-sm text-gray-400">
                                            กรุณารอสักครู่
                                        </p>
                                    </div>
                                ) : (
                                    <>
                                        {/* Score Circle */}
                                        <div className="text-center">
                                            <div className="relative inline-block">
                                                <svg className="h-32 w-32">
                                                    <circle
                                                        cx="64"
                                                        cy="64"
                                                        r="60"
                                                        fill="none"
                                                        stroke="#E5E7EB"
                                                        strokeWidth="8"
                                                    />
                                                    <circle
                                                        cx="64"
                                                        cy="64"
                                                        r="60"
                                                        fill="none"
                                                        stroke="url(#gradient)"
                                                        strokeWidth="8"
                                                        strokeDasharray={
                                                            2 * Math.PI * 60
                                                        }
                                                        strokeDashoffset={
                                                            2 *
                                                            Math.PI *
                                                            60 *
                                                            (1 -
                                                                (result.focusScore ||
                                                                    70) /
                                                                    100)
                                                        }
                                                        strokeLinecap="round"
                                                        transform="rotate(-90 64 64)"
                                                    />
                                                    <defs>
                                                        <linearGradient
                                                            id="gradient"
                                                            x1="0%"
                                                            y1="0%"
                                                            x2="100%"
                                                            y2="0%"
                                                        >
                                                            <stop
                                                                offset="0%"
                                                                stopColor="#D4AF37"
                                                            />
                                                            <stop
                                                                offset="100%"
                                                                stopColor="#F3C550"
                                                            />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div>
                                                        <span className="text-3xl font-bold text-[#D4AF37]">
                                                            {result.focusScore ||
                                                                70}
                                                        </span>
                                                        <span className="text-sm text-gray-500">
                                                            /100
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="mt-2 text-sm text-gray-500">
                                                คะแนนประสิทธิภาพสมอง
                                            </p>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 p-5">
                                                <div className="mb-2 flex items-center gap-2">
                                                    <Clock className="h-5 w-5 text-[#D4AF37]" />
                                                    <h4 className="font-bold text-gray-800">
                                                        ช่วงเวลาที่โฟกัสสูงสุด
                                                    </h4>
                                                </div>
                                                <p className="text-gray-700">
                                                    {result.peakFocusTime}
                                                </p>
                                            </div>

                                            <div className="rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 p-5">
                                                <div className="mb-2 flex items-center gap-2">
                                                    <Zap className="h-5 w-5 text-[#D4AF37]" />
                                                    <h4 className="font-bold text-gray-800">
                                                        ระดับพลังงาน
                                                    </h4>
                                                </div>
                                                <p className="text-gray-700">
                                                    {result.energyLevel}
                                                </p>
                                            </div>

                                            <div className="rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 p-5">
                                                <div className="mb-2 flex items-center gap-2">
                                                    <TrendingUp className="h-5 w-5 text-[#D4AF37]" />
                                                    <h4 className="font-bold text-gray-800">
                                                        แผนการทานแนะนำ
                                                    </h4>
                                                </div>
                                                <p className="text-gray-700">
                                                    {result.recommendation}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col justify-center gap-3 pt-4 sm:flex-row">
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={handleReset}
                                                className="cursor-pointer rounded-xl border-2 border-[#D4AF37] px-6 py-3 font-semibold text-[#D4AF37] transition-all hover:bg-[#D4AF37] hover:text-white"
                                            >
                                                ทำแบบทดสอบอีกครั้ง
                                            </motion.button>
                                            <motion.a
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                href="#pricing"
                                                className="rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F3C550] px-6 py-3 text-center font-semibold text-[#0A1F3E] shadow-lg transition-all hover:shadow-xl"
                                            >
                                                รับข้อเสนอพิเศษ
                                            </motion.a>
                                        </div>
                                    </>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Quiz;
