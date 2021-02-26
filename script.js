// Highlight Active  Sections in Navbar (Desktop and Mobile)
// Done by taking the id from the section-container class or top-list class and using that highlight the correct nav item
const currentPage = document.querySelector('.section-container'); // Assigns the current section container to a variable, can get its id from here
const currentTop = document.querySelector('.top-list'); // If the page is one of the top pages (food etc.) then assigns it to a variable. Can get its id from here 
const activePhoneSection = document.querySelector(`#phone-nav-${currentPage.id}`); // Assigns the current page section's nav item to a variable. 
const activeSection = document.querySelector(`#nav-item-${currentPage.id}`); // Assigns the current page section's nav item to a variable. 
activePhoneSection.className = 'phone-nav-item active'; // Given an active class so it is highlighted, so you know the current page
activeSection.className = 'nav-item active'; // Given an active class so it is highlighted, so you know the current page

// If the current page is one of the Top pages, then does the same as above for the Top navigation entries
if (currentTop) {
const activeTop = document.querySelector(`#nav-${currentTop.id}`);
const activePhoneTop = document.querySelector(`#phone-nav-${currentTop.id}`);
activeTop.className = 'dropdown-item top-active';
activePhoneTop.className = 'phone-nav-top-item top-active';
}

// Toggle the dropdown menu for Top items on/off
// Done by changing the class everytime the dropdown arrow is clicked
const topDropdown = document.querySelector('.top-dropdown'); // Select the dropdown item box
let showDropdown = false; // Initially the dropdown is not shown
const toggleDropdown = () => { // Every time the dropdown arrow is clicked, this function is invoked
    showDropdown = !showDropdown; // Flips the Boolean value from true to false or vice versa
    showDropdown ? topDropdown.id = 'show' : topDropdown.id = 'hide' // If showDropdown is true, then the id of the dropdown is set to show etc.
}

// Toggle to show and hide the navbar on the mobile version. When the navbar is shown, the icon is a X. When the navbar is hidden, the icon is a hamburger menu
const navIcon = document.querySelector('.fa-bars');
const phoneNav = document.querySelector('.phone-nav');

let showNav = false; // Nav is initially hidden on mobile version

// This function is run everytime the navIcon is clicked. Flips the boolean for showNav. As a result, changes the icon and shows/hides the nav
const toggleMobileNav = () => {
    showNav = !showNav
    if (showNav) {
        navIcon.className = 'fas fa-times';
        phoneNav.id = 'show-phone-nav'
    } else {
        navIcon.className = 'fas fa-bars';
        phoneNav.id = 'hide-phone-nav';
    }  
}


// Very basic javascript carousel that changes item upon clicking the arrows

const topEntries = [ 
    {
        slogan: 'Feeling Hungry?',
        subtext: 'Excite your tastebuds with our Top 5 Foods',
        buttonText: 'Our Top 5 Foods',
        id: 'food'
    },
    {
        slogan: 'Feeling Thirsty?',
        subtext: 'Excite your tastebuds with our Top 5 Drinks',
        buttonText: 'Our Top 5 Drinks',
        id: 'drink'
    },
    {
        slogan: 'Bored of Trash TV?',
        subtext: 'Have a laugh or cry with one of these shows',
        buttonText: 'Our Top 5 TV Shows',
        id: 'tv'
    },
    {
        slogan: 'Need something other than Romcoms?',
        subtext: 'Witness the best Cinema has to offer',
        buttonText: 'Our Top 5 Movies',
        id: 'movie'
    },
    {
        slogan: 'Experience art like never before',
        subtext: 'Understand why Anime and Manga are so big in Japan',
        buttonText: 'Our Top 5 Anime/Manga',
        id: 'animemanga'
    },
]

// Select the relevant DOM elements that will have their text change upon the arrow being clicked
const topContainer = document.querySelector('.top-section');
const topTextSlogan = document.querySelector('.top-text-slogan');
const topTextSubtext = document.querySelector('.top-text-subtext');
const topTextButton = document.querySelector('.top-text-btn');
const topTextButtonLink = document.querySelector('.top-text-btn-link');

let entryIndex = 0;

// Take the current index of data and add 1 to get the next section. Take that index of the data array to get the correct object. Use the object's properties to set the innerHTML
const nextTop = () => {
    if (entryIndex >= topEntries.length - 1) {
        entryIndex = 0;
    } else {
        entryIndex += 1;
    }
    const topText = topEntries[entryIndex];
    topContainer.id = topText.id;
    topTextSlogan.innerHTML = topText.slogan;
    topTextSubtext.innerHTML = topText.subtext;
    topTextButtonLink.firstChild.innerHTML = topText.buttonText;
    topTextButtonLink.setAttribute('href',`top5/${topText.id}.html`)
}
// Same as nextTop but instead gets the previous section.
const prevTop = () => {
    if (entryIndex == 0) {
        entryIndex = topEntries.length-1;
    } else {
        entryIndex -= 1;
    }
    const topText = topEntries[entryIndex];
    topContainer.id = topText.id;
    topTextSlogan.innerHTML = topText.slogan;
    topTextSubtext.innerHTML = topText.subtext;
    topTextButtonLink.firstChild.innerHTML = topText.buttonText;
    topTextButtonLink.setAttribute('href',`top5/${topText.id}.html`)
}



// Stagger the inwards animation on the Top Categories page

const topCategories = document.querySelectorAll('.top-category-item-none'); // Selects all the category divs

// Once the page has completely loaded, this function is run. The function is delayed for one second to allow the initial animation to complete
window.onload = (e) => {
    document.querySelector('.container-hide').className = 'container'; // This triggers the initial animation
    setTimeout(() => { // This is run after one second (allows the initial animation to complete)
        topCategories.forEach((category, index) => { // Iterates over the category divs, makes all of them visible on the page again, initially opacity is set to zero so they do not come onto the page in the initial animation but still create the same white space on the page
            category.className = 'top-category-item-hide';
        setTimeout(() => {
            category.className = 'top-category-item'; // For each item, set a delay in intervals of 0.3 seconds. After the timeout is run, the class changes and the category animates onto the page 
        },index * 300)
    })
    },1000)
}