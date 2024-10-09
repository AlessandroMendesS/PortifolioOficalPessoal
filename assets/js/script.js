

document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    cursor.style.top = e.clientY + 'px';
    cursor.style.left = e.clientX + 'px';
});

