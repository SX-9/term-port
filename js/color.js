setInterval(() => {
    document.querySelectorAll('span').forEach((el) => {
        let color = el.getAttribute('data-color');
        el.style.color = color;
    });
    document.querySelectorAll('.help').forEach((el) => {
        el.onclick = () => {
            let inputs = document.querySelectorAll('input');
            inputs[inputs.length - 1].value = 'help';
            window?.onkeydown({
                key: 'Enter',
            });
        }
    });
});