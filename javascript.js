// DO NOT EDIT THIS PLEASE
var d = new Date();

class PageHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<div class="logo"><img src="/images/AmansProjects.png" width="69" height="63"/><br></div><div class="navbar" height="63"><a height="63" class="homebtn" href="/index.html"> Home </a></div><br><br><br>';
  }
}

class PageFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<p class="white">This website uses cookies from Google to enable marketing services such as Google Analytics. Your data is completely anonymous.';
  }
}

customElements.define('page-header', PageHeader);
customElements.define('page-footer', PageFooter);

function setup() {
    document.getElementsByTagName("head")[0].innerHTML = '<link rel="icon" href="/images/favicon.ico" type="image/x-icon"><meta name="viewport" content="width=device-width, initial-scale=1"><script src="https://www.googleoptimize.com/optimize.js?id=OPT-TNV37V3"></script><script async src="https://www.googletagmanager.com/gtag/js?id=UA-144569588-1"></script><script>window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date()); gtag("config", "UA-144569588-1");</script><script async src="https://cse.google.com/cse.js?cx=c9e60bf9b9fec089e"></script><link rel="stylesheet" href="/css/style.css"><link rel="stylesheet" href="/css/navbar.css"><link rel="stylesheet" href="/css/colours.css"><link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap" rel="stylesheet"><title> Aman\'s Projects </title>';
}
