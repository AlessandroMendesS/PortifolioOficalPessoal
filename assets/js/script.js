
var typed = new Typed('.typed-text', {
    strings: ['Programador','Criativo', 'Inovador', 'Alessandro Mendes'],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1000,
    loop: true
});

document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    cursor.style.top = e.clientY + 'px';
    cursor.style.left = e.clientX + 'px';
});

