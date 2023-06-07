const navMenu = document.querySelector('.nav__menu');
   const toggleMenu = document.querySelector('.nav__toggle');
    const closeMenu = document.querySelector('.nav__close');


toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})


closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

const navLink = document.querySelectorAll('.nav__link');

function linkAction(){

  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

window.addEventListener('scroll', scrollActive)


function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');

    if(this.scrollY >=400) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

const contactForm= document.getElementById('contact--form');
const contactMessege= document.getElementById('contact--messege');
const textMessege = document.getElementById('text-messege')
const sendEmail= (e)=>{
    e.preventDefault()
    emailjs.sendForm('service_dvmlkft', 'template_qltsrnr','#contact--form' ,'OtGETIcumecQs6CkC')
    .then(() =>{
        contactMessege.textContent= 'Messege sent successfully';
        contactMessege.classList.add('green');
        textMessege.textContent = "Enter";

    }, ()=>{
contactMessege.textContent= 'Messege not send - service error';
contactMessege.classList.add('red');
textMessege.textContent = "";
    } )
}

contactForm.addEventListener('submit', sendEmail)
