function scrollToBlock(event) {
  event.preventDefault()
  const targetId = event.target.getAttribute("href").substring(1)
  const targetElement = document.getElementById(targetId)

  targetElement.scrollIntoView({
    behavior: "smooth",
    block: "start",
  })
}

var icon = document.getElementById("icon")
var headerBG = document.getElementById("header__main")
var contact = document.getElementById("contact")

icon.onclick = function () {
  document.body.classList.toggle("dark-theme")
  if (headerBG.classList.contains("white__theme-bg")) {
    headerBG.classList.add("dark__theme-bg")
    headerBG.classList.remove("white__theme-bg")
  } else {
    headerBG.classList.remove("dark__theme-bg")
    headerBG.classList.add("white__theme-bg")
  }
  if (contact.classList.contains("white__theme-bg-2")) {
    contact.classList.add("dark__theme-bg-2")
    contact.classList.remove("white__theme-bg-2")
  } else {
    contact.classList.remove("dark__theme-bg-2")
    contact.classList.add("white__theme-bg-2")
  }
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "images/sun.png"
  } else {
    icon.src = "images/moon.png"
  }
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzWaDNzl68lMNf5JOWZ54PejCmG7qZdbv5M4O4OjX7Gtq0UYKdcSsKrnpPh_XR0JXrzUQ/exec"
const form = document.forms["submit-to-google-sheet"]
const msg = document.getElementById("msg")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Thank You For Supporting! Спасибі За Підтримку!"
      setTimeout(function () {
        msg.innerHTML = ""
      }, 5000)
      form.reset()
    })
    .catch((error) => console.error("Error!", error.message))
})

const headerLOGO = document.querySelector(".header__logo-title")
const headerLINK1 = document.querySelector(".header__link-a-1")
const headerLINK2 = document.querySelector(".header__link-a-2")
const headerLINK3 = document.querySelector(".header__link-a-3")
const headerLINK4 = document.querySelector(".header__link-a-4")
const headerTITLE = document.querySelector(".header__title")
const headerTEXT1 = document.querySelector(".header__text-1")
const headerTEXT2 = document.querySelector(".header__text-2")
const headerBTN = document.querySelector(".header__btn-a")
const aboutTitle = document.querySelector(".about__title")
const aboutText1 = document.querySelector(".about__text-1")
const aboutText2 = document.querySelector(".about__text-2")
const descriptionTitle = document.querySelector(".description__title")
const descriptionText1 = document.querySelector(".description__text-1")
const descriptionText2 = document.querySelector(".description__text-2")
const descriptionText3 = document.querySelector(".description__text-3")
const descriptionBtn = document.querySelector(".description__btn-a")
const skillsTitle = document.querySelector(".skills__title")
const projectsTitle = document.querySelector(".projects__title")
const projectsText1 = document.querySelector(".projects__text-1")
const projectsText2 = document.querySelector(".projects__text-2")
const projectsItemTitle1 = document.querySelector(".project__item-title-1")
const projectsItemTitle2 = document.querySelector(".project__item-title-2")
const projectsItemTitle3 = document.querySelector(".project__item-title-3")
const projectsItemTitle4 = document.querySelector(".project__item-title-4")
// const projectsItemTitle5 = document.querySelector(".project__item-title-5")
// const projectsItemTitle6 = document.querySelector(".project__item-title-6")
const projectsItemText1 = document.querySelector(".project__item-text-1")
const projectsItemText2 = document.querySelector(".project__item-text-2")
const projectsItemText3 = document.querySelector(".project__item-text-3")
const projectsItemText4 = document.querySelector(".project__item-text-4")
// const projectsItemText5 = document.querySelector(".project__item-text-5")
// const projectsItemText6 = document.querySelector(".project__item-text-6")
const projectsItemBtn1 = document.querySelector(".project__item-btn-1")
const projectsItemBtn2 = document.querySelector(".project__item-btn-2")
const projectsItemBtn3 = document.querySelector(".project__item-btn-3")
const projectsItemBtn4 = document.querySelector(".project__item-btn-4")
// const projectsItemBtn5 = document.querySelector(".project__item-btn-5")
// const projectsItemBtn6 = document.querySelector(".project__item-btn-6")
const contactTitle = document.querySelector(".contact__title")
const contactText1 = document.querySelector(".contact__text-1")
const contactText2 = document.querySelector(".contact__text-2")
const inputGroupName = document.querySelector(".input-group-name")
const inputGroupEmail = document.querySelector(".input-group-email")
const inputGroupMessage = document.querySelector(".input-group-message")
const contactBtn = document.querySelector(".contact__btn")
const footerText1 = document.querySelector(".footer__text-1")
const footerText2 = document.querySelector(".footer__text-2")
const footerSocialTitle = document.querySelector(".footer__title-social")

