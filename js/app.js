/* =========================================================
   CORE DATA
========================================================= */

const BANKS = [
    "Bankily",
    "Click",
    "Sedad",
    "Masrvi"
];

const LEDGER_KEY = "itoumrou_transaction_ledger";
const RECURRING_KEY = "itoumrou_recurring_expenses";
const RECURRING_INCOME_KEY = "itoumrou_recurring_income";
const SAVINGS_GOALS_KEY = "itoumrou_savings_goals";
const LANGUAGE_KEY = "itoumrou_language";
const PIN_KEY = "itoumrou_pin_hash";
const PIN_ATTEMPTS_KEY = "itoumrou_pin_attempts";
const UNDO_KEY = "itoumrou_undo_snapshot";
const BILLS_KEY = "itoumrou_bills";
const BILLS_DISMISSED_KEY = "itoumrou_bills_dismissed";
const DEFAULT_BILL_BANKS_KEY = "itoumrou_default_bill_banks";
const SETUP_KEY = "itoumrou_setup_complete";
const BACKUP_LAST_KEY = "itoumrou_last_backup_at";
const BACKUP_INTERVAL_KEY = "itoumrou_backup_interval_days";
const BACKUP_SNOOZE_KEY = "itoumrou_backup_reminder_snoozed_until";
const BACKUP_FORMAT = "itoumrou-backup";
const ENCRYPTED_BACKUP_FORMAT = "itoumrou-encrypted-backup";
const BACKUP_VERSION = 2;
const CLOSE_HISTORY_KEY = "itoumrou_month_close_history";
const AUDIT_LAST_KEY = "itoumrou_last_audit";
const AUDIT_LOG_KEY = "itoumrou_audit_log";
const BALANCE_CHECK_KEY = "itoumrou_balance_reconciliations";
const THEME_KEY = "itoumrou_theme";
const CATEGORY_NAMES_KEY = "itoumrou_category_names";
const CATEGORY_STYLES_KEY = "itoumrou_category_styles";
const NOTIFICATION_PREFS_KEY = "itoumrou_notification_prefs";
const SAVINGS_TARGET_KEY = "itoumrou_savings_target";
const ZAKAT_PREFS_KEY = "itoumrou_zakat_preferences";
const MAX_AMOUNT = 1000000000;
let pendingRestore = null;

const TRANSLATIONS = {
    fr: {
        "Monthly reports": "Rapports mensuels",
        "Download a snapshot of the selected month or print it to PDF.": "Téléchargez un aperçu du mois sélectionné ou imprimez-le en PDF.",
        "Export CSV": "Exporter en CSV",
        "Print report": "Imprimer le rapport",
        "Savings goals": "Objectifs d'épargne",
        "Track progress toward the things you want to buy or build.": "Suivez vos progrès vers vos projets.",
        "Add savings goal": "Ajouter un objectif",
        "Recurring income": "Revenu récurrent",
        "Track salary or other income that arrives automatically each month.": "Suivez votre salaire ou tout revenu reçu chaque mois.",
        "Add recurring income": "Ajouter un revenu récurrent",
        "PIN/password protection": "Protection par code ou mot de passe",
        "Protect this app on shared devices.": "Protégez cette application sur les appareils partagés.",
        "Set protection": "Activer la protection",
        "Remove protection": "Supprimer la protection",
        "App locked": "Application verrouillée",
        "Enter your PIN or password to continue.": "Entrez votre code ou mot de passe pour continuer.",
        "Unlock": "Déverrouiller",
        "Language": "Langue",
        "Choose the language used throughout the app.": "Choisissez la langue utilisée dans toute l'application.",
        "App language": "Langue de l'application",
        "Lock now": "Verrouiller maintenant",
        "Goal name": "Nom de l'objectif",
        "Target amount": "Montant cible",
        "Already saved": "Déjà épargné",
        "Description (for example: salary)": "Description (ex. salaire)",
        "Amount": "Montant",
        "Day of month (1–28)": "Jour du mois (1–28)",
        "Add amount": "Ajouter un montant",
        "Month": "Mois", "At a glance": "En un coup d'œil",
        "Your month in one clear view": "Votre mois en un coup d'œil",
        "Unallocated": "Non affecté", "Budget": "Budget", "Spent": "Dépensé",
        "Across banks": "Tous les comptes", "This month's income": "Revenu du mois",
        "Main Bank for this month": "Compte principal du mois",
        "Monthly Assignments": "Affectations mensuelles", "Bank Accounts": "Comptes bancaires",
        "Monthly Overview": "Aperçu mensuel", "Income": "Revenu", "Planned": "Prévu",
        "Transferred": "Transféré", "Daily Spending": "Dépenses du jour",
        "Save This Month": "Enregistrer ce mois", "Manage Banks": "Gérer les comptes",
        "Settings": "Paramètres", "Protect your data": "Protéger vos données",
        "Download Backup": "Télécharger la sauvegarde", "Restore Backup": "Restaurer la sauvegarde",
        "Recurring expenses": "Dépenses récurrentes", "Add recurring expense": "Ajouter une dépense récurrente",
        "Transaction history": "Historique des transactions", "Home": "Accueil",
        "Customize your It$umrou organizer.": "Personnalisez votre organiseur It$umrou.",
        "Save a backup before changing devices or clearing browser data.": "Enregistrez une sauvegarde avant de changer d'appareil ou d'effacer les données.",
        "App Settings": "Paramètres de l'application",
        "Categories, monthly amounts, reminders and other settings will appear here.": "Les catégories, montants mensuels, rappels et autres réglages apparaîtront ici.",
        "Automatically add a confirmed expense once each month.": "Ajoutez automatiquement une dépense confirmée chaque mois.",
        "Other": "Autre", "Remove": "Supprimer", "Not selected": "Non sélectionné",
        "Where did BM.S arrive?": "Où le BM.S est-il arrivé ?",
        "Confirm BM.S Received": "Confirmer la réception du BM.S",
        "BM.S has not been confirmed.": "Le BM.S n'est pas confirmé.",
        "SAVINGS BANK": "BANQUE D'ÉPARGNE",
        "Charts and detailed views": "Graphiques et détails",
        "Unallocated income": "Revenu non affecté",
        "No savings goals configured.": "Aucun objectif d'épargne configuré.",
        "No recurring income configured.": "Aucun revenu récurrent configuré.",
        "Add": "Ajouter",
        "Time to back up your data": "Il est temps de sauvegarder vos données",
        "Download backup": "Télécharger la sauvegarde",
        "Remind me next week": "Me le rappeler la semaine prochaine",
        "Upcoming bills": "Factures à venir",
        "Manage": "Gérer",
        "Bills & payment reminders": "Factures et rappels de paiement",
        "Add bill": "Ajouter une facture",
        "Bill name": "Nom de la facture",
        "Next due date": "Prochaine échéance",
        "Pay from": "Payer depuis",
        "Remind me this many days before": "Me rappeler ce nombre de jours avant",
        "Paid": "Payée",
        "Mark paid": "Marquer comme payée",
        "Mark unpaid": "Marquer comme non payée"
    },
    ar: {
        "Monthly reports": "تقارير شهرية",
        "Download a snapshot of the selected month or print it to PDF.": "نزّل ملخص الشهر المحدد أو اطبعه بصيغة PDF.",
        "Export CSV": "تصدير CSV",
        "Print report": "طباعة التقرير",
        "Savings goals": "أهداف الادخار",
        "Track progress toward the things you want to buy or build.": "تابع تقدمك نحو الأشياء التي تريد شراءها أو تحقيقها.",
        "Add savings goal": "إضافة هدف ادخار",
        "Recurring income": "دخل متكرر",
        "Track salary or other income that arrives automatically each month.": "تابع الراتب أو أي دخل يصل تلقائياً كل شهر.",
        "Add recurring income": "إضافة دخل متكرر",
        "PIN/password protection": "الحماية برمز أو كلمة مرور",
        "Protect this app on shared devices.": "احمِ التطبيق على الأجهزة المشتركة.",
        "Set protection": "تفعيل الحماية",
        "Remove protection": "إزالة الحماية",
        "App locked": "التطبيق مقفل",
        "Enter your PIN or password to continue.": "أدخل الرمز أو كلمة المرور للمتابعة.",
        "Unlock": "فتح القفل",
        "Language": "اللغة",
        "Choose the language used throughout the app.": "اختر اللغة المستخدمة في التطبيق.",
        "App language": "لغة التطبيق",
        "Lock now": "قفل الآن",
        "Goal name": "اسم الهدف",
        "Target amount": "المبلغ المستهدف",
        "Already saved": "المدخر حالياً",
        "Description (for example: salary)": "الوصف (مثال: راتب)",
        "Amount": "المبلغ",
        "Day of month (1–28)": "يوم الشهر (1–28)",
        "Add amount": "إضافة مبلغ",
        "Month": "الشهر", "At a glance": "نظرة سريعة",
        "Your month in one clear view": "شهرُك في عرض واضح", "Unallocated": "غير مخصص",
        "Budget": "الميزانية", "Spent": "المنفق", "Across banks": "إجمالي الحسابات",
        "This month's income": "دخل هذا الشهر", "Main Bank for this month": "الحساب الرئيسي لهذا الشهر",
        "Monthly Assignments": "التخصيصات الشهرية", "Bank Accounts": "الحسابات البنكية",
        "Monthly Overview": "نظرة عامة شهرية", "Income": "الدخل", "Planned": "المخطط",
        "Transferred": "المحوّل", "Daily Spending": "المصروفات اليومية",
        "Save This Month": "حفظ هذا الشهر", "Manage Banks": "إدارة الحسابات",
        "Settings": "الإعدادات", "Protect your data": "حماية بياناتك",
        "Download Backup": "تنزيل نسخة احتياطية", "Restore Backup": "استعادة نسخة احتياطية",
        "Recurring expenses": "المصروفات المتكررة", "Add recurring expense": "إضافة مصروف متكرر",
        "Transaction history": "سجل المعاملات", "Home": "الرئيسية",
        "Customize your It$umrou organizer.": "خصص منظم It$umrou الخاص بك.",
        "Save a backup before changing devices or clearing browser data.": "احفظ نسخة احتياطية قبل تغيير الجهاز أو مسح بيانات المتصفح.",
        "App Settings": "إعدادات التطبيق",
        "Categories, monthly amounts, reminders and other settings will appear here.": "ستظهر الفئات والمبالغ الشهرية والتذكيرات والإعدادات الأخرى هنا.",
        "Automatically add a confirmed expense once each month.": "أضف مصروفاً مؤكداً تلقائياً كل شهر.",
        "Other": "أخرى", "Remove": "إزالة", "Not selected": "غير محدد",
        "Where did BM.S arrive?": "أين وصل BM.S؟",
        "Confirm BM.S Received": "تأكيد استلام BM.S",
        "BM.S has not been confirmed.": "لم يتم تأكيد BM.S.",
        "SAVINGS BANK": "بنك الادخار",
        "Charts and detailed views": "الرسوم والتفاصيل",
        "Unallocated income": "الدخل غير المخصص",
        "No savings goals configured.": "لا توجد أهداف ادخار.",
        "No recurring income configured.": "لا يوجد دخل متكرر.",
        "Add": "إضافة",
        "Time to back up your data": "حان وقت نسخ بياناتك احتياطياً",
        "Download backup": "تنزيل النسخة الاحتياطية",
        "Remind me next week": "ذكرني الأسبوع القادم",
        "Upcoming bills": "الفواتير القادمة",
        "Manage": "إدارة",
        "Bills & payment reminders": "الفواتير وتذكيرات الدفع",
        "Add bill": "إضافة فاتورة",
        "Bill name": "اسم الفاتورة",
        "Next due date": "تاريخ الاستحقاق التالي",
        "Pay from": "الدفع من",
        "Remind me this many days before": "ذكرني قبل عدد الأيام هذا",
        "Paid": "مدفوعة",
        "Mark paid": "تحديد كمدفوعة",
        "Mark unpaid": "تحديد كغير مدفوعة"
    }
};

function currentLanguage() {
    return "en";
}

function applyLanguage() {
    const language = currentLanguage();
    const translations = TRANSLATIONS[language] || {};
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        element.textContent = translations[key] || key;
    });
    document.querySelectorAll("[placeholder]").forEach(element => {
        const key = element.getAttribute("placeholder");
        if (TRANSLATIONS.fr[key] || TRANSLATIONS.ar[key]) {
            element.placeholder = translations[key] || key;
        }
    });
    const reverse = {};
    Object.keys(TRANSLATIONS).forEach(code => {
        Object.keys(TRANSLATIONS[code]).forEach(key => {
            reverse[TRANSLATIONS[code][key]] = key;
        });
    });
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
        const value = node.nodeValue.trim();
        if (!value || node.parentElement.closest("[data-i18n]")) {
            continue;
        }
        const key = reverse[value] || value;
        if (TRANSLATIONS[language] && TRANSLATIONS[language][key]) {
            node.nodeValue = node.nodeValue.replace(value, TRANSLATIONS[language][key]);
        }
    }
    const selector = document.getElementById("languageSelect");
    if (selector) {
        selector.value = language;
        selector.setAttribute("aria-label", translations.Language || "Language");
    }
    const lockButton = document.getElementById("lockButton");
    if (lockButton) {
        lockButton.title = language === "fr" ? "Verrouiller maintenant"
            : language === "ar" ? "قفل الآن" : "Lock now";
    }
}

function setLanguage(language) {
    localStorage.setItem(LANGUAGE_KEY, "en");
    applyLanguage();
    populateMonthOptions();
    loadMonth();
}

function currentTheme() {
    const theme = localStorage.getItem(THEME_KEY) || "system";
    return ["light", "dark", "system"].includes(theme) ? theme : "system";
}

function applyTheme() {
    const theme = currentTheme();
    document.documentElement.classList.remove("theme-light", "theme-dark");
    if (theme === "dark") {
        document.documentElement.classList.add("theme-dark");
    } else if (theme === "light") {
        document.documentElement.classList.add("theme-light");
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("theme-dark");
    }
}

function setTheme(theme) {
    localStorage.setItem(THEME_KEY, theme);
    applyTheme();
}

function loadNotificationPrefs() {
    let prefs = {};
    try {
        prefs = JSON.parse(localStorage.getItem(NOTIFICATION_PREFS_KEY)) || {};
    } catch {
        prefs = {};
    }
    return {
        bills: prefs.bills !== false,
        dailySpending: prefs.dailySpending !== false,
        backup: prefs.backup !== false,
        actionSounds: prefs.actionSounds === true
    };
}

let audioContext = null;

function playActionSound(kind) {
    if (!loadNotificationPrefs().actionSounds ||
        (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)) {
        return;
    }
    try {
        audioContext = audioContext || new (window.AudioContext || window.webkitAudioContext)();
        const notes = kind === "error"
            ? [{ frequency: 180, delay: 0, duration: 0.16 }]
            : kind === "transaction"
                ? [{ frequency: 520, delay: 0, duration: 0.13 }, { frequency: 740, delay: 0.08, duration: 0.18 }]
                : [{ frequency: 420, delay: 0, duration: 0.11 }, { frequency: 630, delay: 0.07, duration: 0.16 }, { frequency: 840, delay: 0.14, duration: 0.2 }];
        const playNotes = () => {
            const now = audioContext.currentTime;
            notes.forEach(note => {
                const oscillator = audioContext.createOscillator();
                const gain = audioContext.createGain();
                const start = now + note.delay;
                oscillator.type = kind === "error" ? "sine" : "triangle";
                oscillator.frequency.setValueAtTime(note.frequency, start);
                gain.gain.setValueAtTime(0.0001, start);
                gain.gain.exponentialRampToValueAtTime(kind === "error" ? 0.03 : 0.05, start + 0.012);
                gain.gain.exponentialRampToValueAtTime(0.0001, start + note.duration);
                oscillator.connect(gain);
                gain.connect(audioContext.destination);
                oscillator.start(start);
                oscillator.stop(start + note.duration + 0.01);
            });
        };
        if (audioContext.state === "suspended") {
            audioContext.resume().then(playNotes).catch(() => {
                audioContext = null;
            });
        } else {
            playNotes();
        }
    } catch {
        audioContext = null;
    }
}

document.addEventListener("pointerdown", () => {
    if (!loadNotificationPrefs().actionSounds) {
        return;
    }
    try {
        audioContext = audioContext || new (window.AudioContext || window.webkitAudioContext)();
        if (audioContext.state === "suspended") {
            audioContext.resume();
        }
    } catch {
        audioContext = null;
    }
}, { passive: true });

function setNotificationPref(key, enabled) {
    const prefs = loadNotificationPrefs();
    prefs[key] = enabled;
    localStorage.setItem(NOTIFICATION_PREFS_KEY, JSON.stringify(prefs));
}

function eraseAllAppData() {
    if (!confirm("This will permanently erase ALL data in It$umrou on this device " +
        "(months, bills, banks, goals, settings). This cannot be undone. " +
        "Make sure you have downloaded a backup first. Continue?")) {
        return;
    }
    if (!confirm("Are you absolutely sure? Type OK to confirm one last time, or Cancel to keep your data.")) {
        return;
    }
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
}

async function calculateBackupChecksum(version, exportedAt, data) {
    const payload = JSON.stringify({ version: version, exportedAt: exportedAt, data: data });
    if (window.crypto && window.crypto.subtle && window.TextEncoder) {
        const digest = await window.crypto.subtle.digest("SHA-256", new TextEncoder().encode(payload));
        return Array.from(new Uint8Array(digest))
            .map(byte => byte.toString(16).padStart(2, "0")).join("");
    }
    return btoa(unescape(encodeURIComponent(payload)));
}

function appendAuditEvent(action, details) {
    let events = [];
    try {
        events = JSON.parse(localStorage.getItem(AUDIT_LOG_KEY) || "[]");
        if (!Array.isArray(events)) {
            events = [];
        }
    } catch (error) {
        events = [];
    }
    events.push({
        at: new Date().toISOString(),
        action: String(action),
        details: details || {}
    });
    localStorage.setItem(AUDIT_LOG_KEY, JSON.stringify(events.slice(-200)));
}

function collectLocalStorageData() {
    const data = {};
    for (let index = 0; index < localStorage.length; index += 1) {
        const key = localStorage.key(index);
        if (key && key !== PIN_KEY) {
            data[key] = localStorage.getItem(key);
        }

    }
    return data;
}

function bytesToBase64(bytes) {
    let binary = "";
    bytes.forEach(byte => binary += String.fromCharCode(byte));
    return btoa(binary);
}

function base64ToBytes(value) {
    const binary = atob(value);
    return Uint8Array.from(binary, character => character.charCodeAt(0));
}

async function deriveBackupKey(password, salt) {
    const material = await window.crypto.subtle.importKey(
        "raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveKey"]);
    return window.crypto.subtle.deriveKey(
        { name: "PBKDF2", salt: salt, iterations: 150000, hash: "SHA-256" },
        material, { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]);
}

async function exportEncryptedAppData() {
    if (!window.crypto?.subtle || !window.TextEncoder) {
        alert("Encrypted backups are not supported by this browser.");
        return;
    }
    const password = prompt("Create a password for this encrypted backup:");
    if (!password || password.length < 8) {
        alert("Use a backup password with at least 8 characters.");
        return;
    }
    const exportedAt = new Date().toISOString();
    const data = collectLocalStorageData();
    const inner = {
        format: BACKUP_FORMAT,
        version: BACKUP_VERSION,
        exportedAt: exportedAt,
        data: data
    };
    inner.checksum = await calculateBackupChecksum(inner.version, exportedAt, data);
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const key = await deriveBackupKey(password, salt);
    const encrypted = await crypto.subtle.encrypt(
        { name: "AES-GCM", iv: iv }, key, new TextEncoder().encode(JSON.stringify(inner)));
    const backup = {
        format: ENCRYPTED_BACKUP_FORMAT,
        version: BACKUP_VERSION,
        exportedAt: exportedAt,
        salt: bytesToBase64(salt),
        iv: bytesToBase64(iv),
        ciphertext: bytesToBase64(new Uint8Array(encrypted))
    };
    localStorage.setItem(BACKUP_LAST_KEY, exportedAt);
    localStorage.removeItem(BACKUP_SNOOZE_KEY);
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "itoumrou-encrypted-backup-" + todayKey() + "-v" + BACKUP_VERSION + ".json";
    link.click();
    URL.revokeObjectURL(url);
    checkBackupReminder();
    setMessage("Encrypted backup downloaded.");
    appendAuditEvent("encrypted_backup_exported", { version: BACKUP_VERSION, itemCount: Object.keys(data).length });
}

async function decryptBackupPayload(payload, password) {
    if (!payload || payload.format !== ENCRYPTED_BACKUP_FORMAT ||
        !payload.salt || !payload.iv || !payload.ciphertext || !window.crypto?.subtle) {
        return null;
    }
    const key = await deriveBackupKey(password, base64ToBytes(payload.salt));
    const decrypted = await crypto.subtle.decrypt(
        { name: "AES-GCM", iv: base64ToBytes(payload.iv) }, key, base64ToBytes(payload.ciphertext));
    return JSON.parse(new TextDecoder().decode(decrypted));
}

async function exportAppData() {
    const exportedAt = new Date().toISOString();
    const data = collectLocalStorageData();
    const backup = {
        format: BACKUP_FORMAT,
        version: BACKUP_VERSION,
        exportedAt: exportedAt,
        app: "It$umrou",
        checksum: await calculateBackupChecksum(BACKUP_VERSION, exportedAt, data),
        data: data
    };
    localStorage.setItem(BACKUP_LAST_KEY, exportedAt);
    localStorage.removeItem(BACKUP_SNOOZE_KEY);
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "itoumrou-backup-" + todayKey() + "-v" + BACKUP_VERSION + ".json";
    link.click();
    URL.revokeObjectURL(url);
    checkBackupReminder();
    setMessage("Verified backup downloaded (" + Object.keys(data).length + " data items).");
    appendAuditEvent("backup_exported", { version: BACKUP_VERSION, itemCount: Object.keys(data).length });
}

function parseBackupPayload(payload) {
    if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
        return null;
    }
    if (payload.format === BACKUP_FORMAT && payload.data &&
        typeof payload.data === "object" && !Array.isArray(payload.data)) {
        return {
            data: payload.data,
            version: Number(payload.version) || 1,
            exportedAt: payload.exportedAt || "Unknown date",
            checksum: payload.checksum || "",
            legacy: false
        };
    }
    const data = {};
    Object.entries(payload).forEach(([key, value]) => {
        if (typeof key === "string" && typeof value === "string") {
            data[key] = value;
        }
    });
    return Object.keys(data).length ? {
        data: data, version: 1, exportedAt: "Legacy backup", checksum: "", legacy: true
    } : null;
}

async function importAppData(file) {
    if (!file) {
        return;
    }
    let payload;
    try {
        payload = JSON.parse(await file.text());
    } catch (error) {
        alert("This backup file is not valid JSON.");
        return;
    }
    if (payload.format === ENCRYPTED_BACKUP_FORMAT) {
        const password = prompt("Enter the password for this encrypted backup:");
        if (!password) return;
        try {
            payload = await decryptBackupPayload(payload, password);
        } catch {
            alert("The password was incorrect or this encrypted backup is damaged.");
            return;
        }
    }
    const parsed = parseBackupPayload(payload);
    if (!parsed) {
        alert("This backup file has no restorable It$umrou data.");
        return;
    }
    let integrity = parsed.legacy ? "Legacy format (no checksum)" : "Checksum not verified";
    if (!parsed.legacy && parsed.checksum) {
        const expected = await calculateBackupChecksum(parsed.version, parsed.exportedAt, parsed.data);
        integrity = expected === parsed.checksum ? "Integrity verified" : "Checksum mismatch — restore blocked";
        if (expected !== parsed.checksum) {
            alert("This backup failed its integrity check and was not restored.");
            return;
        }
    }
    pendingRestore = parsed;
    const preview = document.getElementById("restorePreview");
    const text = document.getElementById("restorePreviewText");
    if (preview && text) {
        text.textContent = parsed.version + " · " + parsed.exportedAt + " · " +
            Object.keys(parsed.data).length + " data items · " + integrity +
            ". Matching keys will be replaced; other existing data will be preserved.";
        preview.hidden = false;
    }
}

function cancelRestore() {
    pendingRestore = null;
    const preview = document.getElementById("restorePreview");
    if (preview) {
        preview.hidden = true;
    }
    const input = document.getElementById("importDataInput");
    if (input) {
        input.value = "";
    }
}

function confirmRestore() {
    if (!pendingRestore) {
        return;
    }
    const data = pendingRestore.data;
    const version = pendingRestore.version;
    Object.entries(data).forEach(([key, value]) => localStorage.setItem(key, value));
    cancelRestore();
    populateMonthOptions();
    loadMonth();
    appendAuditEvent("backup_restored", {
        version: version,
        itemCount: Object.keys(data).length
    });
    alert("Backup merged successfully. Matching keys were replaced; other existing data was preserved.");
}

async function hashSecret(value) {
    const text = String(value || "");
    if (window.crypto && window.crypto.subtle && window.TextEncoder) {
        const bytes = new TextEncoder().encode(text);
        const digest = await window.crypto.subtle.digest("SHA-256", bytes);
        return Array.from(new Uint8Array(digest))
            .map(byte => byte.toString(16).padStart(2, "0")).join("");
    }
    return btoa(unescape(encodeURIComponent(text)));
}

function isAppLocked() {
    return Boolean(localStorage.getItem(PIN_KEY)) &&
        sessionStorage.getItem("itoumrou_unlocked") !== "true";
}

function showLockOverlay() {
    const overlay = document.getElementById("lockOverlay");
    if (!overlay) {
        return;
    }
    overlay.hidden = false;
    document.body.classList.add("app-locked");
    const input = document.getElementById("unlockPinInput");
    if (input) {
        input.value = "";
        window.setTimeout(() => input.focus(), 0);
    }
}

function hideLockOverlay() {
    const overlay = document.getElementById("lockOverlay");
    if (overlay) {
        overlay.hidden = true;
    }
    document.body.classList.remove("app-locked");
}

async function unlockApp() {
    const input = document.getElementById("unlockPinInput");
    const error = document.getElementById("unlockError");
    const stored = localStorage.getItem(PIN_KEY);
    let attempts = {};
    try {
        attempts = JSON.parse(sessionStorage.getItem(PIN_ATTEMPTS_KEY) || "{}");
    } catch {
        attempts = {};
    }
    if (Number(attempts.lockedUntil) > Date.now()) {
        const seconds = Math.ceil((attempts.lockedUntil - Date.now()) / 1000);
        if (error) error.textContent = "Too many attempts. Try again in " + seconds + " seconds.";
        return;
    }
    if (!stored || (await hashSecret(input.value)) === stored) {
        sessionStorage.setItem("itoumrou_unlocked", "true");
        sessionStorage.removeItem(PIN_ATTEMPTS_KEY);
        if (error) {
            error.textContent = "";
        }
        hideLockOverlay();
        return;
    }
    if (error) {
        attempts.count = Number(attempts.count) + 1;
        if (attempts.count >= 5) {
            attempts.lockedUntil = Date.now() + 30000;
            attempts.count = 0;
            error.textContent = "Too many attempts. Try again in 30 seconds.";
        } else {
            error.textContent = "Incorrect PIN or password.";
        }
        sessionStorage.setItem(PIN_ATTEMPTS_KEY, JSON.stringify(attempts));
    }
    input.select();
}

async function setPinProtection() {
    const input = document.getElementById("securityPinInput");
    const value = String(input.value || "").trim();
    if (value.length < 4 || value.length > 64) {
        alert("Use a PIN or password between 4 and 64 characters.");
        return;
    }
    localStorage.setItem(PIN_KEY, await hashSecret(value));
    sessionStorage.setItem("itoumrou_unlocked", "true");
    input.value = "";
    renderSecurityStatus();
    setMessage("App protection enabled.");
}

function removePinProtection() {
    if (!localStorage.getItem(PIN_KEY)) {
        return;
    }
    if (!confirm("Remove PIN/password protection?")) {
        return;
    }
    localStorage.removeItem(PIN_KEY);
    sessionStorage.removeItem("itoumrou_unlocked");
    renderSecurityStatus();
    setMessage("App protection removed.");
}

function lockApp() {
    if (!localStorage.getItem(PIN_KEY)) {
        showPage("settingsPage");
        setMessage("Set a PIN/password in Settings first.");
        return;
    }
    sessionStorage.removeItem("itoumrou_unlocked");
    showLockOverlay();
}

function renderSecurityStatus() {
    const status = document.getElementById("securityStatus");
    if (status) {
        status.textContent = localStorage.getItem(PIN_KEY)
            ? "Protection is enabled."
            : "Protection is not enabled.";
    }
}

function initializeSecurity() {
    renderSecurityStatus();
    if (isAppLocked()) {
        showLockOverlay();
    }
}
function cleanupStaleGeneratedBills() {
    const bills = loadBills();
    const month = currentMonthKey();
    // Default bills (Adobe, ChatGPT, iCloud, Facebook, Wifi) are only ever
    // meant to exist for the current month. A past bug generated extra
    // copies of them whenever an old month was viewed in the Calendar,
    // leaving behind fake "overdue" bills. Remove any unpaid one that
    // isn't for the actual current month.
    const cleaned = bills.filter(bill =>
        !bill.defaultKey || bill.paid ||
        String(bill.dueDate).slice(0, 7) === month);
    if (cleaned.length !== bills.length) {
        saveBills(cleaned);
    }
}
function repairExistingSavingsTransfer() {
    const legacyRepairKey = "itoumrou_existing_savings_repaired";
    if (!localStorage.getItem(legacyRepairKey)) {
        return;
    }
    const cleaned = loadLedger().filter(transaction =>
        !(transaction.type === "internal_transfer" &&
            transaction.category === "$" &&
            Number(transaction.amount) === 5000 &&
            transaction.from === "Bankily" &&
            transaction.to === "Masrvi" &&
            transaction.description === "Savings" &&
            !transaction.transferKind &&
            transaction.month === "2026-09"));
    if (cleaned.length !== loadLedger().length) {
        saveLedger(cleaned);
    }
    localStorage.removeItem(legacyRepairKey);
}

function loadLedger() {
    const raw = localStorage.getItem(LEDGER_KEY);

    if (!raw) {
        return [];
    }

    try {
        return JSON.parse(raw);
    } catch {
        return [];
    }
}

function saveLedger(ledger) {
    localStorage.setItem(
        LEDGER_KEY,
        JSON.stringify(ledger)
    );
}

function addLedgerTransaction(transaction) {
    const ledger = loadLedger();

    const normalized = {
        id: transaction.id || Date.now() + Math.random(),
        date: transaction.date || todayKey(),
        month: transaction.month || monthKey(),
        type: transaction.type,
        amount: Math.round(Number(transaction.amount) || 0),
        createdAt: transaction.createdAt || new Date().toISOString(),
        category: transaction.category || null,
        description: transaction.description || "",
        bank: transaction.bank || null,
        from: transaction.from || null,
        to: transaction.to || null,
    };

    if (transaction.billId) {
        normalized.billId = transaction.billId;
    }
    if (transaction.transferKind) {
        normalized.transferKind = transaction.transferKind;
    }
    if (typeof transaction.isAssignment === "boolean") {
        normalized.isAssignment = transaction.isAssignment;
    }

    ledger.push(normalized);

    saveLedger(ledger);
    appendAuditEvent("transaction_added", {
        id: normalized.id, type: normalized.type, amount: normalized.amount,
        month: normalized.month
    });
}

const DEFAULT_BALANCES = {
    Bankily: 40,
    Click: 765,
    Sedad: 55,
    Masrvi: 3
};

const DESTINATIONS = {
    M: "Bankily",
    S: "Bankily",
    $: "Masrvi",
    T: "Sedad",
    C: "Sedad",
    P: "Click"
};

const DEFAULT_CATEGORY_NAMES = {
    M: "Mom",
    S: "Charity",
    $: "Savings",
    T: "Taxi",
    C: "Cigar",
    P: "Personal needs"
};

