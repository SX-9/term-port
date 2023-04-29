setInterval(() => {
    document.querySelectorAll('span').forEach((el) => {
        let color = el.getAttribute('data-color');
        el.style.color = color;
    });
});