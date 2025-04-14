// Translations dictionary
const translations = {
    'zh-CN': { // Chinese (Simplified)
        // Common elements
        'siteName': '解忧杂货铺',
        'siteDescription': '一个温暖的心灵港湾',
        'pastQuestions': '过往问题',
        'pastResponses': '过往回应',
        'returnHome': '返回首页',
        'helpOthers': '帮助他人',
        'continueHelping': '继续帮助他人',
        'copyright': '© 2024 解忧杂货铺 - 一个温暖的心灵港湾',

        // Home page
        'homeTitle': '在这里，你的故事有人倾听',
        'homeSubtitle': '匿名、安全、温暖的社区',
        'confessCardTitle': '我有话想说',
        'confessCardDesc': '在这里安全地分享你的困扰，收获温暖回应',
        'startConfession': '开始倾诉',
        'helpCardTitle': '我想帮助别人',
        'helpCardDesc': '给予他人温暖的建议，成为某人的光',
        'goHelp': '去帮助他人',

        // Confession page
        'confessionTitle': '向杂货铺老板倾诉',
        'confessionSubtitle': '在这里分享你的困扰，收到回复时将通知你',
        'confessionPlaceholder': '写下你的心事、困惑或者需要的帮助...',
        'addTags': '添加标签（可选）：',
        'privacySettings': '隐私设置：',
        'publicQuestion': '公开提问 (可被大家回答)',
        'privateQuestion': '私密提问 (仅管理员可见)',
        'emailNotify': '有回复时通过邮件通知我',
        'emailPlaceholder': '请输入你的邮箱',
        'send': '发送',
        'enterThoughts': '请先写下你的心事。',
        'enterEmail': '请填写你的邮箱地址以接收通知。',

        // Tags
        'tagPressure': '压力',
        'tagAnxiety': '焦虑',
        'tagInsomnia': '失眠',
        'tagRelationship': '感情',
        'tagWork': '工作',
        'tagStudy': '学业',
        'tagLife': '生活',
        'tagThoughts': '心事',

        // Confession success page
        'thankYouTitle': '感谢你的分享',
        'thankYouSubtitle': '你的心声已经被记录，我们会尽快回应',
        'yourAccessCode': '你的访问码',
        'saveAccessCode': '请保存这个访问码，以便稍后查看回复',
        'yourAnonymousId': '你的匿名ID: #',
        'justPosted': '刚刚发布',
        'notifyMessage': '我们将在有回复时通知你',
        'whatHappensNext': '接下来会发生什么？',
        'communityWillSee': '我们的社区成员将会看到你的问题并提供帮助',
        'replyIn24h': '通常在24小时内你会收到回复',
        'emailNotification': '如果你提供了邮箱，我们会在有回复时通知你',
        'checkWithCode': '你可以使用访问码通过"过往问题"查看你的问题状态和回复',
        'copied': '已复制!',

        // Help page
        'helpTitle': '帮助一个陌生人',
        'helpSubtitle': '这些问题来自真正需要支持的人，请你用温柔的心去回答',
        'anonymousAsker': '匿名提问者 #',
        'hoursAgo': '小时前',
        'replyPlaceholder': '写下你的建议和鼓励...',
        'sendReply': '送出回应',
        'todayHelped': '今日已帮助',
        'totalHelped': '累计帮助',
        'receivedThanks': '收到感谢',
        'people': '人',
        'times': '次',
        'enterSuggestion': '请先写下你的建议和鼓励。',
        'replyThanks': '感谢你的回应！你的温暖将传递给需要帮助的人。',

        // Helper success page
        'thankHelperTitle': '感谢你的温暖回应',
        'thankHelperSubtitle': '你的建议和鼓励将带给对方力量和希望',
        'helperStats': '你的帮助统计',
        'yourReply': '你的回应:',
        'kindnessMatters': '你的善举很重要',
        'replyDelivered': '你的回应已经传递给了需要帮助的人',
        'mightThankYou': '对方收到后可能会给你发送感谢',
        'checkPastResponses': '你可以在"过往回应"中查看你的所有回应和对方的反馈',
        'everyReplyMatters': '每一个温暖的回应都可能改变一个人的处境',

        // Language selector
        'language': '语言',
        'chinese': '中文',
        'english': 'English',
        'spanish': 'Español',

        // Index page
        'welcomeTitle': '欢迎来到解忧杂货铺',
        'welcomeSubtitle': '在这里，你可以倾诉烦恼，也可以为他人解忧',
        'confessOption': '倾诉烦恼',
        'confessDescription': '在这里写下你的困扰，或许会有陌生人为你解答',
        'helpOption': '帮助他人',
        'helpDescription': '聆听他人的烦恼，用你的温暖去安慰一个陌生人',

        // Confession form
        'confessTitle': '倾诉你的烦恼',
        'confessSubtitle': '写下你的困扰，我们会为你寻找能给予建议的人',
        'thoughtsLabel': '你的困扰',
        'thoughtsPlaceholder': '写下让你烦恼的事情...',
        'emailLabel': '联系邮箱（可选）',
        'emailPlaceholder': '留下邮箱以便收到回复',
        'categoryLabel': '分类',
        'categoryWork': '工作',
        'categoryRelationship': '感情',
        'categoryFamily': '家庭',
        'categoryMental': '心理',
        'categoryOther': '其他',
        'submitThoughts': '提交',

        // Success pages
        'successTitle': '你的烦恼已被倾听',
        'successSubtitle': '我们已经收到了你的烦恼，会尽快为你寻找能给予建议的人',
        'accessCodeTitle': '你的访问码',
        'accessCodeDesc': '使用此访问码可以查看回复状态',
        'notificationTitle': '通知设置',
        'notificationDesc': '当有人回复你的烦恼时，我们会通知你',
        'backToHome': '返回首页',
        'helpSuccessTitle': '感谢你的温暖回复',
        'helpSuccessSubtitle': '你的回应会带给一个陌生人极大的安慰',
        'helpCountTitle': '你已经帮助了',
        'peopleCount': '个陌生人',
        'continueHelp': '继续帮助他人',

        // Messages
        'pleaseEnterThoughts': '请输入你的烦恼内容',
        'pleaseEnterEmail': '请输入有效的电子邮件地址',
        'thankYouMessage': '谢谢你的分享',
        'accessCodeMessage': '访问码',
        'emailSubmittedMessage': '已提交，我们会通过邮件通知你',
        'pleaseEnterReply': '请输入你的回复',
        'thankYouForHelping': '感谢你的帮助'
    },
    'en': { // English
        // Common elements
        'siteName': 'Worry-Free Store',
        'siteDescription': 'A warm harbor for your soul',
        'pastQuestions': 'Past Questions',
        'pastResponses': 'Past Responses',
        'returnHome': 'Return Home',
        'helpOthers': 'Help Others',
        'continueHelping': 'Continue Helping',
        'copyright': '© 2024 Worry-Free Store - A warm harbor for your soul',

        // Home page
        'homeTitle': 'Here, your story will be heard',
        'homeSubtitle': 'Anonymous, safe, and warm community',
        'confessCardTitle': 'I want to share',
        'confessCardDesc': 'Share your concerns safely here and receive warm responses',
        'startConfession': 'Start Sharing',
        'helpCardTitle': 'I want to help others',
        'helpCardDesc': 'Give warm advice to others, be someone\'s light',
        'goHelp': 'Go Help Others',

        // Confession page
        'confessionTitle': 'Share with the Shopkeeper',
        'confessionSubtitle': 'Share your concerns here, we\'ll notify you when you receive replies',
        'confessionPlaceholder': 'Write down your thoughts, confusion, or help needed...',
        'addTags': 'Add tags (optional):',
        'privacySettings': 'Privacy settings:',
        'publicQuestion': 'Public question (can be answered by everyone)',
        'privateQuestion': 'Private question (admin only)',
        'emailNotify': 'Notify me by email when there\'s a reply',
        'emailPlaceholder': 'Please enter your email',
        'send': 'Send',
        'enterThoughts': 'Please write down your thoughts first.',
        'enterEmail': 'Please fill in your email to receive notifications.',

        // Tags
        'tagPressure': 'Pressure',
        'tagAnxiety': 'Anxiety',
        'tagInsomnia': 'Insomnia',
        'tagRelationship': 'Relationship',
        'tagWork': 'Work',
        'tagStudy': 'Study',
        'tagLife': 'Life',
        'tagThoughts': 'Thoughts',

        // Confession success page
        'thankYouTitle': 'Thank you for sharing',
        'thankYouSubtitle': 'Your message has been recorded, we\'ll respond as soon as possible',
        'yourAccessCode': 'Your Access Code',
        'saveAccessCode': 'Please save this access code to check for replies later',
        'yourAnonymousId': 'Your Anonymous ID: #',
        'justPosted': 'Just posted',
        'notifyMessage': 'We\'ll notify you when there are replies',
        'whatHappensNext': 'What happens next?',
        'communityWillSee': 'Our community members will see your question and provide help',
        'replyIn24h': 'You\'ll usually receive a reply within 24 hours',
        'emailNotification': 'If you provided an email, we\'ll notify you when there\'s a reply',
        'checkWithCode': 'You can use the access code to check your question status and replies via "Past Questions"',
        'copied': 'Copied!',

        // Help page
        'helpTitle': 'Help a Stranger',
        'helpSubtitle': 'These questions come from people who truly need support, please answer with a gentle heart',
        'anonymousAsker': 'Anonymous Asker #',
        'hoursAgo': 'hours ago',
        'replyPlaceholder': 'Write your advice and encouragement...',
        'sendReply': 'Send Response',
        'todayHelped': 'Helped Today',
        'totalHelped': 'Total Helped',
        'receivedThanks': 'Received Thanks',
        'people': '',
        'times': 'times',
        'enterSuggestion': 'Please write your advice and encouragement first.',
        'replyThanks': 'Thank you for your response! Your warmth will be passed on to those who need help.',

        // Helper success page
        'thankHelperTitle': 'Thank you for your warm response',
        'thankHelperSubtitle': 'Your advice and encouragement will bring strength and hope to others',
        'helperStats': 'Your Help Statistics',
        'yourReply': 'Your Response:',
        'kindnessMatters': 'Your kindness matters',
        'replyDelivered': 'Your response has been delivered to the person who needs help',
        'mightThankYou': 'They may send you thanks after receiving it',
        'checkPastResponses': 'You can check all your responses and feedback in "Past Responses"',
        'everyReplyMatters': 'Every warm response may change someone\'s situation',

        // Language selector
        'language': 'Language',
        'chinese': '中文',
        'english': 'English',
        'spanish': 'Español',

        // Index page
        'welcomeTitle': 'Welcome to Problem Solver Shop',
        'welcomeSubtitle': 'Here, you can confess your troubles or help others with theirs',
        'confessOption': 'Confess Troubles',
        'confessDescription': 'Write down your worries here, and perhaps a stranger will answer them for you',
        'helpOption': 'Help Others',
        'helpDescription': 'Listen to others\' troubles and comfort a stranger with your warmth',

        // Confession form
        'confessTitle': 'Confess Your Troubles',
        'confessSubtitle': 'Write down your worries, and we\'ll find someone who can give you advice',
        'thoughtsLabel': 'Your Troubles',
        'thoughtsPlaceholder': 'Write down what\'s bothering you...',
        'emailLabel': 'Contact Email (Optional)',
        'emailPlaceholder': 'Leave your email to receive replies',
        'categoryLabel': 'Category',
        'categoryWork': 'Work',
        'categoryRelationship': 'Relationship',
        'categoryFamily': 'Family',
        'categoryMental': 'Mental Health',
        'categoryOther': 'Other',
        'submitThoughts': 'Submit',

        // Success pages
        'successTitle': 'Your Troubles Have Been Heard',
        'successSubtitle': 'We have received your troubles and will find someone to give you advice as soon as possible',
        'accessCodeTitle': 'Your Access Code',
        'accessCodeDesc': 'Use this access code to check reply status',
        'notificationTitle': 'Notification Settings',
        'notificationDesc': 'We will notify you when someone responds to your troubles',
        'backToHome': 'Back to Home',
        'helpSuccessTitle': 'Thank You For Your Warm Reply',
        'helpSuccessSubtitle': 'Your response will bring great comfort to a stranger',
        'helpCountTitle': 'You have helped',
        'peopleCount': 'strangers',
        'continueHelp': 'Continue to help others',

        // Messages
        'pleaseEnterThoughts': 'Please enter your troubles',
        'pleaseEnterEmail': 'Please enter a valid email address',
        'thankYouMessage': 'Thank you for sharing',
        'accessCodeMessage': 'Access Code',
        'emailSubmittedMessage': 'submitted, we will notify you by email',
        'pleaseEnterReply': 'Please enter your reply',
        'thankYouForHelping': 'Thank you for your help'
    },
    'es': { // Spanish
        // Common elements
        'siteName': 'Tienda Sin Preocupaciones',
        'siteDescription': 'Un cálido refugio para tu alma',
        'pastQuestions': 'Preguntas Pasadas',
        'pastResponses': 'Respuestas Pasadas',
        'returnHome': 'Volver al Inicio',
        'helpOthers': 'Ayudar a Otros',
        'continueHelping': 'Continuar Ayudando',
        'copyright': '© 2024 Tienda Sin Preocupaciones - Un cálido refugio para tu alma',

        // Home page
        'homeTitle': 'Aquí, tu historia será escuchada',
        'homeSubtitle': 'Comunidad anónima, segura y cálida',
        'confessCardTitle': 'Quiero compartir',
        'confessCardDesc': 'Comparte tus preocupaciones de manera segura y recibe respuestas cálidas',
        'startConfession': 'Comenzar a Compartir',
        'helpCardTitle': 'Quiero ayudar a otros',
        'helpCardDesc': 'Da consejos cálidos a otros, sé la luz de alguien',
        'goHelp': 'Ir a Ayudar',

        // Confession page
        'confessionTitle': 'Comparte con el Tendero',
        'confessionSubtitle': 'Comparte tus preocupaciones aquí, te notificaremos cuando recibas respuestas',
        'confessionPlaceholder': 'Escribe tus pensamientos, confusiones o ayuda que necesitas...',
        'addTags': 'Añadir etiquetas (opcional):',
        'privacySettings': 'Configuración de privacidad:',
        'publicQuestion': 'Pregunta pública (puede ser respondida por todos)',
        'privateQuestion': 'Pregunta privada (solo administrador)',
        'emailNotify': 'Notificarme por correo electrónico cuando haya una respuesta',
        'emailPlaceholder': 'Por favor ingresa tu correo electrónico',
        'send': 'Enviar',
        'enterThoughts': 'Por favor escribe tus pensamientos primero.',
        'enterEmail': 'Por favor ingresa tu correo electrónico para recibir notificaciones.',

        // Tags
        'tagPressure': 'Presión',
        'tagAnxiety': 'Ansiedad',
        'tagInsomnia': 'Insomnio',
        'tagRelationship': 'Relación',
        'tagWork': 'Trabajo',
        'tagStudy': 'Estudio',
        'tagLife': 'Vida',
        'tagThoughts': 'Pensamientos',

        // Confession success page
        'thankYouTitle': 'Gracias por compartir',
        'thankYouSubtitle': 'Tu mensaje ha sido registrado, responderemos lo antes posible',
        'yourAccessCode': 'Tu Código de Acceso',
        'saveAccessCode': 'Por favor guarda este código de acceso para verificar respuestas más tarde',
        'yourAnonymousId': 'Tu ID Anónimo: #',
        'justPosted': 'Recién publicado',
        'notifyMessage': 'Te notificaremos cuando haya respuestas',
        'whatHappensNext': '¿Qué sucede después?',
        'communityWillSee': 'Los miembros de nuestra comunidad verán tu pregunta y brindarán ayuda',
        'replyIn24h': 'Normalmente recibirás una respuesta dentro de 24 horas',
        'emailNotification': 'Si proporcionaste un correo electrónico, te notificaremos cuando haya una respuesta',
        'checkWithCode': 'Puedes usar el código de acceso para verificar el estado de tu pregunta y las respuestas a través de "Preguntas Pasadas"',
        'copied': '¡Copiado!',

        // Help page
        'helpTitle': 'Ayudar a un Extraño',
        'helpSubtitle': 'Estas preguntas provienen de personas que realmente necesitan apoyo, por favor responde con un corazón amable',
        'anonymousAsker': 'Preguntador Anónimo #',
        'hoursAgo': 'horas atrás',
        'replyPlaceholder': 'Escribe tu consejo y palabras de ánimo...',
        'sendReply': 'Enviar Respuesta',
        'todayHelped': 'Ayudados Hoy',
        'totalHelped': 'Total Ayudados',
        'receivedThanks': 'Agradecimientos Recibidos',
        'people': '',
        'times': 'veces',
        'enterSuggestion': 'Por favor escribe tu consejo y palabras de ánimo primero.',
        'replyThanks': '¡Gracias por tu respuesta! Tu calidez será transmitida a quienes necesitan ayuda.',

        // Helper success page
        'thankHelperTitle': 'Gracias por tu cálida respuesta',
        'thankHelperSubtitle': 'Tu consejo y aliento brindarán fuerza y esperanza a otros',
        'helperStats': 'Tus Estadísticas de Ayuda',
        'yourReply': 'Tu Respuesta:',
        'kindnessMatters': 'Tu amabilidad importa',
        'replyDelivered': 'Tu respuesta ha sido entregada a la persona que necesita ayuda',
        'mightThankYou': 'Pueden enviarte agradecimientos después de recibirla',
        'checkPastResponses': 'Puedes verificar todas tus respuestas y comentarios en "Respuestas Pasadas"',
        'everyReplyMatters': 'Cada respuesta cálida puede cambiar la situación de alguien',

        // Language selector
        'language': 'Idioma',
        'chinese': '中文',
        'english': 'English',
        'spanish': 'Español',

        // Index page
        'welcomeTitle': 'Bienvenido a la Tienda de Resolución de Problemas',
        'welcomeSubtitle': 'Aquí, puedes confesar tus problemas o ayudar a otros con los suyos',
        'confessOption': 'Confesar Problemas',
        'confessDescription': 'Escribe tus preocupaciones aquí, y quizás un extraño te responda',
        'helpOption': 'Ayudar a Otros',
        'helpDescription': 'Escucha los problemas de otros y consuela a un extraño con tu calidez',

        // Confession form
        'confessTitle': 'Confiesa Tus Problemas',
        'confessSubtitle': 'Escribe tus preocupaciones y encontraremos a alguien que pueda darte consejos',
        'thoughtsLabel': 'Tus Problemas',
        'thoughtsPlaceholder': 'Escribe lo que te está molestando...',
        'emailLabel': 'Correo Electrónico de Contacto (Opcional)',
        'emailPlaceholder': 'Deja tu correo para recibir respuestas',
        'categoryLabel': 'Categoría',
        'categoryWork': 'Trabajo',
        'categoryRelationship': 'Relación',
        'categoryFamily': 'Familia',
        'categoryMental': 'Salud Mental',
        'categoryOther': 'Otro',
        'submitThoughts': 'Enviar',

        // Success pages
        'successTitle': 'Tus Problemas Han Sido Escuchados',
        'successSubtitle': 'Hemos recibido tus problemas y encontraremos a alguien que pueda darte consejos lo antes posible',
        'accessCodeTitle': 'Tu Código de Acceso',
        'accessCodeDesc': 'Usa este código para verificar el estado de las respuestas',
        'notificationTitle': 'Configuración de Notificaciones',
        'notificationDesc': 'Te notificaremos cuando alguien responda a tus problemas',
        'backToHome': 'Volver al Inicio',
        'helpSuccessTitle': 'Gracias Por Tu Cálida Respuesta',
        'helpSuccessSubtitle': 'Tu respuesta brindará un gran consuelo a un extraño',
        'helpCountTitle': 'Has ayudado a',
        'peopleCount': 'extraños',
        'continueHelp': 'Continuar ayudando a otros',

        // Messages
        'pleaseEnterThoughts': 'Por favor ingresa tus problemas',
        'pleaseEnterEmail': 'Por favor ingresa una dirección de correo electrónico válida',
        'thankYouMessage': 'Gracias por compartir',
        'accessCodeMessage': 'Código de Acceso',
        'emailSubmittedMessage': 'enviado, te notificaremos por correo electrónico',
        'pleaseEnterReply': 'Por favor ingresa tu respuesta',
        'thankYouForHelping': 'Gracias por tu ayuda'
    }
};

