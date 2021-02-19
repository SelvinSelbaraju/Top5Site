const topMenuItem = document.querySelector('.three');
const topDropdown = document.querySelector('.top-dropdown');
const topContainer = document.querySelector('.top-section');
const topTextSlogan = document.querySelector('.top-text-slogan');
const topTextSubtext = document.querySelector('.top-text-subtext');
const topTextButton = document.querySelector('.top-text-btn');
const navIcon = document.querySelector('.fa-bars');
const phoneNav = document.querySelector('.phone-nav');

let showDropdown = false;
let showNav = false;

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

let entryIndex = 0;

const toggleMobileNav = () => {
    showNav = !showNav
    if (showNav) {
        navIcon.className = 'fas fa-bars';
        phoneNav.id = 'hide-phone-nav'
    } else {
        navIcon.className = 'fas fa-times';
        phoneNav.id = 'show-phone-nav';
    }  
}

const toggle = () => {
    showDropdown = !showDropdown;
    showDropdown ? topDropdown.id = 'show' : topDropdown.id = 'hide' 
}

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
    topTextButton.innerHTML = topText.buttonText;
}

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
    topTextButton.innerHTML = topText.buttonText;
}