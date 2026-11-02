/*
  Переводы.
  Русский текст берётся прямо из index.html, поэтому его
  достаточно править в одном месте — в HTML.
  Здесь хранится только английская версия.
*/
const english = {
  // Навигация
  navAbout: "About",
  navMenu: "Menu",
  navGallery: "Gallery",
  navContacts: "Contacts",
  ariaMenu: "Open menu",

  // Первый экран
  heroLabel: "COFFEE · BAKERY · GATHERINGS",
  heroText:
    "Drop into Boris for a few minutes — and before you know it, you'll stay for hours.",
  heroMenu: "Explore menu",
  heroMap: "Find us ↓",
  heroAddress: "Bishkek, 14 Erkindik Boulevard",
  coffeeToGo: "Coffee to go from",
  altHero: "A sunlit corner by the window with flowers at Boris",

  // О нас
  aboutLabel: "COME FOR THE COFFEE — STAY FOR THE ATMOSPHERE",
  aboutTitle: "Boris — a place for<br>delicious moments.",
  aboutText:
    "Boris is more than just a coffee shop. It's a place for slow breakfasts, conversations over a cup of coffee and small pauses in a busy day. Fresh pastries, favourite breakfasts and an atmosphere you'll want to come back to — all in one place.",
  loc1Short: "14 Erkindik Boulevard",
  loc2Short: "Kalyk Akiev Street",

  // Меню
  menuLabel: "MADE WITH LOVE",
  menuTitle: "A menu for every moment",
  menuDescription:
    "Breakfasts, hot dishes, salads, pasta and pizza — all your favourites in one place.",
  openMenu: "Open full menu ↗",

  card1Label: "UNTIL 4 PM",
  card1Title: "Breakfasts<br>worth waking<br>up for.",
  card1Heading: "Breakfast",
  altMenuBreakfast: "Boris Coffee & Bakery breakfast menu",

  card2Title: "Hearty.<br>Beautiful.<br>Homemade.",
  card2Heading: "Mains & salads",
  altMenuMain: "Boris Coffee & Bakery mains and salads menu",

  card3Label: "PASTA · SOUPS · PIZZA",
  card3Title: "Warm.<br>Generous.<br>Made with heart.",
  card3Heading: "Pasta, soups & pizza",
  altMenuPasta: "Boris Coffee & Bakery pasta, soups, pizza and sandwiches menu",

  d1Name: "English breakfast",
  d1Desc: "Fried eggs, sausages, beans, tomatoes and toast.",
  d2Name: "French breakfast",
  d2Desc: "Croissant, fried egg, avocado and tomatoes.",
  d3Name: "Salmon scramble",
  d3Desc: "Scrambled eggs, salmon, cucumber and avocado.",
  d4Name: "Belgian waffles with salmon",
  d4Desc: "Waffles, salmon, avocado and cream cheese.",

  d5Name: "Pike-perch with teriyaki sauce",
  d5Desc: "Pan-fried pike-perch, mashed potatoes and mixed greens.",
  d6Name: "Ribeye steak",
  d6Desc: "Beef steak with country-style potatoes.",
  d7Name: "Warm salmon salad",
  d7Desc: "Salmon, corn, avocado and mixed greens.",
  d8Name: "Shrimp Caesar",
  d8Desc: "Shrimp, cherry tomatoes, iceberg and parmesan.",

  d9Name: "Fettuccine Alfredo",
  d9Desc: "Pasta in a delicate cream sauce.",
  d10Name: "Seafood Tom Yum",
  d10Desc: "Spicy Thai soup with seafood.",
  d11Name: "Borscht with meat",
  d11Desc: "Classic rich beetroot soup.",
  d12Name: "Pepperoni pizza",
  d12Desc: "Two sizes to choose from.",

  // Галерея
  galleryLabel: "THE BORIS MOOD",
  galleryTitle: "Moments worth<br>keeping",
  galleryDescription:
    "Coffee, fresh pastries and warm encounters — every day.",
  ariaOpenPhoto: "Open photo",
  altWindow: "A cosy corner by the window with flowers at Boris",
  altFlowers: "Tulips and a painting in the café interior",
  altHall: "Guests in the Boris dining hall",
  altCorner: "A guest working on a laptop in a cosy corner of the café",

  // Контакты
  contactsLabel: "WE'D LOVE TO SEE YOU",
  contactsTitle: "How to find us",
  contactsDescription:
    "Two Boris coffee shops in Bishkek. Pick the one that suits you — the map will show the way.",
  loc1Title: "14 Erkindik Boulevard",
  loc1City: "Bishkek, city centre",
  loc2Title: "Kalyk Akiev Street",
  loc2City: "Bishkek",
  hoursLabel: "Opening hours",
  daily: "Daily",
  phoneLabel: "Phone",
  routeGoogle: "Directions in Google Maps ↗",
  route2gis: "Open in 2GIS ↗",
  whatsapp: "Message us on WhatsApp",

  // Подвал
  footerLabel: "COME FOR COFFEE",
  footerAddress: "Bishkek, 14 Erkindik Boulevard<br>Bishkek, Kalyk Akiev Street",
  footerContacts: "GET IN TOUCH",
  ariaClose: "Close photo"
};

