const navBars = document.querySelector('.nav-bars');
const mobileNav = document.querySelector('.mobile-nav')
const year = document.querySelector('.year');

const allSections = document.querySelectorAll('.section');
const bars = document.querySelector('.fa-bars');
const menuItems = document.querySelectorAll('.nav__link')
const navLink = document.querySelectorAll('.nav_link');

const currentYear = () => {
    const date = new Date();
    year.textContent = date.getFullYear();
}

const handleNav = () => {
    mobileNav.classList.toggle('nav-active')

}

const handleCloseNav = () => {
    mobileNav.classList.remove('nav-active');
}

const handleBars = () => {
    const scrollY = window.scrollY;

    allSections.forEach(section => {

        if (section.offsetTop <= scrollY + 40 && section.classList.contains('white-section')) {
            bars.classList.add('dark_bars')
        } else if (section.offsetTop <= scrollY + 40 && !section.classList.contains('white-section')) {
            bars.classList.remove('dark_bars')
        }
    })

}

const handleScrollSpy = () => {


    if (document.body.classList.contains('main-page')) {
        const sections = [];

        allSections.forEach(section => {


            if (window.scrollY <= section.offsetHeight + section.offsetTop - 103) {
                sections.push(section);

                const activeSection = document.querySelector(`[href*="${sections[0].id}"]`)

                menuItems.forEach(item => {
                    item.classList.remove('active-spy')
                })

                if (activeSection !== null) {
                    activeSection.classList.add('active-spy')
                }


            }


        })
    }


}















currentYear()
navBars.addEventListener('click', handleNav)
navLink.forEach(link => link.addEventListener('click', handleCloseNav))
window.addEventListener('scroll', handleBars);
window.addEventListener('scroll', handleScrollSpy)