var data = {
  english: {
    headerLogo: "InVeStOr.",
    headerLink1: "HOME",
    headerLINK2: "ABOUT",
    headerLINK3: "PROJECTS",
    headerLINK4: "CONTACT",
    headerTITLE: "HEY, I'M InVeStOr",
    headerTEXT1: "A Result-Oriented Web Developer building and managing Websites and Web ",
    headerTEXT2: " Applications that leads to the success of the overall product",
    headerBTN: "PROJECTS",
    aboutTitle: "ABOUT ME",
    aboutText1:
      "Here you will find more information about me, what I do, and my current skills mostly in terms",
    aboutText2: "of programming and technology",
    descriptionTitle: "Get to know me!",
    descriptionText1:
      " I'm a <span>Frontend Focused Web Developer</span> building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <span>Projects</span> section.",
    descriptionText2:
      "I also like sharing content related to the stuff that I have learned over the years in <span>Web Development</span> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin and Instagram where I post useful content related to Web Development and Programming.",
    descriptionText3:
      "I'm open to <span>Job</span> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <span>contact</span> me.",
    descriptionBtn: "CONTACT",
    skillsTitle: "My Skills",
    projectsTitle: "Projects",
    projectsText1:
      "Here you will find some of the personal and clients projects that I created with each project",
    projectsText2: "containing its own case study",
    projectsItemTitle1: "Surfing School page",
    projectsItemTitle2: "Shop Dior page",
    projectsItemTitle3: "URUS for rent page",
    projectsItemTitle4: "Sandbox landing page",
    // projectsItemTitle5: "Shop landing page",
    // projectsItemTitle6: "HEIGHTS landing page",
    projectsItemText1:
      "This is a landing page for a surfing school. It has a modern design with ocean-themed visuals. The page provides course details and a contact section.",
    projectsItemText2:
      "This is a stylish Dior-themed page. It showcases elegant design with luxury aesthetics. The layout highlights fashion and beauty elements.",
    projectsItemText3:
      "This page is dedicated to the Lamborghini Urus. It features a sleek design with high-quality car images. The layout emphasizes speed, luxury, and performance.",
    projectsItemText4:
      "This is a simple sandbox page. It features interactive elements for testing. The design is minimalistic and clean.",
    // projectsItemText5:
    //   "This site is also a landing page for various products and services. It has a modern design with clean blocks and bright colors. Each page shows a unique style according to the brand.",
    // projectsItemText6:
    //   "This site is also a landing page aimed at promoting the training course. It has a minimalist design with soft colors and attractive images. The main focus is on the text and call-to-action button.",
    projectsItemBtn1: "See a project",
    projectsItemBtn2: "See a project",
    projectsItemBtn3: "See a project",
    projectsItemBtn4: "See a project",
    // projectsItemBtn5: "See a project",
    // projectsItemBtn6: "See a project",
    contactTitle: "CONTACT",
    contactText1:
      "Feel free to Contact me by submitting the form below and I will get back to you as soon as",
    contactText2: "possible",
    inputGroupName: "NAME",
    inputGroupEmail: "EMAIL",
    inputGroupMessage: "MESSAGE",
    contactBtn: "Submit",
    footerText1: "SOCIAL",
    footerText2: "A Frontend focused Web Developer building the Frontend of Websites and",
    footerSocialTitle: "Web Applications that leads to the success of the overall product",
    underProjectsBtnMore: "SEE MORE PROJECTS",
    underProjectsBtnLess: "SEE LESS PROJECTS",
    inputNamePlaceholder: "Your name",
    inputNamePlaceholder: "Your email",
    inputNamePlaceholder: "Your message",
  },
  ukraine: {
    headerLogo: "InVeStOr.",
    headerLink1: "ДІМ",
    headerLINK2: "ПРО СЕБЕ",
    headerLINK3: "ПРОЕКТИ",
    headerLINK4: "КОНТАКТ",
    headerTITLE: "ПРИВІТ, Я InVeStOr",
    headerTEXT1: "Веб-розробник, орієнтований на результат, створює та керує веб-сайтами та",
    headerTEXT2: "веб-додатками, що призводить до успіху продукту в цілому",
    headerBTN: "ПРОЕКТИ",
    aboutTitle: "ПРО СЕБЕ",
    aboutText1:
      "Тут ви знайдете більше інформації про мене, те, що я роблю, і мої поточні навички в основному в термінах",
    aboutText2: " програмування та технології",
    descriptionTitle: "Познайомтесь зі мною!",
    descriptionText1:
      "Я веб-розробник, <span>орієнтований на зовнішній інтерфейс</span>, створюю і керую зовнішнім інтерфейсом веб-сайтів і веб-додатків, що сприяє успіху продукту в цілому. Перегляньте деякі з моїх робіт у розділі <span> Проекти</span>.",
    descriptionText2:
      "Мені також подобається ділитися вмістом, пов’язаним із матеріалами, які я навчився протягом багатьох років у <span> веб-розробці</span>, щоб це могло допомогти іншим людям із спільноти розробників. Не соромтеся підключатися або слідкувати за мною в моїх Linkedin та Instagram, де я публікую корисний вміст, пов’язаний із веб-розробкою та програмуванням.",
    descriptionText3:
      "Я відкритий для можливостей <span>  роботи</span>, де я можу робити внесок, вчитися та розвиватися. Якщо у вас є хороша можливість, яка відповідає моїм навичкам і досвіду, тоді не соромтеся <span>звертатися</span> до мене.",
    descriptionBtn: "КОНТАКТ",
    skillsTitle: "Мої Навички",
    projectsTitle: "Проекти",
    projectsText1:
      "Тут ви знайдете деякі з особистих проектів і проектів клієнтів, які я створив з кожним проектом",
    projectsText2: "містить власне тематичне дослідження",
    projectsItemTitle1: "Сторінка школи серфінгу",
    projectsItemTitle2: "Сторінка магазину Dior",
    projectsItemTitle3: "URUS в оренду",
    projectsItemTitle4: "SANDBOX лендинг",
    // projectsItemTitle5: "Інтернет магазин",
    // projectsItemTitle6: "HEIGHTS лендинг",
    projectsItemText1:
      "Це лендинг сторінка школи серфінгу. Він має сучасний дизайн із зображеннями на тему океану. На сторінці є деталі курсу та розділ контактів.",
    projectsItemText2:
      "Це стильна сторінка на тему Dior. Він демонструє елегантний дизайн із розкішною естетикою. Макет підкреслює елементи моди та краси.",
    projectsItemText3:
      "Ця сторінка присвячена Lamborghini Urus. Він має елегантний дизайн із високоякісними зображеннями автомобілів. Компонування підкреслює швидкість, розкіш і продуктивність.",
    projectsItemText4:
      "Це проста сторінка SANDBOX. Він містить інтерактивні елементи для тестування. Дизайн мінімалістичний і чистий.",
    // projectsItemText5:
    //   "Цей сайт також є цільовою сторінкою для різних продуктів і послуг. Він має сучасний дизайн із чистими блоками та яскравими кольорами. Кожна сторінка демонструє унікальний стиль відповідно до бренду.",
    // projectsItemText6:
    //   "Цей сайт також є цільовою сторінкою, спрямованою на просування навчального курсу. Він має мінімалістичний дизайн з м'якими кольорами та привабливими зображеннями. Основна увага приділяється тексту та кнопці заклику до дії.",
    projectsItemBtn1: "Дивитись проект",
    projectsItemBtn2: "Дивитись проект",
    projectsItemBtn3: "Дивитись проект",
    projectsItemBtn4: "Дивитись проект",
    // projectsItemBtn5: "Дивитись проект",
    // projectsItemBtn6: "Дивитись проект",
    contactTitle: "КОНТАКТ",
    contactText1:
      "Не соромтеся зв’язатися зі мною, заповнивши форму нижче, і я якнайшвидше зв’яжуся з вами.",
    ccontactText2: "можливо",
    inputGroupName: "ІМ'Я",
    inputGroupEmail: "ПОШТА",
    inputGroupMessage: "ПОВІДОМЛЕННЯ",
    contactBtn: "Відправити",
    footerText1: "Веб-розробник, зосереджений на інтерфейсі, створює інтерфейс веб-сайтів і",
    footerText2: "Веб-додатків, які забезпечують успіх продукту в цілому",
    footerSocialTitle: "СОЦІАЛЬНІ МЕРЕЖІ",
    underProjectsBtnMore: "ДИВИТИСЬ БІЛЬШЕ",
    underProjectsBtnLess: "ДИВИТИСЬ МЕНШЕ",
    inputNamePlaceholder: "Ваше і'мя",
    inputEmailPlaceholder: "Ваша пошта",
    inputMessagePlaceholder: "Ваше повідомлення",
  },
}