const pageTitles = {
  ru: document.title,
  en: "Boris Coffee & Bakery — coffee shop in Bishkek"
};

/* Запоминаем русский текст из HTML */
const russian = {};

document.querySelectorAll("[data-i18n]").forEach((element) => {
  russian[element.dataset.i18n] = element.innerHTML.trim();
});

document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
  russian[element.dataset.i18nAlt] = element.getAttribute("alt");
});

document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
  russian[element.dataset.i18nAria] = element.getAttribute("aria-label");
});

const translations = { ru: russian, en: english };

let currentLanguage = "ru";

const languageButton = document.querySelector(".language-button");
const mobileMenuButton = document.querySelector(".mobile-menu-button");
const navigation = document.querySelector(".navigation");

const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img");
const lightboxCloseButton = document.querySelector(".lightbox-close");

const mapFrame = document.querySelector(".map-frame iframe");
const contactCards = document.querySelectorAll(".contact-card");
let activeMapPoint = "42.867248,74.605111";

function setLanguage(language) {
  currentLanguage = language;
  const dictionary = translations[language];

  document.documentElement.lang = language;
  document.title = pageTitles[language];

  languageButton.textContent = language === "ru" ? "EN" : "RU";
  languageButton.setAttribute(
    "aria-label",
    language === "ru" ? "Switch to English" : "Переключить на русский"
  );

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const text = dictionary[element.dataset.i18n];
    if (text) element.innerHTML = text;
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const text = dictionary[element.dataset.i18nAlt];
    if (text) element.setAttribute("alt", text);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const text = dictionary[element.dataset.i18nAria];
    if (text) element.setAttribute("aria-label", text);
  });

  // Цены: «500с» по-русски, «500 som» по-английски
  document.querySelectorAll(".dish h4 b").forEach((price) => {
    if (!price.dataset.ru) price.dataset.ru = price.textContent;
    price.textContent =
      language === "ru"
        ? price.dataset.ru
        : price.dataset.ru.replace(/с$/, " som");
  });

  updateMap(activeMapPoint);

  try {
    localStorage.setItem("boris-language", language);
  } catch (error) {
    // Хранилище недоступно — просто не запоминаем язык
  }
}

function toggleLanguage() {
  setLanguage(currentLanguage === "ru" ? "en" : "ru");
}

function updateMap(point) {
  activeMapPoint = point;

  const newSource =
    "https://maps.google.com/maps?q=" + point +
    "&z=16&hl=" + currentLanguage + "&output=embed";

  if (mapFrame && mapFrame.src !== newSource) {
    mapFrame.src = newSource;
  }
}

function selectContactCard(card) {
  contactCards.forEach((item) => item.classList.remove("active"));
  card.classList.add("active");
  updateMap(card.dataset.map);
}

function openLightbox(imagePath, altText) {
  lightboxImage.src = imagePath;
  lightboxImage.alt = altText || "";

  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");

  document.body.classList.add("no-scroll");
  lightboxCloseButton.focus();
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");

  document.body.classList.remove("no-scroll");
}

function toggleMobileMenu() {
  const isMenuOpen = navigation.classList.toggle("open");

  mobileMenuButton.setAttribute("aria-expanded", String(isMenuOpen));
}

languageButton.addEventListener("click", toggleLanguage);
mobileMenuButton.addEventListener("click", toggleMobileMenu);

document.querySelectorAll(".navigation a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    mobileMenuButton.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll("[data-image]").forEach((element) => {
  element.addEventListener("click", () => {
    const image =
      element.querySelector("img") ||
      element.closest(".menu-card-image")?.querySelector("img");

    openLightbox(element.dataset.image, image ? image.alt : "");
  });
});

contactCards.forEach((card) => {
  card.addEventListener("click", (event) => {
    if (event.target.closest("a")) return;
    selectContactCard(card);
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectContactCard(card);
    }
  });
});

lightboxCloseButton.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});

/* Плавное появление блоков */
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}

/* Восстанавливаем выбранный язык */
try {
  if (localStorage.getItem("boris-language") === "en") {
    setLanguage("en");
  }
} catch (error) {
  // Хранилище недоступно — остаёмся на русском
}
