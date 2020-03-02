/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
var sections = document.querySelectorAll('section');
var navbar = document.getElementById('navbar__list');

/**
 * End Global Variables

/*navbar*/

function addNavLinks() {
    for (let section of sections) {
        let listItem = document.createElement('li');
          listItem.innerText = section.dataset.nav;
          listItem.dataset.link = section.id;
          listItem.setAttribute ("class", "menu__link");

          navbar.appendChild(listItem);
    }

}


// Scroll to anchor ID using scrollTO event

function navClick () {
    navbar.addEventListener('click', function (e) {
      //# anchor ID link to section
        const goTo = document.querySelector('#' + e.target.dataset.link);
        goTo.scrollIntoView({behavior: "smooth"});
    });}


 function checkSectionView() {
let isInViewport = function (elem) {
      let bounding = elem.getBoundingClientRect();
         return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    for (i=1; i<sections.length; i++) {
      let sectionInView = document.getElementById("section"+i);

  window.addEventListener("scroll", function() {
        if (isInViewport(sectionInView)) {
          sectionInView.classList.add("your-active-class");
        } else {
          sectionInView.classList.remove("your-active-class");
      }
    }
);}

}






  const button = document.querySelector(".btn");
  //Scroll to top
  function scrollUp(){
  button.addEventListener("click",function () {
    window.scrollTo({behavior: "smooth",
    top: 0,
  left:0 });
  }
  );}



/**
 * End Main Functions
 * Begin Events
 *
 */


navClick();
// Build menu
addNavLinks();
// Set sections as active
checkSectionView();

//Button scrolls up
scrollUp();
