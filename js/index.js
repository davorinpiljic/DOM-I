const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//task 1, 2

//nav anchors
const navAnchors = document.querySelectorAll('a')
navAnchors.forEach(function(element, index) {
  element.textContent = siteContent["nav"][`nav-item-${index+1}`]
})



//cta 
const cta = document.querySelector('.cta-text')
let ctaH1 = Object.values(siteContent["cta"])
ctaH1 = ctaH1[0].split(' ')
ctaH1 = ctaH1.join('<br>')
const ctaBtn = cta.querySelector('button')
const ctaImg = document.getElementById('cta-img')


cta.querySelector('h1').innerHTML = ctaH1
ctaBtn.textContent = siteContent["cta"]["button"]
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])


//main content
const main = document.querySelector(".main-content")
const h4s = main.querySelectorAll("h4")

h4s[0].textContent = siteContent["main-content"]["features-h4"]
h4s[1].textContent = siteContent["main-content"]["about-h4"]
h4s[2].textContent = siteContent["main-content"]["services-h4"]
h4s[3].textContent = siteContent["main-content"]["product-h4"]
h4s[4].textContent = siteContent["main-content"]["vision-h4"]

const paragraphs = main.querySelectorAll("p")

paragraphs[0].textContent = siteContent["main-content"]["features-content"]
paragraphs[1].textContent = siteContent["main-content"]["about-content"]
paragraphs[2].textContent = siteContent["main-content"]["services-content"]
paragraphs[3].textContent = siteContent["main-content"]["product-content"]
paragraphs[4].textContent = siteContent["main-content"]["vision-content"]

const midImg = document.getElementById("middle-img")
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])



//contact 
const contact = document.querySelector(".contact")
const contactValues = Object.values(siteContent["contact"]).slice(1)

contact.querySelector('h4').textContent = siteContent["contact"]["contact-h4"]
contact.querySelectorAll('p').forEach(function(element, index) {
  element.textContent = contactValues[index]
})


//footer
const footer = document.querySelector('footer')
footer.querySelector('p').textContent = siteContent["footer"]["copyright"]



//task 3: add new content
navAnchors.forEach(element => {element.style.color = 'green'})

const nav1 = document.createElement('a')
nav1.textContent = 'News'
nav1.style.color = 'green'

const nav2 = document.createElement('a')
nav2.textContent = 'Resources'
nav2.style.color = 'green'


document.querySelector("nav").appendChild(nav1)
document.querySelector("nav").prepend(nav2)


//stretch
// document.querySelector('body').style.backgroundColor = 'gray'
// document.querySelector('.container').style.color = 'orange'

// const fixedNav = document.querySelector('header')
// console.log(fixedNav)
// fixedNav.style.position = 'fixed'
// fixedNav.style.opacity = "1"
// fixedNav.style.backgroundColor = "white"