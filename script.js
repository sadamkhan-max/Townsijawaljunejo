// DARK MODE
function toggleMode() {
    document.body.classList.toggle("dark");
}

// MULTILINGUAL CONTENT
let content = {
    en: {
        about: "Sijawal Junejo is a historical town in Kamber-Shahdadkot District, Sindh...",
        hist1: "Early farming community formed.",
        hist2: "Included into district boundaries.",
        hist3: "Modern infrastructure & education growth.",
        culture: "Known for agriculture, Sindhi culture, traditional festivals..."
    },
    sd: {
        about: "سجاول جونیجو ڪمبر-شهدادڪوٽ ضلعي ۾ هڪ تاريخي شهر آهي...",
        hist1: "شروعاتي زراعت تي ٻڌل ڪميونٽي ٺهي.",
        hist2: "ضلع جي دايرن ۾ شامل ٿيو.",
        hist3: "جدید انفراسٽرڪچر ۽ تعليم ۾ واڌ.",
        culture: "زرعي زندگي، سنڌي ثقافت ۽ روايتي ميلن لاءِ مشهور."
    }
};

function setLanguage(lang) {
    document.getElementById("about-text").innerText = content[lang].about;
    document.getElementById("hist-1").innerText = content[lang].hist1;
    document.getElementById("hist-2").innerText = content[lang].hist2;
    document.getElementById("hist-3").innerText = content[lang].hist3;
    document.getElementById("culture-text").innerText = content[lang].culture;
}

setLanguage('en');

// CONTACT FORM
function submitContact(e) {
    e.preventDefault();
    document.getElementById("contact-response").innerText = "Thanks for sending your message!";
}
