export default function(output, _hist, ...args) {
    output.innerHTML += '<span data-color="orange">Opening Google...</span>';
    window.open('https://google.com/search?q=' + args.join(' '));
}