const DEFAULT_CATEGORY_STYLES = {
    M: { icon: "M", color: "#e59f42" },
    S: { icon: "S", color: "#32a852" },
    $: { icon: "$", color: "#16b866" },
    T: { icon: "T", color: "#4b8fd8" },
    C: { icon: "C", color: "#d66a5c" },
    P: { icon: "P", color: "#8b6fd8" }
};

const CATEGORY_NAMES = { ...DEFAULT_CATEGORY_NAMES };

function loadCustomCategoryNames() {
    try {
        return JSON.parse(localStorage.getItem(CATEGORY_NAMES_KEY)) || {};
    } catch {
        return {};
    }
}

function applyCustomCategoryNames() {
    const custom = loadCustomCategoryNames();
    Object.keys(DEFAULT_CATEGORIES).forEach(category => {
        CATEGORY_NAMES[category] = custom[category] || DEFAULT_CATEGORY_NAMES[category];
    });
}

function saveCategoryName(category, name) {
    const custom = loadCustomCategoryNames();
    const trimmed = String(name || "").trim();
    if (trimmed && trimmed !== DEFAULT_CATEGORY_NAMES[category]) {
        custom[category] = trimmed;
    } else {
        delete custom[category];
    }
    localStorage.setItem(CATEGORY_NAMES_KEY, JSON.stringify(custom));
    applyCustomCategoryNames();
}

function loadCategoryStyles() {
    try {
        const saved = JSON.parse(localStorage.getItem(CATEGORY_STYLES_KEY) || "{}");
        return Object.keys(DEFAULT_CATEGORY_STYLES).reduce((styles, category) => {
            const value = saved[category] || {};
            styles[category] = {
                icon: String(value.icon || DEFAULT_CATEGORY_STYLES[category].icon).slice(0, 2),
                color: /^#[0-9a-f]{6}$/i.test(value.color) ? value.color : DEFAULT_CATEGORY_STYLES[category].color
            };
            return styles;
        }, {});
    } catch {
        return { ...DEFAULT_CATEGORY_STYLES };
    }
}

function categoryStyle(category) {
    return loadCategoryStyles()[category] || DEFAULT_CATEGORY_STYLES[category] || { icon: category, color: "#16b866" };
}

function saveCategoryStyles() {
    const styles = loadCategoryStyles();
    Object.keys(DEFAULT_CATEGORY_STYLES).forEach(category => {
        const icon = document.getElementById("categoryIcon_" + category)?.value.trim();
        const color = document.getElementById("categoryColor_" + category)?.value;
        if (icon) styles[category].icon = icon.slice(0, 2);
        if (/^#[0-9a-f]{6}$/i.test(color || "")) styles[category].color = color;
    });
    localStorage.setItem(CATEGORY_STYLES_KEY, JSON.stringify(styles));
}

const DEFAULT_CATEGORIES = {
    M: 5000,
    S: 1000,
    $: 5000,
    T: 1500,
    C: 3000,
    P: 2000
};

const DAILY_SPEND_CATEGORIES = ["P", "C", "T"];

let selectedBank = null;
let currentDetailBank = null;
let calendarView = "activity";
let rolloverNotice = "";

function setMessage(text) {
    const message = document.getElementById("message");
    if (message) {
        message.textContent = text || "";
        if (text) {
            message.classList.remove("message-pop");
            void message.offsetWidth;
            message.classList.add("message-pop");
            playActionSound(/saved|recorded|added|updated|paid|funded|confirmed|undone/i.test(text)
                ? "transaction" : "success");
            if (/saved|recorded|added|updated|paid|funded|confirmed/i.test(text)) {
                triggerCelebration();
            }
        }
    }
}

function triggerCelebration() {
    const layer = document.getElementById("fxLayer");
    if (!layer || (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)) {
        return;
    }
    layer.innerHTML = "";
    const burst = document.createElement("span");
    burst.className = "fx-burst";
    layer.appendChild(burst);
    const colors = ["#00d54b", "#42b7ff", "#ffc857", "#ff6b8a", "#8b7dff"];
    for (let index = 0; index < 18; index += 1) {
        const particle = document.createElement("span");
        const angle = (Math.PI * 2 * index) / 18;
        const distance = 42 + (index % 4) * 13;
        particle.className = "fx-particle";
        particle.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
        particle.style.setProperty("--y", `${Math.sin(angle) * distance}px`);
        particle.style.setProperty("--delay", `${(index % 5) * 18}ms`);
        particle.style.setProperty("--color", colors[index % colors.length]);
        layer.appendChild(particle);
    }
    window.setTimeout(() => {
        layer.innerHTML = "";
    }, 850);
}

function captureUndoState(label) {
    const expenseKey = "itoumrou_expenses_" + todayKey();
    localStorage.setItem(UNDO_KEY, JSON.stringify({
        label: label,
        month: monthKey(),
        monthRaw: localStorage.getItem(monthStorageKey()),
        balancesRaw: localStorage.getItem("itoumrou_balances"),
        ledgerRaw: localStorage.getItem(LEDGER_KEY),
        expenseKey: expenseKey,
        expenseRaw: localStorage.getItem(expenseKey),
        balanceCheckRaw: localStorage.getItem(BALANCE_CHECK_KEY),
        billsRaw: localStorage.getItem(BILLS_KEY),
        billDismissalsRaw: localStorage.getItem(BILLS_DISMISSED_KEY),
        defaultBillBanksRaw: localStorage.getItem(DEFAULT_BILL_BANKS_KEY)
    }));
    renderUndoMessage();
}

function renderUndoMessage() {
    const element = document.getElementById("undoMessage");
    if (!element) {
        return;
    }
    let snapshot = null;
    try {
        snapshot = JSON.parse(localStorage.getItem(UNDO_KEY) || "null");
    } catch {
        snapshot = null;
    }
    element.hidden = !snapshot;
    element.innerHTML = snapshot
        ? escapeHtml(snapshot.label || "Last change") +
          ' <button type="button" id="undoButton">Undo</button>'
        : "";
    const button = document.getElementById("undoButton");
    if (button) {
        button.addEventListener("click", undoLastAction);
    }
}

function undoLastAction() {
    let snapshot = null;
    try {
        snapshot = JSON.parse(localStorage.getItem(UNDO_KEY) || "null");
    } catch {
        snapshot = null;
    }
    if (!snapshot) {
        return;
    }
    if (snapshot.balancesRaw === null) {
        localStorage.removeItem("itoumrou_balances");
    } else {
        localStorage.setItem("itoumrou_balances", snapshot.balancesRaw);
    }
    if (snapshot.ledgerRaw === null) {
        localStorage.removeItem(LEDGER_KEY);
    } else {
        localStorage.setItem(LEDGER_KEY, snapshot.ledgerRaw);
    }
    const monthStorage = "itoumrou_month_" + snapshot.month;
    if (snapshot.monthRaw === null) {
        localStorage.removeItem(monthStorage);
    } else {
        localStorage.setItem(monthStorage, snapshot.monthRaw);
    }
    if (snapshot.expenseRaw === null) {
        localStorage.removeItem(snapshot.expenseKey);
    } else {
        localStorage.setItem(snapshot.expenseKey, snapshot.expenseRaw);
    }
    if (Object.prototype.hasOwnProperty.call(snapshot, "balanceCheckRaw")) {
        if (snapshot.balanceCheckRaw === null) {
            localStorage.removeItem(BALANCE_CHECK_KEY);
        } else {
            localStorage.setItem(BALANCE_CHECK_KEY, snapshot.balanceCheckRaw);
        }
    }
    [
        [BILLS_KEY, snapshot.billsRaw],
        [BILLS_DISMISSED_KEY, snapshot.billDismissalsRaw],
        [DEFAULT_BILL_BANKS_KEY, snapshot.defaultBillBanksRaw]
    ].forEach(([key, raw]) => {
        if (raw === null || typeof raw === "undefined") {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, raw);
        }
    });
    localStorage.removeItem(UNDO_KEY);
    if (snapshot.label === "Month closed") {
        saveCloseHistory(loadCloseHistory().filter(item => item.month !== snapshot.month));
        appendAuditEvent("month_close_undone", { month: snapshot.month });
    }
    loadMonth();
    renderUndoMessage();
    setMessage("✓ Last change undone.");
}


/* =========================================================
   HELPERS
========================================================= */

function money(value) {

    return Math.round(
        Number(value) || 0
    ).toLocaleString("en-US") + " MRU";

}


function monthKey() {

    return document.getElementById(
        "monthSelect"
    ).value;

}

function daysInSelectedMonth() {
    const [year, month] = monthKey().split("-").map(Number);
    return new Date(year, month, 0).getDate();
}


function monthStorageKey() {

    return "itoumrou_month_" + monthKey();

}

function currentMonthKey() {
    const date = new Date();
    return date.getFullYear() + "-" +
        String(date.getMonth() + 1).padStart(2, "0");
}

function previousMonthKey(month) {
    const parts = String(month).split("-");
    const date = new Date(Number(parts[0]), Number(parts[1]) - 2, 1);
    return date.getFullYear() + "-" +
        String(date.getMonth() + 1).padStart(2, "0");
}

function populateMonthOptions() {
    const select = document.getElementById("monthSelect");
    if (!select) {
        return;
    }
    const selected = select.value || currentMonthKey();
    const locale = currentLanguage() === "ar" ? "ar"
        : currentLanguage() === "fr" ? "fr-FR" : "en-US";
    const dates = [];
    const current = new Date();
    for (let offset = -12; offset <= 12; offset += 1) {
        const date = new Date(current.getFullYear(), current.getMonth() + offset, 1);
        dates.push({
            value: date.getFullYear() + "-" + String(date.getMonth() + 1).padStart(2, "0"),
            label: date.toLocaleDateString(locale, { month: "long", year: "numeric" })
        });
    }
    for (let index = 0; index < localStorage.length; index += 1) {
        const key = localStorage.key(index);
        const match = key && key.match(/^itoumrou_month_(\d{4}-\d{2})$/);
        if (match && !dates.some(item => item.value === match[1])) {
            const date = new Date(match[1] + "-01T12:00:00");
            dates.push({
                value: match[1],
                label: date.toLocaleDateString(locale, { month: "long", year: "numeric" })
            });
        }
    }
    dates.sort((first, second) => first.value.localeCompare(second.value));
    select.innerHTML = dates.map(item =>
        '<option value="' + item.value + '">' + item.label + "</option>"
    ).join("");
    select.value = dates.some(item => item.value === selected)
        ? selected
        : currentMonthKey();
}

function ensureMonthlyRollover() {
    const selected = monthKey();
    if (loadMonthData()) {
        return;
    }
    const previous = localStorage.getItem("itoumrou_month_" + previousMonthKey(selected));
    if (!previous) {
        return;
    }
    let previousData;
    try {
        previousData = JSON.parse(previous);
    } catch {
        previousData = null;
    }
    if (!previousData) {
        return;
    }
    const rollover = {
        month: selected,
        income: 0,
        mainBank: previousData.mainBank || null,
        incomeConfirmed: false,
        assignments: previousData.assignments || { ...DEFAULT_CATEGORIES },
        completed: {},
        transfers: {},
        transactions: []
    };
    localStorage.setItem("itoumrou_month_" + selected, JSON.stringify(rollover));
    rolloverNotice = "New month started: assignments were rolled over. Confirm your income when it arrives.";
}


function todayKey() {

    const d = new Date();

    return d.getFullYear() + "-" +
        String(d.getMonth() + 1).padStart(2, "0") + "-" +
        String(d.getDate()).padStart(2, "0");

}


function getBalances() {

    const raw =
        localStorage.getItem(
            "itoumrou_balances"
        );

    if (!raw) {

        return {
            ...DEFAULT_BALANCES
        };

    }

    try {

        const data = JSON.parse(raw);

        return {
            Bankily: Math.round(Number(data.Bankily) || 0),
            Click: Math.round(Number(data.Click) || 0),
            Sedad: Math.round(Number(data.Sedad) || 0),
            Masrvi: Math.round(Number(data.Masrvi) || 0)
        };

    } catch {

        return {
            ...DEFAULT_BALANCES
        };

    }

}


function saveBalances(balances) {

    localStorage.setItem(
        "itoumrou_balances",
        JSON.stringify(balances)
    );

}


function loadMonthData() {

    const raw =
        localStorage.getItem(
            monthStorageKey()
        );

    if (!raw) {

        return null;

    }

    try {

        return JSON.parse(raw);

    } catch {

        return null;

    }

}


function saveMonthData(data) {

    localStorage.setItem(
        monthStorageKey(),
        JSON.stringify(data)
    );

}


function getAssignments() {

    const result = {};

    document
        .querySelectorAll(".assignment-amount")
        .forEach(input => {

            result[input.dataset.category] =
                Math.max(
                    0,
                    Math.round(
                        Number(input.value) || 0
                    )
                );

        });

    return result;

}


function saveCurrentMonth() {
    if (!requireOpenMonth("saving")) {
        return;
    }

    const old =
        loadMonthData();

    const data = {

        month: monthKey(),

        income:
            Math.max(
                0,
                Math.round(
                    Number(
                        document.getElementById(
                            "incomeInput"
                        ).value
                    ) || 0
                )
            ),

        mainBank:
            selectedBank,

        incomeConfirmed:
            Boolean(
                old?.incomeConfirmed
            ),

        assignments:
            getAssignments(),

        completed:
            getCompleted(),

        transfers:
            old?.transfers || {},

        transactions:
            old?.transactions || []

    };

    saveMonthData(data);

}


function getCompleted() {

    const result = {};

    document
        .querySelectorAll(".assignment-checkbox")
        .forEach(input => {

            result[input.dataset.category] =
                input.checked;

        });

    return result;

}

function handleAssignmentAmountChange(input) {
    if (!requireOpenMonth("changing assignments")) {
        renderAssignments();
        return;
    }
    const category = input.dataset.category;
    const amount = Number(input.value);
    const data = loadMonthData() || {
        month: monthKey(), income: 0, mainBank: selectedBank,
        incomeConfirmed: false, assignments: {}, completed: {},
        transfers: {}, transactions: []
    };
    const oldAmount = Math.max(0, Math.round(
        Number(data.assignments && data.assignments[category]) ||
        DEFAULT_CATEGORIES[category] || 0
    ));
    if (!Number.isFinite(amount) || !Number.isInteger(amount) ||
        amount < 0 || amount > MAX_AMOUNT) {
        alert("Assignment amounts must be whole numbers from 0 to 1,000,000,000.");
        renderAssignments();
        return;
    }
    const newAmount = Math.round(amount);
    const transfer = (data.transactions || []).find(item =>
        item.type === "internal_transfer" && item.category === category
    );
    if (data.transfers && data.transfers[category] && newAmount <= 0) {
        alert("Reverse the transfer before setting its assignment to zero.");
        renderAssignments();
        return;
    }
    if (transfer && newAmount !== oldAmount) {
        const source = transfer.from;
        const destination = transfer.to;
        const difference = newAmount - Number(transfer.amount || oldAmount);
            const balances = getBalances();
        if (!BANKS.includes(source) || !BANKS.includes(destination) ||
            !Number.isFinite(Number(transfer.amount))) {
            alert("This transfer has invalid stored data and cannot be changed safely.");
            renderAssignments();
            return;
        }
        if (difference > 0 && balances[source] < difference) {
            alert("Not enough money in " + source + " for this transfer change.");
            renderAssignments();
            return;
        }
        if (difference < 0 && balances[destination] < Math.abs(difference)) {
            alert("The destination bank cannot return the reduced transfer amount.");
            renderAssignments();
            return;
        }
        captureUndoState("Assignment transfer changed");
        balances[source] -= difference;
        balances[destination] += difference;
        saveBalances(balances);
        transfer.amount = newAmount;
        const ledger = loadLedger();
        const ledgerTransfer = ledger.find(item => item.id === transfer.id) ||
            ledger.slice().reverse().find(item =>
                item.type === "internal_transfer" &&
                item.category === category &&
                item.month === monthKey());
        if (ledgerTransfer) {
            ledgerTransfer.amount = newAmount;
            saveLedger(ledger);
        }
    } else if (newAmount !== oldAmount) {
        captureUndoState("Assignment amount changed");
    }
    data.assignments = data.assignments || {};
    data.assignments[category] = newAmount;
    saveMonthData(data);
    updateAll();
}


/* =========================================================
   PAGE NAVIGATION
========================================================= */

function showPage(pageId) {
    const targetPage = document.getElementById(pageId);

    if (!targetPage) {
        console.warn("Page not found:", pageId);
        return;
    }

    document.querySelectorAll(".nav-item").forEach(item => {
        item.classList.remove("active");
        item.removeAttribute("aria-current");
    });

    const activeNavItem = document.querySelector(
        `.nav-item[data-page="${pageId}"]`
    );

    if (activeNavItem) {
        activeNavItem.classList.add("active");
        activeNavItem.setAttribute("aria-current", "page");
    }

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    targetPage.classList.add("active");
    targetPage.setAttribute("tabindex", "-1");
    targetPage.focus({ preventScroll: true });
    window.scrollTo(0, 0);

    const message = document.getElementById("message");

    if (message) {
        message.textContent = "";
    }

    if (pageId === "banksPage") {
        renderManageBanks();
    }

    if (pageId === "bankDetailsPage") {
        renderBankDetails();
    }

    if (pageId === "savingsPage") {
        renderSavingsPage();
    }

    if (pageId === "assignmentsPage") {
        renderAssignments();
    }

    if (pageId === "spendingPage") {
        renderExpenseList();
    }

    if (pageId === "calendarPage") {
        renderCalendar();
    }

    if (pageId === "calendarDetailsPage") {
        renderCalendarDetailsPage();
    }

    if (pageId === "settingsPage") {
        renderSettingsSummaries();
    }

    if (pageId === "settingsBillsPage") {
        renderBills();
        updateDashboardBills();
        checkBackupReminder();
    }

    if (pageId === "settingsRecurringPage") {
        renderRecurringExpenses();
    }

    if (pageId === "settingsIncomePage") {
        renderRecurringIncome();
    }

    if (pageId === "settingsGoalsPage") {
        renderSavingsGoals();
    }

    if (pageId === "settingsAppearancePage") {
        const themeSelect = document.getElementById("themeSelect");
        if (themeSelect) {
            themeSelect.value = currentTheme();
        }
    }

    if (pageId === "settingsCategoriesPage") {
        renderCategoryNameFields();
    }

    if (pageId === "settingsNotificationsPage") {
        const prefs = loadNotificationPrefs();
        const billsToggle = document.getElementById("notifyBillsToggle");
        const dailyToggle = document.getElementById("notifyDailySpendingToggle");
        const backupToggle = document.getElementById("notifyBackupToggle");
        const soundsToggle = document.getElementById("actionSoundsToggle");
        if (billsToggle) {
            billsToggle.checked = prefs.bills;
        }
        if (dailyToggle) {
            dailyToggle.checked = prefs.dailySpending;
        }
        if (backupToggle) {
            backupToggle.checked = prefs.backup;
        }
        if (soundsToggle) {
            soundsToggle.checked = prefs.actionSounds;
        }
    }
}

function renderCategoryNameFields() {
    const container = document.getElementById("categoryNameFields");
    if (!container) {
        return;
    }
    const styles = loadCategoryStyles();
    container.innerHTML = Object.keys(DEFAULT_CATEGORIES).map(category =>
        '<div class="category-style-row"><div class="category-style-preview" style="--category-color:' + styles[category].color + '">' +
        escapeHtml(styles[category].icon) + '</div><div class="category-style-fields"><label class="label" for="categoryName_' + category + '">' +
        category + ' — default "' + escapeHtml(DEFAULT_CATEGORY_NAMES[category]) + '"</label>' +
        '<input id="categoryName_' + category + '" type="text" maxlength="40" value="' + escapeHtml(CATEGORY_NAMES[category]) + '" placeholder="' +
        escapeHtml(DEFAULT_CATEGORY_NAMES[category]) + '"><div class="category-style-controls"><input id="categoryIcon_' + category + '" type="text" maxlength="2" value="' +
        escapeHtml(styles[category].icon) + '" aria-label="' + escapeHtml(category) + ' symbol"><input id="categoryColor_' + category + '" type="color" value="' +
        escapeHtml(styles[category].color) + '" aria-label="' + escapeHtml(category) + ' color"></div></div></div>'
    ).join("");
}

function saveCategoryNames() {
    Object.keys(DEFAULT_CATEGORIES).forEach(category => {
        const input = document.getElementById("categoryName_" + category);
        if (input) {
            saveCategoryName(category, input.value);
        }
    });
    saveCategoryStyles();
    updateAll();
    setMessage("Category names updated.");
}

function renderSettingsSummaries() {
    const languageEl = document.getElementById("settingsLanguageSummary");
    if (languageEl) {
        const names = { en: "English", fr: "Français", ar: "العربية" };
        languageEl.textContent = names[currentLanguage()] || "English";
    }
    const appearanceEl = document.getElementById("settingsAppearanceSummary");
    if (appearanceEl) {
        const names = { system: "System", light: "Light", dark: "Dark" };
        appearanceEl.textContent = names[currentTheme()] || "System";
    }
    const notificationsEl = document.getElementById("settingsNotificationsSummary");
    if (notificationsEl) {
        const prefs = loadNotificationPrefs();
        const onCount = Object.values(prefs).filter(Boolean).length;
        notificationsEl.textContent = onCount === 3 ? "All on"
            : onCount === 0 ? "All off" : onCount + " of 3 on";
    }
    const securityEl = document.getElementById("settingsSecuritySummary");
    if (securityEl) {
        securityEl.textContent = localStorage.getItem(PIN_KEY) ? "Protected" : "Not protected";
    }
    const billsEl = document.getElementById("settingsBillsSummary");
    if (billsEl) {
        const bills = loadBills();
        const overdue = bills.filter(bill => !bill.paid && billDaysUntil(bill.dueDate) < 0).length;
        billsEl.textContent = !bills.length
            ? "No bills yet"
            : bills.length + " bill" + (bills.length === 1 ? "" : "s") +
              (overdue ? " · " + overdue + " overdue" : "");
    }
    const recurringEl = document.getElementById("settingsRecurringSummary");
    if (recurringEl) {
        const items = loadRecurringExpenses();
        recurringEl.textContent = !items.length
            ? "None set up"
            : items.length + " recurring expense" + (items.length === 1 ? "" : "s");
    }
    const goalsEl = document.getElementById("settingsGoalsSummary");
    if (goalsEl) {
        const goals = loadSavingsGoals();
        goalsEl.textContent = !goals.length
            ? "No goals yet"
            : goals.length + " goal" + (goals.length === 1 ? "" : "s");
    }
    const incomeEl = document.getElementById("settingsIncomeSummary");
    if (incomeEl) {
        const items = loadRecurringIncome();
        incomeEl.textContent = !items.length
            ? "None set up"
            : items.length + " recurring income" + (items.length === 1 ? "" : "s");
    }
    const moreEl = document.getElementById("settingsMoreSummary");
    if (moreEl) {
        const recurringCount = loadRecurringExpenses().length;
        const goalsCount = loadSavingsGoals().length;
        const incomeCount = loadRecurringIncome().length;
        const parts = [];
        if (recurringCount) {
            parts.push(recurringCount + " recurring expense" + (recurringCount === 1 ? "" : "s"));
        }
        if (goalsCount) {
            parts.push(goalsCount + " goal" + (goalsCount === 1 ? "" : "s"));
        }
        if (incomeCount) {
            parts.push(incomeCount + " recurring income" + (incomeCount === 1 ? "" : "s"));
        }
        moreEl.textContent = parts.length ? parts.join(" · ") : "Not set up";
    }
}

/* =========================================================
   BANK SELECTION
========================================================= */

function selectMainBank(bank) {
    if (!requireOpenMonth("changing the main bank")) {
        return;
    }

    const existing =
        loadMonthData();

    if (
        existing?.incomeConfirmed &&
        existing.mainBank !== bank
    ) {

        alert(
            "BM.S has already been confirmed for this month. " +
            "The Main Bank cannot be changed afterward."
        );

        return;

    }

    selectedBank = bank;

    document
        .querySelectorAll(".bank-button")
        .forEach(button => {

            button.classList.toggle(
                "selected",
                button.dataset.bank === bank
            );

        });

    document.getElementById(
        "mainBankDisplay"
    ).textContent =
        bank +
        " — Main Bank for " +
        document.getElementById(
            "monthSelect"
        ).selectedOptions[0].text;

    saveCurrentMonth();

    renderAssignments();

    renderHomeBanks();

}


/* =========================================================
   BM.S
========================================================= */

function confirmIncome() {
    if (!requireOpenMonth("confirming income")) {
        return;
    }

    const input =
        document.getElementById(
            "incomeInput"
        );

    const income =
        Math.max(
            0,
            Math.round(
                Number(input.value) || 0
            )
        );

    if (income <= 0) {

        alert(
            "Enter your BM.S amount first."
        );

        return;

    }

    if (!selectedBank) {

        alert(
            "Select the bank where BM.S arrived first."
        );

        return;

    }

    const existing =
        loadMonthData();

    if (
        existing?.incomeConfirmed
    ) {

        alert(
            "BM.S for this month is already confirmed."
        );

        return;

    }

    const balances =
        getBalances();

    balances[selectedBank] += income;

    saveBalances(balances);

    const incomeId = "income-" + monthKey() + "-" + Date.now() + "-" +
        Math.random().toString(36).slice(2);
    const incomeTransaction = {
        id: incomeId,
        date: todayKey(),
        month: monthKey(),
        type: "income",
        amount: income,
        bank: selectedBank,
        description: "BM.S"
    };
    const data = {

        month:
            monthKey(),

        income:
            income,

        mainBank:
            selectedBank,

        incomeConfirmed:
            true,

        assignments:
            getAssignments(),

        completed:
            getCompleted(),

        transfers:
            existing?.transfers || {},

        transactions: [

            ...(existing?.transactions || []),

            incomeTransaction

        ]

    };

    saveMonthData(data);

    addLedgerTransaction(incomeTransaction);

    document.getElementById(
        "incomeStatus"
    ).textContent =
        "✓ BM.S received and added to " +
        selectedBank +
        ". Monthly assignments are ready: send M, S, T, C, P, and savings.";

    updateAll();

}


/* =========================================================
   ASSIGNMENTS
========================================================= */

function renderAssignmentsSummary(data, categories) {
    let planned = 0;
    let funded = 0;
    let paidOrSettled = 0;
    categories.forEach(category => {
        const amount = Number(data?.assignments?.[category] ?? DEFAULT_CATEGORIES[category]);
        planned += amount;
        if (hasAssignmentFunding(data, category)) {
            funded += amount;
        }
        if (category === "M" || category === "S") {
            if (data?.recipientTransfers?.[category]) {
                paidOrSettled += amount;
            }
        } else if (hasAssignmentFunding(data, category)) {
            paidOrSettled += amount;
        }
    });
    const html =
        '<div><div class="label">Planned</div><strong>' + money(planned) + '</strong></div>' +
        '<div><div class="label">Funded</div><strong>' + money(funded) + '</strong></div>' +
        '<div><div class="label">Settled</div><strong>' + money(paidOrSettled) + '</strong></div>';
    ["assignmentsSummary", "assignmentsPageSummary"].forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = html;
        }
    });
    const reminder = document.getElementById("assignmentsPageReminder");
    if (reminder) {
        reminder.hidden = !data?.incomeConfirmed;
    }
}

function renderAssignments() {
    const container = document.getElementById("assignments");
    if (!container) {
        return;
    }
    const data = loadMonthData();
    const ledger = loadLedger();
    const categories = Object.keys(DEFAULT_CATEGORIES);
    const essentials = categories.filter(category => category !== "$");

    renderAssignmentsSummary(data, categories);

    const renderCard = category => {
        const amount = data?.assignments?.[category] ??
            DEFAULT_CATEGORIES[category];
        const name = CATEGORY_NAMES[category];
        const destination = DESTINATIONS[category];
        const funded = hasAssignmentFunding(data, category);
        const fundingTransfer = (data?.transactions || []).find(transaction =>
            transaction.type === "internal_transfer" &&
            transaction.category === category &&
            transaction.transferKind !== "assignment_payment" &&
            transaction.to === destination &&
            transaction.from === data?.mainBank);
        const fundedAmount = funded ? Number(fundingTransfer?.amount || 0) : 0;
        const paid = Boolean(data?.recipientTransfers?.[category]);
        const spent = ledger
            .filter(transaction => transaction.month === monthKey() &&
                isSpendingTransaction(transaction) &&
                transaction.category === category)
            .reduce((total, transaction) => total + Number(transaction.amount || 0), 0);
        const remaining = Math.max(0, fundedAmount - spent);
        const dailyBudget = ["T", "C"].includes(category)
            ? Math.round(Number(amount) / daysInSelectedMonth())
            : 0;
        const recipientLabel = category === "M" ? "Send to Mom" : "Send to Charity";
        const status = category === "M" || category === "S"
            ? (paid ? "Paid" : funded ? "In Bankily" : "Waiting for funding")
            : (funded ? "Funded" : "Waiting for funding");
        const card = document.createElement("article");
        card.className = "assignment";
        card.dataset.category = category;
        card.innerHTML = `
            <div class="assignment-top">
                <div class="assignment-heading">
                    <span class="symbol" aria-hidden="true">${category}</span>
                    <div>
                        <div class="category-name">${name}</div>
                        <div class="category-default">${status} · Planned ${money(amount)} · Funded ${money(fundedAmount)}</div>
                    </div>
                </div>
                <label class="assignment-amount-wrap">
                    <span class="sr-only">${name} amount</span>
                    <input type="number" min="0" max="${MAX_AMOUNT}" step="1"
                        class="assignment-amount" data-category="${category}"
                        aria-label="${name} assignment amount" value="${amount}">
                </label>
            </div>
            ${["M", "S", "$"].includes(category) ? `
                <div class="assignment-meta assignment-funding-meta">
                    <span>${money(fundedAmount)} funded</span>
                    <strong>${money(Math.max(0, Number(amount) - fundedAmount))} waiting</strong>
                </div>
            ` : `
                <div class="assignment-progress" aria-label="${name} spending progress">
                    <span class="${fundedAmount > 0 && spent >= fundedAmount ? "over" : fundedAmount > 0 && spent >= fundedAmount * 0.8 ? "near" : ""}"
                        style="width:${fundedAmount > 0 ? Math.min(100, spent / fundedAmount * 100) : 0}%"></span>
                </div>
                <div class="assignment-meta">
                    <span>${money(fundedAmount)} funded · ${money(spent)} used</span>
                    <strong>${money(remaining)} remaining</strong>
                    ${dailyBudget ? `<span>${money(dailyBudget)}/day guide</span>` : ""}
                </div>
                ${fundedAmount > 0 && spent >= fundedAmount
                    ? `<div class="assignment-warning over">⚠ Over the funded ${name} amount by ${money(spent - fundedAmount)}.</div>`
                    : fundedAmount > 0 && spent >= fundedAmount * 0.8
                        ? `<div class="assignment-warning near">${name} is at ${Math.round(spent / fundedAmount * 100)}% of its funded amount.</div>`
                        : ""}
            `}
            <div class="destination">
                <div><strong>${category === "$" ? "Savings bank" : "Funding bank"}:</strong> ${destination}</div>
                <div class="assignment-actions">
                    <button type="button" class="assignment-action"
                        data-category="${category}" data-stage="bank"
                        ${funded && (!["M", "S"].includes(category) || paid) ? "disabled" : ""}>
                        ${funded
                            ? (["M", "S"].includes(category)
                                ? "Undo Bankily funding"
                                : "Funded")
                            : "Send to " + destination}
                    </button>
                    ${category === "M" || category === "S" ? `
                        <button type="button" class="assignment-action"
                            data-category="${category}" data-stage="recipient"
                            ${!funded || paid ? "disabled" : ""}>
                            ${paid ? "Paid" : recipientLabel}
                        </button>
                    ` : ""}
                </div>
            </div>
        `;
        return card;
    };

    container.innerHTML = `
        <div class="assignment-group">
            <h3>Monthly essentials</h3>
            <p class="assignment-group-note">Fund these after BM.S arrives, then track what you use.</p>
            <div class="assignment-group-list" data-group="essentials"></div>
        </div>
        <div class="assignment-group assignment-savings">
            <h3>$ Savings</h3>
            <p class="assignment-group-note">Keep this separate and send it to Masrvi when ready.</p>
            <div class="assignment-group-list" data-group="savings"></div>
        </div>
    `;
    const essentialsContainer = container.querySelector('[data-group="essentials"]');
    essentials.forEach(category => essentialsContainer.appendChild(renderCard(category)));
    container.querySelector('[data-group="savings"]').appendChild(renderCard("$"));

    container.querySelectorAll(".assignment-action").forEach(button => {
        button.addEventListener("click", () => {
            if (button.dataset.stage === "recipient") {
                completeRecipientTransfer(button.dataset.category);
            } else if (button.textContent.includes("Undo")) {
                reverseTransfer(button.dataset.category);
            } else {
                completeTransfer(button.dataset.category);
            }
        });
    });
    container.querySelectorAll(".assignment-amount").forEach(input => {
        input.addEventListener("change", () => handleAssignmentAmountChange(input));
    });
}

