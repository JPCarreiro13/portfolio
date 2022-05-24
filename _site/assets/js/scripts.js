window.onload = function(){

    // BURGER MENU
    const burger = document.querySelector(".burger");
    const burgerLine1 = document.querySelector(".burger-line-1");
    const burgerLine2 = document.querySelector(".burger-line-2");
    const burgerLine3 = document.querySelector(".burger-line-3");
    const hiddenMobileMenu = document.querySelector(".desktop-menu");

    function toggleMenu() {
        if (hiddenMobileMenu.classList.contains("show")) {
            hiddenMobileMenu.classList.remove("show");
            burgerLine1.classList.remove("on");
            burgerLine2.classList.remove("on");
            burgerLine3.classList.remove("on");
        } else {
            hiddenMobileMenu.classList.add("show");
            burgerLine1.classList.add("on");
            burgerLine2.classList.add("on");
            burgerLine3.classList.add("on");
        }
    }

    burger.addEventListener("click", toggleMenu);


    let control = false;

    searchForm.addEventListener("mouseleave", function() {
        if (searchInput.value == "" && control == false) {
            searchInput.classList.remove("search-input-hover");
            languages.style.display = "flex";
        }
    });

    searchInput.addEventListener("focus", function() {
        control = true;
    });
    searchInput.addEventListener("blur", function() {
        control = false;
        searchInput.classList.remove("search-input-hover");
        languages.style.display = "flex";
    })

    buttonSearch.addEventListener("click", function() {
        if (searchInput.value!="") {

        }else{
            searchInput.focus();
            return false;
        }
    });

    // BANNER PARALLAX

    const parallax = document.querySelector(".banner");
		window.addEventListener("scroll", function(){
			let offset = window.pageYOffset;
			parallax.style.backgroundPositionY = offset * 0.3 + "px";
		})

}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// ACCORDION

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


// MENU

let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}