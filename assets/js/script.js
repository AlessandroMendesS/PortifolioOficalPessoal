var options = {
  strings: ["Programador", "Designer", "Alessandro Mendes"],
  typeSpeed: 50,
  backSpeed: 25,
  loop: true
};

var typed = new Typed(".typing", options);


document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    cursor.style.top = e.clientY + 'px';
    cursor.style.left = e.clientX + 'px';
});