function hasAssignmentFunding(data, category) {
    return Boolean(
        data?.transfers?.[category] &&
        data?.transactions?.some(transaction =>
            transaction.type === "internal_transfer" &&
            transaction.category === category &&
            transaction.to === DESTINATIONS[category] &&
            transaction.from === data.mainBank
        )
    );
}


function reverseTransfer(category) {
    if (!requireOpenMonth("reversing a transfer")) {
        renderAssignments();
        return;
    }

    const data = loadMonthData();
    if (data?.recipientTransfers?.[category]) {
        alert("The " + CATEGORY_NAMES[category] +
            " payment is already recorded. Funding cannot be reversed now.");
        renderAssignments();
        return;
    }

    const transfer = data?.transactions?.find(transaction =>
        transaction.type === "internal_transfer" &&
        transaction.category === category &&
        transaction.transferKind !== "assignment_payment"
    );

    if (!hasAssignmentFunding(data, category) || !transfer) {
        return;
    }

    const balances = getBalances();
    const amount = Number(transfer.amount) || 0;

    if (!BANKS.includes(transfer.from) || !BANKS.includes(transfer.to) ||
        !Number.isInteger(amount) || amount <= 0 || amount > MAX_AMOUNT) {
        alert("This transfer has invalid stored data and cannot be reversed safely.");
        renderAssignments();
        return;
    }
    if (balances[transfer.to] < amount) {
        alert("The destination bank does not have enough money to reverse this transfer.");
        renderAssignments();
        return;
    }

    captureUndoState("Assignment transfer reversed");
    balances[transfer.to] -= amount;
    balances[transfer.from] += amount;
    saveBalances(balances);

    data.transfers[category] = false;
    data.transactions = data.transactions.filter(transaction =>
        transaction !== transfer
    );
    saveMonthData(data);

    saveLedger(loadLedger().filter(transaction =>
        transaction.id !== transfer.id &&
        !(transaction.type === "internal_transfer" &&
          transaction.category === category &&
          transaction.amount === amount &&
          transaction.from === transfer.from &&
          transaction.to === transfer.to)
    ));

    updateAll();

}


function renderTransferInstructions() {

    const container =
        document.getElementById(
            "assignments"
        );

    const data =
        loadMonthData();

    const transfers =
        data?.transfers || {};

    container
        .querySelectorAll(".assignment")
        .forEach(row => {

            const amountInput =
                row.querySelector(
                    ".assignment-amount"
                );

            const category =
                amountInput.dataset.category;

            const amount =
                Math.max(
                    0,
                    Math.round(
                        Number(
                            amountInput.value
                        ) || 0
                    )
                );

            const destination =
                DESTINATIONS[category];

            const destinationBox =
                row.querySelector(
                    ".destination"
                );

            if (!selectedBank) {

                destinationBox.innerHTML =
                    "<strong>Destination:</strong> " +
                    destination +
                    "<div class='transfer-needed'>" +
                    "Select the Main Bank first." +
                    "</div>";

                return;

            }

            if (
                destination === selectedBank
            ) {

                destinationBox.innerHTML =
                    "<strong>Destination:</strong> " +
                    destination +
                    "<div class='already-there'>" +
                    "✓ Already in " +
                    selectedBank +
                    "</div>";

                return;

            }

            if (transfers[category]) {
                destinationBox.innerHTML =
                    "<strong>Destination:</strong> " +
                    destination +
                    "<div class='already-there'>" +
                    "✓ Transfer recorded to " +
                    destination +
                    "</div>";
                return;
            }

            destinationBox.innerHTML =
                "<strong>Destination:</strong> " +
                destination +
                "<div class='transfer-needed'>" +
                "Send " +
                money(amount) +
                " from " +
                selectedBank +
                " → " +
                destination +
                "</div>";

        });

}


/* =========================================================
   INTERNAL TRANSFERS
========================================================= */

const LAST_GOAL_CONTRIBUTION_KEY = "itoumrou_last_goal_contribution";

function autoContributeSavingsGoal(amount) {
    if (!Number.isInteger(amount) || amount <= 0) {
        return;
    }
    const goals = loadSavingsGoals();
    const goal = goals.find(item =>
        Math.max(0, Number(item.saved) || 0) < Math.max(1, Number(item.target) || 1));
    if (!goal) {
        return;
    }
    const target = Math.max(1, Number(goal.target) || 1);
    const before = Math.max(0, Number(goal.saved) || 0);
    goal.saved = Math.min(target, before + amount);
    const actuallyAdded = goal.saved - before;
    saveSavingsGoals(goals);
    localStorage.setItem(LAST_GOAL_CONTRIBUTION_KEY, JSON.stringify({
        goalId: goal.id, amount: actuallyAdded, at: Date.now()
    }));
    setMessage("Savings sent to Masrvi and added to \"" + goal.name + "\" goal.");
    renderSavingsGoals();
}

function undoLastGoalContribution() {
    const raw = localStorage.getItem(LAST_GOAL_CONTRIBUTION_KEY);
    if (!raw) {
        return;
    }
    let record;
    try {
        record = JSON.parse(raw);
    } catch {
        localStorage.removeItem(LAST_GOAL_CONTRIBUTION_KEY);
        return;
    }
    const goals = loadSavingsGoals();
    const goal = goals.find(item => String(item.id) === String(record.goalId));
    if (goal) {
        goal.saved = Math.max(0, (Number(goal.saved) || 0) - Number(record.amount || 0));
        saveSavingsGoals(goals);
        setMessage("Undid the automatic contribution to \"" + goal.name + "\".");
    }
    localStorage.removeItem(LAST_GOAL_CONTRIBUTION_KEY);
    renderSavingsGoals();
}

function completeTransfer(category) {
    if (!requireOpenMonth("recording a transfer")) {
        renderAssignments();
        return;
    }

    const data =
        loadMonthData();
    if (!data?.incomeConfirmed) {
        alert("Confirm BM.S before funding monthly assignments.");
        renderAssignments();
        return;
    }

    if (hasAssignmentFunding(data, category)) {

        return;

    }

    if (!selectedBank) {

        renderAssignments();
        return;

    }

    const destination =
        DESTINATIONS[category];

    if (!BANKS.includes(selectedBank) || !BANKS.includes(destination)) {
        alert("This transfer has an invalid bank destination.");
        renderAssignments();
        return;
    }

    if (
        destination === selectedBank
    ) {
        const amount = Math.max(0, Math.round(Number(
            data?.assignments?.[category] ?? DEFAULT_CATEGORIES[category]
        ) || 0));

        const updated =
            data || {
                month: monthKey(),
                income: 0,
                mainBank: selectedBank,
                incomeConfirmed: false,
                assignments: getAssignments(),
                completed: {},
                transfers: {},
                transactions: []
            };

        updated.transfers = updated.transfers || {};
        updated.transfers[category] = true;
        updated.transactions = updated.transactions || [];
        const transferId = "assignment-transfer-" + Date.now() + "-" +
            Math.random().toString(36).slice(2);
        const transfer = {
            id: transferId,
            date: todayKey(),
            month: monthKey(),
            type: "internal_transfer",
            category: category,
            amount: amount,
            from: selectedBank,
            to: destination,
            description: CATEGORY_NAMES[category],
            transferKind: "assignment",
            isAssignment: true
        };
        updated.transactions.push(transfer);
        captureUndoState("Assignment transfer recorded");
        saveMonthData(updated);
        addLedgerTransaction(transfer);
        if (category === "$") {
            autoContributeSavingsGoal(amount);
        }
        updateAll();
        return;

    }

    const assignment =
        data?.assignments?.[category] ??
        DEFAULT_CATEGORIES[category];

    const amount =
        Math.max(
            0,
            Math.round(
                Number(assignment) || 0
            )
        );

    if (amount <= 0 || amount > MAX_AMOUNT ||
        !Number.isInteger(amount)) {
        alert("Assignment amounts must be whole numbers from 1 to 1,000,000,000.");
        renderAssignments();
        return;
    }

    const balances =
        getBalances();

    if (
        balances[selectedBank] <
        amount
    ) {

        alert(
            "Not enough money in " +
            selectedBank +
            " to make this transfer."
        );

        renderAssignments();

        return;

    }
    captureUndoState("Assignment transfer recorded");
    balances[selectedBank] -= amount;

    balances[destination] += amount;

    saveBalances(balances);

    const updated =
        data || {
            month: monthKey(),
            income: 0,
            mainBank: selectedBank,
            incomeConfirmed: false,
            assignments: getAssignments(),
            completed: {},
            transfers: {},
            transactions: []
        };

    updated.transfers =
        updated.transfers || {};

    updated.transfers[category] =
        true;

    updated.transactions =
        updated.transactions || [];

    const transferId = Date.now() + Math.random();
    updated.transactions.push({
        id: transferId,
        type: "internal_transfer",

        category: category,

        amount: amount,

        from: selectedBank,

        to: destination,

        description:
            CATEGORY_NAMES[category],
        transferKind: "assignment",
        isAssignment: true

    });

    saveMonthData(updated);
    addLedgerTransaction({
    id: transferId,
    type: "internal_transfer",
    category: category,
    amount: amount,
    from: selectedBank,
    to: destination,
    description: CATEGORY_NAMES[category],
    month: monthKey(),
    transferKind: "assignment",
    isAssignment: true
});

    if (category === "$") {
        autoContributeSavingsGoal(amount);
    }

    updateAll();

}

function completeRecipientTransfer(category) {
    if (!["M", "S"].includes(category) ||
        !requireOpenMonth("sending assignment money")) {
        return;
    }

    const data = loadMonthData();
    const amount = Math.max(0, Math.round(Number(
        data?.assignments?.[category] ?? DEFAULT_CATEGORIES[category]
    ) || 0));

    if (!data?.incomeConfirmed) {
        alert("Confirm BM.S before sending assignment money.");
        renderAssignments();
        return;
    }
    if (!hasAssignmentFunding(data, category)) {
        alert("Send the assignment to Bankily first.");
        renderAssignments();
        return;
    }
    if (data.recipientTransfers?.[category]) {
        return;
    }

    const balances = getBalances();
    if (balances.Bankily < amount) {
        alert("Not enough money in Bankily to complete this payment.");
        renderAssignments();
        return;
    }

    captureUndoState("Assignment payment recorded");
    balances.Bankily -= amount;
    saveBalances(balances);

    const transaction = {
        id: "assignment-payment-" + Date.now() + "-" +
            Math.random().toString(36).slice(2),
        date: todayKey(),
        month: monthKey(),
        type: "expense",
        category: category,
        amount: amount,
        bank: "Bankily",
        description: "Payment to " + CATEGORY_NAMES[category],
        transferKind: "assignment_payment",
        expenseKind: "assignment_payment",
        isAssignment: true
    };

    data.recipientTransfers = data.recipientTransfers || {};
    data.recipientTransfers[category] = true;
    data.transactions = data.transactions || [];
    data.transactions.push(transaction);
    saveMonthData(data);
    addLedgerTransaction(transaction);
    updateAll();
}

function isBankTransfer(transaction) {
    return Boolean(
        transaction &&
        transaction.type === "internal_transfer" &&
        transaction.from !== transaction.to &&
        !isSpendingTransaction(transaction)
    );
}

function recordBankTransfer(event) {
    event.preventDefault();
    if (!requireOpenMonth("recording a transfer")) {
        return;
    }

    const from = document.getElementById("transferFrom").value;
    const to = document.getElementById("transferTo").value;
    const amountInput = document.getElementById("transferAmount");
    const descriptionInput = document.getElementById("transferDescription");
    const amount = Number(amountInput.value);
    const description = descriptionInput.value.trim() || "Bank transfer";

    if (!BANKS.includes(from) || !BANKS.includes(to) || from === to) {
        alert("Choose two different valid banks for this transfer.");
        return;
    }

    if (!Number.isInteger(amount) || amount <= 0 || amount > MAX_AMOUNT) {
        alert("Transfer amounts must be a positive whole number up to 1,000,000,000.");
        return;
    }

    if (description.length > 120) {
        alert("Transfer descriptions must be 120 characters or fewer.");
        return;
    }

    const balances = getBalances();
    if (balances[from] < amount) {
        alert("Not enough money in " + from + " for this transfer.");
        return;
    }

    captureUndoState("Bank transfer recorded");
    balances[from] -= amount;
    balances[to] += amount;
    saveBalances(balances);

    const transfer = {
        id: "bank-transfer-" + Date.now() + "-" + Math.random().toString(36).slice(2),
        date: todayKey(),
        month: monthKey(),
        type: "internal_transfer",
        amount: amount,
        category: null,
        description: description,
        bank: null,
        from: from,
        to: to,
        transferKind: "bank",
        isAssignment: false
    };

    addLedgerTransaction(transfer);

    const monthData = loadMonthData() || {
        month: monthKey(),
        income: 0,
        mainBank: selectedBank,
        incomeConfirmed: false,
        assignments: getAssignments(),
        completed: {},
        transfers: {},
        transactions: []
    };
    monthData.transactions = monthData.transactions || [];
    monthData.transactions.push(transfer);
    saveMonthData(monthData);

    event.target.reset();
    setMessage("✓ Transfer recorded: " + from + " → " + to + ".");
    updateAll();
}


/* =========================================================
   DAILY EXPENSES
========================================================= */

function loadExpensesForDate(date) {

    const raw =
        localStorage.getItem(
            "itoumrou_expenses_" +
            date
        );

    if (!raw) {

        return [];

    }

    try {

        return JSON.parse(raw);

    } catch {

        return [];

    }

}

function loadExpenses() {
    return loadExpensesForDate(todayKey());
}

function saveExpensesForDate(date, expenses) {

    localStorage.setItem(
        "itoumrou_expenses_" +
        date,
        JSON.stringify(expenses)
    );

}

function saveExpenses(expenses) {
    saveExpensesForDate(todayKey(), expenses);
}

function loadRecurringExpenses() {
    try {
        const data = JSON.parse(localStorage.getItem(RECURRING_KEY) || "[]");
        return Array.isArray(data) ? data : [];
    } catch {
        return [];
    }
}

function saveRecurringExpenses(expenses) {
    localStorage.setItem(RECURRING_KEY, JSON.stringify(expenses));
}

function renderRecurringExpenses() {
    const list = document.getElementById("recurringList");
    if (!list) {
        return;
    }
    const expenses = loadRecurringExpenses();
    list.innerHTML = expenses.length
        ? expenses.map(expense =>
            '<div class="recurring-item">' +
            '<div class="recurring-copy"><strong>' +
            escapeHtml(expense.description) + "</strong><div class=\"label\">" +
            money(expense.amount) + " · " +
            escapeHtml(CATEGORY_NAMES[expense.category] || "Other") +
            " · " + escapeHtml(expense.bank) + " · day " +
            escapeHtml(expense.day) + "</div></div>" +
            '<button type="button" class="recurring-delete" data-recurring-id="' +
            escapeHtml(expense.id) + '">Remove</button></div>'
        ).join("")
        : '<div class="empty">No recurring expenses configured.</div>';
    list.querySelectorAll(".recurring-delete").forEach(button => {
        button.addEventListener("click", () => {
            const updated = loadRecurringExpenses().filter(item =>
                String(item.id) !== String(button.dataset.recurringId));
            saveRecurringExpenses(updated);
            renderRecurringExpenses();
            setMessage("Recurring expense removed.");
        });
    });
    applyLanguage();
}

function addRecurringExpense() {
    const description = document.getElementById("recurringDescription").value.trim();
    const amount = Number(document.getElementById("recurringAmount").value);
    const category = document.getElementById("recurringCategory").value;
    const requestedBank = document.getElementById("recurringBank").value;
    const day = Number(document.getElementById("recurringDay").value);
    const bank = DESTINATIONS[category] || requestedBank;
    if (!description || description.length > 120 ||
        !Number.isFinite(amount) || !Number.isInteger(amount) ||
        amount <= 0 || amount > MAX_AMOUNT ||
        !BANKS.includes(bank) || !Number.isInteger(day) || day < 1 || day > 28) {
        alert("Enter a description, a whole amount up to 1,000,000,000, a valid bank, and a day from 1 to 28.");
        return;
    }
    const expenses = loadRecurringExpenses();
    expenses.push({
        id: String(Date.now()) + "-" + Math.random().toString(36).slice(2),
        description: description,
        amount: amount,
        category: category,
        bank: bank,
        day: day,
        lastAppliedMonth: null
    });
    saveRecurringExpenses(expenses);
    document.getElementById("recurringDescription").value = "";
    document.getElementById("recurringAmount").value = "";
    document.getElementById("recurringDay").value = "";
    renderRecurringExpenses();
    setMessage("Recurring expense added.");
    if (applyRecurringExpenses() || applyRecurringIncome()) {
        updateAll();
    }
    if (rolloverNotice) {
        setMessage(rolloverNotice);
        rolloverNotice = "";
    }
}

function applyRecurringExpenses() {
    if (monthKey() !== currentMonthKey()) {
        return false;
    }
    if (isMonthClosed()) {
        return false;
    }
    const month = monthKey();
    const expenses = loadRecurringExpenses();
    if (!expenses.length) {
        return false;
    }
    const balances = getBalances();
    const ledger = loadLedger();
    let monthData = loadMonthData() || {
        month: month, income: 0, mainBank: selectedBank,
        incomeConfirmed: false, assignments: getAssignments(),
        completed: {}, transfers: {}, transactions: []
    };
    monthData.transactions = monthData.transactions || [];
    let changed = false;
    expenses.forEach(expense => {
        const transactionId = "recurring-" + expense.id + "-" + month;
        if (expense.lastAppliedMonth === month ||
            ledger.some(item => String(item.id) === transactionId)) {
            expense.lastAppliedMonth = month;
            return;
        }
        if (Number(todayKey().slice(-2)) < Number(expense.day)) {
            return;
        }
        const recurringAmount = Number(expense.amount);
        if (!BANKS.includes(expense.bank) ||
            !Number.isInteger(recurringAmount) ||
            recurringAmount <= 0 || recurringAmount > MAX_AMOUNT ||
            !Number.isInteger(Number(expense.day)) ||
            Number(expense.day) < 1 || Number(expense.day) > 28 ||
            balances[expense.bank] < recurringAmount) {
            rolloverNotice = "A recurring expense is waiting for valid funds or settings.";
            return;
        }
        const date = month + "-" + String(expense.day).padStart(2, "0");
        const transaction = {
            id: transactionId, date: date, month: month, type: "expense",
            amount: recurringAmount, bank: expense.bank,
            category: expense.category, description: expense.description,
            recurring: true
        };
        balances[expense.bank] -= recurringAmount;
        ledger.push(transaction);
        monthData.transactions.push(transaction);
        const dayExpenses = loadExpensesForDate(date);
        dayExpenses.push(transaction);
        saveExpensesForDate(date, dayExpenses);
        expense.lastAppliedMonth = month;
        changed = true;
    });
    if (changed) {
        saveBalances(balances);
        saveLedger(ledger);
        saveMonthData(monthData);
    }
    saveRecurringExpenses(expenses);
    return changed;
}

function loadRecurringIncome() {
    try {
        const data = JSON.parse(localStorage.getItem(RECURRING_INCOME_KEY) || "[]");
        return Array.isArray(data) ? data : [];
    } catch {
        return [];
    }
}

function saveRecurringIncome(items) {
    localStorage.setItem(RECURRING_INCOME_KEY, JSON.stringify(items));
}

function renderRecurringIncome() {
    const list = document.getElementById("recurringIncomeList");
    if (!list) {
        return;
    }
    const items = loadRecurringIncome();
    list.innerHTML = items.length
        ? items.map(item =>
            '<div class="recurring-item"><div class="recurring-copy"><strong>' +
            escapeHtml(item.description) + '</strong><div class="label">' +
            money(item.amount) + " · " + escapeHtml(item.bank) + " · day " +
            escapeHtml(item.day) + "</div></div><button type=\"button\" " +
            'class="recurring-delete" data-recurring-income-id="' +
            escapeHtml(item.id) + '">Remove</button></div>'
        ).join("")
        : '<div class="empty">No recurring income configured.</div>';
    list.querySelectorAll("[data-recurring-income-id]").forEach(button => {
        button.addEventListener("click", () => {
            saveRecurringIncome(loadRecurringIncome().filter(item =>
                String(item.id) !== String(button.dataset.recurringIncomeId)));
            renderRecurringIncome();
            setMessage("Recurring income removed.");
        });
    });
    applyLanguage();
}

function addRecurringIncome() {
    const description = document.getElementById("recurringIncomeDescription").value.trim();
    const amount = Number(document.getElementById("recurringIncomeAmount").value);
    const bank = document.getElementById("recurringIncomeBank").value;
    const day = Number(document.getElementById("recurringIncomeDay").value);
    if (!description || description.length > 120 || !Number.isInteger(amount) ||
        amount <= 0 || amount > MAX_AMOUNT || !BANKS.includes(bank) ||
        !Number.isInteger(day) || day < 1 || day > 28) {
        alert("Enter a description, a whole amount up to 1,000,000,000, a valid bank, and a day from 1 to 28.");
        return;
    }
    const items = loadRecurringIncome();
    items.push({
        id: String(Date.now()) + "-" + Math.random().toString(36).slice(2),
        description: description, amount: amount, bank: bank, day: day,
        lastAppliedMonth: null
    });
    saveRecurringIncome(items);
    document.getElementById("recurringIncomeDescription").value = "";
    document.getElementById("recurringIncomeAmount").value = "";
    document.getElementById("recurringIncomeDay").value = "";
    renderRecurringIncome();
    if (applyRecurringIncome()) {
        updateAll();
    }
    setMessage("Recurring income added.");
}

function applyRecurringIncome() {
    if (monthKey() !== currentMonthKey()) {
        return false;
    }
    if (isMonthClosed()) {
        return false;
    }
    const month = monthKey();
    const items = loadRecurringIncome();
    if (!items.length || Number(todayKey().slice(-2)) < 1) {
        return false;
    }
    const balances = getBalances();
    const ledger = loadLedger();
    const monthData = loadMonthData() || {
        month: month, income: 0, mainBank: null,
        incomeConfirmed: false, assignments: getAssignments(),
        completed: {}, transfers: {}, transactions: []
    };
    monthData.transactions = monthData.transactions || [];
    let changed = false;
    items.forEach(item => {
        const transactionId = "recurring-income-" + item.id + "-" + month;
        if (item.lastAppliedMonth === month ||
            ledger.some(transaction => String(transaction.id) === transactionId)) {
            item.lastAppliedMonth = month;
            return;
        }
        if (Number(todayKey().slice(-2)) < Number(item.day) ||
            !BANKS.includes(item.bank) || !Number.isInteger(Number(item.amount)) ||
            Number(item.amount) <= 0 || Number(item.amount) > MAX_AMOUNT) {
            return;
        }
        const transaction = {
            id: transactionId,
            date: month + "-" + String(item.day).padStart(2, "0"),
            month: month,
            type: "income",
            amount: Number(item.amount),
            bank: item.bank,
            category: null,
            description: item.description,
            recurring: true
        };
        balances[item.bank] += transaction.amount;
        ledger.push(transaction);
        monthData.transactions.push(transaction);
        item.lastAppliedMonth = month;
        changed = true;
    });
    if (changed) {
        saveBalances(balances);
        saveLedger(ledger);
        saveMonthData(monthData);
    }
    saveRecurringIncome(items);
    return changed;
}

function loadSavingsGoals() {
    try {
        const data = JSON.parse(localStorage.getItem(SAVINGS_GOALS_KEY) || "[]");
        return Array.isArray(data) ? data : [];
    } catch {
        return [];
    }
}

function saveSavingsGoals(goals) {
    localStorage.setItem(SAVINGS_GOALS_KEY, JSON.stringify(goals));
}

function renderSavingsGoals() {
    const list = document.getElementById("savingsGoalsList");
    if (!list) {
        return;
    }
    const undoButton = document.getElementById("undoGoalContributionButton");
    if (undoButton) {
        undoButton.hidden = !localStorage.getItem(LAST_GOAL_CONTRIBUTION_KEY);
    }
    const goals = loadSavingsGoals();
    list.innerHTML = goals.length ? goals.map(goal => {
        const target = Math.max(1, Number(goal.target) || 1);
        const saved = Math.min(target, Math.max(0, Number(goal.saved) || 0));
        const monthly = Math.max(0, Number(goal.monthly) || 0);
        const remaining = Math.max(0, target - saved);
        const percent = Math.min(100, Math.round(saved / target * 100));
        const etaMonths = monthly > 0 && remaining > 0 ? Math.ceil(remaining / monthly) : 0;
        const eta = etaMonths > 0
            ? new Date(new Date().getFullYear(), new Date().getMonth() + etaMonths, 1)
            : null;
        const etaLabel = eta ? eta.toLocaleDateString("en-US", { month: "short", year: "numeric" }) : "Not set";
        return '<div class="goal-item"><div class="goal-heading"><strong>' +
            escapeHtml(goal.name) + '</strong><span>' + percent + '%</span></div>' +
            '<div class="goal-track"><div class="goal-progress" style="width:' +
            percent + '%"></div></div><div class="label">' + money(saved) +
            ' / ' + money(target) + '</div><div class="goal-projection"><span>6 months: ' +
            money(saved + monthly * 6) + '</span><span>1 year: ' + money(saved + monthly * 12) +
            '</span><span>Target: ' + escapeHtml(etaLabel) + '</span></div><div class="goal-actions">' +
            '<input class="goal-contribution" data-goal-id="' + escapeHtml(goal.id) +
            '" type="number" min="1" max="' + MAX_AMOUNT + '" step="1" placeholder="Add amount">' +
            '<button type="button" class="secondary-button goal-add-button" data-goal-id="' +
            escapeHtml(goal.id) + '">Add</button><button type="button" class="recurring-delete goal-delete" data-goal-id="' +
            escapeHtml(goal.id) + '">Remove</button></div></div>';
    }).join("") : '<div class="empty">No savings goals configured.</div>';
    list.querySelectorAll(".goal-add-button").forEach(button => {
        button.addEventListener("click", () => {
            const input = list.querySelector('.goal-contribution[data-goal-id="' +
                button.dataset.goalId + '"]');
            const amount = Number(input && input.value);
            const goalsNow = loadSavingsGoals();
            const goal = goalsNow.find(item => String(item.id) === String(button.dataset.goalId));
            if (!goal || !Number.isInteger(amount) || amount <= 0 || amount > MAX_AMOUNT) {
                alert("Enter a positive whole contribution.");
                return;
            }
            goal.saved = Math.min(Number(goal.target), (Number(goal.saved) || 0) + amount);
            saveSavingsGoals(goalsNow);
            renderSavingsGoals();
        });
    });
    list.querySelectorAll(".goal-delete").forEach(button => {
        button.addEventListener("click", () => {
            const goal = loadSavingsGoals().find(item =>
                String(item.id) === String(button.dataset.goalId));
            if (!goal) {
                return;
            }
            if (!confirm("Remove goal \"" + goal.name + "\"" +
                (Number(goal.saved) > 0 ? " (" + money(goal.saved) + " saved so far will no longer be tracked)?" : "?"))) {
                return;
            }
            saveSavingsGoals(loadSavingsGoals().filter(item =>
                String(item.id) !== String(button.dataset.goalId)));
            renderSavingsGoals();
        });
    });
    applyLanguage();
}

function addSavingsGoal() {
    const name = document.getElementById("goalName").value.trim();
    const target = Number(document.getElementById("goalTarget").value);
    const saved = Number(document.getElementById("goalSaved").value || 0);
    const monthly = Number(document.getElementById("goalMonthly").value || 0);
    if (!name || name.length > 80 || !Number.isInteger(target) || target <= 0 ||
        target > MAX_AMOUNT || !Number.isInteger(saved) || saved < 0 || saved > target ||
        !Number.isInteger(monthly) || monthly < 0 || monthly > MAX_AMOUNT) {
        alert("Enter a goal name, a valid target, and saved amount up to the target.");
        return;
    }
    const goals = loadSavingsGoals();
    goals.push({
        id: String(Date.now()) + "-" + Math.random().toString(36).slice(2),
        name: name, target: target, saved: saved, monthly: monthly
    });
    saveSavingsGoals(goals);
    document.getElementById("goalName").value = "";
    document.getElementById("goalTarget").value = "";
    document.getElementById("goalSaved").value = "";
    document.getElementById("goalMonthly").value = "";
    renderSavingsGoals();
    setMessage("Savings goal added.");
}

/* =========================================================
   BILLS & PAYMENT REMINDERS
========================================================= */

function loadBills() {
    try {
        const data = JSON.parse(localStorage.getItem(BILLS_KEY) || "[]");
        return Array.isArray(data) ? data : [];
    } catch {
        return [];
    }
}

function saveBills(bills) {
    localStorage.setItem(BILLS_KEY, JSON.stringify(bills));
}

function loadBillDismissals() {
    try {
        const data = JSON.parse(localStorage.getItem(BILLS_DISMISSED_KEY) || "[]");
        return Array.isArray(data) ? data : [];
    } catch {
        return [];
    }
}

function saveBillDismissals(dismissals) {
    localStorage.setItem(BILLS_DISMISSED_KEY, JSON.stringify(dismissals));
}

function loadDefaultBillBanks() {
    try {
        const data = JSON.parse(localStorage.getItem(DEFAULT_BILL_BANKS_KEY) || "{}");
        return data && typeof data === "object" ? data : {};
    } catch {
        return {};
    }
}

function saveDefaultBillBanks(banks) {
    localStorage.setItem(DEFAULT_BILL_BANKS_KEY, JSON.stringify(banks));
}

function ensureDefaultMonthlyBills() {
    if (monthKey() !== currentMonthKey()) {
        return;
    }
    const month = monthKey();
    const defaultBanks = loadDefaultBillBanks();
    const bank = selectedBank || "Bankily";
    const defaults = [
        ["Adobe", 3500, 5],
        ["ChatGPT", 350, 15],
        ["iCloud", 150, 15],
        ["Facebook", 650, 16],
        ["Wifi", 1500, 25]
    ];
    const bills = loadBills();
    let changed = false;
    defaults.forEach(([name, amount, day]) => {
        const defaultKey = name + "-" + month;
        if (loadBillDismissals().includes(defaultKey) || bills.some(bill => bill.defaultKey === defaultKey)) {
            return;
        }
        bills.push({
            id: "default-bill-" + defaultKey,
            defaultKey: defaultKey,
            name: name,
            amount: amount,
            dueDate: month + "-" + String(day).padStart(2, "0"),
            bank: defaultBanks[name] || bank,
            reminderDays: 3,
            paid: false,
            paidDate: null
        });
        changed = true;
    });
    if (recurCustomBills(bills, month)) {
        changed = true;
    }
    if (changed) {
        saveBills(bills);
    }
}

