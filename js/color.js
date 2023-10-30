let i;
setInterval(() => {
    let spans = document.querySelectorAll('span');
    if (i === spans.length) return;
    spans.forEach((el) => {
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
    i = spans.length;
});