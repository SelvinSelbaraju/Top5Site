const topMenuItem = document.querySelector('.three');
const topDropdown = document.querySelector('.top-dropdown');
const topContainer = document.querySelector('.top-section');
const topTextSlogan = document.querySelector('.top-text-slogan');
const topTextSubtext = document.querySelector('.top-text-subtext');
const topTextButton = document.querySelector('.top-text-btn');

let showDropdown = false;

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
    }
]

let entryIndex = 1;

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