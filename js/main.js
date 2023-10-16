let navbar = document.querySelector('nav')
let links = navbar.querySelectorAll("nav ul li a");
let sections = document.querySelectorAll('section');
let skillSection = document.querySelector('.skill');
window.addEventListener("scroll", () => {
      if(window.scrollY > 0){
          navbar.classList.add("nav-scroll");
      }
      else{
          navbar.classList.remove("nav-scroll");
      }
  let current = "";
  sections.forEach((section) => {
    let sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 65) {
      current = section.getAttribute("id");
    }
  });
  links.forEach((li) => {
    li.classList.remove("active");
    document
      .querySelector("nav ul li a[href*= " + current + "]")
      .classList.add("active");
  });
  if (scrollY >= skillSection.offsetTop - 250) {
    document.querySelectorAll('.bar span').forEach(span =>{
        span.style.width = span.dataset.width
    })
  }
});

navbar.querySelectorAll('ul li a').forEach( a =>{
    a.onclick = function(){
        navbar.querySelectorAll("ul li a").forEach(e =>{
            e.classList.remove('active');
        });
        this.classList.add('active')
    }
} )
