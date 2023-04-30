import { handle } from "./cmds.js";

const msg = 'Welcome To TermPort!';
const welcome = `\
          /\\    <span data-color="red">|></span>      <span data-color="lime">  ______                        ____                __   </span>
   <span data-color="red"><|</span>    /  \\<span data-color="brown">__</span>/ \\      <span data-color="lime"> /_  __/___   _____ ____ ___   / __ \\ ____   _____ / /_  </span>
   / \\<span data-color="brown">__</span>/<span data-color="brown">----</span>\\/   \\     <span data-color="lime">  / /  / _ \\ / ___// __ \`__ \\ / /_/ // __ \\ / ___// __/ </span>
  /<span data-color="brown">---</span>\\/      \\    \\    <span data-color="lime"> / /  /  __// /   / / / / / // ____// /_/ // /   / /_    </span>
 /     \\       \\    \\   <span data-color="lime">/_/   \\___//_/   /_/ /_/ /_//_/     \\____//_/    \\__/    </span>
<span data-color="cyan"><~~~~~~~~~~~~~~~~~~~~></span>        <span data-color="grey">===> Terminal Portfolio | Made By <a href="https://sx9.is-a.dev">sx9dev</a></span>

Type <span data-color="yellow">help</span> For List Of Available Commands

`;
const sleep = m => new Promise(r => setTimeout(r, m));
const terminal = document.querySelector("pre");
const history = [];
let prompt = document.querySelector("#prompt-template").content.cloneNode(true);

setTimeout(async () => {
  for (let i = 0; i < msg.length; i++) {
    terminal.innerText += msg[i];
    await sleep(100);
  }
  await sleep(1500);
  terminal.innerHTML = welcome;
  terminal.appendChild(prompt);
}, 500);

window.addEventListener(
  "DOMContentLoaded",
  () =>
    (window.onkeydown = async (e) => {
      let prompts = document.querySelectorAll("input");

      if (e.key === 'Enter') {
        prompts[prompts.length - 1].setAttribute("placeholder", prompts[prompts.length - 1].value)
        prompts[prompts.length - 1].setAttribute("readonly", true);

        await handle(prompts[prompts.length - 1].value, terminal, history);
        history.push(prompts[prompts.length - 1].value);

        prompt = document
          .querySelector("#prompt-template")
          .content.cloneNode(true);
        terminal.appendChild(prompt);

        prompts = document.querySelectorAll("input");
        prompts[prompts.length - 1].focus();
      } else if (e.key === 'ArrowUp') {
        prompts[prompts.length - 1].value = history[history.length - 1]
      } else if (e.key === 'ArrowDown') {
        prompts[prompts.length - 1].value = '';
      }
    })
);
