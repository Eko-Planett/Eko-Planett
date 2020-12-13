// DO NOT EDIT THIS PLEASE
var d = new Date();
var bgImages = ["url(/images/0.webp)", "url(/images/1.webp)", "url(/images/2.webp)", "url(/images/3.webp)", "url(/images/4.webp)", "url(/images/5.webp)", "url(/images/6.webp)"];

class PageHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<div class="logo"><img src="/images/EkoPlanett.webp" alt="Eko Planett Logo" width="63" height="63" onerror="this.src = \'/images/EkoPlanett.png\'"/><br></div><div class="navbar"><div class="dropdown"><button class="dropbtn">Menu</button><div class="dropdown-content"><a href="/">Home</a><a href="/tips">Tips</a><a href="/jokes">Jokes</a><a href="/arts">Arts and Crafts</a><a href="/quizzes">Quizzes</a></div></div></div><br><br><br>';
  }
}

class PageFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<p class="white">This website uses cookies from Google to enable marketing services such as Google Analytics. Your data is completely anonymous.</p>';
  }
}

customElements.define('page-header', PageHeader);
customElements.define('page-footer', PageFooter);

function setup() {
    var body = document.body;
    var head = document.head;
  
    body.style.backgroundImage = bgImages[d.getDay()];
    head.innerHTML = '<meta name="description" content="Want to save the environment, but don’t know where to start amongst the thousands of websites with tips, videos, arts, crafts, and more? Eko Planett has the best content on the best ways to help the environment, all in one place, so start here! The world is counting on you."><link rel="icon" href="/images/favicon.ico" type="image/x-icon"><meta name="viewport" content="width=device-width, initial-scale=1"><script src="https://www.googleoptimize.com/optimize.js?id=OPT-TNV37V3"></script><script async src="https://www.googletagmanager.com/gtag/js?id=UA-144569588-1"></script><script>window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date()); gtag("config", "UA-144569588-1");</script><script async src="https://cse.google.com/cse.js?cx=c9e60bf9b9fec089e"></script><link rel="stylesheet" href="/css/style.css"><link rel="stylesheet" href="/css/navbar.css"><link rel="stylesheet" href="/css/colours.css"><link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet"><title> Eko Planett </title>';
}
