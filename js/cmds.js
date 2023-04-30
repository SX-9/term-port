import help from "./cmds/help.js";
import history from "./cmds/history.js";
import whoami from "./cmds/whoami.js";
import hostname from "./cmds/hostname.js";
import clear from "./cmds/clear.js";
import echo from "./cmds/echo.js";
import execute from "./cmds/eval.js";
import projects from "./cmds/projects.js";
import quote from "./cmds/quote.js";
import source from "./cmds/source.js";
import about from "./cmds/about.js";
import socials from "./cmds/socials.js";

export async function handle(input, output, hist) {
    let exec = input.split(' ');
    let cmd = exec[0];
    let args = exec.slice(1);
    
    switch (cmd) {
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
        case "clear":
            clear(output);
            break;
        case "echo":
            echo(output, ...args);
            break;
        case "eval":
            execute(output, ...args);
            break;
        case "about":
            about(output);
            break;
        case "socials":
            socials(output);
            break;
        case "projects":
            await projects(output);
            break;
        case "quote":
            quote(output);
            break;
        case "source":
            source(output);
            break;
        case "": break;
        default:
            output.innerHTML += 'Command <span data-color=grey>"' + input + '"</span> Not Found.';
    }
}