function recurCustomBills(bills, month) {
    let changed = false;
    bills.slice().forEach(bill => {
        if (bill.defaultKey || !bill.recurKey || bill.recurTemplate) {
            return;
        }
        const dueDate = new Date(String(bill.dueDate) + "T12:00:00");
        if (Number.isNaN(dueDate.getTime())) {
            return;
        }
        const billMonth = String(bill.dueDate).slice(0, 7);
        if (billMonth >= month) {
            return;
        }
        const recurKey = bill.recurKey + "-" + month;
        if (bills.some(item => item.recurKey === recurKey)) {
            return;
        }
        const day = dueDate.getDate();
        bills.push({
            id: "recur-bill-" + recurKey + "-" + Math.random().toString(36).slice(2),
            recurKey: recurKey,
            recurTemplate: bill.recurKey,
            name: bill.name,
            amount: bill.amount,
            dueDate: month + "-" + String(day).padStart(2, "0"),
            bank: bill.bank,
            reminderDays: bill.reminderDays,
            paid: false,
            paidDate: null
        });
        changed = true;
    });
    return changed;
}

function billDateLabel(date) {
    const parsed = new Date(String(date) + "T12:00:00");
    return Number.isNaN(parsed.getTime())
        ? String(date || "")
        : parsed.toLocaleDateString(currentLanguage() === "fr" ? "fr-FR"
            : currentLanguage() === "ar" ? "ar" : "en-US",
            { month: "short", day: "numeric", year: "numeric" });
}

function billDaysUntil(date) {
    const today = new Date(todayKey() + "T12:00:00");
    const due = new Date(String(date) + "T12:00:00");
    return Number.isNaN(due.getTime())
        ? Number.POSITIVE_INFINITY
        : Math.round((due - today) / 86400000);
}

function billStatusText(bill) {
    if (bill.paid) {
        return "Paid";
    }
    const days = billDaysUntil(bill.dueDate);
    if (days < 0) {
        return "Overdue by " + Math.abs(days) + " day" + (Math.abs(days) === 1 ? "" : "s");
    }
    if (days === 0) {
        return "Due today";
    }
    return "Due in " + days + " day" + (days === 1 ? "" : "s");
}

function billNeedsReminder(bill) {
    if (!bill || bill.paid) {
        return false;
    }
    const days = billDaysUntil(bill.dueDate);
    const reminderDays = Math.max(0, Number(bill.reminderDays) || 0);
    return days <= reminderDays;
}

function billItemHtml(bill, compact) {
    const status = billStatusText(bill);
    const statusClass = bill.paid ? "bill-paid"
        : billDaysUntil(bill.dueDate) < 0 ? "bill-overdue" : "bill-upcoming";
    const parsedDate = new Date(String(bill.dueDate) + "T12:00:00");
    const dueMonth = Number.isNaN(parsedDate.getTime()) ? "—" :
        parsedDate.toLocaleDateString(currentLanguage() === "fr" ? "fr-FR"
            : currentLanguage() === "ar" ? "ar" : "en-US", { month: "short" }).toUpperCase();
    const dueDay = Number.isNaN(parsedDate.getTime()) ? "—" : parsedDate.getDate();
    const paidNote = bill.paid && bill.paidDate
        ? '<div class="bill-paid-note">Paid on ' + escapeHtml(billDateLabel(bill.paidDate)) + '</div>' : "";
    return '<article class="bill-item ' + statusClass + '">' +
        '<div class="bill-date-block"><span>' + escapeHtml(dueMonth) + '</span><strong>' + escapeHtml(String(dueDay)) + '</strong></div>' +
        '<div class="bill-copy"><div class="bill-title-row"><strong>' + escapeHtml(bill.name) + '</strong>' +
        '<span class="bill-status-pill">' + escapeHtml(bill.paid ? "Paid" : status) + '</span></div>' +
        '<div class="bill-meta"><strong>' + money(bill.amount) + '</strong><span class="bill-meta-dot">•</span><span class="bill-bank-tag">' +
        escapeHtml(bill.bank || "No bank") + '</span></div>' +
        paidNote + '</div>' +
        (compact && bill.paid ? "" :
            '<div class="bill-actions">' +
            (bill.paid ? '<button type="button" class="secondary-button bill-action" data-bill-action="unpay" data-bill-id="' +
                escapeHtml(bill.id) + '" data-bill-name="' + escapeHtml(bill.name) + '">Mark unpaid</button>' :
                '<button type="button" class="primary-button bill-action" data-bill-action="pay" data-bill-id="' +
                escapeHtml(bill.id) + '" data-bill-name="' + escapeHtml(bill.name) + '">Mark paid</button>') +
            '<button type="button" class="secondary-button bill-action" data-bill-action="edit" data-bill-id="' +
            escapeHtml(bill.id) + '">Edit</button>' +
            '<button type="button" class="recurring-delete bill-action" data-bill-action="delete" data-bill-id="' +
            escapeHtml(bill.id) + '">Remove</button></div>') + '</article>';
}

function renderBillItems(list, bills, compact, options) {
    if (!list) {
        return;
    }
    const opts = options || {};
    const bankFilter = opts.bank || "all";
    const statusFilter = opts.status || "all";
    const sortOrder = opts.sort || "dueDate";

    let filtered = bills.slice();
    if (bankFilter !== "all") {
        filtered = filtered.filter(bill => bill.bank === bankFilter);
    }
    if (statusFilter === "paid") {
        filtered = filtered.filter(bill => bill.paid);
    } else if (statusFilter === "unpaid") {
        filtered = filtered.filter(bill => !bill.paid);
    } else if (statusFilter === "overdue") {
        filtered = filtered.filter(bill => !bill.paid && billDaysUntil(bill.dueDate) < 0);
    }

    if (!filtered.length) {
        list.innerHTML = '<div class="empty">No bills match this filter.</div>';
        return;
    }

    if (sortOrder !== "dueDate") {
        const sorted = filtered.slice().sort((a, b) => {
            if (sortOrder === "amountDesc") {
                return (Number(b.amount) || 0) - (Number(a.amount) || 0);
            }
            if (sortOrder === "amountAsc") {
                return (Number(a.amount) || 0) - (Number(b.amount) || 0);
            }
            if (sortOrder === "name") {
                return String(a.name || "").localeCompare(String(b.name || ""));
            }
            return 0;
        });
        list.innerHTML = sorted.map(bill => billItemHtml(bill, compact)).join("");
        attachBillActionHandlers(list);
        return;
    }

    const sorted = filtered.slice().sort((a, b) =>
        String(a.dueDate).localeCompare(String(b.dueDate)));
    const groups = [
        { key: "overdue", label: "Overdue", bills: [] },
        { key: "soon", label: "Due soon", bills: [] },
        { key: "upcoming", label: "Upcoming", bills: [] },
        { key: "paid", label: "Paid", bills: [] }
    ];
    sorted.forEach(bill => {
        if (bill.paid) {
            groups[3].bills.push(bill);
        } else if (billDaysUntil(bill.dueDate) < 0) {
            groups[0].bills.push(bill);
        } else if (billDaysUntil(bill.dueDate) <= 7) {
            groups[1].bills.push(bill);
        } else {
            groups[2].bills.push(bill);
        }
    });
    list.innerHTML = groups.filter(group => group.bills.length).map(group =>
        '<div class="bill-group"><div class="bill-group-header"><span>' + group.label + '</span>' +
        '<span class="bill-group-count">' + group.bills.length + ' bill' + (group.bills.length === 1 ? '' : 's') + '</span></div>' +
        group.bills.map(bill => billItemHtml(bill, compact)).join("") + '</div>'
    ).join("");
    attachBillActionHandlers(list);
}

function attachBillActionHandlers(list) {
    list.querySelectorAll(".bill-action").forEach(button => {
        button.addEventListener("click", () => {
            const id = String(button.dataset.billId);
            const action = button.dataset.billAction;
            if (action === "delete") {
                if (!requireOpenMonth("removing a bill")) {
                    return;
                }
                const updated = loadBills();
                const bill = updated.find(item => String(item.id) === id);
                if (!bill) {
                    return;
                }
                if (!confirm("Remove \"" + bill.name + "\"" +
                    (bill.paid ? " and refund " + money(bill.amount) + " to " + bill.bank + "?" : "?"))) {
                    return;
                }
                captureUndoState("Bill removed");
                if (bill.paid) {
                    const transactionId = "bill-payment-" + bill.id;
                    const transaction = loadLedger().find(item =>
                        item.id === transactionId || item.billId === bill.id);
                    if (transaction && BANKS.includes(transaction.bank)) {
                        const balances = getBalances();
                        balances[transaction.bank] += Number(transaction.amount) || 0;
                        saveBalances(balances);
                    }
                    saveLedger(loadLedger().filter(item =>
                        item.id !== transactionId && item.billId !== bill.id));
                    const monthData = loadMonthData();
                    if (monthData?.transactions) {
                        monthData.transactions = monthData.transactions.filter(item =>
                            item.id !== transactionId && item.billId !== bill.id);
                        saveMonthData(monthData);
                    }
                }
                if (bill.defaultKey) {
                    const dismissals = loadBillDismissals();
                    if (!dismissals.includes(bill.defaultKey)) {
                        dismissals.push(bill.defaultKey);
                        saveBillDismissals(dismissals);
                    }
                }
                saveBills(updated.filter(item => String(item.id) !== id));
                renderBills();
                updateDashboardBills();
                checkBillReminders();
                updateAll();
                setMessage("Bill removed.");
                return;
            }
            if (action === "edit") {
                beginBillEdit(id);
                return;
            }
            applyBillPaymentAction(id, action);
        });
    });
}

function applyBillPaymentAction(id, action) {
    if (!requireOpenMonth(action === "pay" ? "marking a bill paid" : "marking a bill unpaid")) {
        return false;
    }
    const updated = loadBills();
    const bill = updated.find(item => String(item.id) === id);
    if (!bill) {
        return false;
    }
    if (action === "pay" && !bill.paid) {
        const balances = getBalances();
        if (!BANKS.includes(bill.bank) ||
            !Number.isInteger(Number(bill.amount)) ||
            Number(bill.amount) <= 0 ||
            balances[bill.bank] < Number(bill.amount)) {
            alert("Not enough money in " + bill.bank + " to mark this bill paid.");
            return false;
        }
        const transaction = {
            id: "bill-payment-" + bill.id,
            date: todayKey(),
            month: monthKey(),
            type: "expense",
            amount: Number(bill.amount),
            bank: bill.bank,
            category: "OTHER",
            description: "Bill: " + bill.name,
            billId: bill.id
        };
        balances[bill.bank] -= transaction.amount;
        saveBalances(balances);
        saveLedger(loadLedger().filter(item =>
            item.id !== transaction.id && item.billId !== bill.id));
        addLedgerTransaction(transaction);
        const monthData = loadMonthData() || {
            month: monthKey(), income: 0, mainBank: selectedBank,
            incomeConfirmed: false, assignments: getAssignments(),
            completed: {}, transfers: {}, transactions: []
        };
        monthData.transactions = (monthData.transactions || [])
            .filter(item => item.id !== transaction.id);
        monthData.transactions.push(transaction);
        saveMonthData(monthData);
    } else if (action === "unpay" && bill.paid) {
        const transactionId = "bill-payment-" + bill.id;
        const transaction = loadLedger().find(item =>
            item.id === transactionId ||
            item.billId === bill.id);
        if (transaction && BANKS.includes(transaction.bank)) {
            const balances = getBalances();
            balances[transaction.bank] += Number(transaction.amount) || 0;
            saveBalances(balances);
        }
        saveLedger(loadLedger().filter(item =>
            item.id !== transactionId && item.billId !== bill.id));
        const monthData = loadMonthData();
        if (monthData?.transactions) {
            monthData.transactions = monthData.transactions.filter(item =>
                item.id !== transactionId && item.billId !== bill.id);
            saveMonthData(monthData);
        }
    }
    bill.paid = action === "pay";
    bill.paidDate = bill.paid ? todayKey() : null;
    saveBills(updated);
    renderBills();
    updateDashboardBills();
    checkBillReminders();
    setMessage(bill.paid ? "Bill marked paid." : "Bill marked unpaid.");
    return true;
}

function getBillFilterOptions() {
    return {
        bank: document.getElementById("billFilterBank")?.value || "all",
        status: document.getElementById("billFilterStatus")?.value || "all",
        sort: document.getElementById("billSortOrder")?.value || "dueDate"
    };
}

function renderBills() {
    ensureDefaultMonthlyBills();
    const bills = loadBills();
    renderBillItems(document.getElementById("billsList"), bills, false, getBillFilterOptions());
    const unpaid = bills.filter(bill => !bill.paid);
    const nextBill = unpaid.slice().sort((a, b) =>
        String(a.dueDate).localeCompare(String(b.dueDate)))[0];
    const overviewTotal = document.getElementById("billOverviewTotal");
    const overviewTotalHint = document.getElementById("billOverviewTotalHint");
    const overviewUnpaid = document.getElementById("billOverviewUnpaid");
    const overviewUnpaidHint = document.getElementById("billOverviewUnpaidHint");
    const overviewNext = document.getElementById("billOverviewNext");
    const overviewNextHint = document.getElementById("billOverviewNextHint");
    const listCount = document.getElementById("billListCount");
    if (overviewTotal) {
        overviewTotal.textContent = money(bills.reduce((sum, bill) => sum + Number(bill.amount || 0), 0));
    }
    if (overviewTotalHint) {
        overviewTotalHint.textContent = bills.length + " bill" + (bills.length === 1 ? "" : "s");
    }
    if (overviewUnpaid) {
        overviewUnpaid.textContent = money(unpaid.reduce((sum, bill) => sum + Number(bill.amount || 0), 0));
    }
    if (overviewUnpaidHint) {
        overviewUnpaidHint.textContent = unpaid.length + " unpaid";
    }
    if (overviewNext) {
        overviewNext.textContent = nextBill ? billDateLabel(nextBill.dueDate).replace(/, \d{4}$/, "") : "—";
    }
    if (overviewNextHint) {
        overviewNextHint.textContent = nextBill ? nextBill.name : "Nothing scheduled";
    }
    if (listCount) {
        listCount.textContent = bills.length + " bill" + (bills.length === 1 ? "" : "s");
    }
    const summary = document.getElementById("homeBillsSummary");
    if (summary) {
        summary.textContent = unpaid.length
            ? unpaid.length + " unpaid · " + money(
                unpaid.reduce((sum, bill) => sum + Number(bill.amount || 0), 0))
            : "All bills paid";
    }
    checkBillReminders();
}

function updateDashboardBills() {
    const totalElement = document.getElementById("dashboardBills");
    const statusElement = document.getElementById("dashboardBillsStatus");
    const guideElement = document.getElementById("dashboardBillsGuide");
    if (!totalElement || !statusElement) {
        return;
    }
    const bills = loadBills();
    const paid = bills.filter(bill => bill.paid);
    const unpaid = bills.filter(bill => !bill.paid);
    const unpaidTotal = unpaid.reduce((sum, bill) => sum + Number(bill.amount || 0), 0);
    totalElement.textContent = money(unpaidTotal);
    totalElement.classList.toggle("negative", unpaidTotal > 0);
    totalElement.classList.remove("positive");
    statusElement.textContent = paid.length + " paid · " + unpaid.length + " unpaid";
    if (guideElement) {
        guideElement.hidden = unpaidTotal <= 0;
        guideElement.textContent = unpaidTotal > 0
            ? "Keep " + money(unpaidTotal) + " reserved for bills. This is separate from P, C & T spending money."
            : "";
    }
}

function checkBillReminders() {
    if (!loadNotificationPrefs().bills) {
        const notice = document.getElementById("nextBillNotice");
        if (notice) {
            notice.hidden = true;
            notice.innerHTML = "";
        }
        return;
    }
    renderNextBillNotice();
}

function renderNextBillNotice() {
    const notice = document.getElementById("nextBillNotice");
    if (!notice) {
        return;
    }
    const upcoming = loadBills()
        .filter(bill => !bill.paid)
        .sort((a, b) => String(a.dueDate).localeCompare(String(b.dueDate)))[0];
    if (!upcoming) {
        notice.hidden = true;
        notice.innerHTML = "";
        return;
    }
    notice.hidden = false;
    notice.innerHTML = '<div class="label">Next bill</div>' +
        '<div class="next-bill-row"><strong>' + escapeHtml(upcoming.name) + '</strong>' +
        '<span>' + money(upcoming.amount) + ' · ' + escapeHtml(billStatusText(upcoming)) + '</span></div>';
}

function addBill() {
    const name = document.getElementById("billName").value.trim();
    const amount = Number(document.getElementById("billAmount").value);
    const dueDate = document.getElementById("billDueDate").value;
    const bank = document.getElementById("billBank").value;
    const reminderDays = Number(document.getElementById("billReminderDays").value || 3);
    if (!name || name.length > 100 || !Number.isInteger(amount) ||
        amount <= 0 || amount > MAX_AMOUNT || !dueDate || !BANKS.includes(bank) ||
        !Number.isInteger(reminderDays) || reminderDays < 0 || reminderDays > 30) {
        alert("Enter a bill name, a whole amount, a due date, a bank, and a reminder from 0 to 30 days.");
        return;
    }
    const bills = loadBills();
    const addButton = document.getElementById("addBillButton");
    const editingId = addButton.dataset.editingId;
    const existing = editingId ? bills.find(bill => String(bill.id) === editingId) : null;
    if (existing) {
        const oldName = existing.name;
        existing.name = name;
        existing.amount = amount;
        existing.dueDate = dueDate;
        existing.bank = bank;
        existing.reminderDays = reminderDays;
        if (existing.defaultKey) {
            const defaultBanks = loadDefaultBillBanks();
            defaultBanks[oldName] = bank;
            saveDefaultBillBanks(defaultBanks);
        }
    } else {
        bills.push({
            id: String(Date.now()) + "-" + Math.random().toString(36).slice(2),
            name: name,
            amount: amount,
            dueDate: dueDate,
            bank: bank,
            reminderDays: reminderDays,
            recurKey: "custom-" + String(Date.now()) + "-" + Math.random().toString(36).slice(2),
            paid: false,
            paidDate: null
        });
    }
    saveBills(bills);
    ["billName", "billAmount", "billDueDate"].forEach(id => {
        document.getElementById(id).value = "";
    });
    document.getElementById("billReminderDays").value = "3";
    addButton.textContent = "Add bill";
    delete addButton.dataset.editingId;
    document.getElementById("cancelBillEditButton").hidden = true;
    renderBills();
    setMessage(existing ? "Bill updated." : "Bill added.");
}

function beginBillEdit(id) {
    const bill = loadBills().find(item => String(item.id) === String(id));
    if (!bill) {
        return;
    }
    document.getElementById("billName").value = bill.name || "";
    document.getElementById("billAmount").value = bill.amount || "";
    document.getElementById("billDueDate").value = bill.dueDate || "";
    document.getElementById("billBank").value = bill.bank || "Bankily";
    document.getElementById("billReminderDays").value = bill.reminderDays ?? 3;
    document.getElementById("addBillButton").dataset.editingId = bill.id;
    document.getElementById("addBillButton").textContent = "Save bill";
    document.getElementById("cancelBillEditButton").hidden = false;
    document.getElementById("billName").focus();
}

function cancelBillEdit() {
    ["billName", "billAmount", "billDueDate"].forEach(id => {
        document.getElementById(id).value = "";
    });
    document.getElementById("billReminderDays").value = "3";
    document.getElementById("addBillButton").textContent = "Add bill";
    delete document.getElementById("addBillButton").dataset.editingId;
    document.getElementById("cancelBillEditButton").hidden = true;
}

/* =========================================================
   FIRST-TIME SETUP & BACKUP REMINDERS
========================================================= */

let setupStep = 1;

function showSetupWizard() {
    const wizard = document.getElementById("setupWizard");
    if (!wizard) {
        return;
    }
    setupStep = 1;
    wizard.hidden = false;
    renderSetupStep();
}

function renderSetupStep() {
    document.querySelectorAll(".setup-step").forEach(step => {
        step.hidden = Number(step.dataset.step) !== setupStep;
    });
    document.querySelectorAll(".setup-progress span").forEach((bar, index) => {
        bar.classList.toggle("active", index < setupStep);
    });
    const back = document.getElementById("setupBackButton");
    const next = document.getElementById("setupNextButton");
    if (back) {
        back.hidden = setupStep === 1;
    }
    if (next) {
        next.textContent = setupStep === 3 ? "Finish setup" : "Continue";
    }
}

function finishSetup() {
    const income = Math.max(0, Math.round(Number(
        document.getElementById("wizardIncomeInput").value) || 0));
    const bank = document.getElementById("wizardBankSelect").value;
    const existing = loadMonthData();
    if (income > 0 && BANKS.includes(bank) && !existing?.incomeConfirmed) {
        document.getElementById("incomeInput").value = income;
        selectedBank = bank;
        if (!existing) {
            saveCurrentMonth();
        }
        const data = loadMonthData();
        if (data) {
            data.mainBank = bank;
            data.income = income;
            data.incomeConfirmed = false;
            saveMonthData(data);
        }
    }
    const interval = document.getElementById("wizardBackupInterval").value;
    localStorage.setItem(BACKUP_INTERVAL_KEY, interval);
    localStorage.setItem(SETUP_KEY, "true");
    document.getElementById("setupWizard").hidden = true;
    loadMonth();
    setMessage("Setup complete. You can change these choices in Settings.");
}

function advanceSetup() {
    if (setupStep === 2) {
        const income = Number(document.getElementById("wizardIncomeInput").value || 0);
        if (!Number.isInteger(income) || income < 0 || income > MAX_AMOUNT) {
            alert("Enter a valid whole income amount, or leave it at 0 to skip.");
            return;
        }
    }
    if (setupStep < 3) {
        setupStep += 1;
        renderSetupStep();
    } else {
        finishSetup();
    }
}

function checkBackupReminder() {
    const reminder = document.getElementById("backupReminder");
    if (!reminder) {
        return;
    }
    const interval = localStorage.getItem(BACKUP_INTERVAL_KEY) || "30";
    const last = Date.parse(localStorage.getItem(BACKUP_LAST_KEY) || "");
    const snoozedUntil = Date.parse(localStorage.getItem(BACKUP_SNOOZE_KEY) || "");
    const hasData = localStorage.length > 2;
    const due = loadNotificationPrefs().backup && interval !== "never" &&
        (!Number.isFinite(last) || Date.now() - last >= Number(interval) * 86400000) &&
        (!Number.isFinite(snoozedUntil) || Date.now() >= snoozedUntil);
    reminder.hidden = !hasData || !due;
    renderBackupIntegrityStatus();
}

function checkBalanceCheckReminder() {
    const reminder = document.getElementById("balanceCheckReminder");
    if (!reminder) {
        return;
    }
    const hasData = hasExistingAppData();
    const today = new Date();
    const dayOfMonth = today.getDate();
    reminder.hidden = !hasData || dayOfMonth < 3 || !balanceCheckDueForCurrentMonth();
}

function renderBackupIntegrityStatus() {
    const status = document.getElementById("backupIntegrityStatus");
    if (!status) {
        return;
    }
    const last = localStorage.getItem(BACKUP_LAST_KEY);
    const parsed = Date.parse(last || "");
    status.textContent = Number.isFinite(parsed)
        ? "Last verified export: " + new Date(parsed).toLocaleString() + " · format v" + BACKUP_VERSION
        : "No verified export recorded on this device.";
    const summary = document.getElementById("backupContentsSummary");
    if (summary) {
        const months = Object.keys(localStorage).filter(key => key.indexOf("itoumrou_month_") === 0).length;
        summary.textContent = "Backup includes " + loadLedger().length + " transactions, " +
            loadBills().length + " bills, and " + months + " saved month" + (months === 1 ? "" : "s") + ".";
    }
}

function snoozeBackupReminder() {
    localStorage.setItem(BACKUP_SNOOZE_KEY,
        new Date(Date.now() + 7 * 86400000).toISOString());
    checkBackupReminder();
    setMessage("Backup reminder snoozed for one week.");
}

function hasExistingAppData() {
    const knownKeys = [LEDGER_KEY, "itoumrou_balances", RECURRING_KEY,
        RECURRING_INCOME_KEY, SAVINGS_GOALS_KEY, BILLS_KEY];
    if (knownKeys.some(key => localStorage.getItem(key))) {
        return true;
    }
    for (let index = 0; index < localStorage.length; index += 1) {
        const key = localStorage.key(index);
        if (key && (key.indexOf("itoumrou_month_") === 0 ||
            key.indexOf("itoumrou_expenses_") === 0)) {
            return true;
        }
    }
    return false;
}


function renderQuickAddExpenses() {
    const container = document.getElementById("quickAddExpenses");
    if (!container) {
        return;
    }

    const ledger = getAllLedgerTransactions();
    const counts = new Map();
    ledger
        .filter(transaction => transaction.type === "expense" &&
            transaction.transferKind !== "assignment_payment" &&
            transaction.transferKind !== "balance_correction" &&
            transaction.description)
        .forEach(transaction => {
            const key = [transaction.description.toLowerCase(),
                transaction.category || "OTHER", transaction.bank].join("|");
            if (!counts.has(key)) {
                counts.set(key, {
                    description: transaction.description,
                    category: transaction.category,
                    bank: transaction.bank,
                    amount: transaction.amount,
                    count: 0
                });
            }
            const entry = counts.get(key);
            entry.count += 1;
            entry.amount = transaction.amount;
        });

    const top = [...counts.values()]
        .filter(entry => entry.count >= 2)
        .sort((first, second) => second.count - first.count)
        .slice(0, 5);

    if (!top.length) {
        container.innerHTML = "";
        return;
    }

    container.innerHTML = '<div class="label">Quick add</div>' +
        '<div class="quick-add-buttons"></div>';
    const buttonsBox = container.querySelector(".quick-add-buttons");
    top.forEach(entry => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "quick-add-chip";
        button.textContent = entry.description + " · " + money(entry.amount);
        button.addEventListener("click", () => {
            addExpenseRow(entry);
        });
        buttonsBox.appendChild(button);
    });
}

function setExpenseBankFromCategory(row) {

    const category =
        row.querySelector(
            ".expense-category-input"
        )?.value;

    const bankInput =
        row.querySelector(
            ".expense-bank-input"
        );

    const destination =
        DESTINATIONS[category];
    const guide = row.querySelector(".expense-category-guide");
    if (guide) {
        if (["T", "C"].includes(category)) {
            const planned = Number(
                loadMonthData()?.assignments?.[category] ??
                DEFAULT_CATEGORIES[category]
            ) || 0;
            const daily = Math.round(planned / daysInSelectedMonth());
            guide.textContent = CATEGORY_NAMES[category] +
                " guide: about " + money(daily) + " per day.";
        } else if (category === "P") {
            guide.textContent = "Personal needs are paid from Click.";
        } else {
            guide.textContent = "";
        }
    }

    if (!bankInput) {
        return;
    }

    if (destination) {

        bankInput.value = destination;
        bankInput.disabled = true;
        bankInput.title =
            "This category is paid automatically from " +
            destination + ".";

    } else {

        bankInput.disabled = false;
        bankInput.title = "";

    }

}


function addExpenseRow(prefill) {
    if (!requireOpenMonth("adding spending")) {
        return;
    }

    const list =
        document.getElementById(
            "expenseList"
        );

    const row =
        document.createElement(
            "div"
        );

    row.className =
        "expense-form";

    row.innerHTML = `

        <label class="label">
            Amount
        </label>

        <input
            type="number"
            min="1"
            max="${MAX_AMOUNT}"
            step="1"
            class="expense-amount-input"
            placeholder="Amount"
        >


        <label
            class="label"
            style="margin-top:10px;"
        >
            What did you spend on?
        </label>

        <input
            type="text"
            class="expense-description-input"
            placeholder="Example: Taxi ride"
        >


        <label
            class="label"
            style="margin-top:10px;"
        >
            Category
        </label>

        <select class="expense-category-input">

            <option value="T">
                T — Taxi
            </option>

            <option value="C">
                C — Cigar
            </option>

            <option value="P">
                P — Personal needs
            </option>

            <option value="OTHER">
                Other
            </option>

        </select>
        <div class="expense-category-guide label" role="status"></div>

        <label
            class="label"
            style="margin-top:10px;"
        >
            Paid from
        </label>

        <select class="expense-bank-input">

            ${BANKS.map(bank => `
                <option value="${bank}">
                    ${bank}
                </option>
            `).join("")}

        </select>


        <button
            type="button"
            class="expense-remove"
        >
            Remove expense
        </button>

    `;


    row
        .querySelector(
            ".expense-remove"
        )
        .addEventListener(
            "click",
            () => {

                row.remove();

                updatePendingExpenseTotal();

            }
        );

    row
        .querySelector(
            ".expense-amount-input"
        )
        .addEventListener(
            "input",
            updatePendingExpenseTotal
        );


    row
        .querySelector(
            ".expense-category-input"
        )
        .addEventListener(
            "change",
            () => {
                setExpenseBankFromCategory(row);
            }
        );


    setExpenseBankFromCategory(row);

    if (prefill) {
        const amountInput = row.querySelector(".expense-amount-input");
        const descriptionInput = row.querySelector(".expense-description-input");
        const categorySelect = row.querySelector(".expense-category-input");
        const bankSelect = row.querySelector(".expense-bank-input");
        if (amountInput) amountInput.value = prefill.amount || "";
        if (descriptionInput) descriptionInput.value = prefill.description || "";
        if (categorySelect && prefill.category) {
            categorySelect.value = prefill.category;
            setExpenseBankFromCategory(row);
        }
        if (bankSelect && !bankSelect.disabled && prefill.bank) {
            bankSelect.value = prefill.bank;
        }
    }

    list.appendChild(row);
    updatePendingExpenseTotal();
}

function readReceiptFile(file) {
    return new Promise((resolve, reject) => {
        if (!file) {
            resolve("");
            return;
        }
        if (!file.type.startsWith("image/") || file.size > 2 * 1024 * 1024) {
            reject(new Error("Receipt photos must be images smaller than 2 MB."));
            return;
        }
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result || ""));
        reader.onerror = () => reject(new Error("The receipt photo could not be read."));
        reader.readAsDataURL(file);
    });
}

function updatePendingExpenseTotal() {

    const rows =
        document.querySelectorAll(
            "#expenseList .expense-form"
        );

    let total = 0;

    rows.forEach(row => {

        const amount =
            Math.max(
                0,
                Math.round(
                    Number(
                        row.querySelector(
                            ".expense-amount-input"
                        )?.value
                    ) || 0
                )
            );

        total += amount;

    });


    const pendingBox =
        document.getElementById(
            "todayPendingBox"
        );

    const pendingElement =
        document.getElementById(
            "todayPendingTotal"
        );

    if (
        pendingBox &&
        pendingElement
    ) {
        pendingElement.textContent =
            money(total);

        pendingBox.style.display =
            total > 0
            ? "block"
            : "none";

    }

}

function nothingSpentToday() {
    if (!requireOpenMonth("confirming today's spending")) {
        return;
    }

    const spendingKey =
        "itoumrou_spending_confirmed_" +
        todayKey();

    const nothingKey =
        "itoumrou_nothing_spent_" +
        todayKey();


    if (
        localStorage.getItem(spendingKey) === "true"
    ) {

        alert(
            "Today's spending has already been confirmed."
        );

        return;

    }


    localStorage.setItem(
        nothingKey,
        "true"
    );


    document.getElementById(
        "expenseList"
    ).innerHTML = "";


    updatePendingExpenseTotal();


    alert(
        "No spending recorded for today. " +
        "You can still add an expense later today."
    );

}

