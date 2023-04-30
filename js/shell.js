import { handle } from "./cmds.js";

const welcome = `\
          /\\    <span data-color="red">|></span>      <span data-color="lime">  ______                        ____                __   </span>
   <span data-color="red"><|</span>    /  \\<span data-color="brown">__</span>/ \\      <span data-color="lime"> /_  __/___   _____ ____ ___   / __ \\ ____   _____ / /_  </span>
   / \\<span data-color="brown">__</span>/<span data-color="brown">----</span>\\/   \\     <span data-color="lime">  / /  / _ \\ / ___// __ \`__ \\ / /_/ // __ \\ / ___// __/ </span>
  /<span data-color="brown">---</span>\\/      \\    \\    <span data-color="lime"> / /  /  __// /   / / / / / // ____// /_/ // /   / /_    </span>
 /     \\       \\    \\   <span data-color="lime">/_/   \\___//_/   /_/ /_/ /_//_/     \\____//_/    \\__/    </span>
<span data-color="cyan"><~~~~~~~~~~~~~~~~~~~~></span>        <span data-color="grey">===> Terminal Portfolio | Made By <a href="https://sx9.is-a.dev">sx9dev</a></span>

Type <span data-color="yellow">help</span> For List Of Available Commands

`;
const terminal = document.querySelector('pre')
terminal.innerHTML = welcome;
const history = [];

let prompt = document.querySelector('#prompt-template').content.cloneNode(true);
terminal.appendChild(prompt);

window.onkeypress = async (e) => {
  if (e.keyCode === 13) {
    let prompts = document.querySelectorAll('[name="prompt"]');
    prompts[prompts.length - 1].setAttribute('readonly', true);
    
    await handle(prompts[prompts.length - 1].value, terminal, history);
    history.push(prompts[prompts.length - 1].value);

    prompt = document.querySelector('#prompt-template').content.cloneNode(true);
    terminal.appendChild(prompt);

    prompts = document.querySelectorAll('[name="prompt"]');
    prompts[prompts.length - 1].focus();
  }
}
