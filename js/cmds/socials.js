export default function(output, _hist, ...args) {
    let social = args[0];
    if (social) output.innerHTML += '<span data-color="orange">Opening ' + social + '...</span>';
    switch (social) {
        case 'github':
            window.open('https://github.com/SX-9');
            break;
        case 'discord':
            window.open('https://discord.st/sx-aircraft');
            break;
        case 'email':
            window.open('mailto:sx-91@outlook.com');
            break;
        default:
            output.innerHTML += `\
<span data-color="white">Github: <a href="https://github.com/SX-9">@SX-9</a></span>
<span data-color="MediumSlateBlue">Discord: <a href="https://discord.st/sx-aircraft">satr14</a></span>
<span data-color="yellow">Email: <a href="mailto:sx-91@outlook.com">sx-91@outlook.com</a></span>`;
        return;
    }
}