function renderExpenseList() {

    renderQuickAddExpenses();

    const list =
        document.getElementById(
            "expenseList"
        );

    list.innerHTML = "";

    const expenses =
        loadExpenses();

    if (expenses.length === 0) {
        list.innerHTML =
            '<div class="empty">No expenses added yet today.</div>';
        updateTodayTotal();
        return;
    }

    const groupOrder = ["T", "C", "P"];
    const groups = new Map();
    expenses.forEach(expense => {
        const key = expense.category || "OTHER";
        if (!groups.has(key)) {
            groups.set(key, []);
        }
        groups.get(key).push(expense);
    });
    const orderedKeys = [
        ...groupOrder.filter(key => groups.has(key)),
        ...[...groups.keys()].filter(key => !groupOrder.includes(key))
    ];

    orderedKeys.forEach(key => {

        const groupExpenses = groups.get(key);
        const groupTotal = groupExpenses.reduce(
            (sum, expense) => sum + Number(expense.amount || 0), 0
        );

        const groupHeader = document.createElement("div");
        groupHeader.className = "expense-group-header";
        groupHeader.innerHTML =
            '<span>' + (CATEGORY_NAMES[key] || "Other") + '</span>' +
            '<span>' + money(groupTotal) + '</span>';
        list.appendChild(groupHeader);

        groupExpenses.forEach(expense => {

            const row =
                document.createElement(
                    "div"
                );

            row.className =
                "expense-row";

            row.innerHTML = `

                <div class="expense-icon" aria-hidden="true">
                    ${expense.category || "•"}
                </div>

                <div class="expense-body">

                    <div class="expense-main">

                        <div class="expense-description">
                            ${escapeHtml(
                                expense.description
                            )}
                        </div>

                        <div class="expense-amount negative">
                            −${money(expense.amount)}
                        </div>

                    </div>

                    <div class="expense-meta">

                        ${CATEGORY_NAMES[
                            expense.category
                        ] || "Other"}

                        · ${expense.bank}

                    </div>

                    <div class="expense-actions">
                        <button type="button" class="expense-edit"
                            data-expense-id="${expense.id}">Edit</button>
                        <button type="button" class="expense-delete"
                            data-expense-id="${expense.id}">Delete</button>
                    </div>

                </div>

            `;

            row.querySelector(".expense-edit").addEventListener(
                "click",
                () => startExpenseEdit(row, expense)
            );
            row.querySelector(".expense-delete").addEventListener(
                "click",
                () => deleteExpense(expense.id)
            );

            list.appendChild(row);

        });

    });

    updateTodayTotal();

}

function startExpenseEdit(row, expense) {
    row.innerHTML = `
        <div class="expense-edit-form">
            <input class="expense-edit-amount" type="number" min="1"
                max="${MAX_AMOUNT}" step="1" value="${expense.amount}"
                aria-label="Expense amount">
            <input class="expense-edit-description" type="text" maxlength="120"
                value="${escapeHtml(expense.description)}"
                aria-label="Expense description">
            <select class="expense-edit-category" aria-label="Expense category">
                <option value="T">T — Taxi</option>
                <option value="C">C — Cigar</option>
                <option value="P">P — Personal needs</option>
                <option value="OTHER">Other</option>
            </select>
            <select class="expense-edit-bank" aria-label="Paid from">
                ${BANKS.map(bank => '<option value="' + bank + '">' + bank + '</option>').join("")}
            </select>
            <input class="expense-edit-date" type="date" value="${escapeHtml(expense.date || todayKey())}"
                aria-label="Expense date">
            <div class="expense-actions">
                <button type="button" class="expense-save-edit">Save</button>
                <button type="button" class="expense-cancel-edit">Cancel</button>
            </div>
        </div>
    `;
    row.querySelector(".expense-save-edit").addEventListener("click", () => {
        saveEditedExpense(expense.id, row);
    });
    row.querySelector(".expense-cancel-edit").addEventListener("click", renderExpenseList);
    row.querySelector(".expense-edit-category").value = expense.category || "OTHER";
    row.querySelector(".expense-edit-bank").value = expense.bank || BANKS[0];
    row.querySelector(".expense-edit-amount").focus();
}

function saveEditedExpense(expenseId, row) {
    if (!requireOpenMonth("editing spending")) {
        return;
    }
    const expenses = loadExpenses();
    const expense = expenses.find(item => item.id === expenseId);
    const amountInput = row.querySelector(".expense-edit-amount");
    const descriptionInput = row.querySelector(".expense-edit-description");
    const categoryInput = row.querySelector(".expense-edit-category");
    const bankInput = row.querySelector(".expense-edit-bank");
    const dateInput = row.querySelector(".expense-edit-date");
    const amount = Number(amountInput?.value);
    const description = descriptionInput?.value.trim();
    const category = categoryInput?.value || "OTHER";
    const bank = bankInput?.value;
    const date = dateInput?.value;
    if (!expense || !Number.isInteger(amount) || amount <= 0 ||
        amount > MAX_AMOUNT || !description || description.length > 120 ||
        !BANKS.includes(expense.bank) || !BANKS.includes(bank) ||
        !["T", "C", "P", "OTHER"].includes(category) || !date ||
        !Number.isFinite(Number(expense.amount))) {
        alert("Enter a valid amount, description, category, bank, and date.");
        return;
    }
    const oldAmount = Number(expense.amount);
    const oldBank = expense.bank;
    const balances = getBalances();
    balances[oldBank] += oldAmount;
    if (balances[bank] < amount && bank !== oldBank) {
        alert("Not enough money in " + bank + " for this correction.");
        return;
    }
    if (bank === oldBank && balances[bank] < amount) {
        alert("Not enough money in " + bank + " for this correction.");
        return;
    }
    balances[bank] -= amount;
    const previousDescription = expense.description;
    const previousDate = expense.date;
    captureUndoState("Expense edited");
    saveBalances(balances);
    expense.amount = amount;
    expense.description = description;
    expense.category = category;
    expense.bank = bank;
    expense.date = date;
    saveExpenses(expenses);
    if (previousDate !== date) {
        saveExpensesForDate(previousDate, loadExpensesForDate(previousDate).filter(item => item.id !== expense.id));
        saveExpensesForDate(date, loadExpensesForDate(date).filter(item => item.id !== expense.id).concat(expense));
    }
    syncExpenseTransaction(expense, previousDescription, previousDate);
    renderExpenseList();
    updateAll();
}

function editExpense(expenseId) {
    if (!requireOpenMonth("editing spending")) {
        return;
    }
    const expenses = loadExpenses();
    const expense = expenses.find(item => item.id === expenseId);

    if (!expense) {
        return;
    }

    const amount = Number(
        prompt("Enter the corrected amount:", expense.amount)
    );
    const description = prompt(
        "Enter the corrected description:",
        expense.description
    );

    if (!Number.isFinite(amount) || !Number.isInteger(amount) ||
        amount <= 0 || amount > MAX_AMOUNT ||
        !description || !description.trim() || description.trim().length > 120 ||
        !BANKS.includes(expense.bank) ||
        !Number.isFinite(Number(expense.amount)) ||
        Number(expense.amount) <= 0) {
        alert("Expense was not changed. Use a whole amount up to 1,000,000,000 and a description of 1–120 characters.");
        return;
    }

    const difference = Math.round(amount) - Number(expense.amount);
    const balances = getBalances();

    if (difference > 0 && balances[expense.bank] < difference) {
        alert("Not enough money in " + expense.bank + " for this correction.");
        return;
    }

    const previousDescription = expense.description;
    captureUndoState("Expense edited");
    balances[expense.bank] -= difference;
    saveBalances(balances);
    expense.amount = Math.round(amount);
    expense.description = description.trim();
    saveExpenses(expenses);
    syncExpenseTransaction(expense, previousDescription);
    renderExpenseList();
    updateAll();

}


function deleteExpense(expenseId) {
    if (!requireOpenMonth("deleting spending")) {
        return;
    }

    const expenses = loadExpenses();
    const expense = expenses.find(item => item.id === expenseId);

    if (!expense || !confirm("Delete this expense and return the money to the bank?")) {
        return;
    }

    if (!BANKS.includes(expense.bank) ||
        !Number.isFinite(Number(expense.amount)) ||
        Number(expense.amount) <= 0) {
        alert("This expense has invalid stored data and cannot be deleted safely.");
        return;
    }
    captureUndoState("Expense deleted");
    const balances = getBalances();
    balances[expense.bank] += Number(expense.amount) || 0;
    saveBalances(balances);
    saveExpenses(expenses.filter(item => item.id !== expenseId));

    const ledger = loadLedger().filter(transaction =>
        transaction.id !== expenseId
    );
    saveLedger(ledger);

    const monthData = loadMonthData();
    if (monthData?.transactions) {
        monthData.transactions = monthData.transactions.filter(transaction =>
            transaction.id !== expenseId &&
            !(transaction.type === "expense" &&
              transaction.date === expense.date &&
              transaction.amount === expense.amount &&
              transaction.bank === expense.bank &&
              transaction.description === expense.description)
        );
        saveMonthData(monthData);
    }

    renderExpenseList();
    updateAll();

}


function syncExpenseTransaction(expense, previousDescription, previousDate) {

    const ledger = loadLedger();
    const ledgerExpense = ledger.find(transaction =>
        transaction.id === expense.id
    );

    if (ledgerExpense) {
        ledgerExpense.amount = expense.amount;
        ledgerExpense.description = expense.description;
        ledgerExpense.category = expense.category;
        ledgerExpense.bank = expense.bank;
        ledgerExpense.date = expense.date;
        ledgerExpense.month = String(expense.date || "").slice(0, 7) || ledgerExpense.month;
        saveLedger(ledger);
    }

    const monthData = loadMonthData();
    const monthExpense = monthData?.transactions?.find(transaction =>
        transaction.id === expense.id
    ) || monthData?.transactions?.find(transaction =>
        transaction.type === "expense" &&
        transaction.date === expense.date &&
        transaction.bank === expense.bank &&
        transaction.description === (previousDescription || expense.description)
    );

    if (monthExpense) {
        monthExpense.amount = expense.amount;
        monthExpense.description = expense.description;
        monthExpense.category = expense.category;
        monthExpense.bank = expense.bank;
        monthExpense.date = expense.date;
        saveMonthData(monthData);
    }

}

function updateTodayTotal() {

    const expenses =
        loadExpenses();

    const confirmedTotal =
        expenses.reduce(
            (sum, expense) =>
                sum +
                Number(
                    expense.amount || 0
                ),
            0
        );

    const confirmedElement =
        document.getElementById(
            "todayConfirmedTotal"
        );

    if (confirmedElement) {
        confirmedElement.textContent =
            money(confirmedTotal);
    }

    renderTodayCategorySummary(expenses);
    updatePendingExpenseTotal();
}

function renderTodayCategorySummary(expenses) {
    const summaryElement = document.getElementById("todayCategorySummary");
    if (!summaryElement) {
        return;
    }
    const trackedCategories = ["T", "C", "P"];
    const totals = trackedCategories.reduce((map, category) => {
        map[category] = 0;
        return map;
    }, {});
    expenses.forEach(expense => {
        if (trackedCategories.includes(expense.category)) {
            totals[expense.category] += Number(expense.amount || 0);
        }
    });
    const hasAny = trackedCategories.some(category => totals[category] > 0);
    if (!hasAny) {
        summaryElement.innerHTML = "";
        return;
    }
    summaryElement.innerHTML = trackedCategories
        .filter(category => totals[category] > 0)
        .map(category => {
            let chip = CATEGORY_NAMES[category] + ": " + money(totals[category]);
            let overGuide = false;
            if (["T", "C"].includes(category)) {
                const planned = Number(
                    loadMonthData()?.assignments?.[category] ?? DEFAULT_CATEGORIES[category]
                ) || 0;
                const dailyGuide = Math.round(planned / daysInSelectedMonth());
                if (dailyGuide > 0) {
                    const remaining = dailyGuide - totals[category];
                    overGuide = remaining < 0;
                    chip += overGuide
                        ? " · " + money(Math.abs(remaining)) + " over today"
                        : " · " + money(remaining) + " left today";
                }
            }
            return '<span class="today-category-chip' +
                (overGuide ? " today-category-chip-over" : "") +
                '">' + chip + '</span>';
        })
        .join("");
}

  


function escapeHtml(text) {

    const div =
        document.createElement(
            "div"
        );

    div.textContent =
        text || "";

    return div.innerHTML;

}


async function finishSpending() {
    if (!requireOpenMonth("saving spending")) {
        return;
    }

    const spendingKey =
        "itoumrou_spending_confirmed_" +
        todayKey();


    const rows =
        document.querySelectorAll(
            "#expenseList .expense-form"
        );


    if (rows.length === 0) {

        alert(
            "Add at least one expense first."
        );

        return;

    }


    const balances =
        getBalances();

    const newExpenses = [];

    /*
        First validate EVERYTHING.

        We do not modify any bank balance
        until every expense passes validation.
    */

    for (const row of rows) {

        const amount =
            Math.max(
                0,
                Math.round(
                    Number(
                        row.querySelector(
                            ".expense-amount-input"
                        )?.value
                    ) || 0
                )
            );


        const description =
            row.querySelector(
                ".expense-description-input"
            )?.value.trim();


        const category =
            row.querySelector(
                ".expense-category-input"
            )?.value;


        const bank =
            DESTINATIONS[category] ||
            row.querySelector(
                ".expense-bank-input"
            )?.value;


        if (
            amount <= 0 &&
            !description
        ) {

            continue;

        }


        if (amount <= 0 || amount > MAX_AMOUNT ||
            !Number.isInteger(Number(
                row.querySelector(".expense-amount-input")?.value
            ))) {

            alert(
                "Every expense needs a valid amount."
            );

            return;

        }


        if (!description || description.length > 120) {

            alert(
                "Every expense needs a description."
            );

            return;

        }


        if (!BANKS.includes(bank) ||
            (DESTINATIONS[category] && DESTINATIONS[category] !== bank)) {

            alert(
                "Every expense needs a valid bank."
            );

            return;

        }


        /*
            Check against a temporary balance.

            This prevents a batch such as:

            4,000 from Bankily
            4,000 from Bankily

            from exceeding the actual balance
            even though each individual check
            might pass.
        */

        if (
            balances[bank] < amount
        ) {

            alert(
                "Not enough money in " +
                bank +
                " for " +
                description +
                "."
            );

            return;

        }


        balances[bank] -= amount;
        newExpenses.push({

            id:
                Date.now() +
                Math.random(),

            date:
                todayKey(),

            month:
                monthKey(),

            amount:
                amount,

            description:
                description,

            category:
                category,

            bank:
                bank

        });

    }


    if (
        newExpenses.length === 0
    ) {

        alert(
            "There are no expenses to save."
        );

        return;

    }


    const existingForGuide = loadExpenses();
    const overGuideCategories = ["T", "C"].filter(category => {
        const planned = Number(
            loadMonthData()?.assignments?.[category] ?? DEFAULT_CATEGORIES[category]
        ) || 0;
        const dailyGuide = Math.round(planned / daysInSelectedMonth());
        if (dailyGuide <= 0) {
            return false;
        }
        const todaySoFar = existingForGuide
            .filter(expense => expense.category === category)
            .reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
        const newTotal = newExpenses
            .filter(expense => expense.category === category)
            .reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
        return newTotal > 0 && (todaySoFar + newTotal) > dailyGuide;
    });
    if (overGuideCategories.length &&
        !confirm("This goes over your daily guide for " +
            overGuideCategories.map(category => CATEGORY_NAMES[category]).join(" and ") +
            ". Save anyway?")) {
        return;
    }


    /*
        Everything has passed validation.
        Now commit the bank changes.
    */

    saveBalances(
        balances
    );


    /*
        Save today's expense list.
    */

    const existingExpenses =
        loadExpenses();


    saveExpenses(
        existingExpenses.concat(
            newExpenses
        )
    );


    /*
        Save each transaction to the
        permanent master ledger.
    */

    localStorage.removeItem(
        "itoumrou_nothing_spent_" +
        todayKey()
    );

    newExpenses.forEach(expense => {

        addLedgerTransaction({

            type:
                "expense",

            id:
                expense.id,

            amount:
                expense.amount,

            bank:
                expense.bank,

            category:
                expense.category,

            description:
                expense.description,

            receipt:
                expense.receipt || "",

            date:
                expense.date,

            month:
                monthKey()

        });

    });


    /*
        Also retain the monthly reference
        for the calendar/reporting system.
    */

    const monthData =
        loadMonthData() || {

            month:
                monthKey(),

            income:
                0,

            mainBank:
                selectedBank,

            incomeConfirmed:
                false,

            assignments:
                getAssignments(),

            completed:
                {},

            transfers:
                {},

            transactions:
                []

        };


    monthData.transactions =
        monthData.transactions || [];


    newExpenses.forEach(expense => {

        monthData.transactions.push({

            type:
                "expense",

            id:
                expense.id,

            amount:
                expense.amount,

            bank:
                expense.bank,

            category:
                expense.category,

            description:
                expense.description,

            date:
                expense.date

        });

    });


    saveMonthData(
        monthData
    );


    /*
        Mark today's batch as confirmed.
    */

    localStorage.setItem(
        spendingKey,
        "true"
    );


    /*
        Refresh the screen.
    */

    renderExpenseList();

    updateAll();


    alert(
        "Today's spending has been saved."
    );

}

/* =========================================================
   BANK PAGES
========================================================= */

function renderHomeBanks() {

    const container =
        document.getElementById(
            "homeBanks"
        );

    if (!container) {
        return;
    }

    const balances =
        getBalances();

    container.innerHTML = "";

    BANKS.forEach(bank => {

        const button =
            document.createElement(
                "button"
            );

        button.className =
            "bank-open-button";


        button.innerHTML = `

            <div class="bank-account">

                <img
                    class="bank-logo"
                    src="png/${bank}.png"
                    alt="${bank}"
                >

                <div class="account-info">

                    <div class="account-name">
                        ${bank}
                    </div>

                    <div class="account-role">

                        ${
                            bank === "Masrvi"
                            ? "Savings Bank"
                            : bank === selectedBank
                            ? "Main Bank this month"
                            : "Bank account"
                        }

                    </div>

                </div>

                <div class="account-balance${balances[bank] < 200 ? " low-balance" : ""}">
                    ${money(balances[bank])}
                </div>

            </div>

        `;


        button.addEventListener(
            "click",
            () => {

                currentDetailBank =
                    bank;

                showPage(
                    "bankDetailsPage"
                );

            }
        );


        container.appendChild(
            button
        );

    });

}


function renderManageBanks() {

    const container =
        document.getElementById(
            "manageBanksList"
        );

    const balances =
        getBalances();

    const totalElement = document.getElementById("banksTotalBalance");
    if (totalElement) {
        totalElement.textContent = money(
            BANKS.reduce((sum, bank) => sum + (Number(balances[bank]) || 0), 0)
        );
    }

    container.innerHTML = "";


    BANKS.forEach(bank => {

        const button =
            document.createElement(
                "button"
            );

        button.className =
            "bank-open-button";


        button.innerHTML = `

            <div class="bank-account">

                <img
                    class="bank-logo"
                    src="png/${bank}.png"
                    alt="${bank}"
                >

                <div class="account-info">

                    <div class="account-name">
                        ${bank}
                    </div>

                    <div class="account-role">

                        ${
                            bank === "Masrvi"
                            ? "Savings Bank"
                            : bank === selectedBank
                            ? "Main Bank this month"
                            : "Bank account"
                        }

                    </div>

                </div>

                <div class="account-balance">
                    ${money(balances[bank])}
                </div>

            </div>

        `;


        button.addEventListener(
            "click",
            () => {

                currentDetailBank =
                    bank;

                showPage(
                    "bankDetailsPage"
                );

            }
        );


        container.appendChild(
            button
        );

    });

    renderBankTransferHistory();
    renderBalanceCheck();

}


/* =========================================================
   MONTHLY BALANCE CHECK (RECONCILIATION)
========================================================= */

function loadBalanceChecks() {
    try {
        const data = JSON.parse(localStorage.getItem(BALANCE_CHECK_KEY));
        return data && typeof data === "object" ? data : {};
    } catch {
        return {};
    }
}

function saveBalanceChecks(data) {
    localStorage.setItem(BALANCE_CHECK_KEY, JSON.stringify(data));
}

function balanceCheckDueForCurrentMonth() {
    const checks = loadBalanceChecks();
    return !checks[monthKey()];
}

function renderBalanceCheck() {
    const list = document.getElementById("balanceCheckList");
    const status = document.getElementById("balanceCheckStatus");
    if (!list || !status) {
        return;
    }

    const checks = loadBalanceChecks();
    const alreadyDone = checks[monthKey()];

    if (alreadyDone) {
        status.textContent = "✓ Balances confirmed for this month on " +
            new Date(alreadyDone.at).toLocaleDateString() + ".";
        status.className = "balance-check-status good";
    } else {
        status.textContent = "Not confirmed yet this month. Enter what your banking " +
            "apps actually show below.";
        status.className = "balance-check-status warning";
    }

    const balances = getBalances();

    list.innerHTML = BANKS.map(bank => `
        <div class="balance-check-row">
            <div class="balance-check-bank">
                <img class="bank-logo" src="png/${bank}.png" alt="${bank}">
                <div>
                    <div class="balance-check-name">${bank}</div>
                    <div class="balance-check-app">App shows ${money(balances[bank])}</div>
                </div>
            </div>
            <input type="number" class="balance-check-input" data-bank="${bank}"
                inputmode="decimal" step="0.01" placeholder="${Number(balances[bank] || 0).toFixed(2)}">
        </div>
    `).join("");
}

async function saveBalanceCheck() {
    if (!requireOpenMonth("checking bank balances")) {
        return;
    }

    const inputs = document.querySelectorAll(".balance-check-input");
    const balances = getBalances();
    const adjustments = [];
    let anyEntered = false;

    for (const input of inputs) {
        const bank = input.dataset.bank;
        const raw = input.value.trim();
        if (raw === "" || !BANKS.includes(bank)) {
            return;
        }
        const actual = Math.round(Number(raw) * 100) / 100;
        if (!Number.isFinite(actual) || actual < 0) {
            return;
        }
        anyEntered = true;
        const difference = Math.round((actual - Number(balances[bank] || 0)) * 100) / 100;
        if (difference !== 0) {
            adjustments.push({ bank, difference, actual });
        }
    }

    if (!anyEntered) {
        alert("Enter at least one actual balance to confirm this month's check.");
        return;
    }

    captureUndoState("Balance check recorded");

    adjustments.forEach(({ bank, difference }) => {
        balances[bank] = Math.round((balances[bank] + difference) * 100) / 100;
        const isIncome = difference > 0;
        const transaction = {
            id: "balance-check-" + Date.now() + "-" + Math.random().toString(36).slice(2),
            date: todayKey(),
            month: monthKey(),
            type: isIncome ? "income" : "expense",
            amount: Math.abs(difference),
            category: null,
            description: (isIncome ? "Balance correction (+)" : "Balance correction (−)") +
                " · " + bank,
            bank: bank,
            transferKind: "balance_correction",
            isAssignment: false
        };
        addLedgerTransaction(transaction);

        const monthData = loadMonthData() || {
            month: monthKey(), income: 0, mainBank: selectedBank,
            incomeConfirmed: false, assignments: getAssignments(),
            completed: {}, transfers: {}, transactions: []
        };
        monthData.transactions = monthData.transactions || [];
        monthData.transactions.push(transaction);
        saveMonthData(monthData);
    });

    saveBalances(balances);

    const checks = loadBalanceChecks();
    checks[monthKey()] = {
        at: new Date().toISOString(),
        adjustments: adjustments
    };
    saveBalanceChecks(checks);

    appendAuditEvent("balance_check_recorded", {
        month: monthKey(), adjustments: adjustments.length
    });

    if (adjustments.length) {
        setMessage("✓ Balances confirmed — " + adjustments.length +
            " correction" + (adjustments.length === 1 ? "" : "s") + " recorded.");
    } else {
        setMessage("✓ Balances confirmed — everything already matched.");
    }

    updateAll();
}

function renderBankTransferHistory() {
    const container = document.getElementById("bankTransferHistory");
    if (!container) {
        return;
    }

    const transfers = getMonthTransactions()
        .filter(isBankTransfer)
        .sort((first, second) =>
            String(second.date || "").localeCompare(String(first.date || "")));

    container.innerHTML = transfers.length
        ? transfers.map(calendarTransactionHtml).join("")
        : '<div class="calendar-empty bank-transfer-history-empty">No bank-to-bank transfers recorded for this month.</div>';

}


function renderBankDetails() {

    const container =
        document.getElementById("bankDetails");

    if (!currentDetailBank) {
        return;
    }

    const balances =
        getBalances();

    const currentBalance =
        balances[currentDetailBank];

    const ledgerTransactions =
    loadLedger().filter(transaction =>
        transaction.month === monthKey()
    );

    const monthData =
        loadMonthData();

    const oldTransactions =
        monthData?.transactions || [];

    const transactions = [
        ...ledgerTransactions,
        ...oldTransactions
    ];
    const uniqueTransactions = [];

    const transactionKeys = new Set();

    transactions.forEach(transaction => {

        const key = [
            transaction.type,
            transaction.amount,
            transaction.category || "",
            transaction.description || "",
            transaction.bank || "",
            transaction.from || "",
            transaction.to || ""
        ].join("|");

        if (!transactionKeys.has(key)) {

            transactionKeys.add(key);

            uniqueTransactions.push(transaction);

    }

});


    /*
        Build a clear bank-specific history.

        A transaction belongs to this bank if:
        - the bank received it
        - the bank sent it
        - the bank was the account used for an expense
    */

    const bankTransactions =
    uniqueTransactions.filter(transaction => {

            return (
                transaction.bank === currentDetailBank ||
                transaction.from === currentDetailBank ||
                transaction.to === currentDetailBank
            );

        });


    /*
        Starting balance.

        For the prototype, these are the initial
        balances we established for each bank.
    */

    const startingBalance =
        DEFAULT_BALANCES[currentDetailBank];


    /*
        Calculate the money movement for this bank.
    */

    let totalReceived = 0;
    let totalSent = 0;


    bankTransactions.forEach(transaction => {

        if (transaction.type === "income") {

            if (
                transaction.bank ===
                currentDetailBank
            ) {

                totalReceived +=
                    Number(transaction.amount) || 0;

            }

        }


        if (
            transaction.type ===
            "internal_transfer"
        ) {

            if (
                transaction.to ===
                currentDetailBank
            ) {

                totalReceived +=
                    Number(transaction.amount) || 0;

            }


            if (
                transaction.from ===
                currentDetailBank
            ) {

                totalSent +=
                    Number(transaction.amount) || 0;

            }

        }


        if (
            transaction.type ===
            "expense"
        ) {

            if (
                transaction.bank ===
                currentDetailBank
            ) {

                totalSent +=
                    Number(transaction.amount) || 0;

            }

        }

    });


    /*
        Bank role.
    */

    let role = "Bank account";

    if (
        currentDetailBank === "Masrvi"
    ) {

        role = "Savings Bank";

    } else if (
        currentDetailBank === selectedBank
    ) {

        role = "Main Bank this month";

    }


    /*
        Categories assigned to this bank.
    */

    const categoryAssignments =
        Object.keys(DESTINATIONS)
            .filter(category =>
                DESTINATIONS[category] ===
                currentDetailBank
            );


    container.innerHTML = `

        <h2>${currentDetailBank}</h2>

        <div class="income-amount">
            ${money(currentBalance)}
        </div>

        <div class="label">
            ${role}
        </div>


        <div class="summary-grid"
             style="margin-top:16px;">

            <div class="summary-box">

                <div class="label">
                    Starting balance
                </div>

                <div class="summary-value">
                    ${money(startingBalance)}
                </div>

            </div>


            <div class="summary-box">

                <div class="label">
                    Money received
                </div>

                <div class="summary-value positive">
                    +${money(totalReceived)}
                </div>

            </div>


            <div class="summary-box">

                <div class="label">
                    Money sent
                </div>

                <div class="summary-value">
                    −${money(totalSent)}
                </div>

            </div>


            <div class="summary-box">

                <div class="label">
                    Current balance
                </div>

                <div class="summary-value">
                    ${money(currentBalance)}
                </div>

            </div>

        </div>


        <h3 style="margin-top:24px;">
            Assigned Categories
        </h3>


        ${
            categoryAssignments.length
            ?

            categoryAssignments
                .map(category => `

                    <div class="expense-row">

                        <strong>
                            ${category}
                            —
                            ${CATEGORY_NAMES[category]}
                        </strong>

                        <div class="expense-meta">

                            Default:
                            ${money(
                                DEFAULT_CATEGORIES[category]
                            )}

                        </div>

                    </div>

                `)
                .join("")

            :

            `
                <div class="empty">
                    No categories are assigned
                    to this bank.
                </div>
            `
        }


        <h3 style="margin-top:24px;">
            Transactions
        </h3>


        <div class="expense-row">

            <div class="expense-main">

                <div class="expense-description">
                    Starting balance
                </div>

                <div class="expense-amount">
                    +${money(startingBalance)}
                </div>

            </div>

            <div class="expense-meta">
                Starting balance
            </div>

        </div>


        ${
            bankTransactions.length

            ?

            bankTransactions
                .slice()
                .reverse()
                .map(transaction =>
                    transactionHtml(transaction)
                )
                .join("")

            :

            `
                <div class="empty">
                    No other transactions
                    recorded for this month.
                </div>
            `
        }

    `;

}


function transactionHtml(transaction) {

    /*
        BM.S income
    */

    if (
        transaction.type === "income"
    ) {

        return `

            <div class="expense-row">

                <div class="expense-main">

                    <div class="expense-description">
                        ${escapeHtml(transaction.description || "Income")}
                    </div>

                    <div class="expense-amount positive">
                        +${money(transaction.amount)}
                    </div>

                </div>

                <div class="expense-meta">
                    Income received in
                    ${transaction.bank}
                </div>

            </div>

        `;

    }


    /*
        Internal transfer

        Money is still yours.
    */

    if (
        transaction.type ===
        "internal_transfer"
    ) {

        const received =
            transaction.to ===
            currentDetailBank;


        return `

            <div class="expense-row">

                <div class="expense-main">

                    <div class="expense-description">

                        ${
                            transaction.category
                            ? (
                                escapeHtml(transaction.category) +
                                " — " +
                                (
                                    CATEGORY_NAMES[
                                        transaction.category
                                    ] ||
                                    escapeHtml(transaction.description)
                                )
                            )
                            :
                            escapeHtml(
                                transaction.description ||
                                "Internal transfer"
                            )
                        }

                    </div>


                    <div class="expense-amount
                        ${received ? "positive" : ""}">

                        ${
                            received
                            ? "+"
                            : "−"
                        }${money(transaction.amount)}

                    </div>

                </div>


                <div class="expense-meta">
                    Internal transfer:

                    ${escapeHtml(transaction.from)}

                    →

                    ${escapeHtml(transaction.to)}
                </div>

            </div>

        `;

    }


    /*
        Actual expense

        Money leaves your finances.
    */

    if (
        transaction.type ===
        "expense"
    ) {

        return `

            <div class="expense-row">

                <div class="expense-main">

                    <div class="expense-description">

                        ${escapeHtml(
                            transaction.description
                        )}

                    </div>


                    <div class="expense-amount">

                        −${money(
                            transaction.amount
                        )}

                    </div>

                </div>


                <div class="expense-meta">

                    ${
                        CATEGORY_NAMES[
                            transaction.category
                        ] ||
                        "Other"
                    }

                    · Expense

                </div>

            </div>

        `;

    }


    return "";

}


function loadSavingsTarget() {
    const raw = Number(localStorage.getItem(SAVINGS_TARGET_KEY));
    return Number.isFinite(raw) && raw > 0 ? raw : 0;
}

function saveSavingsTarget(amount) {
    if (amount > 0) {
        localStorage.setItem(SAVINGS_TARGET_KEY, String(amount));
    } else {
        localStorage.removeItem(SAVINGS_TARGET_KEY);
    }
}

