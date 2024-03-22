const swiper = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'cube',
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }, 
   
});

const swiper2 = new Swiper('.swiperDesign', {
    slidesPerView: 4,
    loop: false,
    autoplay: {
        delay: 2000,
        disbleOnInteraction: false,
        stopOnLast: true,
    },
    direction: 'horizontal',
    breakpoints: {
        390: {
            slidesPerView: 1,
            loop: false,
            stopOnLast: true,
        },

        1180: {
            slidesPerView: 2,
            loop: false,
            stopOnLast: true,
        },

        1200: {
            slidesPerView: 4
        }
    },
})

const formElem = document.getElementById('form');
formElem.addEventListener('submit', (event) => {
    event.preventDefault();
    let errorMessages = document.querySelectorAll('.error');
    for(let i = 0; i < errorMessages.length; i++) {
        const elem = errorMessages[i];
        elem.innerHTML = '';
    }

    const nameElem = document.getElementById('name-surname');
    const emailElem = document.getElementById('email');
    const messageElem = document.getElementById('message');
    let nameValue = nameElem.value.trim();
    let emailValue = emailElem.value.trim();
    let messageValue = messageElem.value.trim();
    console.log(
        `Name and surname: ${nameValue}, email: ${emailValue}, message: ${messageValue}
    `)
    if(nameValue === '') {
        const errorName = document.querySelector('.error-name');
        errorName.innerHTML = 'Please write your name and surname!';
    }

    if(emailValue === '') {
        const errorEmail = document.querySelector('.error-email');
        errorEmail.innerHTML = 'Please write your email!';
    }   

    if(messageValue === '') {
        const errorMessage = document.querySelector('.error-message');
        errorMessage.innerHTML = 'Please write a message';
    }

})