const projects2 = document.getElementById("projects__cont-2")
const underProjectsBtn = document.getElementById("under__projects-btn")
const links = document.querySelectorAll(".header__link-language")

function addProjects() {
  const links2 = Array.from(links)

  const activeLink = links2.find((item) => Array.from(item.classList).includes("active"))
  console.log(activeLink.getAttribute("language"))

  projects2.classList.toggle("projects__cont-2-active")

  if (projects2.classList.contains("projects__cont-2-active")) {
    underProjectsBtn.innerHTML =
      activeLink.getAttribute("language") === "ukraine" ? "ДИВИТИСЬ МЕНШЕ" : "SEE LESS PROJECTS"
  } else {
    underProjectsBtn.innerHTML =
      activeLink.getAttribute("language") === "ukraine" ? "ДИВИТИСЬ БІЛЬШЕ" : "SEE MORE PROJECTS"
  }
}

// function changeLanguage() {
//   const links2 = Array.from(links)
//   const activeLink = links2.find((item) => Array.from(item.classList).includes("active"))

//   if (projects2.classList.contains("projects__cont-2-active")) {
//     underProjectsBtn.innerHTML =
//       activeLink.getAttribute("language") === "ukraine" ? "ДИВИТИСЬ МЕНШЕ" : "SEE LESS PROJECTS"
//   } else {
//     underProjectsBtn.innerHTML =
//       activeLink.getAttribute("language") === "ukraine" ? "ДИВИТИСЬ БІЛЬШЕ" : "SEE MORE PROJECTS"
//   }
// }

