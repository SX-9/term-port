export default function(output, _hist, ...args) {
    output.innerHTML += args.join(" ");
}