// Default language
let currentLanguage = 'zh-CN';

// Initialize i18n
function initI18n() {
    // Check if language is stored in localStorage
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage && translations[storedLanguage]) {
        currentLanguage = storedLanguage;
    }
    
    // Add language selector to all pages
    addLanguageSelector();
    
    // Translate the page
    translatePage();
}

// Add language selector to the page
function addLanguageSelector() {
    const navRight = document.querySelector('.nav-right');
    if (!navRight) return;
    
    // Create language dropdown
    const languageContainer = document.createElement('div');
    languageContainer.className = 'language-selector';
    
    languageContainer.innerHTML = `
        <button class="language-btn">
            <i class="fas fa-globe"></i>
            <span class="lang-text" data-i18n="language">语言</span>
        </button>
        <div class="language-dropdown">
            <a href="#" data-lang="zh-CN" class="language-option ${currentLanguage === 'zh-CN' ? 'active' : ''}">
                <span data-i18n="chinese">中文</span>
            </a>
            <a href="#" data-lang="en" class="language-option ${currentLanguage === 'en' ? 'active' : ''}">
                <span data-i18n="english">English</span>
            </a>
            <a href="#" data-lang="es" class="language-option ${currentLanguage === 'es' ? 'active' : ''}">
                <span data-i18n="spanish">Español</span>
            </a>
        </div>
    `;
    
    // Insert as the first element in the nav-right section
    navRight.insertBefore(languageContainer, navRight.firstChild);
    
    // Add event listeners for language selection
    const languageBtn = languageContainer.querySelector('.language-btn');
    const languageDropdown = languageContainer.querySelector('.language-dropdown');
    
    languageBtn.addEventListener('click', (e) => {
        e.preventDefault();
        languageDropdown.classList.toggle('show');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!languageContainer.contains(e.target)) {
            languageDropdown.classList.remove('show');
        }
    });
    
    // Add event listeners for language options
    const languageOptions = languageContainer.querySelectorAll('.language-option');
    languageOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = option.getAttribute('data-lang');
            changeLanguage(lang);
            
            // Update active class
            languageOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            
            // Hide dropdown
            languageDropdown.classList.remove('show');
        });
    });
}

// Change the language
function changeLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        // Save to localStorage
        localStorage.setItem('language', lang);
        // Update the page content
        translatePage();
    }
}

// Translate the page
function translatePage() {
    // Get all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            // Special handling for inputs with placeholders
            if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                element.placeholder = translations[currentLanguage][key];
            } 
            // Special handling for textareas with placeholders
            else if (element.tagName === 'TEXTAREA' && element.hasAttribute('placeholder')) {
                element.placeholder = translations[currentLanguage][key];
            }
            // Default handling for other elements
            else {
                element.textContent = translations[currentLanguage][key];
            }
        }
    });
    
    // Special case for title
    document.title = document.title.replace('解忧杂货铺', translations[currentLanguage]['siteName']);
    document.title = document.title.replace('Worry-Free Store', translations[currentLanguage]['siteName']);
    document.title = document.title.replace('Tienda Sin Preocupaciones', translations[currentLanguage]['siteName']);
}

// Get translation for a specific key
function t(key) {
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
        return translations[currentLanguage][key];
    }
    return key;
}

// Export functions for use in other scripts
window.i18n = {
    init: initI18n,
    changeLanguage: changeLanguage,
    translate: translatePage,
    t: t,
    getCurrentLanguage: () => currentLanguage
}; 