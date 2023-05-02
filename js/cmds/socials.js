export default function(output, _hist, ...args) {
    let social = args[0];
    switch (social) {
        case 'github':
            window.open('https://github.com/SX-9');
            break;
        case 'discord':
            window.open('https://discord.st/sx-aircraft');
            break;
        case 'twitter':
            window.open('https://twitter.com/SX_Discord');
            break;
        case 'email':
            window.open('mailto:hello@mail.sx9.is-a.dev');
            break;
        default:
            output.innerHTML += `\
<span data-color="white">Github: <a href="https://github.com/SX-9">@SX-9</a></span>
<span data-color="MediumSlateBlue">Discord: <a href="https://discord.st/sx-aircraft">sx9dev#1151</a></span>
<span data-color="cyan">Twitter: <a href="https://twitter.com/SX_Discord">SX_Discord</a></span>
<span data-color="yellow">Email: <a href="mailto:hello@mail.sx9.is-a.dev">hello@mail.sx9.is-a.dev</a></span>`;
        return;
    }
    if (social) output.innerHTML += '<span data-color="orange">Opening ' + social + '...</span>';
}
