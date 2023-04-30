import help from "./cmds/help.js";
import history from "./cmds/history.js";
import whoami from "./cmds/whoami.js";
import hostname from "./cmds/hostname.js";

export async function handle(input, output, hist) {
    switch (input) {
        case "help":
            help(output);
            break;
        case "history":
            history(output, hist);
            break;
        case "whoami":
            whoami(output);
            break;
        case "hostname":
            hostname(output);
            break;
        default:
            output.innerHTML += 'Command <span data-color=grey>"' + input + '"</span> Not Found.';
    }
}