function getGoalForecast(currentBalance, target, monthlyRate) {
    if (!target || target <= 0) {
        return {
            status: "Set a target to estimate your future savings timeline.",
            monthsNeeded: 0,
            etaLabel: "",
            remaining: 0,
            requiredMonthly: 0
        };
    }

    if (currentBalance >= target) {
        return {
            status: "Goal reached. You are ahead of plan.",
            monthsNeeded: 0,
            etaLabel: "",
            remaining: 0,
            requiredMonthly: 0
        };
    }

    const remaining = target - currentBalance;
    if (monthlyRate <= 0) {
        return {
            status: "Keep saving each month to estimate when you will reach this goal.",
            monthsNeeded: 0,
            etaLabel: "",
            remaining,
            requiredMonthly: 0
        };
    }

    const monthsNeeded = Math.max(1, Math.ceil(remaining / monthlyRate));
    const etaDate = new Date();
    etaDate.setMonth(etaDate.getMonth() + monthsNeeded);
    const etaLabel = etaDate.toLocaleDateString(undefined, { month: "long", year: "numeric" });

    return {
        status: "Current pace: " + money(monthlyRate) + "/month. You could reach this goal in about " +
            monthsNeeded + (monthsNeeded === 1 ? " month" : " months") + " (" + etaLabel + ").",
        monthsNeeded,
        etaLabel,
        remaining,
        requiredMonthly: monthlyRate
    };
}

function renderSavingsGoal(currentBalance, monthlyRate) {
    const target = loadSavingsTarget();
    const input = document.getElementById("savingsGoalInput");
    if (input && document.activeElement !== input) {
        input.value = target || "";
    }

    const hint = document.getElementById("savingsGoalHint");
    const wrap = document.getElementById("savingsGoalProgressWrap");
    const bar = document.getElementById("savingsGoalProgressBar");
    const label = document.getElementById("savingsGoalProgressLabel");

    if (!target) {
        if (hint) {
            hint.textContent = "Set a target amount to track your progress and see when you'll reach it.";
        }
        if (wrap) {
            wrap.hidden = true;
        }
        return;
    }

    if (hint) {
        hint.textContent = "Goal: " + money(target);
    }
    if (wrap) {
        wrap.hidden = false;
    }

    const percent = Math.max(0, Math.min(100, Math.round((currentBalance / target) * 100)));
    if (bar) {
        bar.style.width = percent + "%";
        bar.className = percent >= 100 ? "" : percent >= 85 ? "near" : "";
    }

    const forecast = getGoalForecast(currentBalance, target, monthlyRate);
    if (currentBalance >= target) {
        if (label) {
            label.textContent = "Goal reached! You have " + money(currentBalance) + " saved and are ahead of target.";
        }
        return;
    }

    const remaining = target - currentBalance;
    if (monthlyRate > 0) {
        if (label) {
            label.textContent = percent + "% there · " + money(remaining) + " left · current pace " +
                money(monthlyRate) + "/month → " + forecast.status;
        }
    } else if (label) {
        label.textContent = percent + "% there · " + money(remaining) +
            " to go. Set a monthly $ plan to estimate the date you will reach this goal.";
    }
}

function getSavingsPace(currentPlan) {
    const monthlyTotals = {};
    getAllLedgerTransactions()
        .filter(transaction => transaction.type === "internal_transfer" &&
            transaction.category === "$" && transaction.to === "Masrvi" &&
            Number(transaction.amount) > 0)
        .forEach(transaction => {
            const month = transaction.month || String(transaction.date || "").slice(0, 7);
            if (month) {
                monthlyTotals[month] = (monthlyTotals[month] || 0) + Number(transaction.amount);
            }
        });
    const amounts = Object.values(monthlyTotals);
    if (!amounts.length) {
        return {
            rate: currentPlan,
            label: "Based on your current plan of " + money(currentPlan) + " per month."
        };
    }
    const rate = Math.round(amounts.reduce((sum, amount) => sum + amount, 0) / amounts.length);
    return {
        rate: rate,
        label: "Based on " + amounts.length + " funded month" +
            (amounts.length === 1 ? "" : "s") + ": " + money(rate) + " average per month."
    };
}

function renderSavingsPage() {
    const balances = getBalances();
    const data = loadMonthData();
    const planned = Math.max(0, Math.round(Number(
        data?.assignments?.$ ?? DEFAULT_CATEGORIES.$
    ) || 0));

    const balanceElement = document.getElementById("savingsBalance");
    if (balanceElement) {
        balanceElement.textContent = money(balances.Masrvi);
    }
    const zakatSavingsAmount = document.getElementById("zakatSavingsAmount");
    if (zakatSavingsAmount && document.activeElement !== zakatSavingsAmount) {
        zakatSavingsAmount.value = Math.max(0, Math.round(Number(balances.Masrvi) || 0));
    }
    calculateZakat();

    const planElement = document.getElementById("savingsMonthlyPlan");
    if (planElement) {
        planElement.textContent = "This month's plan: " + money(planned) + " → Masrvi";
    }

    const funded = hasAssignmentFunding(data, "$");
    const fundingTransfer = (data?.transactions || []).find(transaction =>
        transaction.type === "internal_transfer" &&
        transaction.category === "$" &&
        transaction.transferKind !== "assignment_payment" &&
        transaction.to === "Masrvi" &&
        transaction.from === data?.mainBank);
    const fundedAmount = funded ? Number(fundingTransfer?.amount || 0) : 0;
    const waitingAmount = Math.max(0, planned - fundedAmount);
    const plannedElement = document.getElementById("savingsPlannedAmount");
    const fundedElement = document.getElementById("savingsFundedAmount");
    const waitingElement = document.getElementById("savingsWaitingAmount");
    if (plannedElement) plannedElement.textContent = money(planned);
    if (fundedElement) fundedElement.textContent = money(fundedAmount);
    if (waitingElement) waitingElement.textContent = money(waitingAmount);
    const fundButton = document.getElementById("savingsFundButton");
    const fundHint = document.getElementById("savingsFundHint");
    if (fundButton) {
        fundButton.disabled = funded || !data?.incomeConfirmed;
        fundButton.textContent = funded ? "Already funded this month" : "Fund savings";
    }
    if (fundHint) {
        fundHint.textContent = !data?.incomeConfirmed
            ? "Confirm this month's BM.S income first, then fund savings from your main bank."
            : funded
                ? "This month's $ savings are already sitting in Masrvi."
                : "Nothing moves yet. Press Fund savings when you are ready to send " +
                    money(planned) + " to Masrvi.";
    }

    const savingsPace = getSavingsPace(planned > 0 ? planned : Number(DEFAULT_CATEGORIES.$) || 0);
    const monthlyRate = savingsPace.rate;
    const projection = months => balances.Masrvi + monthlyRate * months;
    const projection6 = document.getElementById("savingsProjection6");
    const projection12 = document.getElementById("savingsProjection12");
    const projection60 = document.getElementById("savingsProjection60");
    const projectionBasis = document.getElementById("savingsProjectionBasis");
    const projectionTarget = document.getElementById("savingsProjectionTarget");
    if (projection6) {
        projection6.textContent = money(projection(6));
    }
    if (projection12) {
        projection12.textContent = money(projection(12));
    }
    if (projection60) {
        projection60.textContent = money(projection(60));
    }
    if (projectionBasis) {
        projectionBasis.textContent = "Starting from " + money(balances.Masrvi) +
            " saved. " + savingsPace.label;
    }
    if (projectionTarget) {
        const target = loadSavingsTarget();
        if (!target) {
            projectionTarget.textContent = "Set a savings goal above to see your future target date and pace.";
        } else if (balances.Masrvi >= target) {
            projectionTarget.textContent = "Goal reached: you have passed your " + money(target) + " target and are ahead of plan.";
        } else if (monthlyRate > 0) {
            const forecast = getGoalForecast(balances.Masrvi, target, monthlyRate);
            projectionTarget.textContent = "Current pace: " + money(monthlyRate) + "/month. " + forecast.status;
        } else {
            projectionTarget.textContent = "Set a monthly savings pace to estimate your target date.";
        }
    }

    renderSavingsGoal(balances.Masrvi, monthlyRate);
    renderSavingsGoalsOverview();

    const historyList = document.getElementById("savingsHistoryList");
    if (historyList) {
        const history = getAllLedgerTransactions()
            .filter(transaction =>
                (transaction.type === "internal_transfer" && transaction.category === "$") ||
                (transaction.bank === "Masrvi" &&
                    transaction.transferKind === "balance_correction"))
            .sort((first, second) => String(second.date || "").localeCompare(String(first.date || "")));
        historyList.innerHTML = history.length
            ? history.map(transaction => {
                const isCorrection = transaction.transferKind === "balance_correction";
                const amount = Number(transaction.amount) || 0;
                const positive = isCorrection ? transaction.type === "income" : true;
                return '<div class="expense-row"><div class="expense-main">' +
                    '<div class="expense-description">' +
                    escapeHtml(isCorrection ? "Balance correction" : "Savings funded") +
                    '</div><div class="expense-amount ' + (positive ? "positive" : "") + '">' +
                    (positive ? "+" : "−") + money(amount) +
                    '</div></div><div class="expense-meta">' +
                    transactionDateTimeLabel(transaction) + '</div></div>';
            }).join("")
            : '<div class="empty">No savings activity recorded yet.</div>';
    }
}

function updateZakatNisabFields() {
    const basis = document.getElementById("zakatNisabBasis")?.value || "gold";
    const metalField = document.getElementById("zakatMetalPriceField");
    const customField = document.getElementById("zakatCustomNisabField");
    if (metalField) metalField.hidden = basis === "custom";
    if (customField) customField.hidden = basis !== "custom";
}

function loadZakatPreferences() {
    try {
        const prefs = JSON.parse(localStorage.getItem(ZAKAT_PREFS_KEY) || "{}");
        return prefs && typeof prefs === "object" ? prefs : {};
    } catch {
        return {};
    }
}

function restoreZakatPreferences() {
    const prefs = loadZakatPreferences();
    const basis = document.getElementById("zakatNisabBasis");
    const price = document.getElementById("zakatMetalPrice");
    const custom = document.getElementById("zakatCustomNisab");
    const debts = document.getElementById("zakatImmediateDebts");
    const hawl = document.getElementById("zakatHawlComplete");
    if (basis && ["gold", "silver", "custom"].includes(prefs.basis)) basis.value = prefs.basis;
    if (price && Number.isFinite(Number(prefs.price))) price.value = prefs.price;
    if (custom && Number.isFinite(Number(prefs.customNisab))) custom.value = prefs.customNisab;
    if (debts && Number.isFinite(Number(prefs.debts))) debts.value = prefs.debts;
    if (hawl) hawl.checked = prefs.hawl === true;
    updateZakatNisabFields();
}

function calculateZakat() {
    const savings = Math.max(0, Number(document.getElementById("zakatSavingsAmount")?.value) || 0);
    const debts = Math.max(0, Number(document.getElementById("zakatImmediateDebts")?.value) || 0);
    const basis = document.getElementById("zakatNisabBasis")?.value || "gold";
    const price = Math.max(0, Number(document.getElementById("zakatMetalPrice")?.value) || 0);
    const customNisab = Math.max(0, Number(document.getElementById("zakatCustomNisab")?.value) || 0);
    const hawlComplete = Boolean(document.getElementById("zakatHawlComplete")?.checked);
    const result = document.getElementById("zakatResult");
    if (!result) return;
    localStorage.setItem(ZAKAT_PREFS_KEY, JSON.stringify({
        basis: basis, price: price, customNisab: customNisab, debts: debts, hawl: hawlComplete
    }));
    const nisab = basis === "custom" ? customNisab : price * (basis === "gold" ? 85 : 595);
    if (nisab <= 0) {
        result.textContent = "Enter a current metal price or a local nisab amount first.";
        return;
    }
    const netSavings = Math.max(0, savings - debts);
    const zakatDue = hawlComplete && netSavings >= nisab ? Math.round(netSavings * 0.025) : 0;
    if (!hawlComplete) {
        result.textContent = "Estimated qualifying savings: " + money(netSavings) +
            ". The hawl is not marked complete, so Zakat is not calculated as due yet. Nisab: " + money(nisab) + ".";
    } else if (netSavings < nisab) {
        result.textContent = "Zakat is not estimated as due: qualifying savings are " + money(netSavings) +
            ", below the nisab of " + money(nisab) + ".";
    } else {
        result.textContent = "Estimated Zakat due: " + money(zakatDue) +
            " (2.5% of " + money(netSavings) + "). Nisab: " + money(nisab) + ".";
    }
}

function renderSavingsGoalsOverview() {
    const container = document.getElementById("savingsGoalsOverview");
    if (!container) {
        return;
    }
    const goals = loadSavingsGoals();
    container.innerHTML = goals.length ? goals.map(goal => {
        const target = Math.max(1, Number(goal.target) || 1);
        const saved = Math.min(target, Math.max(0, Number(goal.saved) || 0));
        const percent = Math.min(100, Math.round(saved / target * 100));
        const monthly = Math.max(0, Number(goal.monthly) || 0);
        const etaMonths = monthly > 0 && saved < target ? Math.ceil((target - saved) / monthly) : 0;
        const eta = etaMonths > 0
            ? new Date(new Date().getFullYear(), new Date().getMonth() + etaMonths, 1)
            : null;
        const etaLabel = saved >= target ? "Complete" : eta
            ? eta.toLocaleDateString("en-US", { month: "short", year: "numeric" })
            : "Set a monthly pace";
        return '<div class="savings-goal-summary"><div class="goal-heading"><strong>' +
            escapeHtml(goal.name) + '</strong><span>' + percent + '%</span></div>' +
            '<div class="goal-track"><div class="goal-progress" style="width:' + percent + '%"></div></div>' +
            '<div class="savings-goal-summary-meta"><span>' + money(saved) + ' of ' + money(target) +
            '</span><span>Target: ' + escapeHtml(etaLabel) + '</span></div></div>';
    }).join("") : '<div class="empty">No goals yet. Add one to start tracking a future purchase or project.</div>';
}

/* =========================================================
   CALENDAR HISTORY
========================================================= */

function calendarDateLabel(date) {

    if (!date) {
        return "Date not recorded";
    }

    const parsed =
        new Date(date + "T12:00:00");

    if (Number.isNaN(parsed.getTime())) {
        return date;
    }

    const locale = currentLanguage() === "ar" ? "ar"
        : currentLanguage() === "fr" ? "fr-FR" : "en-US";
    return parsed.toLocaleDateString(
        locale,
        {
            month: "short",
            day: "numeric"
        }
    );

}

function transactionTimestamp(transaction) {
    const createdAt = Date.parse(String(transaction?.createdAt || ""));
    if (Number.isFinite(createdAt)) {
        return createdAt;
    }
    const numericId = Number(transaction?.id);
    if (Number.isFinite(numericId) && numericId > 1000000000000) {
        return numericId;
    }
    const date = Date.parse(String(transaction?.date || "") + "T12:00:00");
    return Number.isFinite(date) ? date : 0;
}

function transactionDateTimeLabel(transaction) {
    const timestamp = transactionTimestamp(transaction);
    if (!timestamp) {
        return calendarDateLabel(transaction?.date);
    }
    const date = new Date(timestamp);
    const hasExactTime = Boolean(transaction?.createdAt) ||
        (Number.isFinite(Number(transaction?.id)) && Number(transaction.id) > 1000000000000);
    const locale = "en-US";
    return date.toLocaleDateString(locale, hasExactTime
        ? { month: "short", day: "numeric", year: "numeric" }
        : { month: "short", day: "numeric", year: "numeric" }) +
        (hasExactTime ? " at " + date.toLocaleTimeString(locale, {
            hour: "numeric", minute: "2-digit"
        }) : "");
}

function transactionTypeLabel(transaction) {
    if (transaction?.type === "income") {
        return "Income";
    }
    if (isSpendingTransaction(transaction)) {
        return "Spending";
    }
    if (transaction?.type === "internal_transfer") {
        return "Transfer";
    }
    return "Activity";
}


function calendarTransactionHtml(transaction) {

    let icon = "•";
    let title = "Activity";
    let detail = "";
    let amountClass = "";
    let amountPrefix = "";
    const canEdit = transaction?.type === "expense" &&
        !transaction.billId && transaction.transferKind !== "balance_correction" &&
        transaction.id != null;

    if (transaction.transferKind === "balance_correction") {

        icon = transaction.type === "income" ? "↓" : "−";
        title = transaction.description || "Balance correction";
        detail = transaction.bank || "Bank account";
        amountClass = transaction.type === "income" ? "positive" : "";
        amountPrefix = transaction.type === "income" ? "+" : "−";

    } else if (transaction.type === "income") {

        icon = "↓";
        title = transaction.recurring
            ? (transaction.description || "Recurring income")
            : "BM.S received";
        detail =
            "Added to " +
            (transaction.bank || "bank account");
        amountClass = "positive";
        amountPrefix = "+";

    } else if (isSpendingTransaction(transaction)) {

        icon = "−";
        title = transaction.billId
            ? "Bill payment"
            : transaction.description || "Expense";
        detail =
            (transaction.billId ? (transaction.description || "Bill") :
                (CATEGORY_NAMES[transaction.category] || "Other")) +
            " · " +
            (transaction.bank || transaction.from || "Bank account");
        amountClass = "negative";
        amountPrefix = "−";

    } else if (transaction.type === "internal_transfer") {

        icon = "↔";
        title = transaction.category
            ? transaction.category +
              " — " +
              (CATEGORY_NAMES[transaction.category] ||
               transaction.description ||
               "Transfer")
            : transaction.description || "Internal transfer";
        detail =
            (transaction.from || "Bank") +
            " → " +
            (transaction.to || "Bank");
        amountClass = "transfer";

    } else if (transaction.type === "expense") {

        icon = "−";
        title = transaction.description || "Expense";
        detail =
            (CATEGORY_NAMES[transaction.category] || "Other") +
            " · " +
            (transaction.bank || "Bank account");
        amountClass = "negative";
        amountPrefix = "−";

    }

    return `
        <div class="calendar-activity-item">
            <div class="calendar-activity-icon">
                ${icon}
            </div>

            <div class="calendar-activity-copy">
                <div class="calendar-activity-title">
                    ${escapeHtml(title)}
                </div>
                <div class="calendar-activity-meta">
                    ${transactionDateTimeLabel(transaction)} ·
                    ${escapeHtml(detail)}
                </div>
                ${canEdit ? '<button type="button" class="calendar-edit-expense" data-expense-id="' +
                    escapeHtml(transaction.id) + '">Edit expense</button>' : ""}
            </div>

            <span class="calendar-activity-kind ${amountClass}">${transactionTypeLabel(transaction)}</span>

            <div class="calendar-activity-amount ${amountClass}">
                ${amountPrefix}${money(transaction.amount)}
            </div>
        </div>
    `;

}

document.addEventListener("click", event => {
    const button = event.target.closest(".calendar-edit-expense");
    if (button) {
        editExpense(button.dataset.expenseId);
    }
});


function isAssignmentCategory(category) {

    return Boolean(
        category &&
        Object.prototype.hasOwnProperty.call(
            DEFAULT_CATEGORIES,
            String(category)
        )
    );

}


function getCategorySpendTotals() {

    return getCategorySpendTotalsForMonth(monthKey());

}

function getCategorySpendTotalsForMonth(month) {

    const totals = {};

    loadLedger()
        .filter(transaction =>
            transaction.month === month &&
            isSpendingTransaction(transaction) &&
            transaction.category
        )
        .forEach(transaction => {

            const category = transaction.category;
            totals[category] =
                (totals[category] || 0) +
                Number(transaction.amount || 0);

        });

    return totals;

}

function getMonthTransactions() {
    const data = loadMonthData();
    const transactions = loadLedger().filter(transaction =>
        transaction.month === monthKey()
    ).concat((data?.transactions || []).filter(transaction =>
        !loadLedger().some(ledgerTransaction =>
            ledgerTransaction.id === transaction.id
        )
    ));
    const seen = {};
    return transactions.filter(transaction => {
        const key = [transaction.type, transaction.amount,
            transaction.category, transaction.description,
            transaction.bank, transaction.from, transaction.to].join("|");
        if (seen[key]) {
            if (seen[key].id === transaction.id ||
                !seen[key].id || !transaction.id) {
                return false;
            }
        }
        seen[key] = transaction;
        return true;
    });
}

function isSpendingTransaction(transaction) {
    return (transaction?.type === "expense" &&
        transaction.transferKind !== "balance_correction") ||
        transaction?.transferKind === "assignment_payment" ||
        (transaction?.type === "internal_transfer" &&
            ["M", "S"].includes(transaction.category) &&
            transaction.from === "Bankily" &&
            transaction.to === CATEGORY_NAMES[transaction.category]);
}

function isAssignmentPayment(transaction) {
    return transaction?.transferKind === "assignment_payment" ||
        (transaction?.type === "internal_transfer" &&
            ["M", "S"].includes(transaction.category) &&
            transaction.from === "Bankily" &&
            transaction.to === CATEGORY_NAMES[transaction.category]);
}

function getAllLedgerTransactions() {
    const ledger = loadLedger();
    const seen = {};
    return ledger.filter(transaction => {
        const key = [transaction.type, transaction.amount,
            transaction.category, transaction.description,
            transaction.bank, transaction.from, transaction.to,
            transaction.month].join("|");
        if (seen[key]) {
            if (seen[key].id === transaction.id ||
                !seen[key].id || !transaction.id) {
                return false;
            }
        }
        seen[key] = transaction;
        return true;
    });
}

function renderTransactionHistory() {
    const container = document.getElementById("transactionHistory");
    if (!container) {
        return;
    }
    const search = (document.getElementById("historySearch").value || "").toLowerCase().trim();
    const type = document.getElementById("historyType").value;
    const category = document.getElementById("historyCategory").value;
    const allMonths = document.getElementById("historyAllMonths")?.checked;
    const transactions = (allMonths ? getAllLedgerTransactions() : getMonthTransactions()).filter(transaction => {
        if (type !== "all" && transaction.type !== type) {
            return false;
        }
        if (category !== "all" &&
            (transaction.category || "OTHER") !== category) {
            return false;
        }
        if (!search) {
            return true;
        }
        return [
            transaction.description, transaction.category,
            CATEGORY_NAMES[transaction.category], transaction.bank,
            transaction.from, transaction.to, transaction.type
        ].join(" ").toLowerCase().indexOf(search) !== -1;
    }).sort((first, second) =>
        transactionTimestamp(second) - transactionTimestamp(first));
    container.innerHTML = transactions.length
        ? transactions.map(calendarTransactionHtml).join("")
        : '<div class="calendar-empty">No matching transactions.</div>';
}

function prepareCanvas(canvas) {
    if (!canvas) {
        return null;
    }
    const width = Math.max(280, canvas.clientWidth || 520);
    const height = 190;
    const ratio = window.devicePixelRatio || 1;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    const context = canvas.getContext("2d");
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.clearRect(0, 0, width, height);
    return { context: context, width: width, height: height };
}

function getTrendBaseline(monthsBack) {
    const totals = {};
    let month = monthKey();
    for (let index = 0; index < monthsBack; index += 1) {
        month = previousMonthKey(month);
        const spend = getCategorySpendTotalsForMonth(month);
        Object.keys(DEFAULT_CATEGORIES).forEach(category => {
            totals[category] = (totals[category] || 0) + Number(spend[category] || 0);
        });
    }
    Object.keys(totals).forEach(category => {
        totals[category] = totals[category] / monthsBack;
    });
    return totals;
}

function renderTrendSummary(currentSpend, baseline, monthsBack) {
    const summary = document.getElementById("trendSummary");
    if (!summary) {
        return;
    }
    const currentTotal = Object.values(currentSpend).reduce((sum, value) => sum + Number(value || 0), 0);
    const baselineTotal = Object.values(baseline).reduce((sum, value) => sum + Number(value || 0), 0);
    if (!currentTotal && !baselineTotal) {
        summary.textContent = "Add spending to see a comparison with your recent average.";
        return;
    }
    const difference = currentTotal - baselineTotal;
    const percent = baselineTotal > 0 ? Math.round(Math.abs(difference) / baselineTotal * 100) : 0;
    summary.textContent = difference === 0
        ? "Spending is in line with your recent average."
        : difference > 0
            ? "You are spending " + percent + "% more than your previous " + monthsBack + "-month average."
            : "You are spending " + percent + "% less than your previous " + monthsBack + "-month average.";
}

    function chartColors() {
        const dark = document.documentElement.classList.contains("theme-dark");
        return dark
            ? { ink: "#f2f2f7", muted: "#a9a9b2", grid: "#3a3c43", income: "#6fe3a3", expense: "#f0918a", baseline: "#7f9087", planned: "#315640" }
            : { ink: "#123d2f", muted: "#64756c", grid: "#dbe9df", income: "#16b866", expense: "#d66a5c", baseline: "#9db4a7", planned: "#dff2e5" };
    }

function drawCharts() {
        const colors = chartColors();
    const flow = prepareCanvas(document.getElementById("cashFlowChart"));
    const assignment = prepareCanvas(document.getElementById("assignmentChart"));
    const trend = prepareCanvas(document.getElementById("trendChart"));
    const transactions = getMonthTransactions();
    if (flow) {
        const days = {};
        transactions.forEach(transaction => {
            const day = String(transaction.date || "").slice(-2) || "1";
            if (!days[day]) {
                days[day] = { income: 0, expense: 0 };
            }
            if (transaction.type === "income") {
                days[day].income += Number(transaction.amount) || 0;
            } else if (transaction.type === "expense") {
                days[day].expense += Number(transaction.amount) || 0;
            }
        });
        const labels = Object.keys(days).sort();
        const max = Math.max(1, ...labels.map(day =>
            Math.max(days[day].income, days[day].expense)));
        const chart = flow;
        const compact = chart.width < 380;
        const left = 34, bottom = 28, top = compact ? 42 : 18;
        const usableWidth = chart.width - left - 10;
        const usableHeight = chart.height - top - bottom;
        chart.context.strokeStyle = colors.grid;
        chart.context.beginPath();
        chart.context.moveTo(left, top);
        chart.context.lineTo(left, chart.height - bottom);
        chart.context.lineTo(chart.width - 10, chart.height - bottom);
        chart.context.stroke();
        const barWidth = labels.length ? Math.max(4, usableWidth / labels.length / 3) : 0;
        labels.forEach((day, index) => {
            const x = left + (index + 0.5) * (usableWidth / Math.max(1, labels.length));
            const incomeHeight = days[day].income / max * usableHeight;
            const expenseHeight = days[day].expense / max * usableHeight;
            chart.context.fillStyle = colors.income;
            chart.context.fillRect(x - barWidth - 1, chart.height - bottom - incomeHeight,
                barWidth, incomeHeight);
            chart.context.fillStyle = colors.expense;
            chart.context.fillRect(x + 1, chart.height - bottom - expenseHeight,
                barWidth, expenseHeight);
            chart.context.fillStyle = colors.muted;
            chart.context.font = "10px sans-serif";
            chart.context.fillText(day, x - 5, chart.height - 10);
        });
        chart.context.fillStyle = colors.ink;
        chart.context.font = "700 12px sans-serif";
        chart.context.fillText("Income / spending by day", 10, 13);
        const legendY = compact ? 28 : 7;
        const legendX = compact ? 10 : chart.width - 128;
        chart.context.fillStyle = colors.income;
        chart.context.fillRect(legendX, legendY, 9, 9);
        chart.context.fillStyle = colors.ink;
        chart.context.font = "10px sans-serif";
        chart.context.fillText("Income", legendX + 13, legendY + 8);
        chart.context.fillStyle = colors.expense;
        const spentLegendX = compact ? 75 : chart.width - 67;
        chart.context.fillRect(spentLegendX, legendY, 9, 9);
        chart.context.fillStyle = colors.ink;
        chart.context.fillText("Spent", spentLegendX + 13, legendY + 8);
    }
    if (assignment) {
        const data = loadMonthData() || {};
        const spend = getCategorySpendTotals();
        const categories = Object.keys(DEFAULT_CATEGORIES);
        const chart = assignment;
        const max = Math.max(1, ...categories.map(category => Math.max(
            Number(data.assignments?.[category] ?? DEFAULT_CATEGORIES[category]) || 0,
            Number(spend[category] || 0))));
        chart.context.fillStyle = colors.ink;
        chart.context.font = "700 12px sans-serif";
        chart.context.fillText("Assignments: planned / spent", 10, 14);
        categories.forEach((category, index) => {
            const y = 28 + index * 22;
            const planned = Number(data.assignments?.[category] ?? DEFAULT_CATEGORIES[category]) || 0;
            const spent = Number(spend[category] || 0);
            const width = chart.width - 92;
            chart.context.fillStyle = colors.planned;
            chart.context.fillRect(30, y, width * planned / max, 8);
            chart.context.fillStyle = colors.income;
            chart.context.fillRect(30, y + 10, width * spent / max, 8);
            chart.context.fillStyle = colors.ink;
            chart.context.font = "700 11px sans-serif";
            chart.context.fillText(category, 10, y + 14);
        });
    }
    if (trend) {
        const currentSpend = getCategorySpendTotals();
        const monthsBack = Number(document.getElementById("trendRange")?.value) || 1;
        const baselineSpend = getTrendBaseline(monthsBack);
        renderTrendSummary(currentSpend, baselineSpend, monthsBack);
        const categories = Object.keys(DEFAULT_CATEGORIES)
            .filter(category => !["M", "S", "$"].includes(category));
        const chart = trend;
        const max = Math.max(1, ...categories.map(category => Math.max(
            Number(currentSpend[category] || 0),
            Number(baselineSpend[category] || 0))));
        const compact = chart.width < 380;
        chart.context.fillStyle = colors.ink;
        chart.context.font = "700 12px sans-serif";
        chart.context.fillText("Spending trend by category", 10, 14);
        chart.context.fillStyle = colors.baseline;
        const legendY = compact ? 28 : 7;
        const legendX = compact ? 10 : chart.width - 128;
        chart.context.fillRect(legendX, legendY, 9, 9);
        chart.context.fillStyle = colors.ink;
        chart.context.font = "10px sans-serif";
        chart.context.fillText(monthsBack === 1 ? "Last month" : "Recent average", legendX + 13, legendY + 8);
        chart.context.fillStyle = colors.income;
        const currentLegendX = compact ? 112 : chart.width - 47;
        chart.context.fillRect(currentLegendX, legendY, 9, 9);
        chart.context.font = "10px sans-serif";
        chart.context.fillText("This month", currentLegendX + 13, legendY + 8);
        categories.forEach((category, index) => {
            const y = (compact ? 48 : 28) + index * 30;
            const prev = Number(baselineSpend[category] || 0);
            const current = Number(currentSpend[category] || 0);
            const width = chart.width - 92;
            chart.context.fillStyle = colors.baseline;
            chart.context.fillRect(30, y, width * prev / max, 9);
            chart.context.fillStyle = colors.income;
            chart.context.fillRect(30, y + 12, width * current / max, 9);
            chart.context.fillStyle = colors.ink;
            chart.context.font = "700 11px sans-serif";
            chart.context.fillText(category, 10, y + 15);
            chart.context.font = "10px sans-serif";
            chart.context.fillText(money(current) +
                (prev > 0 ? " (" + (current >= prev ? "+" : "") +
                    Math.round((current - prev) / prev * 100) + "%)" : ""),
                30 + Math.max(width * prev / max, width * current / max) + 6, y + 20);
        });
    }
}


