const menu = document.querySelector('#menu')
const burgerButton = document.querySelector('#burger-menu')
const main = document.querySelector('.main')
const footer = document.querySelector('.footer')

burgerButton.addEventListener('click', () => {
    menu.classList.toggle('active')
    burgerButton.classList.toggle('active')
    if (burgerButton.classList.contains('active')) {
        setTimeout(() => {
            main.classList.add('forscroll')
            footer.classList.add('forscroll')
        }, 500)
    } else {
        main.classList.remove('forscroll')
        footer.classList.remove('forscroll')   
    }
})

menu.addEventListener('click', () => {
    menu.classList.remove('active')
    burgerButton.classList.remove('active')
    main.classList.remove('forscroll')
    footer.classList.remove('forscroll')
})