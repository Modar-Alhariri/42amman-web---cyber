const translations = {
    en: {
        about: "About",
        skills: "Skills",
        projects: "Projects",
        hobbies: "Hobbies",
        contact: "Contact",

        theme: "Dark Mode",
        switch: "Switch",

        hello: "Hello! I'm Modar",
        aboutText1: "I'm a Computer Science graduate.",
        aboutText2:
            "I'm interested in web development and building modern web applications.",

        skillsTitle: "My Skills",

        htmlDescription: "Semantic HTML5",
        cssDescription: "Responsive layouts and styling",
        jsDescription: "ES6+ and DOM manipulation",
        phpDescription: "Backend fundamentals",
        mysqlDescription: "Database fundamentals",
        gitDescription: "Version control",

        projectsTitle: "My Projects",

        project00Description:
            "Linux, Git and GitHub fundamentals. Working with the terminal, files, repositories and Git workflows.",

        project01Description:
            "HTML fundamentals including semantic structure, links, images, tables and forms.",

        project02Description:
            "CSS fundamentals including layouts, Flexbox, Grid, animations and responsive design.",

        project03Description:
            "JavaScript fundamentals including variables, functions, events and DOM manipulation.",

        viewProject: "View Project",

        hobbiesTitle: "My Hobbies",

        programmingDescription:
            "Building websites and improving my programming skills.",

        learningDescription:
            "Learning new technologies and development tools.",

        technologyDescription:
            "Exploring modern web technologies and software.",

        contactTitle: "Contact Me",

        nameLabel: "Name",
        namePlaceholder: "Your name",

        emailLabel: "Email",
        emailPlaceholder: "Your email",

        messageLabel: "Message",
        messagePlaceholder: "Write your message...",

        sendMessage: "Send Message",

        footerText: "© 2026 Modar Alhariri. All rights reserved.",
        footerRole: "Computer Science Graduate | Web Developer"
    },

    ar: {
        about: "نبذة عني",
        skills: "المهارات",
        projects: "المشاريع",
        hobbies: "الهوايات",
        contact: "تواصل معي",

        theme: "الوضع الداكن",
        switch: "تبديل",

        hello: "مرحباً! أنا مضر",
        aboutText1: "أنا خريج تخصص علم الحاسوب.",
        aboutText2:
            "أهتم بتطوير الويب وبناء تطبيقات ويب حديثة.",

        skillsTitle: "مهاراتي",

        htmlDescription: "HTML5 الدلالية",
        cssDescription: "تصميم متجاوب وتنسيق الصفحات",
        jsDescription: "ES6+ والتعامل مع DOM",
        phpDescription: "أساسيات تطوير الواجهة الخلفية",
        mysqlDescription: "أساسيات قواعد البيانات",
        gitDescription: "التحكم في الإصدارات",

        projectsTitle: "مشاريعي",

        project00Description:
            "أساسيات Linux وGit وGitHub، والعمل مع الطرفية والملفات والمستودعات وسير عمل Git.",

        project01Description:
            "أساسيات HTML، بما في ذلك الهيكل الدلالي والروابط والصور والجداول والنماذج.",

        project02Description:
            "أساسيات CSS، بما في ذلك التخطيطات وFlexbox وGrid والحركات والتصميم المتجاوب.",

        project03Description:
            "أساسيات JavaScript، بما في ذلك المتغيرات والدوال والأحداث والتعامل مع DOM.",

        viewProject: "عرض المشروع",

        hobbiesTitle: "هواياتي",

        programmingDescription:
            "بناء المواقع وتطوير مهاراتي في البرمجة.",

        learningDescription:
            "تعلم تقنيات وأدوات تطوير جديدة.",

        technologyDescription:
            "استكشاف تقنيات الويب الحديثة والبرمجيات.",

        contactTitle: "تواصل معي",

        nameLabel: "الاسم",
        namePlaceholder: "اسمك",

        emailLabel: "البريد الإلكتروني",
        emailPlaceholder: "بريدك الإلكتروني",

        messageLabel: "الرسالة",
        messagePlaceholder: "اكتب رسالتك...",

        sendMessage: "إرسال الرسالة",

        footerText: "© 2026 مضر الحريري. جميع الحقوق محفوظة.",
        footerRole: "خريج علم حاسوب | مطور ويب"
    }
};


let currentLanguage = "en";

const languageButton =
    document.getElementById("languageButton");


languageButton.addEventListener("click", function () {

    if (currentLanguage === "en") {
        currentLanguage = "ar";
    } else {
        currentLanguage = "en";
    }

    updateLanguage();

});


function updateLanguage() {

    const language = translations[currentLanguage];


    // Change page language
    document.documentElement.lang = currentLanguage;


    // Change direction
    if (currentLanguage === "ar") {
        document.documentElement.dir = "rtl";
    } else {
        document.documentElement.dir = "ltr";
    }


    // Translate elements with data-key
    const elements =
        document.querySelectorAll("[data-key]");


    elements.forEach(function (element) {

        const key = element.dataset.key;

        element.textContent = language[key];

    });


    // Translate placeholders
    const inputs =
        document.querySelectorAll("[data-placeholder]");


    inputs.forEach(function (input) {

        const key = input.dataset.placeholder;

        input.placeholder = language[key];

    });


    // Language button
    if (currentLanguage === "en") {
        languageButton.textContent = "Ar";
    } else {
        languageButton.textContent = "En";
    }

}