function renderYearlyOverview() {
    const colors = chartColors();
    const listElement = document.getElementById("yearlyOverviewList");
    const yearElement = document.getElementById("yearlyOverviewYear");
    const chart = prepareCanvas(document.getElementById("yearlyChart"));
    if (!listElement) {
        return;
    }

    const year = Number(String(monthKey()).slice(0, 4));
    if (yearElement) {
        yearElement.textContent = String(year);
    }

    const months = [];
    for (let month = 1; month <= 12; month += 1) {
        const key = year + "-" + String(month).padStart(2, "0");
        const ledgerTransactions = loadLedger().filter(transaction =>
            transaction.month === key);
        const income = ledgerTransactions
            .filter(transaction => transaction.type === "income" &&
                transaction.transferKind !== "balance_correction")
            .reduce((sum, transaction) => sum + Number(transaction.amount || 0), 0);
        const spent = ledgerTransactions
            .filter(isSpendingTransaction)
            .reduce((sum, transaction) => sum + Number(transaction.amount || 0), 0);
        months.push({ key, month, income, spent });
    }

    const totalIncome = months.reduce((sum, item) => sum + item.income, 0);
    const totalSpent = months.reduce((sum, item) => sum + item.spent, 0);
    const activeMonths = months.filter(item => item.income > 0 || item.spent > 0);

    const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    listElement.innerHTML = `
        <div class="yearly-overview-summary">
            <div>
                <div class="label">Total income</div>
                <strong>${money(totalIncome)}</strong>
            </div>
            <div>
                <div class="label">Total spent</div>
                <strong>${money(totalSpent)}</strong>
            </div>
            <div>
                <div class="label">Net saved</div>
                <strong class="${totalIncome - totalSpent < 0 ? "negative" : "positive"}">
                    ${money(totalIncome - totalSpent)}
                </strong>
            </div>
        </div>
    ` + (activeMonths.length ? "" : `
        <div class="calendar-empty">No recorded activity yet for ${year}.</div>
    `);

    if (chart) {
        const max = Math.max(1, ...months.map(item =>
            Math.max(item.income, item.spent)));
        const left = 34, bottom = 24, top = 18;
        const usableWidth = chart.width - left - 10;
        const usableHeight = chart.height - top - bottom;
        chart.context.strokeStyle = colors.grid;
        chart.context.beginPath();
        chart.context.moveTo(left, top);
        chart.context.lineTo(left, chart.height - bottom);
        chart.context.lineTo(chart.width - 10, chart.height - bottom);
        chart.context.stroke();
        const barWidth = Math.max(3, usableWidth / 12 / 3);
        months.forEach((item, index) => {
            const x = left + (index + 0.5) * (usableWidth / 12);
            const incomeHeight = item.income / max * usableHeight;
            const spentHeight = item.spent / max * usableHeight;
            chart.context.fillStyle = colors.income;
            chart.context.fillRect(x - barWidth - 1, chart.height - bottom - incomeHeight,
                barWidth, incomeHeight);
            chart.context.fillStyle = colors.expense;
            chart.context.fillRect(x + 1, chart.height - bottom - spentHeight,
                barWidth, spentHeight);
            chart.context.fillStyle = colors.muted;
            chart.context.font = "10px sans-serif";
            chart.context.fillText(monthLabels[item.month - 1], x - 9, chart.height - 8);
        });
        chart.context.fillStyle = colors.ink;
        chart.context.font = "700 12px sans-serif";
        chart.context.fillText("Income / spending by month", 10, 13);
        chart.context.fillStyle = colors.income;
        chart.context.fillRect(chart.width - 128, 7, 9, 9);
        chart.context.fillStyle = colors.ink;
        chart.context.font = "10px sans-serif";
        chart.context.fillText("Income", chart.width - 115, 15);
        chart.context.fillStyle = colors.expense;
        chart.context.fillRect(chart.width - 67, 7, 9, 9);
        chart.context.fillStyle = colors.ink;
        chart.context.fillText("Spent", chart.width - 53, 15);
    }
}


function renderCalendarAssignments() {

    const container =
        document.getElementById(
            "calendarAssignments"
        );

    if (!container) {
        return;
    }

    const monthData =
        loadMonthData() || {
            assignments: {},
            completed: {}
        };

    const categoryTotals =
        getCategorySpendTotals();

    const assignmentTransactions =
        loadLedger()
            .filter(transaction =>
                transaction.month === monthKey() &&
                isAssignmentCategory(transaction.category)
            )
            .sort((first, second) =>
                String(second.date || "").localeCompare(
                    String(first.date || "")
                )
            );

    const rows =
        Object.keys(DEFAULT_CATEGORIES)
            .map(category => {

                const assignedAmount =
                    Math.max(
                        0,
                        Number(
                            monthData?.assignments?.[category]
                            ?? DEFAULT_CATEGORIES[category]
                            ?? 0
                        )
                    );

                const spentAmount =
                    Math.max(
                        0,
                        Number(
                            categoryTotals[category] || 0
                        )
                    );

                const destination =
                    DESTINATIONS[category] || "Bank";

                const name =
                    CATEGORY_NAMES[category] ||
                    "Other";

                return `
                    <div class="calendar-assignment-item">
                        <div class="calendar-assignment-symbol">
                            ${category}
                        </div>

                        <div class="calendar-assignment-copy">
                            <div class="calendar-assignment-title">
                                ${escapeHtml(name)}
                            </div>
                            <div class="calendar-assignment-meta">
                                Destination: ${destination}
                            </div>
                        </div>

                        <div class="calendar-assignment-amounts">
                            <div class="calendar-assignment-spent">
                                ${money(spentAmount)}
                            </div>
                            <div class="calendar-assignment-planned">
                                Planned ${money(assignedAmount)}
                            </div>
                        </div>
                    </div>
                `;

            })
            .join("");

    container.innerHTML =
        (rows || `
            <div class="calendar-empty">
                No category assignments for this month yet.
            </div>
        `) +
        (assignmentTransactions.length
            ? `
                <h3 class="calendar-details-heading">
                    Assignment history
                </h3>
                ${assignmentTransactions
                    .map(calendarTransactionHtml)
                    .join("")}
            `
            : "");

}


function showCalendarDetails(type) {

    const detailsElement =
        document.getElementById("calendarDetails");
    const activityElement =
        document.getElementById("calendarActivity");
    const assignmentsElement =
        document.getElementById("calendarAssignments");

    if (!detailsElement) {
        return;
    }

    const allTransactions = getMonthTransactions();

    const transactions =
        allTransactions.filter(transaction =>
            type === "income"
                ? transaction.type === "income"
                : isSpendingTransaction(transaction)
        );

    const title =
        type === "income"
            ? "Income history"
            : "Spending history";

    if (activityElement) {
        activityElement.hidden = true;
    }

    if (assignmentsElement) {
        assignmentsElement.hidden = true;
    }

    detailsElement.hidden = false;
    detailsElement.innerHTML = `
        <div class="calendar-details-heading">
            ${title}
            <button type="button" class="calendar-details-close"
                onclick="hideCalendarDetails()">Close</button>
        </div>
        ${
            transactions.length
                ? transactions
                    .sort((first, second) =>
                        String(second.date || "").localeCompare(
                            String(first.date || "")
                        )
                    )
                    .map(calendarTransactionHtml)
                    .join("")
                : `<div class="calendar-empty">
                    No ${type === "income" ? "income" : "spending"}
                    recorded for this month.
                </div>`
        }
    `;

}


function showCalendarDetailsPage(type) {

    window.calendarDetailsType =
        type === "income" ? "income" : "spent";

    showPage("calendarDetailsPage");

}


function renderCalendarDetailsPage() {

    const type =
        window.calendarDetailsType || "income";
    const titleElement =
        document.getElementById("calendarDetailsTitle");
    const monthElement =
        document.getElementById("calendarDetailsMonth");
    const listElement =
        document.getElementById("calendarDetailsList");

    if (!titleElement || !monthElement || !listElement) {
        return;
    }

    const selectedMonth =
        document.getElementById("monthSelect");
    const monthLabel =
        selectedMonth?.selectedOptions[0]?.text ||
        monthKey();

    const transactions =
        getMonthTransactions()
            .filter(transaction =>
                type === "income"
                    ? transaction.type === "income"
                    : isSpendingTransaction(transaction)
            )
            .sort((first, second) =>
                String(second.date || "").localeCompare(
                    String(first.date || "")
                )
            );

    titleElement.textContent =
        type === "income"
            ? "Income history"
            : "Spending history";
    monthElement.textContent = monthLabel;
    listElement.innerHTML = transactions.length
        ? transactions.map(calendarTransactionHtml).join("")
        : `
            <div class="calendar-empty">
                No ${type === "income" ? "income" : "spending"}
                recorded for this month.
            </div>
        `;

}


function hideCalendarDetails() {

    const detailsElement =
        document.getElementById("calendarDetails");

    if (detailsElement) {
        detailsElement.hidden = true;
        detailsElement.innerHTML = "";
    }

    const activityElement =
        document.getElementById("calendarActivity");
    const assignmentsElement =
        document.getElementById("calendarAssignments");
    const showingAssignments =
        calendarView === "assignments";

    if (activityElement) {
        activityElement.hidden = showingAssignments;
    }

    if (assignmentsElement) {
        assignmentsElement.hidden = !showingAssignments;
    }

}


function showCalendarView(view) {

    calendarView =
        view === "assignments"
        ? "assignments"
        : "activity";

    const activityElement =
        document.getElementById(
            "calendarActivity"
        );

    const assignmentsElement =
        document.getElementById(
            "calendarAssignments"
        );

    const activityTab =
        document.getElementById(
            "calendarActivityTab"
        );

    const assignmentsTab =
        document.getElementById(
            "calendarAssignmentsTab"
        );

    if (!activityElement || !assignmentsElement ||
        !activityTab || !assignmentsTab) {
        return;
    }

    const showingAssignments =
        calendarView === "assignments";

    activityElement.hidden = showingAssignments;
    assignmentsElement.hidden = !showingAssignments;
    hideCalendarDetails();

    activityTab.classList.toggle(
        "active",
        !showingAssignments
    );

    assignmentsTab.classList.toggle(
        "active",
        showingAssignments
    );

    activityTab.setAttribute(
        "aria-selected",
        String(!showingAssignments)
    );

    assignmentsTab.setAttribute(
        "aria-selected",
        String(showingAssignments)
    );

    if (showingAssignments) {
        renderCalendarAssignments();
        return;
    }

    renderCalendar();

}


function renderCalendar() {

    const activityElement =
        document.getElementById(
            "calendarActivity"
        );

    const assignmentsElement =
        document.getElementById(
            "calendarAssignments"
        );

    if (!activityElement || !assignmentsElement) {
        return;
    }

    const selectedMonth =
        document.getElementById(
            "monthSelect"
        );

    const monthLabel =
        document.getElementById(
            "calendarMonthLabel"
        );

    if (monthLabel && selectedMonth) {
        monthLabel.textContent =
            selectedMonth.selectedOptions[0]?.text ||
            monthKey();
    }

    const allTransactions =
        loadLedger()
            .filter(transaction =>
                transaction.month === monthKey()
            )
            .sort((first, second) =>
                transactionTimestamp(second) - transactionTimestamp(first));

    const income =
        allTransactions
            .filter(transaction =>
                transaction.type === "income" &&
                transaction.transferKind !== "balance_correction"
            )
            .reduce(
                (total, transaction) =>
                    total +
                    Number(transaction.amount || 0),
                0
            );

    const spent =
        allTransactions
            .filter(isSpendingTransaction)
            .reduce(
                (total, transaction) =>
                    total +
                    Number(transaction.amount || 0),
                0
            );

    const transferred =
        allTransactions
            .filter(transaction =>
                transaction.type === "internal_transfer"
            )
            .reduce(
                (total, transaction) =>
                    total +
                    Number(transaction.amount || 0),
                0
            );

    document.getElementById(
        "calendarIncomeTotal"
    ).textContent = money(income);

    document.getElementById(
        "calendarSpentTotal"
    ).textContent = money(spent);

    document.getElementById(
        "calendarTransferTotal"
    ).textContent = money(transferred);

    renderCalendarAssignments();
    renderTransactionHistory();
    drawCharts();
    renderCalendarGrid(allTransactions);

    const activityTransactions =
        allTransactions.filter(transaction =>
            !isAssignmentCategory(transaction.category)
        );

    if (activityTransactions.length === 0) {
        activityElement.innerHTML = `
            <div class="calendar-empty">
                No activity has been recorded for this month yet.
            </div>
        `;
        return;
    }

    activityElement.innerHTML =
        activityTransactions
            .map(calendarTransactionHtml)
            .join("");

}


function renderCalendarGrid(monthTransactions) {

    const grid = document.getElementById("calendarGrid");
    if (!grid) {
        return;
    }

    const [year, month] = monthKey().split("-").map(Number);
    const daysInMonth = new Date(year, month, 0).getDate();
    const firstWeekday = new Date(year, month - 1, 1).getDay();
    const today = todayKey();

    const byDay = {};
    monthTransactions.forEach(transaction => {
        const day = String(transaction.date || "").slice(8, 10);
        if (!day) {
            return;
        }
        if (!byDay[day]) {
            byDay[day] = { income: false, expense: false, transfer: false };
        }
        if (transaction.type === "income") {
            byDay[day].income = true;
        } else if (isSpendingTransaction(transaction)) {
            byDay[day].expense = true;
        } else if (transaction.type === "internal_transfer") {
            byDay[day].transfer = true;
        }
    });

    let cells = "";
    for (let blank = 0; blank < firstWeekday; blank += 1) {
        cells += '<div class="calendar-grid-cell calendar-grid-cell-empty"></div>';
    }
    for (let day = 1; day <= daysInMonth; day += 1) {
        const dayKey = String(year) + "-" + String(month).padStart(2, "0") +
            "-" + String(day).padStart(2, "0");
        const marks = byDay[String(day).padStart(2, "0")];
        const dots = marks
            ? '<span class="calendar-grid-dots">' +
              (marks.income ? '<i class="calendar-dot calendar-dot-income"></i>' : "") +
              (marks.expense ? '<i class="calendar-dot calendar-dot-expense"></i>' : "") +
              (marks.transfer ? '<i class="calendar-dot calendar-dot-transfer"></i>' : "") +
              '</span>'
            : "";
        const isToday = dayKey === today ? " calendar-grid-cell-today" : "";
        const hasActivity = marks ? " calendar-grid-cell-active" : "";
        cells += '<button type="button" class="calendar-grid-cell' + isToday + hasActivity +
            '" data-day-key="' + dayKey + '">' +
            '<span class="calendar-grid-daynum">' + day + '</span>' + dots + '</button>';
    }

    grid.innerHTML = cells;
    grid.querySelectorAll(".calendar-grid-cell[data-day-key]").forEach(cell => {
        cell.addEventListener("click", () => {
            showCalendarDay(cell.dataset.dayKey);
        });
    });

}


function showCalendarDay(dayKey) {

    const detail = document.getElementById("calendarDayDetail");
    if (!detail) {
        return;
    }

    document.querySelectorAll(".calendar-grid-cell[data-day-key]").forEach(cell => {
        cell.classList.toggle("calendar-grid-cell-selected", cell.dataset.dayKey === dayKey);
    });

    const dayTransactions = loadLedger()
        .filter(transaction => transaction.date === dayKey)
        .sort((first, second) => Number(second.id || 0) - Number(first.id || 0));

    const dateLabel = calendarDateLabel(dayKey);

    if (dayTransactions.length === 0) {
        detail.hidden = false;
        detail.innerHTML =
            '<div class="calendar-day-detail-heading">' + escapeHtml(dateLabel) + '</div>' +
            '<div class="calendar-empty">Nothing recorded on this day.</div>';
        return;
    }

    detail.hidden = false;
    detail.innerHTML =
        '<div class="calendar-day-detail-heading">' + escapeHtml(dateLabel) + '</div>' +
        dayTransactions.map(calendarTransactionHtml).join("");

}


/* =========================================================
   SUMMARY
========================================================= */

function updateSummary() {

    const data =
        loadMonthData();

    const manualIncome =
        Math.max(
            0,
            Math.round(
                Number(
                    document.getElementById(
                        "incomeInput"
                    ).value
                ) || 0
            )
        );


    const assignments =
        getAssignments();


    const planned =
        Object.values(
            assignments
        ).reduce(
            (sum, amount) =>
                sum + amount,
            0
        );


    const transfers =
        data?.transfers || {};


    let transferred = 0;


    Object.keys(
        transfers
    ).forEach(category => {

        if (
            transfers[category]
        ) {

            transferred +=
                assignments[category] ||
                0;

        }

    });


    const transactions =
        getMonthTransactions();

    const spent =
        transactions
            .filter(transaction =>
                isSpendingTransaction(transaction))
            .reduce(
                (sum, transaction) =>
                    sum + Number(transaction.amount || 0),
                0
            );


    const recordedIncome = transactions
        .filter(transaction => transaction.type === "income" &&
            transaction.transferKind !== "balance_correction")
        .reduce((sum, transaction) => sum + Number(transaction.amount || 0), 0);
    const income = Math.max(manualIncome, recordedIncome);
    const remaining =
        income - planned;


    document.getElementById(
        "incomeDisplay"
    ).textContent =
        money(income);


    [
        ["summaryIncome", income],
        ["summaryPlanned", planned],
        ["summaryTransferred", transferred],
        ["summarySpent", spent]
    ].forEach(([id, value]) => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = money(value);
        }
    });


    const remainingElement =
        document.getElementById(
            "remainingDisplay"
        );


    if (remainingElement) {
        remainingElement.textContent = money(remaining);
        remainingElement.classList.toggle("negative", remaining < 0);
        remainingElement.classList.toggle("positive", remaining >= 0);
    }

    const totalBalance = Object.values(getBalances())
        .reduce((sum, balance) => sum + Number(balance || 0), 0);
    const budget = planned > 0 ? planned : income;
    const incomeWarning = income > 0 && spent >= income * 0.8;
    const plannedWarning = planned > 0 && spent >= planned * 0.8;
    const dashboardBalance = document.getElementById("dashboardBalance");
    const dashboardStatus = document.getElementById("dashboardStatus");
    const dashboardIncome = document.getElementById("dashboardIncome");
    const dashboardBudget = document.getElementById("dashboardBudget");
    const dashboardSpent = document.getElementById("dashboardSpent");
    const dashboardTotalBalance = document.getElementById("dashboardTotalBalance");
    const budgetWarning = document.getElementById("budgetWarning");
    const dashboardDaysLeft = document.getElementById("dashboardDaysLeft");
    const dashboardSafeToSpend = document.getElementById("dashboardSafeToSpend");
    const dashboardSafeToSpendHint = document.getElementById("dashboardSafeToSpendHint");
    const dashboardProjectedEndBalance = document.getElementById("dashboardProjectedEndBalance");
    const dashboardProjectedEndHint = document.getElementById("dashboardProjectedEndHint");
    const spendableCategoryElements = {
        P: document.getElementById("dashboardSpendableP"),
        C: document.getElementById("dashboardSpendableC"),
        T: document.getElementById("dashboardSpendableT")
    };
    const spendableCategoryNames = {
        P: document.getElementById("dashboardSpendablePName"),
        C: document.getElementById("dashboardSpendableCName"),
        T: document.getElementById("dashboardSpendableTName")
    };
    const spendableCategoryUsed = {
        P: document.getElementById("dashboardSpendablePUsed"),
        C: document.getElementById("dashboardSpendableCUsed"),
        T: document.getElementById("dashboardSpendableTUsed")
    };
    const spendableCategoryProgress = {
        P: document.getElementById("dashboardSpendablePProgress"),
        C: document.getElementById("dashboardSpendableCProgress"),
        T: document.getElementById("dashboardSpendableTProgress")
    };

    if (dashboardBalance) {
        dashboardBalance.textContent = income > 0 ? money(remaining) : "—";
        dashboardBalance.classList.toggle("negative", income > 0 && remaining < 0);
        dashboardBalance.classList.toggle("positive", income > 0 && remaining >= 0);
    }
    if (dashboardIncome) {
        dashboardIncome.textContent = money(income);
        dashboardIncome.classList.add("positive");
        dashboardIncome.classList.remove("negative");
    }
    if (dashboardBudget) {
        dashboardBudget.textContent = income > 0 ? money(budget) : "Not set";
    }
    if (dashboardSpent) {
        dashboardSpent.textContent = money(spent);
        dashboardSpent.classList.add("negative");
        dashboardSpent.classList.remove("positive");
    }
    if (dashboardTotalBalance) {
        dashboardTotalBalance.textContent = money(totalBalance);
    }

    if (dashboardDaysLeft || dashboardSafeToSpend) {
        const totalDays = daysInSelectedMonth();
        const isCurrentMonth = monthKey() === currentMonthKey();
        const todayDay = Number(todayKey().slice(-2));
        const daysLeft = isCurrentMonth
            ? Math.max(1, totalDays - todayDay + 1)
            : totalDays;
        if (dashboardDaysLeft) {
            dashboardDaysLeft.textContent = isCurrentMonth
                ? daysLeft + " day" + (daysLeft === 1 ? "" : "s") + " left this month"
                : "Your month in one clear view";
        }
        if (dashboardSafeToSpend) {
            const fundedAmounts = {};
            DAILY_SPEND_CATEGORIES.forEach(category => {
                const fundingTransfer = (data?.transactions || []).find(transaction =>
                    transaction.type === "internal_transfer" &&
                    transaction.category === category &&
                    transaction.transferKind !== "assignment_payment" &&
                    transaction.to === DESTINATIONS[category] &&
                    transaction.from === data?.mainBank);
                fundedAmounts[category] = hasAssignmentFunding(data, category)
                    ? Number(fundingTransfer?.amount || 0) : 0;
            });
            const categorySpendTotals = getCategorySpendTotalsForMonth(monthKey());
            const spendableBudget = DAILY_SPEND_CATEGORIES.reduce((sum, category) =>
                sum + fundedAmounts[category], 0);
            const spendableSpent = DAILY_SPEND_CATEGORIES.reduce((sum, category) =>
                sum + Number(categorySpendTotals[category] || 0), 0);
            const spendableRemaining = spendableBudget - spendableSpent;
            const spendableByCategory = {};
            DAILY_SPEND_CATEGORIES.forEach(category => {
                const categorySpent = Number(categorySpendTotals[category] || 0);
                spendableByCategory[category] = fundedAmounts[category] - categorySpent;
                if (spendableCategoryElements[category]) {
                    spendableCategoryElements[category].textContent = money(
                        Math.max(0, spendableByCategory[category]));
                }
                if (spendableCategoryNames[category]) {
                    spendableCategoryNames[category].textContent = categoryStyle(category).icon + " · " + CATEGORY_NAMES[category];
                    spendableCategoryNames[category].style.color = categoryStyle(category).color;
                }
                if (spendableCategoryUsed[category]) {
                    spendableCategoryUsed[category].textContent =
                        "Used this month: " + money(categorySpent);
                }
                if (spendableCategoryProgress[category]) {
                    const fundedAmount = fundedAmounts[category];
                    const usedRatio = fundedAmount > 0
                        ? Math.min(100, Math.max(0, categorySpent / fundedAmount * 100)) : 0;
                    spendableCategoryProgress[category].style.width = usedRatio + "%";
                    spendableCategoryProgress[category].setAttribute("aria-valuenow", String(Math.round(usedRatio)));
                }
            });
            if (income <= 0) {
                dashboardSafeToSpend.textContent = money(0);
                dashboardSafeToSpend.classList.remove("negative");
                if (dashboardSafeToSpendHint) {
                    dashboardSafeToSpendHint.textContent =
                        "Confirm your income, then fund P, C or T to activate the guide.";
                }
            } else {
                const perDay = spendableRemaining / daysLeft;
                dashboardSafeToSpend.textContent = money(Math.max(0, perDay));
                dashboardSafeToSpend.classList.toggle("negative", spendableRemaining < 0);
                if (dashboardSafeToSpendHint) {
                    const fundedCount = DAILY_SPEND_CATEGORIES.filter(category =>
                        fundedAmounts[category] > 0).length;
                    dashboardSafeToSpendHint.textContent = fundedCount === 0
                        ? "Fund P, C or T to see your actual spendable balance."
                        : spendableRemaining < 0
                        ? "P, C & T are over by " + money(Math.abs(spendableRemaining)) + ". Review today's spending."
                        : money(spendableRemaining) + " left across P, C & T ÷ " + daysLeft +
                          " day" + (daysLeft === 1 ? "" : "s") + " remaining";
                }
            }
        }
    }

    if (dashboardProjectedEndBalance) {
        if (income <= 0) {
            dashboardProjectedEndBalance.textContent = "0 MRU";
            dashboardProjectedEndBalance.classList.remove("negative");
            if (dashboardProjectedEndHint) {
                dashboardProjectedEndHint.textContent = "Confirm income to estimate what remains at month-end.";
            }
        } else {
            const projectedEnd = income - spent;
            dashboardProjectedEndBalance.textContent = money(projectedEnd);
            dashboardProjectedEndBalance.classList.toggle("negative", projectedEnd < 0);
            if (dashboardProjectedEndHint) {
                dashboardProjectedEndHint.textContent = projectedEnd < 0
                    ? "You are already above your planned month-end balance. Reduce flexible spending to get back on track."
                    : "Projected cash left after your current spending pace for this month.";
            }
        }
    }

    if (dashboardStatus) {
        dashboardStatus.classList.remove("neutral", "good", "warning");
        if (income <= 0) {
            dashboardStatus.textContent =
                "Add your income to see your monthly status and future spending guide.";
            dashboardStatus.classList.add("neutral");
        } else if (incomeWarning || plannedWarning) {
            const overBy = Math.max(0, spent - budget);
            dashboardStatus.textContent =
                "Spending is getting high. You are " + money(overBy) + " above target this month. Pull back on flexible spending.";
            dashboardStatus.classList.add("warning");
        } else {
            const projectedLeft = income > 0 ? Math.max(0, income - spent) : 0;
            dashboardStatus.textContent =
                "On track: " + money(spent) + " spent so far. About " + money(projectedLeft) + " remains before month-end.";
            dashboardStatus.classList.add("good");
        }
    }
    if (budgetWarning) {
        if (incomeWarning || plannedWarning) {
            const basis = incomeWarning && plannedWarning
                ? "income and planned budget"
                : incomeWarning ? "income" : "planned budget";
            const percent = budget > 0
                ? Math.round(spent / budget * 100)
                : 0;
            budgetWarning.textContent =
                "⚠ Budget warning: " + money(spent) +
                " spent (" + percent + "% of your " + basis +
                "). Consider slowing down or reviewing your plan.";
            budgetWarning.hidden = false;
        } else {
            budgetWarning.hidden = true;
            budgetWarning.textContent = "";
        }
    }

}


function reportRows() {
    return getMonthTransactions().sort((first, second) =>
        String(first.date || "").localeCompare(String(second.date || "")));
}

