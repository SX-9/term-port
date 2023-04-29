export async function handle(input, output) {
    switch (input) {
        case "help":
            output.innerHTML += 'Nothing Yet.';
            break;
        default:
            output.innerHTML += 'Command "' + input + '" Not Found.';
    }
}
