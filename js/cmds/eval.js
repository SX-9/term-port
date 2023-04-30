export default function(output, ...args) {
    output.innerHTML += eval(args.join(" "));
}