function csvCell(value) {
    return '"' + String(value == null ? "" : value).replace(/"/g, '""') + '"';
}

function monthlyReportCsv() {
    const rows = reportRows();
    const header = ["Date", "Type", "Description", "Category", "Bank", "From", "To", "Amount (MRU)"];
    const lines = [header].concat(rows.map(transaction => [
        transaction.date || monthKey(), transaction.type,
        transaction.description || "", transaction.category || "",
        transaction.bank || "", transaction.from || "", transaction.to || "",
        Number(transaction.amount || 0)
    ])).map(row => row.map(csvCell).join(","));
    return "\uFEFF" + lines.join("\r\n");
}

function downloadMonthlyCsv() {
    const blob = new Blob([monthlyReportCsv()], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "itoumrou-report-" + monthKey() + ".csv";
    link.click();
    URL.revokeObjectURL(url);
    setMessage("Monthly CSV report downloaded.");
}

function printMonthlyReport() {
    const rows = reportRows();
    const income = rows.filter(item => item.type === "income" &&
            item.transferKind !== "balance_correction")
        .reduce((sum, item) => sum + Number(item.amount || 0), 0);
    const spent = rows.filter(isSpendingTransaction)
        .reduce((sum, item) => sum + Number(item.amount || 0), 0);
    const selected = document.getElementById("monthSelect");
    const label = selected && selected.selectedOptions[0]
        ? selected.selectedOptions[0].text : monthKey();
    const popup = window.open("", "_blank");
    if (!popup) {
        alert("Allow pop-ups to print the report.");
        return;
    }
    popup.document.write("<!doctype html><html><head><title>" +
        escapeHtml("It$umrou " + label) +
        "</title><style>body{font-family:Arial,sans-serif;padding:28px;color:#123d2f}h1{margin:0 0 8px}table{width:100%;border-collapse:collapse;margin-top:20px}th,td{border-bottom:1px solid #dbe9df;padding:8px;text-align:left}th{background:#eaf8ef}.totals{display:flex;gap:30px;margin-top:16px;font-weight:bold}</style></head><body>" +
        "<h1>It$umrou — " + escapeHtml(label) + "</h1><div class=\"totals\"><span>Income: " +
        money(income) + "</span><span>Spent: " + money(spent) + "</span></div><table><thead><tr><th>Date</th><th>Type</th><th>Description</th><th>Bank</th><th>Amount</th></tr></thead><tbody>" +
        (rows.length ? rows.map(item => "<tr><td>" + escapeHtml(item.date || "") +
            "</td><td>" + escapeHtml(item.type) + "</td><td>" +
            escapeHtml(item.description || "") + "</td><td>" +
            escapeHtml(item.bank || item.to || "") + "</td><td>" +
            money(item.amount) + "</td></tr>").join("") :
            "<tr><td colspan=\"5\">No transactions recorded.</td></tr>") +
        "</tbody></table></body></html>");
    popup.document.close();
    popup.focus();
    popup.print();
}

/* =========================================================
   MONTH CLOSE, AUDIT & INSIGHTS
========================================================= */

function isMonthClosed() {
    return Boolean(loadMonthData()?.closed);
}

function requireOpenMonth(action) {
    if (!isMonthClosed()) {
        return true;
    }
    alert("This month is closed. Reopen it before " + action + ".");
    return false;
}

function loadCloseHistory() {
    try {
        const history = JSON.parse(localStorage.getItem(CLOSE_HISTORY_KEY) || "[]");
        return Array.isArray(history) ? history : [];
    } catch (error) {
        return [];
    }
}

function saveCloseHistory(history) {
    localStorage.setItem(CLOSE_HISTORY_KEY, JSON.stringify(history.slice(-60)));
}

function closeMonth() {
    if (isMonthClosed()) {
        return;
    }
    const overdueBills = loadBills().filter(bill =>
        !bill.paid && billDaysUntil(bill.dueDate) < 0 &&
        String(bill.dueDate).slice(0, 7) <= monthKey());
    if (overdueBills.length &&
        !confirm("These bills are overdue and still unpaid: " +
            overdueBills.map(bill => bill.name).join(", ") +
            ". Close the month anyway?")) {
        return;
    }
    const data = loadMonthData() || {
        month: monthKey(), income: 0, mainBank: selectedBank,
        incomeConfirmed: false, assignments: getAssignments(),
        completed: {}, transfers: {}, transactions: []
    };
    const transactions = getMonthTransactions();
    const spent = transactions.filter(isSpendingTransaction)
        .reduce((sum, item) => sum + Number(item.amount || 0), 0);
    const income = Number(data.income || 0);
    const savedTransfer = transactions.find(item =>
        item.type === "internal_transfer" && item.category === "$");
    const saved = savedTransfer ? Number(savedTransfer.amount || 0) : 0;
    const byCategory = {};
    transactions.filter(isSpendingTransaction).forEach(item => {
        const key = item.category || "OTHER";
        byCategory[key] = (byCategory[key] || 0) + Number(item.amount || 0);
    });
    const categoryLines = Object.keys(byCategory)
        .sort((a, b) => byCategory[b] - byCategory[a])
        .map(category => "  " + (CATEGORY_NAMES[category] || "Other") +
            ": " + money(byCategory[category]))
        .join("\n");
    if (!confirm("Close " + monthKey() + "? It will become read-only until reopened.\n\n" +
        "Month summary:\n" +
        "Income: " + money(income) + "\n" +
        "Spent: " + money(spent) + "\n" +
        "Saved: " + money(saved) +
        (categoryLines ? "\n\nBy category:\n" + categoryLines : ""))) {
        return;
    }
    captureUndoState("Month closed");
    data.closed = true;
    data.closedAt = new Date().toISOString();
    data.closeSummary = { income: Number(data.income || 0), spent: spent };
    saveMonthData(data);
    const history = loadCloseHistory().filter(item => item.month !== monthKey());
    history.push({ month: monthKey(), closedAt: data.closedAt, spent: spent });
    saveCloseHistory(history);
    appendAuditEvent("month_closed", { month: monthKey(), spent: spent });
    updateAll();
    setMessage("Month closed and locked. Reopen it to make corrections.");
}

function autoCloseElapsedMonths() {
    const current = currentMonthKey();
    const elapsedMonths = [];
    for (let index = 0; index < localStorage.length; index += 1) {
        const key = localStorage.key(index);
        const match = key && key.match(/^itoumrou_month_(\d{4}-\d{2})$/);
        if (match && match[1] < current) {
            elapsedMonths.push(match[1]);
        }
    }
    let closedAny = false;
    elapsedMonths.sort().forEach(month => {
        let data;
        try {
            data = JSON.parse(localStorage.getItem("itoumrou_month_" + month));
        } catch {
            data = null;
        }
        if (!data || data.closed) {
            return;
        }
        const transactions = loadLedger().filter(item => item.month === month)
            .concat((data.transactions || []).filter(item =>
                !loadLedger().some(ledgerItem => ledgerItem.id === item.id)));
        const spent = transactions.filter(isSpendingTransaction)
            .reduce((sum, item) => sum + Number(item.amount || 0), 0);
        data.closed = true;
        data.closedAt = new Date().toISOString();
        data.autoClosed = true;
        data.closeSummary = { income: Number(data.income || 0), spent: spent };
        localStorage.setItem("itoumrou_month_" + month, JSON.stringify(data));
        const history = loadCloseHistory().filter(item => item.month !== month);
        history.push({ month: month, closedAt: data.closedAt, spent: spent, autoClosed: true });
        saveCloseHistory(history);
        appendAuditEvent("month_auto_closed", { month: month, spent: spent });
        closedAny = true;
    });
    if (closedAny) {
        rolloverNotice = "Past month(s) were automatically closed and locked as the real month ended. Reopen a month from Calendar if you need to make corrections.";
    }
}

function reopenMonth() {
    if (!isMonthClosed()) {
        return;
    }
    if (!confirm("Reopen " + monthKey() + " for edits?")) {
        return;
    }
    const data = loadMonthData();
    data.closed = false;
    data.reopenedAt = new Date().toISOString();
    saveMonthData(data);
    const history = loadCloseHistory();
    const entry = history.find(item => item.month === monthKey());
    if (entry) {
        entry.reopenedAt = data.reopenedAt;
        saveCloseHistory(history);
    }
    appendAuditEvent("month_reopened", { month: monthKey() });
    updateAll();
    setMessage("Month reopened for edits.");
}

function renderMonthWorkflow() {
    const data = loadMonthData();
    const closed = Boolean(data?.closed);
    const status = document.getElementById("monthlyWorkflowStatus");
    const badge = document.getElementById("monthlyWorkflowBadge");
    const close = document.getElementById("closeMonthButton");
    const reopen = document.getElementById("reopenMonthButton");
    if (status) {
        const assignmentCount = Object.keys(DEFAULT_CATEGORIES)
            .filter(category => data?.transfers?.[category]).length;
        const planStatus = (data?.incomeConfirmed ? "Income confirmed" : "Income pending") +
            " · " + assignmentCount + "/" + Object.keys(DEFAULT_CATEGORIES).length + " assignments sent";
        status.textContent = closed
            ? (data.autoClosed
                ? "Automatically closed " + calendarDateLabel(String(data.closedAt || "").slice(0, 10)) +
                  " (month ended). Edits are locked."
                : "Closed " + calendarDateLabel(String(data.closedAt || "").slice(0, 10)) + ". Edits are locked.")
            : "This month is open · " + planStatus + ".";
    }
    if (badge) {
        badge.textContent = closed ? "Closed" : "Open";
        badge.classList.toggle("closed", closed);
        badge.classList.toggle("open", !closed);
    }
    if (close) {
        close.hidden = closed;
    }
    if (reopen) {
        reopen.hidden = !closed;
    }
    document.querySelectorAll(
        "#incomeInput, #confirmIncomeButton, .bank-button, .assignment-checkbox, " +
        ".assignment-amount, #bankTransferForm input, #bankTransferForm select, " +
        "#bankTransferButton, #addExpenseButton, #finishSpendingButton"
    ).forEach(element => {
        element.disabled = closed;
    });
}

function toggleMonthCloseHistory() {
    const box = document.getElementById("monthCloseHistory");
    if (!box) {
        return;
    }
    box.hidden = !box.hidden;
    if (box.hidden) {
        return;
    }
    const history = loadCloseHistory().slice().reverse();
    box.innerHTML = history.length ? history.map(item =>
        '<div class="month-history-item"><strong>' + escapeHtml(item.month) +
        '</strong><span>' + (item.reopenedAt ? "Reopened" : "Closed") +
        " · " + escapeHtml(calendarDateLabel(String(item.closedAt || "").slice(0, 10))) +
        " · spent " + money(item.spent) + "</span></div>"
    ).join("") : '<div class="empty">No close history yet.</div>';
}

function auditAppData(repair) {
    const issues = [];
    const warnings = [];
    let duplicateRecords = 0;
    const rawLedger = localStorage.getItem(LEDGER_KEY);
    let ledger = [];
    if (rawLedger) {
        try {
            ledger = JSON.parse(rawLedger);
            if (!Array.isArray(ledger)) {
                issues.push("Ledger is not an array.");
                ledger = [];
            }
        } catch (error) {
            issues.push("Ledger JSON is malformed.");
        }
    }
    const ids = new Map();
    const exactDuplicateIds = new Set();
    ledger.forEach(item => {
        if (!item || typeof item !== "object") {
            issues.push("Ledger contains a non-object record.");
            return;
        }
        if (!Number.isInteger(Number(item.amount)) || Number(item.amount) < 0 ||
            Number(item.amount) > MAX_AMOUNT) {
            issues.push("Invalid amount in ledger record " + String(item.id || "(no id)") + ".");
        }
        if (!["income", "expense", "internal_transfer"].includes(item.type)) {
            issues.push("Unknown transaction type in ledger record " + String(item.id || "(no id)") + ".");
        }
        if (item.month && !/^\d{4}-\d{2}$/.test(String(item.month))) {
            warnings.push("Unusual month value in ledger record " + String(item.id || "(no id)") + ".");
        }
        if (item.id != null) {
            const key = String(item.id);
            if (ids.has(key) && JSON.stringify(ids.get(key)) === JSON.stringify(item)) {
                duplicateRecords += 1;
                exactDuplicateIds.add(key);
            } else if (ids.has(key)) {
                issues.push("Conflicting duplicate ledger id " + key + ".");
            } else {
                ids.set(key, item);
            }
        } else {
            warnings.push("Ledger record without an id.");
        }
        if (item.type === "expense" && !BANKS.includes(item.bank)) {
            issues.push("Expense " + String(item.id || "(no id)") + " has an invalid bank.");
        }
        if (item.type === "internal_transfer" &&
            (!BANKS.includes(item.from) || !BANKS.includes(item.to) || item.from === item.to)) {
            issues.push("Transfer " + String(item.id || "(no id)") + " has invalid source/destination banks.");
        }
    });
    const rawBalances = localStorage.getItem("itoumrou_balances");
    const balances = getBalances();
    if (rawBalances) {
        try {
            const parsedBalances = JSON.parse(rawBalances);
            if (!parsedBalances || typeof parsedBalances !== "object" || Array.isArray(parsedBalances)) {
                issues.push("Balances JSON is not an object.");
            }
        } catch (error) {
            issues.push("Balances JSON is malformed.");
        }
    }
    BANKS.forEach(bank => {
        if (!Number.isFinite(Number(balances[bank])) || Number(balances[bank]) < 0) {
            issues.push("Invalid balance for " + bank + ".");
        }
    });
    for (let index = 0; index < localStorage.length; index += 1) {
        const key = localStorage.key(index);
        if (!key || (!key.startsWith("itoumrou_month_") && !key.startsWith("itoumrou_expenses_"))) {
            continue;
        }
        try {
            const value = JSON.parse(localStorage.getItem(key));
            if (key.startsWith("itoumrou_month_") && (!value || typeof value !== "object" || Array.isArray(value))) {
                issues.push("Invalid month record " + key.slice("itoumrou_month_".length) + ".");
            }
            if (key.startsWith("itoumrou_expenses_") && !Array.isArray(value)) {
                issues.push("Expense list is not an array for " + key.slice("itoumrou_expenses_".length) + ".");
            }
            if (key.startsWith("itoumrou_expenses_") && Array.isArray(value)) {
                value.forEach(expense => {
                    if (!expense || expense.id == null) {
                        warnings.push("Expense without an id in " + key.slice("itoumrou_expenses_".length) + ".");
                    } else if (!ids.has(String(expense.id))) {
                        warnings.push("Expense " + String(expense.id) + " is not present in the master ledger.");
                    }
                });
            }
        } catch (error) {
            issues.push("Malformed JSON in " + key + ".");
        }
    }
    if (duplicateRecords && repair) {
        const seen = new Set();
        ledger = ledger.filter(item => {
            const key = item && item.id != null ? String(item.id) : "";
            const signature = key + "|" + JSON.stringify(item);
            if (!key || !exactDuplicateIds.has(key) || !seen.has(signature)) {
                if (key && exactDuplicateIds.has(key)) {
                    seen.add(signature);
                }
                return true;
            }
            return false;
        });
        saveLedger(ledger);
        appendAuditEvent("audit_repaired_exact_duplicates", { removed: duplicateRecords });
        duplicateRecords = 0;
    }
    const report = [
        "It$umrou data audit · " + new Date().toLocaleString(),
        "Records checked: " + ledger.length,
        "Balances checked: " + BANKS.length,
        "Audit events retained: " + loadAuditEventCount(),
        "Issues: " + issues.length,
        "Warnings: " + warnings.length,
        "Exact duplicate records: " + duplicateRecords,
        issues.length ? "\nIssues\n- " + issues.join("\n- ") : "\nNo blocking consistency issues found.",
        warnings.length ? "\nWarnings\n- " + warnings.join("\n- ") : ""
    ].join("\n");
    localStorage.setItem(AUDIT_LAST_KEY, new Date().toISOString());
    const output = document.getElementById("auditReport");
    if (output) {
        output.textContent = report;
    }
    const repairButton = document.getElementById("repairAuditButton");
    if (repairButton) {
        repairButton.hidden = repair || duplicateRecords === 0;
    }
    if (!repair) {
        setMessage(issues.length ? "Audit complete: review the report." : "Audit complete: data looks consistent.");
    }
    return { issues: issues, warnings: warnings, duplicateRecords: duplicateRecords };
}

function loadAuditEventCount() {
    try {
        const events = JSON.parse(localStorage.getItem(AUDIT_LOG_KEY) || "[]");
        return Array.isArray(events) ? events.length : 0;
    } catch (error) {
        return 0;
    }
}

function renderInsights() {
    const container = document.getElementById("insightsContent");
    if (!container) {
        return;
    }
    const transactions = getMonthTransactions();
    const expenses = transactions.filter(isSpendingTransaction);
    const total = expenses.reduce((sum, item) => sum + Number(item.amount || 0), 0);
    const data = loadMonthData() || {};
    const income = Number(data.income || 0);
    const days = new Set(expenses.map(item => item.date).filter(Boolean)).size;
    const categories = {};
    expenses.forEach(item => {
        const key = item.category || "OTHER";
        categories[key] = (categories[key] || 0) + Number(item.amount || 0);
    });
    const top = Object.keys(categories).sort((a, b) => categories[b] - categories[a])[0];
    const insights = [];
    const overPlan = Object.keys(categories).find(category => {
        const planned = Number(data.assignments?.[category] ?? DEFAULT_CATEGORIES[category] ?? 0);
        return planned > 0 && categories[category] > planned;
    });
    if (overPlan) {
        insights.push(["Plan check", (CATEGORY_NAMES[overPlan] || "Other") +
            " is over plan by " + money(categories[overPlan] -
                Number(data.assignments?.[overPlan] ?? DEFAULT_CATEGORIES[overPlan])) +
            ". Consider adjusting the remaining assignments."]);
    }
    if (!expenses.length) {
        insights.push(["Start small", "Record your first expense to unlock a personalized spending trend."]);
    } else if (top) {
        const share = total ? Math.round(categories[top] / total * 100) : 0;
        insights.push(["Your biggest category", (CATEGORY_NAMES[top] || "Other") + " is " + share + "% of spending (" + money(categories[top]) + ")."]);
    }
    if (income > 0 && total > income * 0.8) {
        insights.push(["Gentle slowdown", "You have used " + Math.round(total / income * 100) + "% of income. Pause non-essential purchases until the next review."]);
    } else if (income > 0) {
        insights.push(["You are on track", money(Math.max(0, income - total)) + " of recorded income remains. Keep a little buffer for surprises."]);
    }
    if (days >= 3) {
        insights.push(["Habit signal", "You logged spending on " + days + " days. A quick daily check-in keeps your plan accurate."]);
    }
    const prevMonth = previousMonthKey(monthKey());
    const prevExpenses = loadLedger().filter(transaction =>
        transaction.month === prevMonth && isSpendingTransaction(transaction));
    const prevTotal = prevExpenses.reduce((sum, item) => sum + Number(item.amount || 0), 0);
    if (prevTotal > 0 && total > 0) {
        const diff = total - prevTotal;
        const percent = Math.round(Math.abs(diff) / prevTotal * 100);
        if (percent >= 10) {
            insights.push(["Compared to last month", diff > 0
                ? "You have spent " + percent + "% more than last month so far (" + money(total) + " vs " + money(prevTotal) + ")."
                : "You have spent " + percent + "% less than last month so far (" + money(total) + " vs " + money(prevTotal) + ")."]);
        }
    }
    container.innerHTML = insights.map(item =>
        '<div class="insight-item"><span class="insight-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" width="18" height="18"><path d="M12 3L13.8 9.2L20 11L13.8 12.8L12 19L10.2 12.8L4 11L10.2 9.2L12 3Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg></span><div><strong>' +
        escapeHtml(item[0]) + '</strong><div class="label">' + escapeHtml(item[1]) + "</div></div></div>"
    ).join("");
}

function renderHomeNextAction() {
    const card = document.getElementById("homeNextAction");
    const title = document.getElementById("homeNextActionTitle");
    const text = document.getElementById("homeNextActionText");
    const button = document.getElementById("homeNextActionButton");
    if (!card || !title || !text || !button) {
        return;
    }
    const data = loadMonthData() || {};
    const pendingAssignments = Object.keys(DEFAULT_CATEGORIES).filter(category =>
        !hasAssignmentFunding(data, category));
    const incomeConfirmed = Boolean(data.incomeConfirmed);
    let action = {
        title: "Confirm your income",
        text: "Start your month by confirming where your income arrived.",
        label: "Set up income",
        page: "homePage"
    };
    if (incomeConfirmed && pendingAssignments.length) {
        action = {
            title: "Fund your monthly plan",
            text: pendingAssignments.length + " assignment" +
                (pendingAssignments.length === 1 ? " is" : "s are") +
                " waiting for funding.",
            label: "Review assignments",
            page: "assignmentsPage"
        };
    } else if (incomeConfirmed) {
        action = {
            title: "Keep your month current",
            text: "Record today's spending so your safe-to-spend guide stays accurate.",
            label: "Record spending",
            page: "spendingPage"
        };
    }
    title.textContent = action.title;
    text.textContent = action.text;
    button.textContent = action.label;
    button.onclick = () => {
        showPage(action.page);
        if (action.page === "homePage") {
            const incomeInput = document.getElementById("incomeInput");
            if (incomeInput) {
                incomeInput.focus();
            }
        }
    };
}

/* =========================================================
   UPDATE EVERYTHING
========================================================= */

function updateAll() {

    renderAssignments();

    renderHomeBanks();

    renderBankTransferHistory();

    if (document.getElementById("banksPage").classList.contains("active")) {
        renderManageBanks();
    }

    updateSummary();
    renderMonthWorkflow();
    renderInsights();
    renderHomeNextAction();
    renderAssignmentReminder();

    const dashboardDetails = document.querySelector(".dashboard-details");
    if (dashboardDetails && dashboardDetails.open) {
        drawCharts();
    }

    updateTodayTotal();
    renderBills();
    updateDashboardBills();
    checkBillReminders();
    checkBackupReminder();
    checkBalanceCheckReminder();

    if (
        document
            .getElementById(
                "calendarPage"
            )
            .classList.contains(
                "active"
            )
    ) {

        renderCalendar();

    }

    if (
        document
            .getElementById(
                "bankDetailsPage"
            )
            .classList.contains(
                "active"
            )
    ) {

        renderBankDetails();

    }

    if (
        document
            .getElementById("savingsPage")
            .classList.contains("active")
    ) {
        renderSavingsPage();
    }

    applyLanguage();

}

function renderAssignmentReminder() {
    const reminder = document.getElementById("assignmentReminder");
    const data = loadMonthData();
    if (!reminder) {
        return;
    }
    if (!data?.incomeConfirmed) {
        reminder.hidden = true;
        return;
    }
    const pending = Object.keys(DEFAULT_CATEGORIES).filter(category =>
        !hasAssignmentFunding(data, category)
    );
    const labels = pending.map(category =>
        category + " " + CATEGORY_NAMES[category]
    );
    reminder.hidden = pending.length === 0;
    reminder.innerHTML = pending.length
        ? "<strong>BM.S received.</strong> Review next: " +
          escapeHtml(labels.join(", ")) + "."
        : "<strong>All monthly assignments are funded.</strong>";
}


/* =========================================================
   MONTH LOADING
========================================================= */

function loadMonth() {

    applyRecurringExpenses();
    applyRecurringIncome();
    const data =
        loadMonthData();


    selectedBank =
        data?.mainBank || null;


    document.getElementById(
        "incomeInput"
    ).value =
        data?.income || "";


    if (selectedBank) {

        document.getElementById(
            "mainBankDisplay"
        ).textContent =
            selectedBank +
            " — Main Bank for " +
            document.getElementById(
                "monthSelect"
            ).selectedOptions[0].text;

    } else {

        document.getElementById(
            "mainBankDisplay"
        ).textContent =
            "Not selected";

    }


    document
        .querySelectorAll(".bank-button")
        .forEach(button => {

            button.classList.toggle(
                "selected",
                button.dataset.bank ===
                selectedBank
            );

        });


    document.getElementById(
        "incomeStatus"
    ).textContent =
        data?.incomeConfirmed
        ? "✓ BM.S received and added to " +
          selectedBank + "."
        : "BM.S has not been confirmed.";
    const assignmentReminder = document.getElementById("assignmentReminder");
    if (assignmentReminder) {
        assignmentReminder.hidden = !data?.incomeConfirmed;
    }

    const setupComplete =
        Boolean(data?.incomeConfirmed);

    const setupFields =
        document.getElementById("incomeSetupFields");

    const setupButton =
        document.getElementById("incomeSetupContent");

    const bankSelectionSection =
        document.getElementById("bankSelectionSection");

    if (setupFields) {
        setupFields.hidden = setupComplete;
    }

    if (setupButton) {
        setupButton.hidden = setupComplete;
    }

    if (bankSelectionSection) {
        bankSelectionSection.hidden = setupComplete;
    }


    updateAll();
    renderRecurringExpenses();
    renderRecurringIncome();
    renderSavingsGoals();
    if (rolloverNotice) {
        setMessage(rolloverNotice);
        rolloverNotice = "";
    }
    renderUndoMessage();

}


/* =========================================================
   NOTIFICATIONS
========================================================= */

function spendingReminderMessage() {

    const confirmedKey =
        "itoumrou_spending_confirmed_" +
        todayKey();

    if (
        localStorage.getItem(confirmedKey) === "true"
    ) {
        showPage("spendingPage");
        return;
    }


    const nothingKey =
        "itoumrou_nothing_spent_" +
        todayKey();

    if (
        localStorage.getItem(nothingKey) === "true"
    ) {

        const continueAdding =
            confirm(
                "You previously said you spent nothing today.\n\n" +
                "Do you want to add spending now?"
            );

        if (!continueAdding) {
            return;
        }

        localStorage.removeItem(nothingKey);

    }


    const answer =
        confirm(
            "ItOumrou\n\n" +
            "What did you spend today?\n\n" +
            "OK = record spending\n" +
            "Cancel = nothing spent"
        );


    if (answer) {

        showPage("spendingPage");

        return;

    }


    nothingSpentToday();

}

function checkDailyReminder() {
    if (monthKey() !== currentMonthKey()) {
        return;
    }
    if (applyRecurringExpenses()) {
        updateAll();
    }
    if (rolloverNotice) {
        setMessage(rolloverNotice);
        rolloverNotice = "";
    }
    const now = new Date();
    const reminderKey = "itoumrou_reminder_shown_" + todayKey();
    if (loadNotificationPrefs().dailySpending &&
        now.getHours() >= 23 &&
        localStorage.getItem(reminderKey) !== "true" &&
        localStorage.getItem("itoumrou_spending_confirmed_" + todayKey()) !== "true") {
        localStorage.setItem(reminderKey, "true");
        setMessage("Reminder: record today's spending before you finish.");
    }
}

function scheduleDailyReminder() {
    checkDailyReminder();
    checkBillReminders();
    checkBackupReminder();
    window.setInterval(checkDailyReminder, 60000);
    window.setInterval(checkBillReminders, 60000);
    window.setInterval(checkBackupReminder, 60000);
}

/* =========================================================
   EVENTS
========================================================= */

document
    .getElementById(
        "monthSelect"
    )
    .addEventListener(
        "change",
        loadMonth
    );


document
    .getElementById(
        "incomeInput"
    )
    .addEventListener(
        "input",
        updateSummary
    );


document
    .getElementById(
        "confirmIncomeButton"
    )
    .addEventListener(
        "click",
        confirmIncome
    );


document
    .querySelectorAll(
        ".bank-button"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                selectMainBank(
                    button.dataset.bank
                );

            }
        );

    });


const manageBanksButton = document.getElementById("manageBanksButton");
if (manageBanksButton) {
    manageBanksButton.addEventListener("click", () => {
        showPage("banksPage");
    });
}

document
    .getElementById("bankTransferForm")
    .addEventListener(
        "submit",
        recordBankTransfer
    );

document
    .getElementById("swapTransferBanksButton")
    .addEventListener("click", () => {
        const fromSelect = document.getElementById("transferFrom");
        const toSelect = document.getElementById("transferTo");
        const temp = fromSelect.value;
        fromSelect.value = toSelect.value;
        toSelect.value = temp;
    });

document
    .getElementById("saveBalanceCheckButton")
    .addEventListener("click", saveBalanceCheck);



document
    .getElementById(
        "dailySpendingButton"
    )
    .addEventListener(
        "click",
        () => {

            showPage(
                "spendingPage"
            );

        }
    );


document
    .getElementById(
        "addExpenseButton"
    )
    .addEventListener(
        "click",
        addExpenseRow
    );


document
    .getElementById(
        "finishSpendingButton"
    )
    .addEventListener(
        "click",
        finishSpending
    );


document
    .getElementById(
        "saveButton"
    )
    .addEventListener(
        "click",
        () => {

            saveCurrentMonth();

            document.getElementById(
                "message"
            ).textContent =
                "✓ Month saved.";

            setTimeout(() => {

                document.getElementById(
                    "message"
                ).textContent = "";

            }, 2500);

        }
    );


document
    .getElementById("exportDataButton")
    .addEventListener(
        "click",
        exportAppData
    );

const exportEncryptedDataButton = document.getElementById("exportEncryptedDataButton");
if (exportEncryptedDataButton) {
    exportEncryptedDataButton.addEventListener("click", exportEncryptedAppData);
}

document
    .getElementById("importDataInput")
    .addEventListener(
        "change",
        event => importAppData(event.target.files[0])
    );

document
    .getElementById("addRecurringButton")
    .addEventListener("click", addRecurringExpense);

document
    .getElementById("addRecurringIncomeButton")
    .addEventListener("click", addRecurringIncome);

document
    .getElementById("addGoalButton")
    .addEventListener("click", addSavingsGoal);

const savingsFundButton = document.getElementById("savingsFundButton");
if (savingsFundButton) {
    savingsFundButton.addEventListener("click", () => {
        completeTransfer("$");
        renderSavingsPage();
    });
}

const zakatBasisSelect = document.getElementById("zakatNisabBasis");
if (zakatBasisSelect) {
    restoreZakatPreferences();
    zakatBasisSelect.addEventListener("change", () => {
        updateZakatNisabFields();
        calculateZakat();
    });
    updateZakatNisabFields();
}

const calculateZakatButton = document.getElementById("calculateZakatButton");
if (calculateZakatButton) {
    calculateZakatButton.addEventListener("click", calculateZakat);
}

["zakatSavingsAmount", "zakatImmediateDebts", "zakatMetalPrice", "zakatCustomNisab", "zakatHawlComplete"]
    .forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener(input.type === "checkbox" ? "change" : "input", calculateZakat);
        }
    });

const saveSavingsGoalButton = document.getElementById("saveSavingsGoalButton");
if (saveSavingsGoalButton) {
    saveSavingsGoalButton.addEventListener("click", () => {
        const input = document.getElementById("savingsGoalInput");
        const amount = Math.round(Number(input?.value) || 0);
        saveSavingsTarget(amount);
        renderSavingsPage();
        setMessage(amount > 0 ? "Savings goal saved." : "Savings goal cleared.");
    });
}

const clearSavingsGoalButton = document.getElementById("clearSavingsGoalButton");
if (clearSavingsGoalButton) {
    clearSavingsGoalButton.addEventListener("click", () => {
        saveSavingsTarget(0);
        const input = document.getElementById("savingsGoalInput");
        if (input) {
            input.value = "";
        }
        renderSavingsPage();
        setMessage("Savings goal cleared.");
    });
}

const undoGoalContributionButton = document.getElementById("undoGoalContributionButton");
if (undoGoalContributionButton) {
    undoGoalContributionButton.addEventListener("click", undoLastGoalContribution);
}

document
    .getElementById("exportCsvButton")
    .addEventListener("click", downloadMonthlyCsv);

document
    .getElementById("printReportButton")
    .addEventListener("click", printMonthlyReport);

document
    .getElementById("languageSelect")
    .addEventListener("change", event => setLanguage(event.target.value));

document
    .getElementById("themeSelect")
    .addEventListener("change", event => {
        setTheme(event.target.value);
        renderSettingsSummaries();
    });

document
    .getElementById("saveCategoryNamesButton")
    .addEventListener("click", saveCategoryNames);

document
    .getElementById("notifyBillsToggle")
    .addEventListener("change", event => {
        setNotificationPref("bills", event.target.checked);
        checkBillReminders();
        renderSettingsSummaries();
    });

document
    .getElementById("notifyDailySpendingToggle")
    .addEventListener("change", event => {
        setNotificationPref("dailySpending", event.target.checked);
        renderSettingsSummaries();
    });

document
    .getElementById("notifyBackupToggle")
    .addEventListener("change", event => {
        setNotificationPref("backup", event.target.checked);
        checkBackupReminder();
        renderSettingsSummaries();
    });

document
    .getElementById("actionSoundsToggle")
    .addEventListener("change", event => {
        setNotificationPref("actionSounds", event.target.checked);
        setMessage(event.target.checked ? "Action sounds enabled." : "Action sounds disabled.");
    });

document
    .getElementById("eraseAllDataButton")
    .addEventListener("click", eraseAllAppData);

document
    .getElementById("lockButton")
    .addEventListener("click", lockApp);

const unlockButton = document.getElementById("unlockButton");
if (unlockButton) {
    unlockButton.addEventListener("click", unlockApp);
}

const unlockPinInput = document.getElementById("unlockPinInput");
if (unlockPinInput) {
    unlockPinInput.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            unlockApp();
        }
    });
}

document
    .getElementById("setPinButton")
    .addEventListener("click", setPinProtection);

document
    .getElementById("removePinButton")
    .addEventListener("click", removePinProtection);

document
    .getElementById("addBillButton")
    .addEventListener("click", addBill);

document
    .getElementById("cancelBillEditButton")
    .addEventListener("click", cancelBillEdit);

["billFilterBank", "billFilterStatus", "billSortOrder"].forEach(id => {
    const element = document.getElementById(id);
    if (element) {
        element.addEventListener("change", renderBills);
    }
});

document
    .getElementById("setupNextButton")
    .addEventListener("click", advanceSetup);

document
    .getElementById("setupBackButton")
    .addEventListener("click", () => {
        setupStep = Math.max(1, setupStep - 1);
        renderSetupStep();
    });

document
    .getElementById("setupSkipButton")
    .addEventListener("click", () => {
        localStorage.setItem(SETUP_KEY, "true");
        document.getElementById("setupWizard").hidden = true;
        setMessage("You can finish setup any time from Settings.");
    });

document
    .getElementById("backupIntervalSelect")
    .addEventListener("change", event => {
        localStorage.setItem(BACKUP_INTERVAL_KEY, event.target.value);
        checkBackupReminder();
        setMessage("Backup reminder preference saved.");
    });

document
    .getElementById("snoozeBackupButton")
    .addEventListener("click", snoozeBackupReminder);

["historySearch", "historyType", "historyCategory", "historyAllMonths"].forEach(id => {
    document.getElementById(id).addEventListener("input", renderTransactionHistory);
    document.getElementById(id).addEventListener("change", renderTransactionHistory);
});

document
    .querySelector(".dashboard-details")
    .addEventListener("toggle", event => {
        if (event.target.open) {
            drawCharts();
        }
    });

const trendRange = document.getElementById("trendRange");
if (trendRange) {
    trendRange.addEventListener("change", drawCharts);
}

const yearlyOverviewDetails = document.querySelector(".yearly-overview-details");
if (yearlyOverviewDetails) {
    yearlyOverviewDetails.addEventListener("toggle", event => {
        if (event.target.open) {
            renderYearlyOverview();
        }
    });
}

window.addEventListener("resize", () => {
    if (document.getElementById("calendarPage").classList.contains("active") ||
        document.querySelector(".dashboard-details").open) {
        drawCharts();
    }
    if (yearlyOverviewDetails && yearlyOverviewDetails.open) {
        renderYearlyOverview();
    }
});

/* =========================================================
   START
========================================================= */

applyTheme();
applyCustomCategoryNames();
applyLanguage();
repairExistingSavingsTransfer();
cleanupStaleGeneratedBills();
autoCloseElapsedMonths();
populateMonthOptions();
initializeSecurity();
loadMonth();
scheduleDailyReminder();
const backupIntervalSelect = document.getElementById("backupIntervalSelect");
if (backupIntervalSelect) {
    backupIntervalSelect.value = localStorage.getItem(BACKUP_INTERVAL_KEY) || "30";
}
if (!localStorage.getItem(SETUP_KEY) && !hasExistingAppData()) {
    showSetupWizard();
} else if (!localStorage.getItem(SETUP_KEY)) {
    localStorage.setItem(SETUP_KEY, "true");
}

document.getElementById("closeMonthButton").addEventListener("click", closeMonth);
document.getElementById("reopenMonthButton").addEventListener("click", reopenMonth);
document.getElementById("monthHistoryButton").addEventListener("click", toggleMonthCloseHistory);
document.getElementById("runAuditButton").addEventListener("click", () => auditAppData(false));
document.getElementById("repairAuditButton").addEventListener("click", () => {
    if (confirm("Remove only exact duplicate records with the same id?")) {
        auditAppData(true);
        setMessage("Exact duplicates removed. Run the check again to verify.");
    }
});
document.getElementById("confirmRestoreButton").addEventListener("click", confirmRestore);
document.getElementById("cancelRestoreButton").addEventListener("click", cancelRestore);

const appSplash = document.getElementById("appSplash");
if (appSplash) {
    window.setTimeout(() => appSplash.classList.add("is-hidden"), 850);
}

document.addEventListener("click", event => {
    const button = event.target.closest("button, .settings-file-button");
    if (!button || button.disabled ||
        (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)) {
        return;
    }
    button.classList.remove("press-feedback");
    void button.offsetWidth;
    button.classList.add("press-feedback");
});
