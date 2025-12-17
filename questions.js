// ملف الأسئلة - عدّل وزِد براحتك

const questions = [
  // ===== تاريخية =====
  {
    category: "تاريخية",
    difficulty: "سهل",
    question: "من هو أول خلفاء المسلمين بعد وفاة النبي محمد ﷺ؟",
    choices: {
      A: "عمر بن الخطاب",
      B: "أبو بكر الصديق",
      C: "عثمان بن عفان",
      D: "علي بن أبي طالب",
    },
    correct: "B",
    points: 100,
  },
  {
    category: "تاريخية",
    difficulty: "متوسط",
    question: "في أي عام تم توحيد المملكة العربية السعودية؟",
    choices: {
      A: "1929",
      B: "1932",
      C: "1945",
      D: "1950",
    },
    correct: "B",
    points: 200,
  },
  {
    category: "تاريخية",
    difficulty: "صعب",
    question: "في أي سنة ميلادية وقعت غزوة بدر الكبرى تقريبًا؟",
    choices: {
      A: "610",
      B: "622",
      C: "624",
      D: "630",
    },
    correct: "C",
    points: 300,
  },

  // ===== ثقافة عامة =====
  {
    category: "ثقافة عامة",
    difficulty: "سهل",
    question: "ما هو عكس كلمة (ليل)؟",
    choices: {
      A: "مساء",
      B: "صباح",
      C: "نهار",
      D: "فجر",
    },
    correct: "C",
    points: 100,
  },

  {
    category: "ثقافة عامة",
    difficulty: "متوسط",
    question: "كم عدد قارات العالم؟",
    choices: {
      A: "5",
      B: "6",
      C: "7",
      D: "8",
    },
    correct: "C",
    points: 200,
  },

  {
    category: "ثقافة عامة",
    difficulty: "صعب",
    question: "ما هي أكبر قارة في العالم من حيث المساحة؟",
    choices: {
      A: "آسيا",
      B: "أفريقيا",
      C: "أمريكا الشمالية",
      D: "أوروبا",
    },
    correct: "A",
    points: 300,
  },

  // ===== رياضية =====
  {
    category: "رياضية",
    difficulty: "سهل",
    question: "كم يساوي 2 + 3 ؟",
    choices: {
      A: "4",
      B: "5",
      C: "6",
      D: "7",
    },
    correct: "B",
    points: 100,
  },

  {
    category: "رياضية",
    difficulty: "متوسط",
    question: "كم يساوي 12 ÷ 3 ؟",
    choices: {
      A: "3",
      B: "4",
      C: "5",
      D: "6",
    },
    correct: "B",
    points: 200,
  },

  {
    category: "رياضية",
    difficulty: "صعب",
    question: "ما ناتج 15 × 8 ؟",
    choices: {
      A: "100",
      B: "110",
      C: "120",
      D: "130",
    },
    correct: "C",
    points: 300,
  },

  // ===============================
  // ===== لغة ومعاجم | مستوى سهل =====
  // ===============================

  {
    category: "لغة ومعاجم",
    difficulty: "سهل",
    question: "ما معنى كلمة (الكرم)؟",
    choices: {
      A: "البخل",
      B: "السخاء",
      C: "الغضب",
      D: "الخوف",
    },
    correct: "B",
    points: 100,
  },

  {
    category: "لغة ومعاجم",
    difficulty: "سهل",
    question: "ما جمع كلمة (كتاب)؟",
    choices: {
      A: "كتبة",
      B: "كتيبات",
      C: "كتب",
      D: "مكاتب",
    },
    correct: "C",
    points: 100,
  },

  {
    category: "لغة ومعاجم",
    difficulty: "سهل",
    question: "ما نوع كلمة (يكتب)؟",
    choices: {
      A: "اسم",
      B: "حرف",
      C: "فعل",
      D: "صفة",
    },
    correct: "C",
    points: 100,
  },

  {
    category: "لغة ومعاجم",
    difficulty: "سهل",
    question: "ما معنى كلمة (Happy) باللغة العربية؟",
    choices: {
      A: "حزين",
      B: "غاضب",
      C: "سعيد",
      D: "خائف",
    },
    correct: "C",
    points: 100,
  },

  {
    category: "لغة ومعاجم",
    difficulty: "سهل",
    question: "أي من التالي يُعد حرف جر؟",
    choices: {
      A: "كتب",
      B: "من",
      C: "كتاب",
      D: "كبير",
    },
    correct: "B",
    points: 100,
  },

  {
    category: "لغة ومعاجم",
    difficulty: "سهل",
    question: "ما معنى كلمة (Fast) بالإنجليزية؟",
    choices: {
      A: "بطيء",
      B: "سريع",
      C: "ثقيل",
      D: "قصير",
    },
    correct: "B",
    points: 100,
  },

  {
    category: "لغة ومعاجم",
    difficulty: "سهل",
    question: "ما ضد كلمة (كبير)؟",
    choices: {
      A: "طويل",
      B: "عريض",
      C: "صغير",
      D: "ثقيل",
    },
    correct: "C",
    points: 100,
  },

  {
    category: "لغة ومعاجم",
    difficulty: "سهل",
    question: "أي من التالي لغة أجنبية؟",
    choices: {
      A: "العربية",
      B: "الفارسية",
      C: "الإنجليزية",
      D: "السريانية",
    },
    correct: "C",
    points: 100,
  },

  {
    category: "لغة ومعاجم",
    difficulty: "سهل",
    question: "ما معنى كلمة (قلم) في اللغة الإنجليزية؟",
    choices: {
      A: "Book",
      B: "Pen",
      C: "Paper",
      D: "Desk",
    },
    correct: "B",
    points: 100,
  },

  {
    category: "لغة ومعاجم",
    difficulty: "سهل",
    question: "ما نوع الجملة: (الطالب مجتهد)؟",
    choices: {
      A: "فعلية",
      B: "استفهامية",
      C: "اسمية",
      D: "شرطية",
    },
    correct: "C",
    points: 100,
  },

  // ===============================
  // ===== لغة ومعاجم | مستوى متوسط =====
  // ===============================

  {
    category: "لغة ومعاجم",
    difficulty: "متوسط",
    question: "ما إعراب كلمة (الطالبُ) في جملة: الطالبُ مجتهد؟",
    choices: {
      A: "خبر مرفوع",
      B: "مبتدأ مرفوع",
      C: "فاعل",
      D: "مفعول به",
    },
    correct: "B",
    points: 200,
  },

  {
    category: "لغة ومعاجم",
    difficulty: "متوسط",
    question: "ما جمع كلمة (امرأة)؟",
    choices: {
      A: "نسوة",
      B: "نساء",
      C: "امرأتان",
      D: "نسائي",
    },
    correct: "B",
    points: 200,
  },

  {
    category: "لغة ومعاجم",
    difficulty: "متوسط",
    question: "ما معنى كلمة (Brave) باللغة العربية؟",
    choices: {
      A: "ذكي",
      B: "شجاع",
      C: "قوي",
      D: "سريع",
    },
    correct: "B",
    points: 200,
  },

  {
    category: "لغة ومعاجم",
    difficulty: "متوسط",
    question: "أي مما يلي يُعد فعلاً ماضيًا؟",
    choices: {
      A: "يكتب",
      B: "اكتب",
      C: "كتب",
      D: "كاتب",
    },
    correct: "C",
    points: 200,
  },

  {
    category: "لغة ومعاجم",
    difficulty: "متوسط",
    question: "ما اللغة التي تُستخدم أساسًا في إسبانيا؟",
    choices: {
      A: "الفرنسية",
      B: "الإيطالية",
      C: "الإسبانية",
      D: "البرتغالية",
    },
    correct: "C",
    points: 200,
  },

  {
    category: "لغة ومعاجم",
    difficulty: "متوسط",
    question: "ما ضد كلمة (شجاع)؟",
    choices: {
      A: "قوي",
      B: "جريء",
      C: "جبان",
      D: "سريع",
    },
    correct: "C",
    points: 200,
  },

  {
    category: "لغة ومعاجم",
    difficulty: "متوسط",
    question: "أي من التالي يُعد اسم إشارة؟",
    choices: {
      A: "الذي",
      B: "هذا",
      C: "من",
      D: "إن",
    },
    correct: "B",
    points: 200,
  },

  {
    category: "لغة ومعاجم",
    difficulty: "متوسط",
    question: "ما معنى كلمة (Maison) بالفرنسية؟",
    choices: {
      A: "مدرسة",
      B: "بيت",
      C: "شارع",
      D: "سيارة",
    },
    correct: "B",
    points: 200,
  },

  {
    category: "لغة ومعاجم",
    difficulty: "متوسط",
    question: "ما نوع (لا) في جملة: لا تهمل دروسك؟",
    choices: {
      A: "نافية",
      B: "ناهية",
      C: "زائدة",
      D: "شرطية",
    },
    correct: "B",
    points: 200,
  },

  {
    category: "لغة ومعاجم",
    difficulty: "متوسط",
    question: "أي لغة تُكتب من اليمين إلى اليسار؟",
    choices: {
      A: "الإنجليزية",
      B: "الفرنسية",
      C: "العربية",
      D: "الإسبانية",
    },
    correct: "C",
    points: 200,
  },

  // ===============================
  // ===== لغة ومعاجم | مستوى صعب =====
  // ===============================

  {
    category: "لغة ومعاجم",
    difficulty: "صعب",
    question: "ما إعراب كلمة (المجتهدِ) في: مررتُ بالطالبِ المجتهدِ؟",
    choices: {
      A: "نعت مجرور",
      B: "خبر مرفوع",
      C: "حال منصوب",
      D: "مفعول به",
    },
    correct: "A",
    points: 300,
  },

  {
    category: "لغة ومعاجم",
    difficulty: "صعب",
    question: "ما معنى كلمة (قِرى) في اللغة العربية؟",
    choices: {
      A: "الطعام",
      B: "الضيافة",
      C: "الشراب",
      D: "البيت",
    },
    correct: "B",
    points: 300,
  },

  {
    category: "لغة ومعاجم",
    difficulty: "صعب",
    question: "أي من التالي يُعد من الأفعال الخمسة؟",
    choices: {
      A: "كتبوا",
      B: "يكتب",
      C: "يكتبون",
      D: "كاتب",
    },
    correct: "C",
    points: 300,
  },

  {
    category: "لغة ومعاجم",
    difficulty: "صعب",
    question: "ما معنى كلمة (Zeit) بالألمانية؟",
    choices: {
      A: "مكان",
      B: "وقت",
      C: "كتاب",
      D: "مدينة",
    },
    correct: "B",
    points: 300,
  },

  {
    category: "لغة ومعاجم",
    difficulty: "صعب",
    question: "ما نوع الاستثناء في جملة: حضر الطلاب إلا طالبًا؟",
    choices: {
      A: "تام مثبت",
      B: "تام منفي",
      C: "ناقص",
      D: "مفرغ",
    },
    correct: "A",
    points: 300,
  },

  {
    category: "لغة ومعاجم",
    difficulty: "صعب",
    question: "ما معنى كلمة (Verbose) بالإنجليزية؟",
    choices: {
      A: "مختصر",
      B: "مطوّل",
      C: "غامض",
      D: "سريع",
    },
    correct: "B",
    points: 300,
  },

  {
    category: "لغة ومعاجم",
    difficulty: "صعب",
    question: "أي من التالي يُعد اسمًا مقصورًا؟",
    choices: {
      A: "الفتى",
      B: "القاضي",
      C: "الداعي",
      D: "الساعي",
    },
    correct: "A",
    points: 300,
  },

  {
    category: "لغة ومعاجم",
    difficulty: "صعب",
    question: "ما معنى كلمة (Libro) بالإسبانية؟",
    choices: {
      A: "قلم",
      B: "كتاب",
      C: "دفتر",
      D: "مدرسة",
    },
    correct: "B",
    points: 300,
  },

  {
    category: "لغة ومعاجم",
    difficulty: "صعب",
    question: "ما نوع الهمزة في كلمة (أَخذ)؟",
    choices: {
      A: "همزة وصل",
      B: "همزة قطع",
      C: "همزة متطرفة",
      D: "همزة متوسطة",
    },
    correct: "B",
    points: 300,
  },

  {
    category: "لغة ومعاجم",
    difficulty: "صعب",
    question: "أي لغة تنتمي لعائلة اللغات الجرمانية؟",
    choices: {
      A: "الإسبانية",
      B: "العربية",
      C: "الألمانية",
      D: "الروسية",
    },
    correct: "C",
    points: 300,
  },

  // ===============================
  // ===== طب وصحة | مستوى سهل =====
  // ===============================

  {
    category: "طب وصحة",
    difficulty: "سهل",
    question: "ما العضو المسؤول عن ضخ الدم في جسم الإنسان؟",
    choices: {
      A: "الرئتان",
      B: "القلب",
      C: "الكبد",
      D: "الدماغ",
    },
    correct: "B",
    points: 100,
  },

  {
    category: "طب وصحة",
    difficulty: "سهل",
    question: "كم عدد الأسنان الدائمة عند الإنسان البالغ؟",
    choices: {
      A: "28",
      B: "30",
      C: "32",
      D: "36",
    },
    correct: "C",
    points: 100,
  },

  {
    category: "طب وصحة",
    difficulty: "سهل",
    question: "ما الفيتامين الذي نحصل عليه من أشعة الشمس؟",
    choices: {
      A: "فيتامين A",
      B: "فيتامين B",
      C: "فيتامين C",
      D: "فيتامين D",
    },
    correct: "D",
    points: 100,
  },

  {
    category: "طب وصحة",
    difficulty: "سهل",
    question: "أي عضو مسؤول عن التنفس؟",
    choices: {
      A: "القلب",
      B: "الكلى",
      C: "الرئتان",
      D: "المعدة",
    },
    correct: "C",
    points: 100,
  },

  {
    category: "طب وصحة",
    difficulty: "سهل",
    question: "ما المعدن المهم لتقوية العظام؟",
    choices: {
      A: "الحديد",
      B: "الكالسيوم",
      C: "الصوديوم",
      D: "البوتاسيوم",
    },
    correct: "B",
    points: 100,
  },

  {
    category: "طب وصحة",
    difficulty: "سهل",
    question: "ما درجة حرارة الجسم الطبيعية تقريبًا؟",
    choices: {
      A: "35",
      B: "36",
      C: "37",
      D: "38",
    },
    correct: "C",
    points: 100,
  },

  {
    category: "طب وصحة",
    difficulty: "سهل",
    question: "أي من التالي يُعد غذاءً غنيًا بالبروتين؟",
    choices: {
      A: "الأرز",
      B: "الخبز",
      C: "اللحم",
      D: "السكر",
    },
    correct: "C",
    points: 100,
  },

  {
    category: "طب وصحة",
    difficulty: "سهل",
    question: "ما الجهاز المسؤول عن هضم الطعام؟",
    choices: {
      A: "الجهاز العصبي",
      B: "الجهاز الدوري",
      C: "الجهاز الهضمي",
      D: "الجهاز التنفسي",
    },
    correct: "C",
    points: 100,
  },

  {
    category: "طب وصحة",
    difficulty: "سهل",
    question: "أي من التالي عادة صحية؟",
    choices: {
      A: "قلة النوم",
      B: "الإفراط في السكر",
      C: "غسل اليدين",
      D: "التدخين",
    },
    correct: "C",
    points: 100,
  },

  {
    category: "طب وصحة",
    difficulty: "سهل",
    question: "ما العضو المسؤول عن التفكير؟",
    choices: {
      A: "القلب",
      B: "الكبد",
      C: "الدماغ",
      D: "الرئة",
    },
    correct: "C",
    points: 100,
  },

  // ===============================
  // ===== طب وصحة | مستوى متوسط =====
  // ===============================

  {
    category: "طب وصحة",
    difficulty: "متوسط",
    question: "ما اسم النقص في عدد كريات الدم الحمراء؟",
    choices: {
      A: "السكري",
      B: "الأنيميا",
      C: "الربو",
      D: "الضغط",
    },
    correct: "B",
    points: 200,
  },

  {
    category: "طب وصحة",
    difficulty: "متوسط",
    question: "أي فيتامين يساعد على تقوية المناعة؟",
    choices: {
      A: "فيتامين C",
      B: "فيتامين K",
      C: "فيتامين A",
      D: "فيتامين E",
    },
    correct: "A",
    points: 200,
  },

  {
    category: "طب وصحة",
    difficulty: "متوسط",
    question: "ما الجهاز الذي ينقل الأكسجين في الجسم؟",
    choices: {
      A: "الجهاز العصبي",
      B: "الجهاز الهضمي",
      C: "الجهاز الدوري",
      D: "الجهاز العضلي",
    },
    correct: "C",
    points: 200,
  },

  {
    category: "طب وصحة",
    difficulty: "متوسط",
    question: "ما اسم العظم الذي يحمي الدماغ؟",
    choices: {
      A: "الفقرات",
      B: "القفص الصدري",
      C: "الجمجمة",
      D: "الترقوة",
    },
    correct: "C",
    points: 200,
  },

  {
    category: "طب وصحة",
    difficulty: "متوسط",
    question: "أي من التالي يُعد من أعراض الجفاف؟",
    choices: {
      A: "نشاط زائد",
      B: "العطش الشديد",
      C: "زيادة الوزن",
      D: "تحسن التركيز",
    },
    correct: "B",
    points: 200,
  },

  {
    category: "طب وصحة",
    difficulty: "متوسط",
    question: "ما الهرمون المسؤول عن تنظيم السكر في الدم؟",
    choices: {
      A: "الأدرينالين",
      B: "الأنسولين",
      C: "الميلاتونين",
      D: "الثيروكسين",
    },
    correct: "B",
    points: 200,
  },

  {
    category: "طب وصحة",
    difficulty: "متوسط",
    question: "كم عدد ساعات النوم الموصى بها للبالغين تقريبًا؟",
    choices: {
      A: "4–5",
      B: "5–6",
      C: "7–8",
      D: "9–10",
    },
    correct: "C",
    points: 200,
  },

  {
    category: "طب وصحة",
    difficulty: "متوسط",
    question: "أي عضو مسؤول عن تنقية الدم؟",
    choices: {
      A: "القلب",
      B: "الرئتان",
      C: "الكلى",
      D: "المعدة",
    },
    correct: "C",
    points: 200,
  },

  {
    category: "طب وصحة",
    difficulty: "متوسط",
    question: "ما اسم ضغط الدم المرتفع طبيًا؟",
    choices: {
      A: "Hypotension",
      B: "Hypertension",
      C: "Anemia",
      D: "Diabetes",
    },
    correct: "B",
    points: 200,
  },

  {
    category: "طب وصحة",
    difficulty: "متوسط",
    question: "أي من التالي يُعد دهونًا صحية؟",
    choices: {
      A: "الزبدة",
      B: "السمن",
      C: "زيت الزيتون",
      D: "الدهون المهدرجة",
    },
    correct: "C",
    points: 200,
  },

  // ===============================
  // ===== طب وصحة | مستوى صعب =====
  // ===============================

  {
    category: "طب وصحة",
    difficulty: "صعب",
    question: "ما اسم أصغر عظمة في جسم الإنسان؟",
    choices: {
      A: "الركاب",
      B: "الزند",
      C: "القص",
      D: "الفخذ",
    },
    correct: "A",
    points: 300,
  },

  {
    category: "طب وصحة",
    difficulty: "صعب",
    question: "أي جزء من الدم مسؤول عن التخثر؟",
    choices: {
      A: "كريات الدم الحمراء",
      B: "كريات الدم البيضاء",
      C: "الصفائح الدموية",
      D: "البلازما",
    },
    correct: "C",
    points: 300,
  },

  {
    category: "طب وصحة",
    difficulty: "صعب",
    question: "ما اسم المرض الناتج عن نقص فيتامين D الشديد عند الأطفال؟",
    choices: {
      A: "الكساح",
      B: "السكري",
      C: "الأنيميا",
      D: "الربو",
    },
    correct: "A",
    points: 300,
  },

  {
    category: "طب وصحة",
    difficulty: "صعب",
    question: "ما الجهاز الذي يتحكم في الهرمونات؟",
    choices: {
      A: "الجهاز العصبي",
      B: "الجهاز الهضمي",
      C: "جهاز الغدد الصماء",
      D: "الجهاز العضلي",
    },
    correct: "C",
    points: 300,
  },

  {
    category: "طب وصحة",
    difficulty: "صعب",
    question: "أي من التالي يُعد من أعراض نقص الحديد؟",
    choices: {
      A: "النشاط الزائد",
      B: "شحوب الوجه",
      C: "زيادة الشهية",
      D: "ارتفاع الضغط",
    },
    correct: "B",
    points: 300,
  },

  {
    category: "طب وصحة",
    difficulty: "صعب",
    question: "ما اسم الخلايا المسؤولة عن المناعة في الجسم؟",
    choices: {
      A: "كريات الدم الحمراء",
      B: "الصفائح",
      C: "كريات الدم البيضاء",
      D: "الخلايا العصبية",
    },
    correct: "C",
    points: 300,
  },

  {
    category: "طب وصحة",
    difficulty: "صعب",
    question: "أي عنصر غذائي يُعد المصدر الأساسي للطاقة؟",
    choices: {
      A: "البروتين",
      B: "الدهون",
      C: "الكربوهيدرات",
      D: "الفيتامينات",
    },
    correct: "C",
    points: 300,
  },

  {
    category: "طب وصحة",
    difficulty: "صعب",
    question: "ما اسم الحالة التي ينخفض فيها سكر الدم بشكل خطير؟",
    choices: {
      A: "Hyperglycemia",
      B: "Hypoglycemia",
      C: "Hypertension",
      D: "Anemia",
    },
    correct: "B",
    points: 300,
  },

  {
    category: "طب وصحة",
    difficulty: "صعب",
    question: "ما العضلة التي لا تتعب ولا تتوقف طوال الحياة؟",
    choices: {
      A: "عضلة الساق",
      B: "عضلة الذراع",
      C: "عضلة القلب",
      D: "عضلة اللسان",
    },
    correct: "C",
    points: 300,
  },

  {
    category: "طب وصحة",
    difficulty: "صعب",
    question: "أي جهاز مسؤول عن الإحساس بالألم والحرارة؟",
    choices: {
      A: "الجهاز الدوري",
      B: "الجهاز العضلي",
      C: "الجهاز العصبي",
      D: "الجهاز الهضمي",
    },
    correct: "C",
    points: 300,
  },

  // ===============================
  // ===== ذكاء | مستوى سهل =====
  // ===============================

  {
    category: "ذكاء",
    difficulty: "سهل",
    question: "إذا كان 3 + 5 = 8، فما ناتج 5 + 3؟",
    choices: {
      A: "7",
      B: "8",
      C: "9",
      D: "10",
    },
    correct: "B",
    points: 100,
  },

  {
    category: "ذكاء",
    difficulty: "سهل",
    question: "أي رقم يكمل السلسلة: 2، 4، 6، ؟",
    choices: {
      A: "7",
      B: "8",
      C: "9",
      D: "10",
    },
    correct: "B",
    points: 100,
  },

  {
    category: "ذكاء",
    difficulty: "سهل",
    question: "إذا كان اليوم هو الأحد، فما اليوم بعد يومين؟",
    choices: {
      A: "الاثنين",
      B: "الثلاثاء",
      C: "الأربعاء",
      D: "السبت",
    },
    correct: "B",
    points: 100,
  },

  {
    category: "ذكاء",
    difficulty: "سهل",
    question: "أي شكل يختلف عن البقية؟",
    choices: {
      A: "مربع",
      B: "مثلث",
      C: "دائرة",
      D: "مستطيل",
    },
    correct: "C",
    points: 100,
  },

  {
    category: "ذكاء",
    difficulty: "سهل",
    question: "إذا كان أحمد أطول من خالد، وخالد أطول من سالم، فمن الأقصر؟",
    choices: {
      A: "أحمد",
      B: "خالد",
      C: "سالم",
      D: "لا يمكن التحديد",
    },
    correct: "C",
    points: 100,
  },

  {
    category: "ذكاء",
    difficulty: "سهل",
    question: "كم عدد الأضلاع في المثلث؟",
    choices: {
      A: "2",
      B: "3",
      C: "4",
      D: "5",
    },
    correct: "B",
    points: 100,
  },

  {
    category: "ذكاء",
    difficulty: "سهل",
    question: "أي عدد هو الأكبر؟",
    choices: {
      A: "12",
      B: "21",
      C: "19",
      D: "18",
    },
    correct: "B",
    points: 100,
  },

  {
    category: "ذكاء",
    difficulty: "سهل",
    question: "إذا كان لديك تفاحتان وأخذت واحدة، كم تفاحة بقيت معك؟",
    choices: {
      A: "0",
      B: "1",
      C: "2",
      D: "3",
    },
    correct: "B",
    points: 100,
  },

  {
    category: "ذكاء",
    difficulty: "سهل",
    question: "ما العدد التالي: 1، 3، 5، 7، ؟",
    choices: {
      A: "8",
      B: "9",
      C: "10",
      D: "11",
    },
    correct: "B",
    points: 100,
  },

  {
    category: "ذكاء",
    difficulty: "سهل",
    question: "أيهم زوجي؟",
    choices: {
      A: "7",
      B: "9",
      C: "11",
      D: "12",
    },
    correct: "D",
    points: 100,
  },

  // ===============================
  // ===== ذكاء | مستوى متوسط =====
  // ===============================

  {
    category: "ذكاء",
    difficulty: "متوسط",
    question: "ما العدد الناقص: 2، 6، 12، 20، ؟",
    choices: {
      A: "28",
      B: "30",
      C: "32",
      D: "36",
    },
    correct: "B",
    points: 200,
  },

  {
    category: "ذكاء",
    difficulty: "متوسط",
    question: "إذا كان كل مربع مستطيل، فهل كل مستطيل مربع؟",
    choices: {
      A: "نعم",
      B: "لا",
      C: "أحيانًا",
      D: "غير معروف",
    },
    correct: "B",
    points: 200,
  },

  {
    category: "ذكاء",
    difficulty: "متوسط",
    question: "أي عدد لا ينتمي للمجموعة؟ 2، 3، 5، 7، 9",
    choices: {
      A: "2",
      B: "3",
      C: "7",
      D: "9",
    },
    correct: "D",
    points: 200,
  },

  {
    category: "ذكاء",
    difficulty: "متوسط",
    question: "إذا كان A = 1 و B = 2، فكم تساوي C؟",
    choices: {
      A: "1",
      B: "2",
      C: "3",
      D: "4",
    },
    correct: "C",
    points: 200,
  },

  {
    category: "ذكاء",
    difficulty: "متوسط",
    question: "كم عدد الزوايا في الشكل الخماسي؟",
    choices: {
      A: "3",
      B: "4",
      C: "5",
      D: "6",
    },
    correct: "C",
    points: 200,
  },

  {
    category: "ذكاء",
    difficulty: "متوسط",
    question: "أي رقم إذا ضربته بنفسه يعطي 49؟",
    choices: {
      A: "6",
      B: "7",
      C: "8",
      D: "9",
    },
    correct: "B",
    points: 200,
  },

  {
    category: "ذكاء",
    difficulty: "متوسط",
    question: "ما العدد التالي: 1، 4، 9، 16، ؟",
    choices: {
      A: "20",
      B: "24",
      C: "25",
      D: "36",
    },
    correct: "C",
    points: 200,
  },

  {
    category: "ذكاء",
    difficulty: "متوسط",
    question: "إذا كان نصف العدد 20 يساوي؟",
    choices: {
      A: "5",
      B: "8",
      C: "10",
      D: "12",
    },
    correct: "C",
    points: 200,
  },

  {
    category: "ذكاء",
    difficulty: "متوسط",
    question: "أي شكل له أكبر عدد من الأضلاع؟",
    choices: {
      A: "مثلث",
      B: "مربع",
      C: "خماسي",
      D: "سداسي",
    },
    correct: "D",
    points: 200,
  },

  {
    category: "ذكاء",
    difficulty: "متوسط",
    question:
      "إذا كان 5 أشخاص يحتاجون 5 دقائق لإنهاء عمل، فكم دقيقة يحتاج شخص واحد؟",
    choices: {
      A: "1",
      B: "5",
      C: "10",
      D: "25",
    },
    correct: "B",
    points: 200,
  },

  // ===============================
  // ===== ذكاء | مستوى صعب =====
  // ===============================

  {
    category: "ذكاء",
    difficulty: "صعب",
    question: "ما العدد التالي في السلسلة: 3، 6، 12، 24، ؟",
    choices: {
      A: "36",
      B: "42",
      C: "48",
      D: "60",
    },
    correct: "C",
    points: 300,
  },

  {
    category: "ذكاء",
    difficulty: "صعب",
    question: "إذا كان عمر أحمد ضعف عمر أخيه، ومجموع عمريهما 30، فكم عمر أحمد؟",
    choices: {
      A: "10",
      B: "15",
      C: "20",
      D: "25",
    },
    correct: "C",
    points: 300,
  },

  {
    category: "ذكاء",
    difficulty: "صعب",
    question: "كم عدد المربعات في شكل شبكة 2×2؟",
    choices: {
      A: "4",
      B: "5",
      C: "6",
      D: "8",
    },
    correct: "B",
    points: 300,
  },

  {
    category: "ذكاء",
    difficulty: "صعب",
    question: "إذا كانت الساعة الآن 3:15، كم درجة بين العقربين تقريبًا؟",
    choices: {
      A: "0",
      B: "7.5",
      C: "30",
      D: "47.5",
    },
    correct: "D",
    points: 300,
  },

  {
    category: "ذكاء",
    difficulty: "صعب",
    question: "أي عدد أولي من التالي؟",
    choices: {
      A: "21",
      B: "29",
      C: "39",
      D: "49",
    },
    correct: "B",
    points: 300,
  },

  {
    category: "ذكاء",
    difficulty: "صعب",
    question: "إذا ضاعفنا عددًا ثلاث مرات متتالية وبدأنا بـ 1، فما الناتج؟",
    choices: {
      A: "6",
      B: "8",
      C: "9",
      D: "12",
    },
    correct: "B",
    points: 300,
  },

  {
    category: "ذكاء",
    difficulty: "صعب",
    question: "كم عدد الأقطار في المربع؟",
    choices: {
      A: "1",
      B: "2",
      C: "3",
      D: "4",
    },
    correct: "B",
    points: 300,
  },

  {
    category: "ذكاء",
    difficulty: "صعب",
    question: "أي عدد إذا جمعته مع معكوسه يساوي صفر؟",
    choices: {
      A: "5",
      B: "-5",
      C: "أي عدد",
      D: "الصفر",
    },
    correct: "C",
    points: 300,
  },

  {
    category: "ذكاء",
    difficulty: "صعب",
    question: "ما العدد الذي إذا قسمته على 2 ثم أضفت 10 يصبح 20؟",
    choices: {
      A: "10",
      B: "15",
      C: "20",
      D: "30",
    },
    correct: "C",
    points: 300,
  },

  {
    category: "ذكاء",
    difficulty: "صعب",
    question: "كم عدد الزوايا القائمة في المستطيل؟",
    choices: {
      A: "2",
      B: "3",
      C: "4",
      D: "6",
    },
    correct: "C",
    points: 300,
  },

  // ===============================
  // ===== ألغاز | مستوى سهل =====
  // ===============================

  {
    category: "ألغاز",
    difficulty: "سهل",
    question: "ما الشيء الذي يمشي بلا قدمين ويبكي بلا عينين؟",
    choices: {
      A: "السحاب",
      B: "النهر",
      C: "الريح",
      D: "الساعة",
    },
    correct: "B",
    points: 100,
  },

  {
    category: "ألغاز",
    difficulty: "سهل",
    question: "ما الشيء الذي إذا أخذتَ منه كبر؟",
    choices: {
      A: "العمر",
      B: "الحفرة",
      C: "المال",
      D: "العلم",
    },
    correct: "B",
    points: 100,
  },

  {
    category: "ألغاز",
    difficulty: "سهل",
    question: "ما هو الشيء الذي يكتب ولا يقرأ؟",
    choices: {
      A: "الكمبيوتر",
      B: "القلم",
      C: "الكتاب",
      D: "العين",
    },
    correct: "B",
    points: 100,
  },

  {
    category: "ألغاز",
    difficulty: "سهل",
    question: "ما الشيء الذي له أسنان ولا يعض؟",
    choices: {
      A: "المفتاح",
      B: "المنشار",
      C: "المشط",
      D: "الساعة",
    },
    correct: "C",
    points: 100,
  },

  {
    category: "ألغاز",
    difficulty: "سهل",
    question: "ما الشيء الذي نراه ولا نستطيع لمسه؟",
    choices: {
      A: "الهواء",
      B: "النار",
      C: "الماء",
      D: "الحجر",
    },
    correct: "A",
    points: 100,
  },

  {
    category: "ألغاز",
    difficulty: "سهل",
    question: "ما الشيء الذي إذا كسرته لا يُصلح؟",
    choices: {
      A: "الزجاج",
      B: "القفل",
      C: "الوعد",
      D: "الخشب",
    },
    correct: "C",
    points: 100,
  },

  {
    category: "ألغاز",
    difficulty: "سهل",
    question: "ما الشيء الذي له وجه واحد وليس له عينان؟",
    choices: {
      A: "العملة",
      B: "الساعة",
      C: "المرآة",
      D: "الكتاب",
    },
    correct: "A",
    points: 100,
  },

  {
    category: "ألغاز",
    difficulty: "سهل",
    question: "ما الشيء الذي يولد كبيرًا ثم يصغر؟",
    choices: {
      A: "العمر",
      B: "الشمعة",
      C: "القمر",
      D: "الظل",
    },
    correct: "B",
    points: 100,
  },

  {
    category: "ألغاز",
    difficulty: "سهل",
    question: "ما هو الشيء الذي إذا سميته كسرته؟",
    choices: {
      A: "الزجاج",
      B: "السكوت",
      C: "الحجر",
      D: "الصوت",
    },
    correct: "B",
    points: 100,
  },

  {
    category: "ألغاز",
    difficulty: "سهل",
    question: "ما الشيء الذي له رقبة وليس له رأس؟",
    choices: {
      A: "القميص",
      B: "الزجاجة",
      C: "الساعة",
      D: "المصباح",
    },
    correct: "B",
    points: 100,
  },

  // ===============================
  // ===== ألغاز | مستوى متوسط =====
  // ===============================

  {
    category: "ألغاز",
    difficulty: "متوسط",
    question: "شيء يسير معك أينما ذهبت ولا يمكنك تركه، ما هو؟",
    choices: {
      A: "اسمك",
      B: "ظلك",
      C: "هاتفك",
      D: "صوتك",
    },
    correct: "B",
    points: 200,
  },

  {
    category: "ألغاز",
    difficulty: "متوسط",
    question: "ما الشيء الذي يموت إذا وضعته في الماء؟",
    choices: {
      A: "النار",
      B: "الملح",
      C: "الثلج",
      D: "الدخان",
    },
    correct: "A",
    points: 200,
  },

  {
    category: "ألغاز",
    difficulty: "متوسط",
    question: "بيت بلا أبواب ولا نوافذ، ما هو؟",
    choices: {
      A: "القبر",
      B: "الخيمة",
      C: "بيت الشعر",
      D: "بيت العنكبوت",
    },
    correct: "D",
    points: 200,
  },

  {
    category: "ألغاز",
    difficulty: "متوسط",
    question: "ما الشيء الذي ينام ولا يستيقظ؟",
    choices: {
      A: "الميت",
      B: "الظل",
      C: "الصخر",
      D: "الليل",
    },
    correct: "D",
    points: 200,
  },

  {
    category: "ألغاز",
    difficulty: "متوسط",
    question: "ما الشيء الذي كلما زاد نقص؟",
    choices: {
      A: "العمر",
      B: "المال",
      C: "الوقت",
      D: "الظل",
    },
    correct: "C",
    points: 200,
  },

  {
    category: "ألغاز",
    difficulty: "متوسط",
    question: "ما الشيء الذي يسمع بلا أذن ويتكلم بلا لسان؟",
    choices: {
      A: "الهاتف",
      B: "الراديو",
      C: "الصدى",
      D: "التلفاز",
    },
    correct: "C",
    points: 200,
  },

  {
    category: "ألغاز",
    difficulty: "متوسط",
    question: "ما الشيء الذي إذا دخل الماء لا يبتل؟",
    choices: {
      A: "الظل",
      B: "الهواء",
      C: "النار",
      D: "الصوت",
    },
    correct: "A",
    points: 200,
  },

  {
    category: "ألغاز",
    difficulty: "متوسط",
    question: "ما الشيء الذي تراه في الليل ثلاث مرات وفي النهار مرة واحدة؟",
    choices: {
      A: "القمر",
      B: "النجوم",
      C: "حرف اللام",
      D: "العين",
    },
    correct: "C",
    points: 200,
  },

  {
    category: "ألغاز",
    difficulty: "متوسط",
    question: "شيء إذا لمسته صاح، ما هو؟",
    choices: {
      A: "الجرس",
      B: "الطفل",
      C: "القط",
      D: "الباب",
    },
    correct: "A",
    points: 200,
  },

  {
    category: "ألغاز",
    difficulty: "متوسط",
    question: "ما الشيء الذي كل الناس يركضون منه؟",
    choices: {
      A: "الظل",
      B: "الوقت",
      C: "المطر",
      D: "الخطر",
    },
    correct: "C",
    points: 200,
  },

  // ===============================
  // ===== ألغاز | مستوى صعب =====
  // ===============================

  {
    category: "ألغاز",
    difficulty: "صعب",
    question: "ما الشيء الذي له قلب ولا ينبض؟",
    choices: {
      A: "الحجر",
      B: "الكتاب",
      C: "الخس",
      D: "البحر",
    },
    correct: "C",
    points: 300,
  },

  {
    category: "ألغاز",
    difficulty: "صعب",
    question: "شيء إذا أكلته كاملًا تموت، وإذا أكلت نصفه تعيش، ما هو؟",
    choices: {
      A: "السمسم",
      B: "السم",
      C: "الدواء",
      D: "الملح",
    },
    correct: "B",
    points: 300,
  },

  {
    category: "ألغاز",
    difficulty: "صعب",
    question: "ما الشيء الذي يتكلم كل لغات العالم؟",
    choices: {
      A: "الإنترنت",
      B: "الكتاب",
      C: "الصدى",
      D: "الترجمة",
    },
    correct: "C",
    points: 300,
  },

  {
    category: "ألغاز",
    difficulty: "صعب",
    question: "ما الشيء الذي يسبقك بخطوة ولا تستطيع اللحاق به؟",
    choices: {
      A: "الزمن",
      B: "الظل",
      C: "المستقبل",
      D: "الهواء",
    },
    correct: "B",
    points: 300,
  },

  {
    category: "ألغاز",
    difficulty: "صعب",
    question: "ما الشيء الذي إذا وضعته في الثلاجة لا يبرد؟",
    choices: {
      A: "الفلفل",
      B: "الماء",
      C: "الثلج",
      D: "النار",
    },
    correct: "A",
    points: 300,
  },

  {
    category: "ألغاز",
    difficulty: "صعب",
    question: "شيء لا يمشي إلا بالضرب، ما هو؟",
    choices: {
      A: "الساعة",
      B: "المسمار",
      C: "الكرة",
      D: "الجرس",
    },
    correct: "A",
    points: 300,
  },

  {
    category: "ألغاز",
    difficulty: "صعب",
    question: "ما الشيء الذي له يدان ولا يستطيع التصفيق؟",
    choices: {
      A: "الإنسان",
      B: "الساعة",
      C: "الميزان",
      D: "الكرسي",
    },
    correct: "B",
    points: 300,
  },

  {
    category: "ألغاز",
    difficulty: "صعب",
    question: "ما الشيء الذي يقرصك بلا يدين؟",
    choices: {
      A: "الناموس",
      B: "البرد",
      C: "الشمس",
      D: "الريح",
    },
    correct: "B",
    points: 300,
  },

  {
    category: "ألغاز",
    difficulty: "صعب",
    question: "شيء يمشي بلا رأس ويبكي بلا عين، ما هو؟",
    choices: {
      A: "السحاب",
      B: "النهر",
      C: "الريح",
      D: "الظل",
    },
    correct: "B",
    points: 300,
  },

  {
    category: "ألغاز",
    difficulty: "صعب",
    question: "ما الشيء الذي إذا حذفت أول حرف منه طار؟",
    choices: {
      A: "غصن",
      B: "باب",
      C: "ريش",
      D: "مطر",
    },
    correct: "A",
    points: 300,
  },

  // ===============================
  // ===== جغرافية | مستوى سهل =====
  // ===============================

  {
    category: "جغرافية",
    difficulty: "سهل",
    question: "ما عاصمة المملكة العربية السعودية؟",
    choices: {
      A: "جدة",
      B: "مكة المكرمة",
      C: "الرياض",
      D: "الدمام",
    },
    correct: "C",
    points: 100,
  },

  {
    category: "جغرافية",
    difficulty: "سهل",
    question: "في أي قارة تقع مصر؟",
    choices: {
      A: "آسيا",
      B: "أوروبا",
      C: "أفريقيا",
      D: "أمريكا",
    },
    correct: "C",
    points: 100,
  },

  {
    category: "جغرافية",
    difficulty: "سهل",
    question: "ما أطول نهر في العالم؟",
    choices: {
      A: "نهر الأمازون",
      B: "نهر النيل",
      C: "نهر الفرات",
      D: "نهر الدانوب",
    },
    correct: "B",
    points: 100,
  },

  {
    category: "جغرافية",
    difficulty: "سهل",
    question: "أي بحر يفصل بين السعودية ومصر؟",
    choices: {
      A: "البحر الأبيض المتوسط",
      B: "بحر العرب",
      C: "البحر الأحمر",
      D: "بحر قزوين",
    },
    correct: "C",
    points: 100,
  },

  {
    category: "جغرافية",
    difficulty: "سهل",
    question: "كم عدد قارات العالم؟",
    choices: {
      A: "5",
      B: "6",
      C: "7",
      D: "8",
    },
    correct: "C",
    points: 100,
  },

  {
    category: "جغرافية",
    difficulty: "سهل",
    question: "ما القارة الأكبر مساحة في العالم؟",
    choices: {
      A: "أفريقيا",
      B: "أوروبا",
      C: "آسيا",
      D: "أمريكا الشمالية",
    },
    correct: "C",
    points: 100,
  },

  {
    category: "جغرافية",
    difficulty: "سهل",
    question: "أي دولة تُعرف باسم بلاد الحرمين؟",
    choices: {
      A: "مصر",
      B: "السعودية",
      C: "الأردن",
      D: "المغرب",
    },
    correct: "B",
    points: 100,
  },

  {
    category: "جغرافية",
    difficulty: "سهل",
    question: "ما عاصمة فرنسا؟",
    choices: {
      A: "برلين",
      B: "روما",
      C: "مدريد",
      D: "باريس",
    },
    correct: "D",
    points: 100,
  },

  {
    category: "جغرافية",
    difficulty: "سهل",
    question: "أي محيط هو الأكبر في العالم؟",
    choices: {
      A: "المحيط الأطلسي",
      B: "المحيط الهندي",
      C: "المحيط المتجمد الشمالي",
      D: "المحيط الهادئ",
    },
    correct: "D",
    points: 100,
  },

  {
    category: "جغرافية",
    difficulty: "سهل",
    question: "في أي قارة تقع دولة البرازيل؟",
    choices: {
      A: "أمريكا الشمالية",
      B: "أوروبا",
      C: "أمريكا الجنوبية",
      D: "أفريقيا",
    },
    correct: "C",
    points: 100,
  },

  // ===============================
  // ===== جغرافية | مستوى متوسط =====
  // ===============================

  {
    category: "جغرافية",
    difficulty: "متوسط",
    question: "ما عاصمة كندا؟",
    choices: {
      A: "تورونتو",
      B: "فانكوفر",
      C: "أوتاوا",
      D: "مونتريال",
    },
    correct: "C",
    points: 200,
  },

  {
    category: "جغرافية",
    difficulty: "متوسط",
    question: "أي دولة لا تطل على البحر الأبيض المتوسط؟",
    choices: {
      A: "إيطاليا",
      B: "اليونان",
      C: "البرتغال",
      D: "تركيا",
    },
    correct: "C",
    points: 200,
  },

  {
    category: "جغرافية",
    difficulty: "متوسط",
    question: "ما السلسلة الجبلية الأطول في العالم؟",
    choices: {
      A: "جبال الألب",
      B: "جبال الهيمالايا",
      C: "جبال الأطلس",
      D: "جبال روكي",
    },
    correct: "B",
    points: 200,
  },

  {
    category: "جغرافية",
    difficulty: "متوسط",
    question: "أي دولة يُطلق عليها أرض الكنانة؟",
    choices: {
      A: "العراق",
      B: "سوريا",
      C: "مصر",
      D: "اليمن",
    },
    correct: "C",
    points: 200,
  },

  {
    category: "جغرافية",
    difficulty: "متوسط",
    question: "ما المضيق الذي يفصل بين قارتي آسيا وأفريقيا؟",
    choices: {
      A: "مضيق هرمز",
      B: "مضيق جبل طارق",
      C: "مضيق باب المندب",
      D: "قناة السويس",
    },
    correct: "C",
    points: 200,
  },

  {
    category: "جغرافية",
    difficulty: "متوسط",
    question: "أي دولة هي الأكبر مساحة في العالم؟",
    choices: {
      A: "الصين",
      B: "الولايات المتحدة",
      C: "روسيا",
      D: "كندا",
    },
    correct: "C",
    points: 200,
  },

  {
    category: "جغرافية",
    difficulty: "متوسط",
    question: "ما عاصمة أستراليا؟",
    choices: {
      A: "سيدني",
      B: "ملبورن",
      C: "بيرث",
      D: "كانبيرا",
    },
    correct: "D",
    points: 200,
  },

  {
    category: "جغرافية",
    difficulty: "متوسط",
    question: "أي نهر يمر في مدينة بغداد؟",
    choices: {
      A: "الفرات",
      B: "دجلة",
      C: "النيل",
      D: "الأردن",
    },
    correct: "B",
    points: 200,
  },

  {
    category: "جغرافية",
    difficulty: "متوسط",
    question: "في أي قارة تقع اليابان؟",
    choices: {
      A: "أوروبا",
      B: "أفريقيا",
      C: "آسيا",
      D: "أمريكا الشمالية",
    },
    correct: "C",
    points: 200,
  },

  {
    category: "جغرافية",
    difficulty: "متوسط",
    question: "ما اسم البحر الذي يقع بين أوروبا وأفريقيا؟",
    choices: {
      A: "بحر العرب",
      B: "البحر الأسود",
      C: "البحر الأحمر",
      D: "البحر الأبيض المتوسط",
    },
    correct: "D",
    points: 200,
  },

  // ===============================
  // ===== جغرافية | مستوى صعب =====
  // ===============================

  {
    category: "جغرافية",
    difficulty: "صعب",
    question: "ما أعلى جبل في العالم؟",
    choices: {
      A: "جبل كليمنجارو",
      B: "جبل إيفرست",
      C: "جبل ماكينلي",
      D: "جبل فوجي",
    },
    correct: "B",
    points: 300,
  },

  {
    category: "جغرافية",
    difficulty: "صعب",
    question: "أي دولة تمتلك أكبر عدد من الجزر في العالم؟",
    choices: {
      A: "إندونيسيا",
      B: "اليابان",
      C: "السويد",
      D: "الفلبين",
    },
    correct: "C",
    points: 300,
  },

  {
    category: "جغرافية",
    difficulty: "صعب",
    question: "ما عاصمة جنوب أفريقيا الإدارية؟",
    choices: {
      A: "كيب تاون",
      B: "جوهانسبرغ",
      C: "بريتوريا",
      D: "ديربان",
    },
    correct: "C",
    points: 300,
  },

  {
    category: "جغرافية",
    difficulty: "صعب",
    question: "أي صحراء تُعد الأكبر في العالم؟",
    choices: {
      A: "الصحراء الكبرى",
      B: "صحراء غوبي",
      C: "صحراء الربع الخالي",
      D: "صحراء أتاكاما",
    },
    correct: "A",
    points: 300,
  },

  {
    category: "جغرافية",
    difficulty: "صعب",
    question: "ما الدولة التي يمر بها خط الاستواء وخط غرينتش؟",
    choices: {
      A: "كينيا",
      B: "إندونيسيا",
      C: "البرازيل",
      D: "غانا",
    },
    correct: "D",
    points: 300,
  },

  {
    category: "جغرافية",
    difficulty: "صعب",
    question: "ما أعمق نقطة في محيطات العالم؟",
    choices: {
      A: "خندق تونغا",
      B: "خندق ماريانا",
      C: "خندق بورتوريكو",
      D: "خندق اليابان",
    },
    correct: "B",
    points: 300,
  },

  {
    category: "جغرافية",
    difficulty: "صعب",
    question: "أي دولة أوروبية لا تطل على أي بحر؟",
    choices: {
      A: "سويسرا",
      B: "إيطاليا",
      C: "النمسا",
      D: "التشيك",
    },
    correct: "A",
    points: 300,
  },

  {
    category: "جغرافية",
    difficulty: "صعب",
    question: "ما اسم أعلى شلال في العالم؟",
    choices: {
      A: "شلالات نياجرا",
      B: "شلالات فيكتوريا",
      C: "شلال آنجل",
      D: "شلالات إيغوازو",
    },
    correct: "C",
    points: 300,
  },

  {
    category: "جغرافية",
    difficulty: "صعب",
    question: "أي دولة تُعرف باسم أرض الشمس المشرقة؟",
    choices: {
      A: "الصين",
      B: "كوريا الجنوبية",
      C: "اليابان",
      D: "تايلاند",
    },
    correct: "C",
    points: 300,
  },

  {
    category: "جغرافية",
    difficulty: "صعب",
    question: "ما البحر الذي لا يوجد فيه شواطئ؟",
    choices: {
      A: "بحر العرب",
      B: "بحر قزوين",
      C: "بحر سرغاسو",
      D: "البحر الأسود",
    },
    correct: "C",
    points: 300,
  },

  // ===============================
  // ===== حيوانات | مستوى سهل =====
  // ===============================

  {
    category: "حيوانات",
    difficulty: "سهل",
    question: "ما الحيوان الذي يُلقب بملك الغابة؟",
    choices: {
      A: "النمر",
      B: "الأسد",
      C: "الفيل",
      D: "الذئب",
    },
    correct: "B",
    points: 100,
  },

  {
    category: "حيوانات",
    difficulty: "سهل",
    question: "أي حيوان معروف بأنه أسرع حيوان بري؟",
    choices: {
      A: "الفهد",
      B: "الحصان",
      C: "الغزال",
      D: "الذئب",
    },
    correct: "A",
    points: 100,
  },

  {
    category: "حيوانات",
    difficulty: "سهل",
    question: "ما الحيوان الذي يموء؟",
    choices: {
      A: "الكلب",
      B: "الحصان",
      C: "القطة",
      D: "البقرة",
    },
    correct: "C",
    points: 100,
  },

  {
    category: "حيوانات",
    difficulty: "سهل",
    question: "أي حيوان يُستخدم لحمل الأشياء في الصحراء؟",
    choices: {
      A: "الجمل",
      B: "الحمار",
      C: "الفيل",
      D: "الزرافة",
    },
    correct: "A",
    points: 100,
  },

  {
    category: "حيوانات",
    difficulty: "سهل",
    question: "ما اسم صغير القط؟",
    choices: {
      A: "جرو",
      B: "مهر",
      C: "هرير",
      D: "عجل",
    },
    correct: "C",
    points: 100,
  },

  {
    category: "حيوانات",
    difficulty: "سهل",
    question: "أي حيوان يعيش في الماء ويملك زعانف؟",
    choices: {
      A: "الضفدع",
      B: "السمكة",
      C: "السلحفاة",
      D: "التمساح",
    },
    correct: "B",
    points: 100,
  },

  {
    category: "حيوانات",
    difficulty: "سهل",
    question: "ما الحيوان الذي يطلق عليه (سفينة الصحراء)؟",
    choices: {
      A: "الحصان",
      B: "الجمل",
      C: "الماعز",
      D: "النعامة",
    },
    correct: "B",
    points: 100,
  },

  {
    category: "حيوانات",
    difficulty: "سهل",
    question: "أي طائر لا يستطيع الطيران ويشتهر بالركض السريع؟",
    choices: {
      A: "الحمامة",
      B: "النعامة",
      C: "النسر",
      D: "العصفور",
    },
    correct: "B",
    points: 100,
  },

  {
    category: "حيوانات",
    difficulty: "سهل",
    question: "أي حيوان معروف بطول رقبته؟",
    choices: {
      A: "الزرافة",
      B: "الدب",
      C: "الثعلب",
      D: "الفهد",
    },
    correct: "A",
    points: 100,
  },

  {
    category: "حيوانات",
    difficulty: "سهل",
    question: "أي حيوان يُعرف بأنه صديق الإنسان؟",
    choices: {
      A: "الذئب",
      B: "الكلب",
      C: "الأسد",
      D: "النمر",
    },
    correct: "B",
    points: 100,
  },

  // ===============================
  // ===== حيوانات | مستوى متوسط =====
  // ===============================

  {
    category: "حيوانات",
    difficulty: "متوسط",
    question: "أي حيوان يُعد من الثدييات البحرية؟",
    choices: {
      A: "القرش",
      B: "الدلفين",
      C: "الأخطبوط",
      D: "قنديل البحر",
    },
    correct: "B",
    points: 200,
  },

  {
    category: "حيوانات",
    difficulty: "متوسط",
    question: "ما الحيوان الذي يُعرف بقدرته على تغيير لون جلده للتمويه؟",
    choices: {
      A: "الحرباء",
      B: "الأرنب",
      C: "الثعلب",
      D: "الحصان",
    },
    correct: "A",
    points: 200,
  },

  {
    category: "حيوانات",
    difficulty: "متوسط",
    question: "أي من التالي يُعد من الزواحف؟",
    choices: {
      A: "الضفدع",
      B: "الثعبان",
      C: "الخفاش",
      D: "الحمامة",
    },
    correct: "B",
    points: 200,
  },

  {
    category: "حيوانات",
    difficulty: "متوسط",
    question: "ما الحيوان الذي ينام واقفًا غالبًا؟",
    choices: {
      A: "الحصان",
      B: "الدب",
      C: "القط",
      D: "الأرنب",
    },
    correct: "A",
    points: 200,
  },

  {
    category: "حيوانات",
    difficulty: "متوسط",
    question: "أي حيوان يُعرف بأنه أكبر الثدييات على وجه الأرض؟",
    choices: {
      A: "الفيل الأفريقي",
      B: "الحوت الأزرق",
      C: "وحيد القرن",
      D: "الزرافة",
    },
    correct: "B",
    points: 200,
  },

  {
    category: "حيوانات",
    difficulty: "متوسط",
    question: "ما الحيوان الذي يمتلك بصمات أصابع تشبه الإنسان؟",
    choices: {
      A: "الشمبانزي",
      B: "الكوالا",
      C: "الفهد",
      D: "القط",
    },
    correct: "B",
    points: 200,
  },

  {
    category: "حيوانات",
    difficulty: "متوسط",
    question: "أي طائر يُعرف بقدرته على تقليد الأصوات والكلام؟",
    choices: {
      A: "النسر",
      B: "الببغاء",
      C: "النعامة",
      D: "الطاووس",
    },
    correct: "B",
    points: 200,
  },

  {
    category: "حيوانات",
    difficulty: "متوسط",
    question: "ما الحيوان الذي يُطلق عليه (أذكى حيوان بحري) غالبًا؟",
    choices: {
      A: "الدلفين",
      B: "القرش",
      C: "الحبار",
      D: "السلحفاة",
    },
    correct: "A",
    points: 200,
  },

  {
    category: "حيوانات",
    difficulty: "متوسط",
    question: "أي من التالي يُعد من الحيوانات الليلية؟",
    choices: {
      A: "النسر",
      B: "الخفاش",
      C: "النعامة",
      D: "الحمامة",
    },
    correct: "B",
    points: 200,
  },

  {
    category: "حيوانات",
    difficulty: "متوسط",
    question: "ما اسم صوت الحمار؟",
    choices: {
      A: "نهيق",
      B: "صهيل",
      C: "ثغاء",
      D: "مواء",
    },
    correct: "A",
    points: 200,
  },

  // ===============================
  // ===== حيوانات | مستوى صعب =====
  // ===============================

  {
    category: "حيوانات",
    difficulty: "صعب",
    question: "أي حيوان يُعد من أكبر الزواحف الحية في العالم؟",
    choices: {
      A: "الإغوانا",
      B: "تمساح الماء المالح",
      C: "الأفعى الملكية",
      D: "السلحفاة البرية",
    },
    correct: "B",
    points: 300,
  },

  {
    category: "حيوانات",
    difficulty: "صعب",
    question: "ما الحيوان الذي يملك أطول مدة حمل بين الثدييات البرية؟",
    choices: {
      A: "الفيل",
      B: "الحصان",
      C: "الزرافة",
      D: "الأسد",
    },
    correct: "A",
    points: 300,
  },

  {
    category: "حيوانات",
    difficulty: "صعب",
    question: "أي طائر يُعد الأسرع عند الانقضاض (الغوص) في العالم؟",
    choices: {
      A: "الصقر الشاهين",
      B: "النسر الذهبي",
      C: "الغراب",
      D: "البومة",
    },
    correct: "A",
    points: 300,
  },

  {
    category: "حيوانات",
    difficulty: "صعب",
    question: "ما اسم مجموعة الأسود (بالإنجليزية)؟",
    choices: {
      A: "Pack",
      B: "Herd",
      C: "Pride",
      D: "Swarm",
    },
    correct: "C",
    points: 300,
  },

  {
    category: "حيوانات",
    difficulty: "صعب",
    question: "أي من التالي يُعد من البرمائيات؟",
    choices: {
      A: "التمساح",
      B: "الضفدع",
      C: "السلحفاة",
      D: "الثعبان",
    },
    correct: "B",
    points: 300,
  },

  {
    category: "حيوانات",
    difficulty: "صعب",
    question: "ما الحيوان الذي يمتلك أكبر دماغ بين الحيوانات البرية؟",
    choices: {
      A: "الفيل",
      B: "الدب القطبي",
      C: "الزرافة",
      D: "الحصان",
    },
    correct: "A",
    points: 300,
  },

  {
    category: "حيوانات",
    difficulty: "صعب",
    question: "أي حيوان من التالي ليس من فصيلة السنوريات؟",
    choices: {
      A: "الأسد",
      B: "النمر",
      C: "الفهد",
      D: "الضبع",
    },
    correct: "D",
    points: 300,
  },

  {
    category: "حيوانات",
    difficulty: "صعب",
    question:
      "ما الحيوان الذي يستطيع العيش في بيئات شديدة الملوحة مثل البحر الميت؟",
    choices: {
      A: "قنديل البحر",
      B: "سمكة القرش",
      C: "روبيان ملحي (Artemia)",
      D: "الدلفين",
    },
    correct: "C",
    points: 300,
  },

  {
    category: "حيوانات",
    difficulty: "صعب",
    question: "أي من التالي يُعد من الحيوانات المجترة؟",
    choices: {
      A: "الأسد",
      B: "البقرة",
      C: "الذئب",
      D: "القط",
    },
    correct: "B",
    points: 300,
  },

  {
    category: "حيوانات",
    difficulty: "صعب",
    question: "ما اسم علم دراسة الحيوانات؟",
    choices: {
      A: "Botany",
      B: "Zoology",
      C: "Geology",
      D: "Astronomy",
    },
    correct: "B",
    points: 300,
  },

  // ===============================
  // ===== علمية | مستوى سهل =====
  // ===============================

  {
    category: "علمية",
    difficulty: "سهل",
    question: "ما الكوكب الأقرب إلى الشمس؟",
    choices: {
      A: "الزهرة",
      B: "الأرض",
      C: "عطارد",
      D: "المريخ",
    },
    correct: "C",
    points: 100,
  },

  {
    category: "علمية",
    difficulty: "سهل",
    question: "ما الغاز الضروري لعملية التنفس؟",
    choices: {
      A: "النيتروجين",
      B: "الأكسجين",
      C: "الهيدروجين",
      D: "ثاني أكسيد الكربون",
    },
    correct: "B",
    points: 100,
  },

  {
    category: "علمية",
    difficulty: "سهل",
    question: "كم عدد حواس الإنسان؟",
    choices: {
      A: "3",
      B: "4",
      C: "5",
      D: "6",
    },
    correct: "C",
    points: 100,
  },

  {
    category: "علمية",
    difficulty: "سهل",
    question: "ما هو أكبر عضو في جسم الإنسان؟",
    choices: {
      A: "القلب",
      B: "الكبد",
      C: "الجلد",
      D: "الرئتان",
    },
    correct: "C",
    points: 100,
  },

  {
    category: "علمية",
    difficulty: "سهل",
    question: "ما حالة الماء عند درجة حرارة 0 مئوية؟",
    choices: {
      A: "غازية",
      B: "سائلة",
      C: "صلبة",
      D: "بلازما",
    },
    correct: "C",
    points: 100,
  },

  {
    category: "علمية",
    difficulty: "سهل",
    question: "أي جزء من النبات يصنع الغذاء؟",
    choices: {
      A: "الجذر",
      B: "الساق",
      C: "الورقة",
      D: "الزهرة",
    },
    correct: "C",
    points: 100,
  },

  {
    category: "علمية",
    difficulty: "سهل",
    question: "ما اسم العملية التي يصنع فيها النبات غذاءه؟",
    choices: {
      A: "التنفس",
      B: "التمثيل الضوئي",
      C: "الامتصاص",
      D: "التكاثر",
    },
    correct: "B",
    points: 100,
  },

  {
    category: "علمية",
    difficulty: "سهل",
    question: "ما مصدر الضوء الطبيعي على الأرض؟",
    choices: {
      A: "القمر",
      B: "النجوم",
      C: "الشمس",
      D: "الكهرباء",
    },
    correct: "C",
    points: 100,
  },

  {
    category: "علمية",
    difficulty: "سهل",
    question: "ما الحيوان الذي يُلقب بسفينة الصحراء؟",
    choices: {
      A: "الحصان",
      B: "الجمل",
      C: "الفيل",
      D: "الماعز",
    },
    correct: "B",
    points: 100,
  },

  {
    category: "علمية",
    difficulty: "سهل",
    question: "كم عدد كواكب المجموعة الشمسية؟",
    choices: {
      A: "7",
      B: "8",
      C: "9",
      D: "10",
    },
    correct: "B",
    points: 100,
  },

  // ===============================
  // ===== علمية | مستوى متوسط =====
  // ===============================

  {
    category: "علمية",
    difficulty: "متوسط",
    question: "ما العنصر الكيميائي الذي رمزه O؟",
    choices: {
      A: "ذهب",
      B: "أكسجين",
      C: "أوزون",
      D: "حديد",
    },
    correct: "B",
    points: 200,
  },

  {
    category: "علمية",
    difficulty: "متوسط",
    question: "ما الوحدة الأساسية لقياس القوة؟",
    choices: {
      A: "الجول",
      B: "الواط",
      C: "النيوتن",
      D: "الأمبير",
    },
    correct: "C",
    points: 200,
  },

  {
    category: "علمية",
    difficulty: "متوسط",
    question: "ما العضو المسؤول عن ضخ الدم في الجسم؟",
    choices: {
      A: "الرئتان",
      B: "الدماغ",
      C: "القلب",
      D: "الكبد",
    },
    correct: "C",
    points: 200,
  },

  {
    category: "علمية",
    difficulty: "متوسط",
    question: "أي طبقة من الغلاف الجوي تحتوي على الأوزون؟",
    choices: {
      A: "التروبوسفير",
      B: "الميزوسفير",
      C: "الستراتوسفير",
      D: "الإكسوسفير",
    },
    correct: "C",
    points: 200,
  },

  {
    category: "علمية",
    difficulty: "متوسط",
    question: "ما اسم أقرب نجم إلى الأرض؟",
    choices: {
      A: "سيريوس",
      B: "الشمس",
      C: "الشعرى اليمانية",
      D: "النجم القطبي",
    },
    correct: "B",
    points: 200,
  },

  {
    category: "علمية",
    difficulty: "متوسط",
    question: "ما العملية التي يتحول فيها السائل إلى غاز؟",
    choices: {
      A: "التكاثف",
      B: "التبخر",
      C: "التجمد",
      D: "الانصهار",
    },
    correct: "B",
    points: 200,
  },

  {
    category: "علمية",
    difficulty: "متوسط",
    question: "ما الجهاز المسؤول عن التنفس في الإنسان؟",
    choices: {
      A: "الجهاز الدوري",
      B: "الجهاز العصبي",
      C: "الجهاز التنفسي",
      D: "الجهاز الهضمي",
    },
    correct: "C",
    points: 200,
  },

  {
    category: "علمية",
    difficulty: "متوسط",
    question: "ما اسم أصغر وحدة بنائية في الكائن الحي؟",
    choices: {
      A: "النسيج",
      B: "الخلية",
      C: "العضو",
      D: "الجهاز",
    },
    correct: "B",
    points: 200,
  },

  {
    category: "علمية",
    difficulty: "متوسط",
    question: "أي كوكب يُعرف بالكوكب الأحمر؟",
    choices: {
      A: "المشتري",
      B: "الزهرة",
      C: "المريخ",
      D: "عطارد",
    },
    correct: "C",
    points: 200,
  },

  {
    category: "علمية",
    difficulty: "متوسط",
    question: "ما اسم العملية التي ينتج عنها المطر؟",
    choices: {
      A: "التبخر",
      B: "التكاثف",
      C: "الاحتراق",
      D: "التسامي",
    },
    correct: "B",
    points: 200,
  },

  // ===============================
  // ===== علمية | مستوى صعب =====
  // ===============================

  {
    category: "علمية",
    difficulty: "صعب",
    question: "ما اسم العملية التي تتحول فيها المادة مباشرة من صلب إلى غاز؟",
    choices: {
      A: "التبخر",
      B: "التسامي",
      C: "الانصهار",
      D: "التكاثف",
    },
    correct: "B",
    points: 300,
  },

  {
    category: "علمية",
    difficulty: "صعب",
    question: "ما عدد الكروموسومات في الخلية البشرية الطبيعية؟",
    choices: {
      A: "23",
      B: "44",
      C: "46",
      D: "48",
    },
    correct: "C",
    points: 300,
  },

  {
    category: "علمية",
    difficulty: "صعب",
    question: "أي نوع من الإشعاع يُعد الأكثر اختراقًا؟",
    choices: {
      A: "ألفا",
      B: "بيتا",
      C: "جاما",
      D: "تحت الحمراء",
    },
    correct: "C",
    points: 300,
  },

  {
    category: "علمية",
    difficulty: "صعب",
    question: "ما اسم أقوى عضلة في جسم الإنسان نسبةً لقوتها؟",
    choices: {
      A: "عضلة القلب",
      B: "عضلة اللسان",
      C: "عضلة الفك",
      D: "عضلة الساق",
    },
    correct: "C",
    points: 300,
  },

  {
    category: "علمية",
    difficulty: "صعب",
    question: "ما العنصر الأكثر وفرة في الكون؟",
    choices: {
      A: "الأكسجين",
      B: "الهيليوم",
      C: "الهيدروجين",
      D: "النيتروجين",
    },
    correct: "C",
    points: 300,
  },

  {
    category: "علمية",
    difficulty: "صعب",
    question: "ما اسم النظرية التي تفسر نشأة الكون؟",
    choices: {
      A: "النسبية",
      B: "الانفجار العظيم",
      C: "التطور",
      D: "الكم",
    },
    correct: "B",
    points: 300,
  },

  {
    category: "علمية",
    difficulty: "صعب",
    question: "أي كوكب يمتلك أكبر عدد من الأقمار؟",
    choices: {
      A: "الأرض",
      B: "زحل",
      C: "المشتري",
      D: "أورانوس",
    },
    correct: "C",
    points: 300,
  },

  {
    category: "علمية",
    difficulty: "صعب",
    question: "ما اسم أصغر عظمة في جسم الإنسان؟",
    choices: {
      A: "الركاب",
      B: "الزند",
      C: "القص",
      D: "الفخذ",
    },
    correct: "A",
    points: 300,
  },

  {
    category: "علمية",
    difficulty: "صعب",
    question: "ما الجهاز الذي يتحكم في جميع أنشطة الجسم؟",
    choices: {
      A: "الجهاز الدوري",
      B: "الجهاز العصبي",
      C: "الجهاز الهضمي",
      D: "الجهاز التنفسي",
    },
    correct: "B",
    points: 300,
  },

  {
    category: "علمية",
    difficulty: "صعب",
    question: "ما اسم العملية التي تنقسم فيها الخلية إلى خليتين متماثلتين؟",
    choices: {
      A: "الانقسام المنصف",
      B: "الانقسام المتساوي",
      C: "التكاثر",
      D: "التبرعم",
    },
    correct: "B",
    points: 300,
  },

  // ===============================
  // ===== تقنية | مستوى سهل =====
  // ===============================

  {
    category: "تقنية",
    difficulty: "سهل",
    question: "ما وظيفة نظام التشغيل في الحاسوب؟",
    choices: {
      A: "تشغيل وإدارة موارد الجهاز",
      B: "تصميم الصور",
      C: "تصفح الإنترنت فقط",
      D: "كتابة النصوص",
    },
    correct: "A",
    points: 100,
  },

  {
    category: "تقنية",
    difficulty: "سهل",
    question: "أي جهاز يُستخدم لإدخال النصوص إلى الحاسوب؟",
    choices: {
      A: "الفأرة",
      B: "الشاشة",
      C: "لوحة المفاتيح",
      D: "السماعات",
    },
    correct: "C",
    points: 100,
  },

  {
    category: "تقنية",
    difficulty: "سهل",
    question: "ما معنى الاختصار CPU؟",
    choices: {
      A: "وحدة التخزين",
      B: "وحدة المعالجة المركزية",
      C: "كرت الشاشة",
      D: "الذاكرة المؤقتة",
    },
    correct: "B",
    points: 100,
  },

  {
    category: "تقنية",
    difficulty: "سهل",
    question: "أي من التالي يُعد متصفح إنترنت؟",
    choices: {
      A: "Photoshop",
      B: "Excel",
      C: "Google Chrome",
      D: "Windows",
    },
    correct: "C",
    points: 100,
  },

  {
    category: "تقنية",
    difficulty: "سهل",
    question: "ما وظيفة الفأرة (Mouse)؟",
    choices: {
      A: "إدخال الصوت",
      B: "التحكم بالمؤشر",
      C: "تخزين البيانات",
      D: "طباعة الملفات",
    },
    correct: "B",
    points: 100,
  },

  {
    category: "تقنية",
    difficulty: "سهل",
    question: "أي لغة تُستخدم لهيكلة صفحات الويب؟",
    choices: {
      A: "CSS",
      B: "Python",
      C: "HTML",
      D: "SQL",
    },
    correct: "C",
    points: 100,
  },

  // ===============================
  // ===== تقنية | مستوى متوسط =====
  // ===============================

  {
    category: "تقنية",
    difficulty: "متوسط",
    question: "ما وظيفة نظام DNS في الإنترنت؟",
    choices: {
      A: "تشفير البيانات",
      B: "تحويل اسم الموقع إلى عنوان IP",
      C: "حماية الشبكة",
      D: "تخزين المواقع",
    },
    correct: "B",
    points: 200,
  },

  {
    category: "تقنية",
    difficulty: "متوسط",
    question: "أي لغة تُستخدم غالبًا للتعامل مع قواعد البيانات؟",
    choices: {
      A: "HTML",
      B: "CSS",
      C: "SQL",
      D: "JavaScript",
    },
    correct: "C",
    points: 200,
  },

  {
    category: "تقنية",
    difficulty: "متوسط",
    question: "ما المقصود بالـ Open Source؟",
    choices: {
      A: "برامج مدفوعة",
      B: "برامج مغلقة المصدر",
      C: "برامج يمكن تعديل كودها",
      D: "برامج بدون تحديثات",
    },
    correct: "C",
    points: 200,
  },

  {
    category: "تقنية",
    difficulty: "متوسط",
    question: "أي من التالي يُستخدم للتحكم في إصدارات الكود؟",
    choices: {
      A: "Git",
      B: "Excel",
      C: "Photoshop",
      D: "Notepad",
    },
    correct: "A",
    points: 200,
  },

  {
    category: "تقنية",
    difficulty: "متوسط",
    question: "أي بروتوكول يُستخدم لتصفح المواقع الآمنة؟",
    choices: {
      A: "FTP",
      B: "HTTP",
      C: "HTTPS",
      D: "SMTP",
    },
    correct: "C",
    points: 200,
  },

  // ===============================
  // ===== تقنية | مستوى صعب =====
  // ===============================

  {
    category: "تقنية",
    difficulty: "صعب",
    question: "ما الفرق الأساسي بين TCP و UDP؟",
    choices: {
      A: "UDP يضمن وصول البيانات",
      B: "TCP أسرع دائمًا",
      C: "TCP يضمن تسليم البيانات",
      D: "لا يوجد فرق",
    },
    correct: "C",
    points: 300,
  },

  {
    category: "تقنية",
    difficulty: "صعب",
    question: "أي خوارزمية تُستخدم غالبًا للتشفير غير المتماثل؟",
    choices: {
      A: "AES",
      B: "RSA",
      C: "SHA-256",
      D: "MD5",
    },
    correct: "B",
    points: 300,
  },

  {
    category: "تقنية",
    difficulty: "صعب",
    question: "ما المقصود بالـ Big O Notation؟",
    choices: {
      A: "حجم الذاكرة",
      B: "تعقيد الخوارزميات",
      C: "نوع المتغيرات",
      D: "بنية قواعد البيانات",
    },
    correct: "B",
    points: 300,
  },

  {
    category: "تقنية",
    difficulty: "صعب",
    question: "أي من التالي قاعدة بيانات غير علائقية (NoSQL)؟",
    choices: {
      A: "MySQL",
      B: "PostgreSQL",
      C: "MongoDB",
      D: "SQLite",
    },
    correct: "C",
    points: 300,
  },

  {
    category: "تقنية",
    difficulty: "صعب",
    question: "ما المقصود بالـ Zero-Day Vulnerability؟",
    choices: {
      A: "ثغرة مكتشفة حديثًا",
      B: "فيروس قديم",
      C: "نظام حماية",
      D: "تحديث أمني",
    },
    correct: "A",
    points: 300,
  },

  // ... كمل باقي التصنيفات هنا
];

// --------------------------------------------------
// 🔵 دالة سحب سؤال حسب النوع + المستوى
// --------------------------------------------------
function getRandomQuestion(category, difficulty) {
  const filtered = questions.filter(
    (q) => q.category === category && q.difficulty === difficulty
  );

  if (filtered.length === 0) return null;

  return filtered[Math.floor(Math.random() * filtered.length)];
}

// --------------------------------------------------
// 👑 السؤال الذهبي (احتمال ظهور 10٪ تلقائيًا)
// --------------------------------------------------
function getRandomQuestionWithGolden(category, difficulty, goldenChance = 0.1) {
  const q = getRandomQuestion(category, difficulty);

  if (!q) return null;

  if (difficulty === "صعب" && Math.random() < goldenChance) {
    return { ...q, isGolden: true };
  }

  return { ...q, isGolden: false };
}
