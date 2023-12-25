

let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(section => { 
        let top = window.scrollY;
        let offset = section.offsetTop;
        let height = section.offsetHeight;

        if(top >= offset && top < offset + height){
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    })
}

var typed = new Typed(".title",{
    strings : ["もしもし", "Hello!", "I am Fahrur"],
    typeSpeed : 150,
    backSpeed : 150,
    loop : true
})