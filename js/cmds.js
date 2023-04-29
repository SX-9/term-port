export async function handle(input, output) {
    switch (input) {
        case "help":
            output.innerHTML += 'Nothing <span data-color="yellow">Yet</span>.';
            break;
        default:
            output.innerHTML += 'Command <span data-color=grey>"' + input + '"</span> Not Found.';
    }
}
