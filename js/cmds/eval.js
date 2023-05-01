export default function(output, _hist, ...args) {
    try {
        output.innerHTML += eval(args.join(" "));
    } catch (e) {
        output.innerHTML += '<span data-color="red">' + e + '</span>'
    }
}