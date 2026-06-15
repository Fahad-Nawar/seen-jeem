// Categories Configuration with Icons - Inspired by Seen Jeem categories
export const CATEGORIES = [
  // General
  { id: 'general', name: 'معلومات عامة', icon: '🧠', color: '#FF6B6B', section: 'عام' },
  { id: 'history', name: 'التاريخ', icon: '🏛️', color: '#FFA726', section: 'عام' },
  { id: 'geography', name: 'الجغرافيا', icon: '🗺️', color: '#42A5F5', section: 'عام' },
  { id: 'science', name: 'العلوم', icon: '🔬', color: '#66BB6A', section: 'عام' },
  { id: 'language', name: 'لغة وأدب', icon: '📖', color: '#9CCC65', section: 'عام' },
  { id: 'religion', name: 'الديانات', icon: '🕌', color: '#26C6DA', section: 'عام' },

  // Celebrities & Culture
  { id: 'celebrities', name: 'المشاهير', icon: '🌟', color: '#FFD54F', section: 'مشاهير' },
  { id: 'young_celebs', name: 'مشاهير صغار', icon: '👶', color: '#F06292', section: 'مشاهير' },
  { id: 'influencers', name: 'مين المؤثر', icon: '📱', color: '#7E57C2', section: 'مشاهير' },
  { id: 'celeb_voice', name: 'صوت المشهور', icon: '🎤', color: '#5C6BC0', section: 'مشاهير' },
  { id: 'biography', name: 'سيرة ذاتية', icon: '📝', color: '#8D6E63', section: 'مشاهير' },

  // Sports & Entertainment
  { id: 'sports', name: 'الرياضة', icon: '⚽', color: '#EC407A', section: 'رياضة وترفيه' },
  { id: 'movies', name: 'السينما والأفلام', icon: '🎬', color: '#7E57C2', section: 'رياضة وترفيه' },
  { id: 'music', name: 'الموسيقى', icon: '🎵', color: '#5C6BC0', section: 'رياضة وترفيه' },
  { id: 'memes', name: 'ميمز', icon: '😂', color: '#FFB300', section: 'رياضة وترفيه' },
  { id: 'games', name: 'الألعاب', icon: '🎮', color: '#D81B60', section: 'رياضة وترفيه' },

  // Movie Posters (uses TMDB API)
  { id: 'movie_posters', name: 'خمن الفيلم', icon: '🎞️', color: '#D32F2F', section: 'رياضة وترفيه', dynamic: true },

  // Tech & Modern
  { id: 'tech', name: 'تكنولوجيا', icon: '💻', color: '#26A69A', section: 'تقنية' },
  { id: 'ai', name: 'الذكاء الاصطناعي', icon: '🤖', color: '#5E35B1', section: 'تقنية' },
  { id: 'cars', name: 'السيارات', icon: '🚗', color: '#78909C', section: 'تقنية' },
  { id: 'watches', name: 'عالم الساعات', icon: '⌚', color: '#455A64', section: 'تقنية' },

  // Lifestyle
  { id: 'perfumes_global', name: 'عطور عالمية', icon: '💎', color: '#9C27B0', section: 'حياة' },
  { id: 'perfumes_arabic', name: 'عطور عربية', icon: '🌸', color: '#E91E63', section: 'حياة' },
  { id: 'logos', name: 'شعارات عالمية', icon: '™️', color: '#FF5722', section: 'حياة' },
  { id: 'supermarket', name: 'سوبرماركت', icon: '🛒', color: '#43A047', section: 'حياة' },
  { id: 'food', name: 'الطبخ والطعام', icon: '🍳', color: '#FF7043', section: 'حياة' },

  // Nature
  { id: 'animals', name: 'عالم الحيوان', icon: '🦁', color: '#8D6E63', section: 'طبيعة' },
  { id: 'nature', name: 'الطبيعة', icon: '🌳', color: '#43A047', section: 'طبيعة' },
  { id: 'space', name: 'الفضاء', icon: '🚀', color: '#3949AB', section: 'طبيعة' },
  { id: 'falcons', name: 'الصقور', icon: '🦅', color: '#5D4037', section: 'طبيعة' },

  // Medicine
  { id: 'medicine', name: 'طب عام', icon: '🏥', color: '#EF5350', section: 'طب' },
  { id: 'dentistry', name: 'طب الأسنان', icon: '🦷', color: '#26C6DA', section: 'طب' },

  // Education
  { id: 'math', name: 'الرياضيات', icon: '🔢', color: '#5E35B1', section: 'تعليم' },
  { id: 'poetry', name: 'عالم الشعر', icon: '📜', color: '#795548', section: 'تعليم' },
  { id: 'art', name: 'الفن', icon: '🎨', color: '#AB47BC', section: 'تعليم' }
];

// Point Levels (Easy, Medium, Hard) - Each level appears TWICE in the board
export const POINT_LEVELS = [200, 400, 600];

// Board rows structure: 2 rows per difficulty = 6 rows total per category
export const BOARD_ROWS = [
  { points: 200, index: 0 },
  { points: 200, index: 1 },
  { points: 400, index: 0 },
  { points: 400, index: 1 },
  { points: 600, index: 0 },
  { points: 600, index: 1 }
];