const langEl = document.querySelector(".header__link-language-cont")
const inputNamePlaceholder = document.getElementById("contact-name")
const inputEmailPlaceholder = document.getElementById("contact-email")
const inputMessagePlaceholder = document.getElementById("contact-message")


links.forEach((el) => {
  el.addEventListener("click", () => {
    langEl.querySelector(".active").classList.remove("active")
    el.classList.add("active")
    const attr = el.getAttribute("language")

    inputNamePlaceholder.placeholder = data[attr].inputNamePlaceholder
    inputEmailPlaceholder.placeholder = data[attr].inputEmailPlaceholder
    inputMessagePlaceholder.placeholder = data[attr].inputMessagePlaceholder
    underProjectsBtn.innerHTML = projects2.classList.contains("projects__cont-2-active")
      ? data[attr].underProjectsBtnLess
      : data[attr].underProjectsBtnMore
    headerLOGO.textContent = data[attr].headerLogo
    headerLINK1.textContent = data[attr].headerLink1
    headerLINK2.textContent = data[attr].headerLINK2
    headerLINK3.textContent = data[attr].headerLINK3
    headerLINK4.textContent = data[attr].headerLINK4
    headerTITLE.textContent = data[attr].headerTITLE
    headerTEXT1.textContent = data[attr].headerTEXT1
    headerTEXT2.textContent = data[attr].headerTEXT2
    headerBTN.textContent = data[attr].headerBTN
    aboutTitle.textContent = data[attr].aboutTitle
    aboutText1.textContent = data[attr].aboutText1
    aboutText2.textContent = data[attr].aboutText2
    descriptionTitle.textContent = data[attr].descriptionTitle
    descriptionText1.innerHTML = data[attr].descriptionText1
    descriptionText2.innerHTML = data[attr].descriptionText2
    descriptionText3.innerHTML = data[attr].descriptionText3
    descriptionBtn.textContent = data[attr].descriptionBtn
    skillsTitle.textContent = data[attr].skillsTitle
    projectsTitle.textContent = data[attr].projectsTitle
    projectsText1.textContent = data[attr].projectsText1
    projectsText2.textContent = data[attr].projectsText2
    projectsItemTitle1.textContent = data[attr].projectsItemTitle1
    projectsItemTitle2.textContent = data[attr].projectsItemTitle2
    projectsItemTitle3.textContent = data[attr].projectsItemTitle3
    projectsItemTitle4.textContent = data[attr].projectsItemTitle4
    // projectsItemTitle5.textContent = data[attr].projectsItemTitle5
    // projectsItemTitle6.textContent = data[attr].projectsItemTitle6
    projectsItemText1.textContent = data[attr].projectsItemText1
    projectsItemText2.textContent = data[attr].projectsItemText2
    projectsItemText3.textContent = data[attr].projectsItemText3
    projectsItemText4.textContent = data[attr].projectsItemText4
    // projectsItemText5.textContent = data[attr].projectsItemText5
    // projectsItemText6.textContent = data[attr].projectsItemText6
    projectsItemBtn1.textContent = data[attr].projectsItemBtn1
    projectsItemBtn2.textContent = data[attr].projectsItemBtn2
    projectsItemBtn3.textContent = data[attr].projectsItemBtn3
    projectsItemBtn4.textContent = data[attr].projectsItemBtn4
    // projectsItemBtn5.textContent = data[attr].projectsItemBtn5
    // projectsItemBtn6.textContent = data[attr].projectsItemBtn6
    contactTitle.textContent = data[attr].contactTitle
    contactText1.textContent = data[attr].contactText1
    contactText2.textContent = data[attr].contactText2
    inputGroupEmail.textContent = data[attr].inputGroupEmail
    inputGroupName.textContent = data[attr].inputGroupName
    inputGroupMessage.textContent = data[attr].inputGroupMessage
    contactBtn.textContent = data[attr].contactBtn
    footerText1.textContent = data[attr].footerText1
    footerText2.textContent = data[attr].footerText2
    footerSocialTitle.textContent = data[attr].footerSocialTitle
  })
})
