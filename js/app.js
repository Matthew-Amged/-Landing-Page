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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 * 
 */
//initialized variable that call the DOM to get Section element
const sections = document.querySelectorAll('section');
//initialized variable that call DOM to get the id navbar__list
const navigation = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */
//navbar function that build the navbar
function navbarItems() {
    let item = ""

    for (let i = 0; i <sections.length; i++) {
        const sectionId = sections[i].id;
        const sectionDataNav = sections[i].dataset.nav;

        item += `
         <li>
            <a href='#${sectionId}' class ='menu__link'>
            ${sectionDataNav}
            </a>
        </li>
        `
    }
    navigation.innerHTML = item;
}
navbarItems()


/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav


// Add class 'active' to section when near top of viewport
//active the section by adding class your-active-class
//and make it responsive by using getBoundingClientRect() API
//to make the navbar sections highlighted 
document.addEventListener('scroll', () => {
    for (let i = 0; i < sections.length; i++) {
        const sectionId = sections[i].id;
        const sectionView = Math.floor(sections[i].getBoundingClientRect().top);
        if (sectionView >= 0 && sectionView <= 300) {
            sections[i].classList.add('your-active-class');
            document
                .querySelector(`li a[href*='${sectionId}']`)
                .classList.add('active-link');
        } else {
            sections[i].classList.remove('your-active-class');
            document
                .querySelector(`li a[href*='${sectionId}']`)
                .classList.remove('active-link');
        }
    }
});
// Scroll to anchor ID using scrollTO event
//scrolling function that let scroll behavior smooth when scroll to the section 
function scrolling() {
    const links = navigation.querySelectorAll('a')
    links.forEach(link => {
        link.addEventListener("click", whenClicked);
    });
        
    }

    function whenClicked(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        document.querySelector(href).scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest"
        });
}
scrolling()
/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active