// Questions Database - Each category has 3 questions per difficulty (Easy=200, Medium=400, Hard=600)
export const QUESTIONS_DATA = {
  // General Culture
  general: {
    200: [
      { question: 'كم عدد قارات العالم؟', options: ['5', '6', '7', '8'], correct: 2 },
      { question: 'ما هي عاصمة اليابان؟', options: ['أوساكا', 'كيوتو', 'طوكيو', 'هيروشيما'], correct: 2 },
      { question: 'كم لون في قوس قزح؟', options: ['5', '6', '7', '8'], correct: 2 }
    ],
    400: [
      { question: 'ما هي أكبر دولة في العالم من حيث المساحة؟', options: ['كندا', 'روسيا', 'أستراليا', 'الصين'], correct: 1 },
      { question: 'ما هو الحيوان الذي يرمز للسلام؟', options: ['الحمامة', 'النسر', 'البومة', 'الطاووس'], correct: 0 },
      { question: 'في أي قارة تقع البرازيل؟', options: ['أمريكا الشمالية', 'أمريكا الجنوبية', 'أوروبا', 'آسيا'], correct: 1 }
    ],
    600: [
      { question: 'ما هي أصغر دولة في العالم؟', options: ['موناكو', 'الفاتيكان', 'سان مارينو', 'ليختنشتاين'], correct: 1 },
      { question: 'كم عدد الدول الأعضاء في الأمم المتحدة؟', options: ['185', '193', '200', '210'], correct: 1 },
      { question: 'ما هي العملة الرسمية في سويسرا؟', options: ['اليورو', 'الفرنك السويسري', 'الدولار', 'الباوند'], correct: 1 }
    ]
  },

  // History
  history: {
    200: [
      { question: 'من اكتشف أمريكا؟', options: ['ماجلان', 'كولومبوس', 'فاسكو دا جاما', 'كوك'], correct: 1 },
      { question: 'في أي سنة بدأت الحرب العالمية الأولى؟', options: ['1912', '1914', '1916', '1918'], correct: 1 },
      { question: 'من هو فاتح القسطنطينية؟', options: ['صلاح الدين', 'محمد الفاتح', 'هارون الرشيد', 'سليمان القانوني'], correct: 1 }
    ],
    400: [
      { question: 'في أي سنة حدثت الثورة الفرنسية؟', options: ['1789', '1798', '1799', '1800'], correct: 0 },
      { question: 'من بنى الأهرامات؟', options: ['الفينيقيون', 'الفراعنة', 'البابليون', 'الإغريق'], correct: 1 },
      { question: 'في أي عام انتهت الحرب العالمية الثانية؟', options: ['1943', '1945', '1947', '1949'], correct: 1 }
    ],
    600: [
      { question: 'من هو أول خليفة أموي؟', options: ['معاوية بن أبي سفيان', 'عمر بن الخطاب', 'عثمان بن عفان', 'علي بن أبي طالب'], correct: 0 },
      { question: 'في أي معركة هزم نابليون نهائياً؟', options: ['ووترلو', 'أوسترليتز', 'ترافالغار', 'بورودينو'], correct: 0 },
      { question: 'متى سقطت الدولة العباسية؟', options: ['1256', '1258', '1260', '1262'], correct: 1 }
    ]
  },

  // Geography - Mix of text + image guessing
  geography: {
    200: [
      { question: 'ما هذا المعلم؟', options: ['برج إيفل', 'برج بيزا', 'تمثال الحرية', 'هرم خوفو'], correct: 0, imageKeyword: 'Eiffel Tower Paris' },
      { question: 'ما هذا المعلم؟', options: ['الكولوسيوم', 'البارثينون', 'تاج محل', 'الكرملين'], correct: 0, imageKeyword: 'Colosseum Rome' },
      { question: 'ما هذا المعلم الهندي؟', options: ['البوابة الهندية', 'تاج محل', 'القلعة الحمراء', 'لوتس'], correct: 1, imageKeyword: 'Taj Mahal India' }
    ],
    400: [
      { question: 'أي محيط هو الأكبر في العالم؟', options: ['المحيط الأطلسي', 'المحيط المتجمد', 'المحيط الهادئ', 'المحيط الهندي'], correct: 2 },
      { question: 'ما هو أطول نهر في العالم؟', options: ['النيل', 'الأمازون', 'المسيسيبي', 'اليانغتسي'], correct: 0 },
      { question: 'ما هذا المعلم؟', options: ['ستونهنج', 'برج لندن', 'بيغ بن', 'باكنغهام'], correct: 0, imageKeyword: 'Stonehenge England' }
    ],
    600: [
      { question: 'ما هي أكبر صحراء حارة في العالم؟', options: ['الصحراء الكبرى', 'صحراء جوبي', 'صحراء أتاكاما', 'الربع الخالي'], correct: 0 },
      { question: 'كم عدد دول الخليج العربي؟', options: ['5', '6', '7', '8'], correct: 1 },
      { question: 'ما هو أعمق بحر في العالم؟', options: ['البحر الأحمر', 'بحر اليابان', 'بحر العرب', 'بحر الفلبين'], correct: 3 }
    ]
  },

  // Science
  science: {
    200: [
      { question: 'كم عدد كواكب المجموعة الشمسية؟', options: ['7', '8', '9', '10'], correct: 1 },
      { question: 'من اخترع المصباح الكهربائي؟', options: ['أديسون', 'تيسلا', 'فاراداي', 'بل'], correct: 0 },
      { question: 'ما هو غاز الحياة؟', options: ['النيتروجين', 'الأكسجين', 'الهيدروجين', 'الكربون'], correct: 1 }
    ],
    400: [
      { question: 'ما هو الرمز الكيميائي للذهب؟', options: ['Go', 'Au', 'Ag', 'Gd'], correct: 1 },
      { question: 'ما هي وحدة قياس القوة؟', options: ['نيوتن', 'جول', 'واط', 'باسكال'], correct: 0 },
      { question: 'كم عدد كروموسومات الإنسان؟', options: ['42', '44', '46', '48'], correct: 2 }
    ],
    600: [
      { question: 'من وضع نظرية النسبية؟', options: ['نيوتن', 'أينشتاين', 'هوكينغ', 'تيسلا'], correct: 1 },
      { question: 'ما هو أصلب معدن في الطبيعة؟', options: ['الذهب', 'الألماس', 'البلاتين', 'التيتانيوم'], correct: 1 },
      { question: 'ما هي سرعة الضوء؟', options: ['200,000 كم/ث', '300,000 كم/ث', '400,000 كم/ث', '500,000 كم/ث'], correct: 1 }
    ]
  },

  // Sports
  sports: {
    200: [
      { question: 'كم عدد لاعبي كرة القدم في الفريق؟', options: ['10', '11', '12', '9'], correct: 1 },
      { question: 'كم دقيقة في شوط كرة القدم؟', options: ['40', '45', '50', '60'], correct: 1 },
      { question: 'في أي دولة استضافت كأس العالم 2022؟', options: ['الإمارات', 'السعودية', 'قطر', 'الكويت'], correct: 2 }
    ],
    400: [
      { question: 'من فاز بكأس العالم 2018؟', options: ['ألمانيا', 'البرازيل', 'فرنسا', 'كرواتيا'], correct: 2 },
      { question: 'كم مرة فازت البرازيل بكأس العالم؟', options: ['3', '4', '5', '6'], correct: 2 },
      { question: 'في أي رياضة يستخدم الهداف بكأس "الكرة الذهبية"؟', options: ['كرة القدم', 'كرة السلة', 'كرة اليد', 'التنس'], correct: 0 }
    ],
    600: [
      { question: 'من هو أول هداف في تاريخ كأس العالم؟', options: ['بيليه', 'لوسيان لورو', 'مارادونا', 'كرويف'], correct: 1 },
      { question: 'كم عدد ألعاب الأولمبياد الصيفي؟', options: ['28', '32', '36', '40'], correct: 1 },
      { question: 'في أي عام أقيمت أول دورة أولمبياد حديثة؟', options: ['1888', '1896', '1900', '1908'], correct: 1 }
    ]
  },

  // Art & Literature
  art: {
    200: [
      { question: 'من رسم لوحة الموناليزا؟', options: ['بيكاسو', 'دافنشي', 'فان جوخ', 'مايكل أنجلو'], correct: 1 },
      { question: 'من هو أمير الشعراء؟', options: ['أحمد شوقي', 'حافظ إبراهيم', 'المتنبي', 'نزار قباني'], correct: 0 },
      { question: 'من كتب رواية "أولاد حارتنا"؟', options: ['طه حسين', 'نجيب محفوظ', 'يوسف إدريس', 'العقاد'], correct: 1 }
    ],
    400: [
      { question: 'من كتب رواية البؤساء؟', options: ['شكسبير', 'فيكتور هوغو', 'ديكنز', 'دوستويفسكي'], correct: 1 },
      { question: 'من رسم لوحة "ليلة النجوم"؟', options: ['دافنشي', 'بيكاسو', 'فان جوخ', 'مايكل أنجلو'], correct: 2 },
      { question: 'من كتب مسرحية هاملت؟', options: ['شكسبير', 'موليير', 'برنارد شو', 'إبسن'], correct: 0 }
    ],
    600: [
      { question: 'من كتب رواية موسم الهجرة إلى الشمال؟', options: ['نجيب محفوظ', 'الطيب صالح', 'غسان كنفاني', 'جبران خليل جبران'], correct: 1 },
      { question: 'في أي عام نال نجيب محفوظ جائزة نوبل؟', options: ['1986', '1988', '1990', '1992'], correct: 1 },
      { question: 'من نحت تمثال "المفكر"؟', options: ['مايكل أنجلو', 'رودان', 'دونتيلو', 'بيرنيني'], correct: 1 }
    ]
  },

  // Technology
  tech: {
    200: [
      { question: 'من مؤسس شركة مايكروسوفت؟', options: ['ستيف جوبز', 'بيل جيتس', 'مارك زوكربيرغ', 'جيف بيزوس'], correct: 1 },
      { question: 'متى تأسست شركة جوجل؟', options: ['1996', '1998', '2000', '2002'], correct: 1 },
      { question: 'من مؤسس فيسبوك؟', options: ['بيل جيتس', 'إيلون ماسك', 'مارك زوكربيرغ', 'جاك دورسي'], correct: 2 }
    ],
    400: [
      { question: 'ما هي لغة البرمجة الأكثر استخداماً للويب؟', options: ['Python', 'Java', 'JavaScript', 'C++'], correct: 2 },
      { question: 'ما اختصار HTML؟', options: ['Hyper Text Markup Language', 'High Text Machine Language', 'Hyper Tool Multi Language', 'Home Tool Markup Language'], correct: 0 },
      { question: 'من ابتكر نظام التشغيل لينكس؟', options: ['ستيف جوبز', 'لينوس تورفالدز', 'بيل جيتس', 'ريتشارد ستالمان'], correct: 1 }
    ],
    600: [
      { question: 'في أي سنة تم اختراع الإنترنت؟', options: ['1965', '1969', '1975', '1983'], correct: 1 },
      { question: 'من اخترع نظام البريد الإلكتروني؟', options: ['راي توملينسون', 'تيم بيرنرز-لي', 'فينت سيرف', 'بول ألن'], correct: 0 },
      { question: 'ما هو أول هاتف ذكي في التاريخ؟', options: ['iPhone', 'IBM Simon', 'Nokia 9000', 'BlackBerry'], correct: 1 }
    ]
  },

  // Medicine
  medicine: {
    200: [
      { question: 'ما الذي يضخ الدم في الجسم؟', options: ['الرئة', 'القلب', 'الكبد', 'الكلى'], correct: 1 },
      { question: 'ما هو أكبر عضو في جسم الإنسان؟', options: ['الكبد', 'الجلد', 'القلب', 'الرئة'], correct: 1 },
      { question: 'كم عدد الحواس الأساسية للإنسان؟', options: ['4', '5', '6', '7'], correct: 1 }
    ],
    400: [
      { question: 'كم عدد عظام الإنسان البالغ؟', options: ['196', '206', '216', '226'], correct: 1 },
      { question: 'كم لتر دم في جسم الإنسان البالغ؟', options: ['3-4', '5-6', '7-8', '9-10'], correct: 1 },
      { question: 'كم عدد الأسنان لدى الإنسان البالغ؟', options: ['28', '32', '36', '40'], correct: 1 }
    ],
    600: [
      { question: 'من اكتشف البنسلين؟', options: ['ألكسندر فلمنغ', 'لويس باستير', 'إدوارد جينر', 'روبرت كوخ'], correct: 0 },
      { question: 'ما هو أصغر عظم في جسم الإنسان؟', options: ['عظم الفك', 'عظم الركاب', 'عظم الأنف', 'عظم الإصبع'], correct: 1 },
      { question: 'كم عدد ضربات قلب الإنسان في الدقيقة عادةً؟', options: ['50-60', '60-70', '70-80', '80-90'], correct: 2 }
    ]
  },

  // Movies
  movies: {
    200: [
      { question: 'من بطل فيلم Titanic؟', options: ['براد بيت', 'ليوناردو دي كابريو', 'توم كروز', 'جوني ديب'], correct: 1 },
      { question: 'كم عدد أجزاء سلسلة Avengers الرئيسية؟', options: ['3', '4', '5', '6'], correct: 1 },
      { question: 'من بطل أفلام Mission Impossible؟', options: ['براد بيت', 'توم كروز', 'كيانو ريفز', 'مات ديمون'], correct: 1 }
    ],
    400: [
      { question: 'من مخرج فيلم Inception؟', options: ['سبيلبرغ', 'نولان', 'تارانتينو', 'سكورسيزي'], correct: 1 },
      { question: 'في أي عام صدر فيلم The Matrix الأول؟', options: ['1997', '1998', '1999', '2000'], correct: 2 },
      { question: 'من بطل فيلم Forrest Gump؟', options: ['ليوناردو دي كابريو', 'توم هانكس', 'براد بيت', 'كيفن كوستنر'], correct: 1 }
    ],
    600: [
      { question: 'كم عدد جوائز الأوسكار التي حصل عليها فيلم Titanic؟', options: ['9', '10', '11', '12'], correct: 2 },
      { question: 'من مخرج سلسلة Lord of the Rings؟', options: ['بيتر جاكسون', 'جيمس كاميرون', 'ستيفن سبيلبرغ', 'كريستوفر نولان'], correct: 0 },
      { question: 'ما هو أعلى فيلم إيرادات في التاريخ؟', options: ['Avatar', 'Avengers Endgame', 'Avatar 2', 'Titanic'], correct: 0 }
    ]
  },

  // Music
  music: {
    200: [
      { question: 'من هي كوكب الشرق؟', options: ['فيروز', 'وردة', 'أم كلثوم', 'أسمهان'], correct: 2 },
      { question: 'كم نغمة موسيقية أساسية؟', options: ['5', '7', '8', '10'], correct: 1 },
      { question: 'كم وتر في الكمان؟', options: ['3', '4', '5', '6'], correct: 1 }
    ],
    400: [
      { question: 'كم عدد أوتار العود؟', options: ['5', '6', '11', '13'], correct: 2 },
      { question: 'من ملقب بـ "العندليب الأسمر"؟', options: ['عبدالحليم حافظ', 'محمد عبدالوهاب', 'فريد الأطرش', 'محمد فوزي'], correct: 0 },
      { question: 'من غنى أغنية "بسم الله ما شاء الله"؟', options: ['محمد عبده', 'طلال مداح', 'عبدالمجيد عبدالله', 'راشد الماجد'], correct: 0 }
    ],
    600: [
      { question: 'من ملحن السلام الوطني للسعودية؟', options: ['طارق عبدالحكيم', 'محمد عبده', 'طلال مداح', 'سراج عمر'], correct: 0 },
      { question: 'من هو ملحن الأغنية الوطنية "بلادي بلادي"؟', options: ['سيد درويش', 'محمد عبدالوهاب', 'بليغ حمدي', 'كمال الطويل'], correct: 0 },
      { question: 'في أي بلد ولد بيتهوفن؟', options: ['ألمانيا', 'النمسا', 'فرنسا', 'إيطاليا'], correct: 0 }
    ]
  },

  // Food - Image guessing questions
  food: {
    200: [
      { question: 'ما اسم هذا الطبق؟', options: ['البرغر', 'البيتزا', 'الباستا', 'التاكو'], correct: 1, imageKeyword: 'pizza italian' },
      { question: 'ما اسم هذا الطبق الياباني؟', options: ['الرامن', 'السوشي', 'التمبورا', 'الأودون'], correct: 1, imageKeyword: 'sushi platter' },
      { question: 'ما اسم هذه الحلوى؟', options: ['الكب كيك', 'الدونات', 'الكرواسون', 'الماكرون'], correct: 3, imageKeyword: 'macaron french' }
    ],
    400: [
      { question: 'ما اسم هذا المشروب؟', options: ['الكابتشينو', 'الإسبريسو', 'اللاتيه', 'الموكا'], correct: 2, imageKeyword: 'latte art coffee' },
      { question: 'ما هذا الطبق العربي؟', options: ['الكبسة', 'المنسف', 'المقلوبة', 'الفول'], correct: 0, imageKeyword: 'kabsa rice' },
      { question: 'ما هذا الطبق المكسيكي؟', options: ['التاكو', 'البوريتو', 'الكويساديا', 'الناتشوز'], correct: 0, imageKeyword: 'taco mexican' }
    ],
    600: [
      { question: 'ما هذا الطبق الإسباني المشهور؟', options: ['البايا', 'التاباس', 'الغازباتشو', 'التورتيا'], correct: 0, imageKeyword: 'paella spanish' },
      { question: 'ما هذه الفاكهة الاستوائية؟', options: ['التنين', 'الرامبوتان', 'المانجستين', 'الدوريان'], correct: 0, imageKeyword: 'dragon fruit' },
      { question: 'ما هذا التوابل الذهبي؟', options: ['الزعفران', 'الكركم', 'الكاري', 'الفلفل'], correct: 0, imageKeyword: 'saffron spice' }
    ]
  },

  // Cars
  cars: {
    200: [
      { question: 'من أي بلد سيارات فيراري؟', options: ['ألمانيا', 'إيطاليا', 'فرنسا', 'إسبانيا'], correct: 1 },
      { question: 'ما هو رمز سيارات BMW؟', options: ['أزرق وأبيض دائري', 'حصان', 'ثور', 'نجمة ثلاثية'], correct: 0 },
      { question: 'من أي بلد سيارات تويوتا؟', options: ['الصين', 'كوريا', 'اليابان', 'ألمانيا'], correct: 2 }
    ],
    400: [
      { question: 'ما هي أغلى سيارة في العالم؟', options: ['Bugatti', 'Rolls Royce', 'Ferrari', 'Lamborghini'], correct: 0 },
      { question: 'ما رمز سيارة فيراري؟', options: ['ثور', 'حصان', 'نمر', 'أسد'], correct: 1 },
      { question: 'في أي بلد تُصنع سيارات Volvo؟', options: ['النرويج', 'الدنمارك', 'السويد', 'فنلندا'], correct: 2 }
    ],
    600: [
      { question: 'من مؤسس شركة تيسلا؟', options: ['إيلون ماسك', 'مارتن إيبرهارد', 'جيف بيزوس', 'بيل غيتس'], correct: 1 },
      { question: 'في أي سنة تأسست شركة مرسيدس؟', options: ['1886', '1900', '1926', '1950'], correct: 2 },
      { question: 'ما هي أسرع سيارة إنتاج في العالم؟', options: ['Bugatti Chiron', 'Koenigsegg Jesko', 'Hennessey Venom', 'SSC Tuatara'], correct: 3 }
    ]
  },

  // Animals - Image guessing questions
  animals: {
    200: [
      { question: 'ما هذا الحيوان؟', options: ['الفهد', 'الأسد', 'النمر', 'الذئب'], correct: 0, imageKeyword: 'cheetah' },
      { question: 'ما هذا الحيوان؟', options: ['الفيل', 'الزرافة', 'الحصان', 'الجمل'], correct: 0, imageKeyword: 'elephant' }
    ],
    400: [
      { question: 'ما هذا الحيوان البحري؟', options: ['الدلفين', 'الحوت', 'القرش', 'الأخطبوط'], correct: 3, imageKeyword: 'octopus' },
      { question: 'ما هذا الطائر؟', options: ['النعامة', 'الصقر', 'البومة', 'النسر'], correct: 0, imageKeyword: 'ostrich' }
    ],
    600: [
      { question: 'ما هذا الحيوان النادر؟', options: ['الكوالا', 'الباندا', 'الكسلان', 'الأرمدلو'], correct: 1, imageKeyword: 'giant panda' },
      { question: 'ما هذه الحشرة؟', options: ['النحلة', 'الفراشة', 'الجراد', 'العنكبوت'], correct: 0, imageKeyword: 'honey bee macro' }
    ]
  },

  // Religion
  religion: {
    200: [
      { question: 'كم عدد أركان الإسلام؟', options: ['4', '5', '6', '7'], correct: 1 },
      { question: 'في أي شهر يصوم المسلمون؟', options: ['شعبان', 'رمضان', 'شوال', 'ذو الحجة'], correct: 1 },
      { question: 'كم عدد ركعات صلاة الفجر؟', options: ['2', '3', '4', '5'], correct: 0 }
    ],
    400: [
      { question: 'كم عدد أبواب الجنة؟', options: ['7', '8', '9', '10'], correct: 1 },
      { question: 'ما هي أول سورة نزلت من القرآن؟', options: ['الفاتحة', 'العلق', 'البقرة', 'المدثر'], correct: 1 },
      { question: 'كم عدد أنبياء الله المذكورين في القرآن؟', options: ['20', '25', '30', '35'], correct: 1 }
    ],
    600: [
      { question: 'كم عدد سور القرآن الكريم؟', options: ['110', '112', '114', '116'], correct: 2 },
      { question: 'ما هي أطول سورة في القرآن؟', options: ['البقرة', 'آل عمران', 'النساء', 'المائدة'], correct: 0 },
      { question: 'كم عدد آيات سورة الفاتحة؟', options: ['5', '6', '7', '8'], correct: 2 }
    ]
  },

  // Language
  language: {
    200: [
      { question: 'كم حرف في اللغة العربية؟', options: ['26', '27', '28', '29'], correct: 2 },
      { question: 'ما جمع كلمة (كتاب)؟', options: ['كتب', 'كتاتيب', 'مكاتيب', 'كتائب'], correct: 0 },
      { question: 'كم عدد حركات الإعراب الأساسية؟', options: ['2', '3', '4', '5'], correct: 1 }
    ],
    400: [
      { question: 'من هو أمير الشعراء؟', options: ['أحمد شوقي', 'حافظ إبراهيم', 'المتنبي', 'البحتري'], correct: 0 },
      { question: 'ما هو ضد كلمة (سعيد)؟', options: ['حزين', 'غاضب', 'خائف', 'متفائل'], correct: 0 },
      { question: 'كم نوع للجملة في العربية؟', options: ['1', '2', '3', '4'], correct: 1 }
    ],
    600: [
      { question: 'كم عدد بحور الشعر العربي؟', options: ['14', '15', '16', '17'], correct: 2 },
      { question: 'من واضع علم النحو؟', options: ['الخليل الفراهيدي', 'أبو الأسود الدؤلي', 'سيبويه', 'الكسائي'], correct: 1 },
      { question: 'من واضع علم العروض؟', options: ['الخليل الفراهيدي', 'أبو الأسود الدؤلي', 'سيبويه', 'الكسائي'], correct: 0 }
    ]
  },

  // Math
  math: {
    200: [
      { question: 'كم يساوي 7 × 8؟', options: ['54', '56', '58', '64'], correct: 1 },
      { question: 'كم زاوية في المثلث؟', options: ['2', '3', '4', '5'], correct: 1 },
      { question: 'كم يساوي 15 - 7؟', options: ['7', '8', '9', '10'], correct: 1 }
    ],
    400: [
      { question: 'ما هو الجذر التربيعي لـ 144؟', options: ['10', '11', '12', '13'], correct: 2 },
      { question: 'ما قيمة π (باي) تقريباً؟', options: ['3.12', '3.14', '3.16', '3.18'], correct: 1 },
      { question: 'كم يساوي 25% من 200؟', options: ['25', '50', '75', '100'], correct: 1 }
    ],
    600: [
      { question: 'كم زاوية في الشكل السباعي؟', options: ['6', '7', '8', '9'], correct: 1 },
      { question: 'ما مجموع زوايا المضلع الخماسي؟', options: ['360', '540', '720', '900'], correct: 1 },
      { question: 'كم عدد الأعداد الأولية بين 1 و 20؟', options: ['6', '7', '8', '9'], correct: 2 }
    ]
  },

  // Celebrities
  celebrities: {
    200: [
      { question: 'من هو ملك البوب؟', options: ['إلفيس بريسلي', 'مايكل جاكسون', 'مادونا', 'فريدي ميركوري'], correct: 1 },
      { question: 'من أغنى رجل في العالم 2024؟', options: ['بيل جيتس', 'إيلون ماسك', 'جيف بيزوس', 'وارن بافيت'], correct: 1 },
      { question: 'من بطل فيلم Iron Man؟', options: ['كريس إيفانز', 'روبرت داوني جونيور', 'كريس همسوورث', 'مارك روفالو'], correct: 1 }
    ],
    400: [
      { question: 'من بطل فيلم الباطنية؟', options: ['عمر الشريف', 'محمد رمضان', 'أحمد زكي', 'عادل إمام'], correct: 0 },
      { question: 'من أبدع شخصية ميكي ماوس؟', options: ['والت ديزني', 'تشارلز شولز', 'ستان لي', 'بيل واترسون'], correct: 0 },
      { question: 'من بطل فيلم الجزيرة؟', options: ['أحمد السقا', 'محمد رمضان', 'كريم عبدالعزيز', 'أحمد عز'], correct: 0 }
    ],
    600: [
      { question: 'من هي أول امرأة تفوز بجائزة نوبل؟', options: ['ماري كوري', 'ماريا منتسوري', 'إيلين ريتشاردز', 'ميلني بوتل'], correct: 0 },
      { question: 'من هو أول رئيس أمريكي؟', options: ['جورج واشنطن', 'أبراهام لينكولن', 'توماس جيفرسون', 'جون آدامز'], correct: 0 },
      { question: 'من رسم لوحة "الصرخة"؟', options: ['فان جوخ', 'بيكاسو', 'إدوارد مونك', 'سلفادور دالي'], correct: 2 }
    ]
  },

  // Space
  space: {
    200: [
      { question: 'ما هو الكوكب الأقرب للشمس؟', options: ['الزهرة', 'عطارد', 'الأرض', 'المريخ'], correct: 1 },
      { question: 'كم قمر للأرض؟', options: ['1', '2', '3', '0'], correct: 0 },
      { question: 'ما اسم مجرتنا؟', options: ['أندروميدا', 'درب التبانة', 'سومبريرو', 'العين السوداء'], correct: 1 }
    ],
    400: [
      { question: 'من أول إنسان وصل إلى القمر؟', options: ['نيل أرمسترونغ', 'يوري غاغارين', 'باز ألدرين', 'جون غلين'], correct: 0 },
      { question: 'ما هو أكبر كوكب في المجموعة الشمسية؟', options: ['زحل', 'المشتري', 'أورانوس', 'نبتون'], correct: 1 },
      { question: 'كم عدد الكواكب في مجموعتنا الشمسية؟', options: ['7', '8', '9', '10'], correct: 1 }
    ],
    600: [
      { question: 'كم سنة يستغرق ضوء الشمس ليصل للأرض؟', options: ['8 دقائق', '24 دقيقة', 'ساعة', 'يوم'], correct: 0 },
      { question: 'ما هو أبعد كوكب عن الشمس؟', options: ['زحل', 'أورانوس', 'نبتون', 'بلوتو'], correct: 2 },
      { question: 'كم درجة حرارة سطح الشمس؟', options: ['3000°C', '5500°C', '10000°C', '20000°C'], correct: 1 }
    ]
  },

  // Nature
  nature: {
    200: [
      { question: 'ما هذه الظاهرة الطبيعية؟', options: ['الشفق القطبي', 'البرق', 'قوس قزح', 'الإعصار'], correct: 0, imageKeyword: 'northern lights aurora' },
      { question: 'ما هذه الزهرة؟', options: ['التوليب', 'الورد', 'دوار الشمس', 'الياسمين'], correct: 2, imageKeyword: 'sunflower field' },
      { question: 'ما هذا المشهد الطبيعي؟', options: ['الصحراء', 'الغابة', 'الجبل', 'البحيرة'], correct: 0, imageKeyword: 'desert sand dunes' }
    ],
    400: [
      { question: 'ما هي أكبر صحراء في العالم؟', options: ['الصحراء الكبرى', 'صحراء جوبي', 'القطب الجنوبي', 'صحراء كالاهاري'], correct: 2 },
      { question: 'ما هي أعمق نقطة في المحيط؟', options: ['خندق ماريانا', 'البحر الميت', 'الحوض الأمازوني', 'بحر العرب'], correct: 0 },
      { question: 'ما هو أعلى شلال في العالم؟', options: ['نياغرا', 'فيكتوريا', 'أنخل', 'إغواسو'], correct: 2 }
    ],
    600: [
      { question: 'كم تستغرق دورة الأرض حول الشمس؟', options: ['365 يوم', '365.25 يوم', '366 يوم', '364 يوم'], correct: 1 },
      { question: 'ما هي أكبر بحيرة في العالم؟', options: ['بحيرة بايكال', 'بحر قزوين', 'البحيرات العظمى', 'بحيرة فيكتوريا'], correct: 1 },
      { question: 'ما هي أسرع رياح في العالم؟', options: ['الإعصار', 'التورنادو', 'العاصفة الرملية', 'العاصفة الترابية'], correct: 1 }
    ]
  },

  // Games
  games: {
    200: [
      { question: 'كم عدد القطع في الشطرنج للاعب الواحد؟', options: ['14', '16', '18', '20'], correct: 1 },
      { question: 'من شركة منتجة لـ PlayStation؟', options: ['Microsoft', 'Sony', 'Nintendo', 'Sega'], correct: 1 },
      { question: 'من بطل لعبة Mario؟', options: ['سباك', 'مهندس', 'ساحر', 'محارب'], correct: 0 }
    ],
    400: [
      { question: 'في لعبة Minecraft، ما اسم العدو الأخضر؟', options: ['Zombie', 'Creeper', 'Skeleton', 'Enderman'], correct: 1 },
      { question: 'من شركة منتجة لـ Xbox؟', options: ['Sony', 'Microsoft', 'Nintendo', 'Sega'], correct: 1 },
      { question: 'ما هي اللعبة الأكثر مبيعاً في التاريخ؟', options: ['Tetris', 'Minecraft', 'GTA V', 'Wii Sports'], correct: 1 }
    ],
    600: [
      { question: 'في أي سنة صدرت لعبة Pong؟', options: ['1970', '1972', '1974', '1976'], correct: 1 },
      { question: 'من ابتكر شخصية بوكيمون؟', options: ['شيغيرو ميياموتو', 'ساتوشي تاجيري', 'هاياو ميازاكي', 'هيدو كوجيما'], correct: 1 },
      { question: 'ما اسم أول لعبة فيديو في العالم؟', options: ['Pong', 'Tennis for Two', 'Spacewar!', 'Computer Space'], correct: 1 }
    ]
  },

  // Young Celebrities
  young_celebs: {
    200: [
      { question: 'من بطل سلسلة أفلام Harry Potter؟', options: ['دانيال رادكليف', 'روبرت داوني', 'توم هولاند', 'تيموثي شالاميه'], correct: 0 },
      { question: 'من بطلة سلسلة Stranger Things؟', options: ['نواه شنابب', 'ميلي بوبي براون', 'فين وولفهارد', 'وينونا رايدر'], correct: 1 }
    ],
    400: [
      { question: 'كم عمر بيلي إيليش عندما فازت بأول جرامي؟', options: ['16', '17', '18', '19'], correct: 1 },
      { question: 'من هي أصغر شخصية فازت بجائزة نوبل؟', options: ['ملالا يوسفزاي', 'غريتا ثونبرغ', 'أمندا غورمان', 'إيما واتسون'], correct: 0 }
    ],
    600: [
      { question: 'من أصغر لاعب سجل في كأس العالم؟', options: ['بيليه', 'مبابي', 'ميسي', 'رونالدو'], correct: 0 },
      { question: 'من هو أصغر بطل في كأس العالم لكرة القدم؟', options: ['بيليه', 'مبابي', 'ميسي', 'رونالدينيو'], correct: 0 }
    ]
  },

  // Influencers
  influencers: {
    200: [
      { question: 'من اليوتيوبر صاحب الرقم القياسي العالمي للبث المباشر؟', options: ['سعود القحطاني', 'AboFlah', 'محمد مقبل', 'الوسامي'], correct: 1 },
      { question: 'من مؤسس قناة AboFlah؟', options: ['حسن سليمان', 'سعود القحطاني', 'فهد العتيبي', 'محمد العنزي'], correct: 0 }
    ],
    400: [
      { question: 'من أكثر متابع على إنستغرام؟', options: ['كريستيانو رونالدو', 'ليو ميسي', 'كيليان مبابي', 'كيم كارداشيان'], correct: 0 },
      { question: 'كم متابع لكريستيانو رونالدو على إنستغرام تقريباً؟', options: ['400 مليون', '500 مليون', '600 مليون', '700 مليون'], correct: 2 }
    ],
    600: [
      { question: 'من أول مليار متابع على تيك توك؟', options: ['تشارلي داميليو', 'خابي لامي', 'بيلا بوارش', 'أديسون راي'], correct: 1 },
      { question: 'من مؤسس فيسبوك؟', options: ['بيل جيتس', 'إيلون ماسك', 'مارك زوكربيرغ', 'جاك دورسي'], correct: 2 }
    ]
  },

  // Celebrity Voice
  celeb_voice: {
    200: [
      { question: 'من هو أمير الغناء العربي؟', options: ['محمد عبده', 'كاظم الساهر', 'عمرو دياب', 'راشد الماجد'], correct: 0 },
      { question: 'من ملقب بالعندليب الأسمر؟', options: ['عبدالحليم حافظ', 'محمد منير', 'فريد الأطرش', 'محمد فوزي'], correct: 0 }
    ],
    400: [
      { question: 'من غنى أغنية "تملي معاك"؟', options: ['عمرو دياب', 'تامر حسني', 'محمد منير', 'حماقي'], correct: 0 },
      { question: 'من هي ملقبة بـ "الديفا"؟', options: ['أصالة نصري', 'إليسا', 'نانسي عجرم', 'هيفاء وهبي'], correct: 0 }
    ],
    600: [
      { question: 'في أي عام توفي عبدالحليم حافظ؟', options: ['1975', '1977', '1979', '1981'], correct: 1 },
      { question: 'من هو ملك الراب العربي؟', options: ['وجدي', 'حمدوش', 'مرواس', 'إيلي'], correct: 0 }
    ]
  },

  // Biography
  biography: {
    200: [
      { question: 'من مؤسس شركة آبل؟', options: ['ستيف جوبز', 'بيل غيتس', 'مارك زوكربيرغ', 'إيلون ماسك'], correct: 0 },
      { question: 'من مؤسس مايكروسوفت؟', options: ['ستيف جوبز', 'بيل غيتس', 'مارك زوكربيرغ', 'لاري بيج'], correct: 1 }
    ],
    400: [
      { question: 'من مؤسس شركة أمازون؟', options: ['جيف بيزوس', 'إيلون ماسك', 'لاري إليسون', 'مارك كوبان'], correct: 0 },
      { question: 'متى ولد إيلون ماسك؟', options: ['1969', '1971', '1973', '1975'], correct: 1 }
    ],
    600: [
      { question: 'من مؤسس شركة فيراري؟', options: ['إنزو فيراري', 'لامبورجيني', 'بوغاتي', 'بورشه'], correct: 0 },
      { question: 'من مؤسس شركة لامبورغيني؟', options: ['فيروتشيو لامبورغيني', 'إنزو فيراري', 'كارل بنز', 'هنري فورد'], correct: 0 }
    ]
  },

  // Memes
  memes: {
    200: [
      { question: 'ما اسم القطة الشهيرة في الميمز "Grumpy Cat"؟', options: ['Tardar Sauce', 'Whiskers', 'Mittens', 'Tom'], correct: 0 },
      { question: 'ما هو الميم الذي اشتهر بكلمة "Stonks"؟', options: ['Man with helmet', 'Drake', 'Doge', 'Pepe'], correct: 0 }
    ],
    400: [
      { question: 'من أصل أي بلد ميم "Hide the Pain Harold"؟', options: ['ألمانيا', 'المجر', 'بولندا', 'روسيا'], correct: 1 },
      { question: 'ما اسم الكلب في ميم Doge؟', options: ['كابوسو', 'شيبا', 'هاتشي', 'كوكورو'], correct: 0 }
    ],
    600: [
      { question: 'من أنشأ شخصية Pepe the Frog؟', options: ['مات فيوري', 'تشاك جونز', 'والت ديزني', 'كريس سيمز'], correct: 0 },
      { question: 'في أي عام انتشر ميم Distracted Boyfriend؟', options: ['2015', '2016', '2017', '2018'], correct: 2 }
    ]
  },

  // AI
  ai: {
    200: [
      { question: 'ما هو ChatGPT؟', options: ['برنامج محادثة AI', 'لعبة', 'متصفح', 'نظام تشغيل'], correct: 0 },
      { question: 'من طور ChatGPT؟', options: ['OpenAI', 'Google', 'Microsoft', 'Meta'], correct: 0 }
    ],
    400: [
      { question: 'ما اسم نظام AI من Google؟', options: ['Bard / Gemini', 'Watson', 'Cortana', 'Siri'], correct: 0 },
      { question: 'ما اسم AI من شركة Anthropic؟', options: ['Claude', 'GPT', 'Bard', 'Copilot'], correct: 0 }
    ],
    600: [
      { question: 'في أي عام أُسست OpenAI؟', options: ['2013', '2015', '2017', '2019'], correct: 1 },
      { question: 'من مؤسس OpenAI؟', options: ['سام ألتمان وإيلون ماسك', 'بيل غيتس', 'مارك زوكربيرغ', 'جيف بيزوس'], correct: 0 }
    ]
  },

  // Watches
  watches: {
    200: [
      { question: 'من أي بلد ساعات Rolex؟', options: ['سويسرا', 'فرنسا', 'ألمانيا', 'إيطاليا'], correct: 0 },
      { question: 'ما هي أشهر ماركة ساعات فاخرة؟', options: ['Rolex', 'Casio', 'Timex', 'Seiko'], correct: 0 }
    ],
    400: [
      { question: 'من أي بلد ساعات Patek Philippe؟', options: ['سويسرا', 'فرنسا', 'ألمانيا', 'اليابان'], correct: 0 },
      { question: 'ما هي أغلى ماركة ساعات في العالم؟', options: ['Patek Philippe', 'Rolex', 'Omega', 'Cartier'], correct: 0 }
    ],
    600: [
      { question: 'في أي عام تأسست شركة Rolex؟', options: ['1895', '1905', '1915', '1925'], correct: 1 },
      { question: 'من مؤسس شركة Rolex؟', options: ['هانز ويلسدورف', 'لويس كارتييه', 'فلورنتين أرياس', 'جوزيف بولوفا'], correct: 0 }
    ]
  },

  // Global Perfumes
  perfumes_global: {
    200: [
      { question: 'من أقدم بيوت العطور الفرنسية؟', options: ['Chanel', 'Dior', 'Guerlain', 'Tom Ford'], correct: 2 },
      { question: 'ما هو عطر Chanel No. 5؟', options: ['عطر نسائي شهير', 'عطر رجالي', 'مزيل عرق', 'كولونيا'], correct: 0 }
    ],
    400: [
      { question: 'من أنشأ عطر Chanel No. 5؟', options: ['كوكو شانيل', 'كريستيان ديور', 'إيف سان لوران', 'جورجيو أرماني'], correct: 0 },
      { question: 'في أي بلد تأسست Chanel؟', options: ['فرنسا', 'إيطاليا', 'إسبانيا', 'أمريكا'], correct: 0 }
    ],
    600: [
      { question: 'في أي عام صدر عطر Chanel No. 5؟', options: ['1911', '1921', '1931', '1941'], correct: 1 },
      { question: 'عطر "Aventus" الشهير من أي ماركة؟', options: ['Mont Blanc', 'Tom Ford', 'Creed', 'Versace'], correct: 2 }
    ]
  },

  // Arabic Perfumes
  perfumes_arabic: {
    200: [
      { question: 'ما المكون الأغلى ثمناً في العطور العربية؟', options: ['ماء الورد', 'العود', 'الياسمين', 'الصندل'], correct: 1 },
      { question: 'ما هو العود؟', options: ['نوع من الخشب العطري', 'زهرة', 'صابون', 'فاكهة'], correct: 0 }
    ],
    400: [
      { question: 'من أقدم بيوت العطور العربية؟', options: ['عبدالصمد القرشي', 'العربية للعود', 'أرابيان عود', 'أجمل'], correct: 0 },
      { question: 'من أي بلد يأتي أفضل عود في العالم؟', options: ['الهند', 'كمبوديا', 'إندونيسيا', 'ماليزيا'], correct: 1 }
    ],
    600: [
      { question: 'ما المكونان الأساسيان للعطور العربية التقليدية؟', options: ['عود ومسك', 'الياسمين والورد', 'الصندل والعنبر', 'القرنفل والقرفة'], correct: 0 },
      { question: 'من أي شجرة يستخرج العود؟', options: ['Aquilaria', 'الصنوبر', 'الأرز', 'الزيتون'], correct: 0 }
    ]
  },

  // Logos
  logos: {
    200: [
      { question: 'ما هو لون شعار كوكاكولا؟', options: ['أحمر وأبيض', 'أزرق', 'أخضر', 'أسود'], correct: 0 },
      { question: 'ما هو رمز نايكي؟', options: ['Swoosh', 'النجمة', 'الدائرة', 'المثلث'], correct: 0 }
    ],
    400: [
      { question: 'ما اسم شعار آبل؟', options: ['التفاحة المعضوضة', 'النجمة', 'الدائرة', 'الرأس'], correct: 0 },
      { question: 'من صمم شعار شركة Apple؟', options: ['روب جانوف', 'بول راند', 'ستيف جوبز', 'ميلتون غليزر'], correct: 0 }
    ],
    600: [
      { question: 'كم لون في شعار Google؟', options: ['3', '4', '5', '6'], correct: 1 },
      { question: 'في أي عام صُمم شعار Nike؟', options: ['1971', '1981', '1991', '2001'], correct: 0 }
    ]
  },

  // Supermarket
  supermarket: {
    200: [
      { question: 'من أكبر سلسلة سوبرماركت محلية في السعودية؟', options: ['كارفور', 'لولو', 'بنده', 'العثيم'], correct: 3 },
      { question: 'من أي بلد سلسلة كارفور؟', options: ['فرنسا', 'إيطاليا', 'ألمانيا', 'أمريكا'], correct: 0 }
    ],
    400: [
      { question: 'في أي بلد تأسست سلسلة Walmart؟', options: ['أمريكا', 'بريطانيا', 'فرنسا', 'ألمانيا'], correct: 0 },
      { question: 'من مؤسس Walmart؟', options: ['سام والتون', 'جيف بيزوس', 'بيل غيتس', 'هنري فورد'], correct: 0 }
    ],
    600: [
      { question: 'في أي عام تأسست كارفور؟', options: ['1959', '1969', '1979', '1989'], correct: 0 },
      { question: 'ما هي أكبر سلسلة سوبرماركت في العالم؟', options: ['Walmart', 'Carrefour', 'Tesco', 'Costco'], correct: 0 }
    ]
  },

  // Dentistry
  dentistry: {
    200: [
      { question: 'كم سن للإنسان البالغ؟', options: ['28', '32', '36', '40'], correct: 1 },
      { question: 'متى تبدأ أسنان الطفل بالظهور؟', options: ['3 أشهر', '6 أشهر', '9 أشهر', 'سنة'], correct: 1 }
    ],
    400: [
      { question: 'ما هي الطبقة الخارجية للأسنان؟', options: ['المينا', 'العاج', 'اللب', 'الأسمنت'], correct: 0 },
      { question: 'ما هو أصلب جزء في جسم الإنسان؟', options: ['العظام', 'مينا الأسنان', 'الأظافر', 'الجلد'], correct: 1 }
    ],
    600: [
      { question: 'كم عدد ضروس العقل عادةً؟', options: ['2', '3', '4', '5'], correct: 2 },
      { question: 'كم نوع للأسنان عند الإنسان؟', options: ['2', '3', '4', '5'], correct: 2 }
    ]
  },

  // Falcons
  falcons: {
    200: [
      { question: 'ما هو أسرع طائر في العالم؟', options: ['الصقر الشاهين', 'النسر', 'البازي', 'العقاب'], correct: 0 },
      { question: 'كم تبلغ سرعة الصقر الشاهين عند الانقضاض؟', options: ['200 كم/س', '300 كم/س', '400 كم/س', '500 كم/س'], correct: 1 }
    ],
    400: [
      { question: 'ما هو غذاء الصقور الرئيسي؟', options: ['الطيور الصغيرة', 'الأسماك', 'الثمار', 'الحشرات'], correct: 0 },
      { question: 'كم سنة يعيش الصقر تقريباً؟', options: ['10', '15', '20', '25'], correct: 1 }
    ],
    600: [
      { question: 'في أي دولة تأسس النادي الدولي للصقور؟', options: ['الإمارات', 'السعودية', 'قطر', 'الكويت'], correct: 0 },
      { question: 'من أي عائلة من الطيور الصقر؟', options: ['Falconidae', 'Accipitridae', 'Strigidae', 'Pandionidae'], correct: 0 }
    ]
  },

  // Poetry
  poetry: {
    200: [
      { question: 'من هو أمير الشعراء؟', options: ['أحمد شوقي', 'حافظ إبراهيم', 'المتنبي', 'البحتري'], correct: 0 },
      { question: 'من أشهر شاعر للرسول ﷺ؟', options: ['كعب بن مالك', 'حسان بن ثابت', 'عبدالله بن رواحة', 'عمر بن أبي ربيعة'], correct: 1 }
    ],
    400: [
      { question: 'من هو شاعر الجاهلية الأشهر؟', options: ['امرؤ القيس', 'عنترة بن شداد', 'الخنساء', 'النابغة'], correct: 0 },
      { question: 'من قال "الخيل والليل والبيداء تعرفني"؟', options: ['المتنبي', 'أبو تمام', 'البحتري', 'أبو نواس'], correct: 0 }
    ],
    600: [
      { question: 'كم بحر في الشعر العربي؟', options: ['14', '15', '16', '17'], correct: 2 },
      { question: 'من واضع علم العروض؟', options: ['الخليل الفراهيدي', 'سيبويه', 'الكسائي', 'الأخفش'], correct: 0 }
    ]
  }
};
