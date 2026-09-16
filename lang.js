const translations = {
    en: {
        welcome: "Welcome to your shop management dashboard",
        totalSale: "TOTAL SALE",
        udhar: "UDHAR BAKI",
        traders: "TRADERS",
        rateTitle: "TODAY'S CHICKEN RATE",
        rateSub: "Live market price updated by trader",
        setHeading: "Shop Settings & Sync",
        setSub: "Update profile, logo & deployment link",
        dir: "ltr"
    },
    hi: {
        welcome: "आपकी दुकान प्रबंधन डैशबोर्ड में स्वागत है",
        totalSale: "कुल बिक्री",
        udhar: "उधार बाकी",
        traders: "व्यापारी",
        rateTitle: "आज का चिकन भाव",
        rateSub: "ट्रेडर द्वारा अपडेट किया गया लाइव भाव",
        setHeading: "दुकान सेटिंग और सिंक",
        setSub: "प्रोफाइल, लोगो और लिंक अपडेट करें",
        dir: "ltr"
    },
    ar: {
        welcome: "مرحباً بك في لوحة تحكم إدارة المتجر",
        totalSale: "إجمالي المبيعات",
        udhar: "الديون الباقية",
        traders: "التجار",
        rateTitle: "سعر الدجاج اليوم",
        rateSub: "سعر السوق المباشر محدث من التاجر",
        setHeading: "إعدادات المتجر والمزامنة",
        setSub: "تحديث الملف الشخصي والشعار والرابط",
        dir: "ltr"
    }
};

function changeLanguage(lang) {
    localStorage.setItem('kcc_lang', lang);
    applyTranslations(lang);
}

function applyTranslations(lang) {
    let t = translations[lang] || translations['en'];
    if(document.documentElement) document.documentElement.setAttribute('dir', t.dir);
    
    if(document.getElementById('txtWelcome')) document.getElementById('txtWelcome').innerText = t.welcome;
    if(document.getElementById('txtTotalSale')) document.getElementById('txtTotalSale').innerText = t.totalSale;
    if(document.getElementById('txtUdhar')) document.getElementById('txtUdhar').innerText = t.udhar;
    if(document.getElementById('txtTraders')) document.getElementById('txtTraders').innerText = t.traders;
    if(document.getElementById('txtRateTitle')) document.getElementById('txtRateTitle').innerText = t.rateTitle;
    if(document.getElementById('txtRateSub')) document.getElementById('txtRateSub').innerText = t.rateSub;
    if(document.getElementById('txtSettingsTitle')) document.getElementById('txtSettingsTitle').innerText = t.setHeading;
    if(document.getElementById('txtSettingsSub')) document.getElementById('txtSettingsSub').innerText = t.setSub;
}

// Automatically apply language on page load
window.addEventListener('DOMContentLoaded', (event) => {
    let savedLang = localStorage.getItem('kcc_lang') || 'en';
    let langDropdown = document.getElementById('langSwitch');
    if(langDropdown) langDropdown.value = savedLang;
    applyTranslations(savedLang);
});