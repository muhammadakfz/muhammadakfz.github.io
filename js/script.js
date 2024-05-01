let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop;
        let height = section.offsetHeight;

        if (top >= offset && top < offset + height) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }

        // when end of page show footer
        console.log('scrollY:', window.scrollY);
        console.log('innerHeight:', window.innerHeight);
        console.log('scrollHeight:', document.body.scrollHeight);

        if (window.scrollY + window.innerHeight <= document.body.scrollHeight) {
            document.querySelector('.sec-footer').style.opacity = 1;
        } else {
            document.querySelector('.sec-footer').style.opacity = 0;
        }
    })
}

var typed = new Typed(".title", {
    strings: ["もしもし", "Hello!", "I am Fahrur"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})