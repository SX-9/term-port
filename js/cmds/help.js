export default function(output) {
    output.innerHTML += `\
Here Is A List Of Commands:
    <b><span data-color="lime">donate</span> <span data-color="grey">-</span> <span data-color="yellow">Free Palestine!</span></b>
    <span data-color="lime">help</span> <span data-color="grey">-</span> <span data-color="yellow">Displays This.</span>
    <span data-color="lime">gui</span> <span data-color="grey">-</span> <span data-color="yellow">Activate Graphical Mode.</span>
    <span data-color="lime">about</span> <span data-color="grey">-</span> <span data-color="yellow">Who Is This?</span>
    <span data-color="lime">quote</span> <span data-color="grey">-</span> <span data-color="yellow">Just Some Random Quotes.</span>
    <span data-color="lime">source</span> <span data-color="grey">-</span> <span data-color="yellow">Source Code For This Website.</span>
    <span data-color="lime">projects [name?]</span> <span data-color="grey">-</span> <span data-color="yellow">My Github Repos!</span>
    <span data-color="lime">socials [platform?]</span> <span data-color="grey">-</span> <span data-color="yellow">Contact Me Here!</span>
<span data-color="grey">--------------------------------------------</span>
Extra Commands For Fun:
    <span data-color="lime">clear</span> <span data-color="grey">-</span> <span data-color="yellow">Clears The Terminal.</span>
    <span data-color="lime">whoami</span> <span data-color="grey">-</span> <span data-color="yellow">What's Your Name?</span>
    <span data-color="lime">history</span> <span data-color="grey">-</span> <span data-color="yellow">Prints Your Command History.</span>
    <span data-color="lime">hostname</span> <span data-color="grey">-</span> <span data-color="yellow">What Is This?</span>
    <span data-color="lime">echo [text]</span> <span data-color="grey">-</span> <span data-color="yellow">Prints [text].</span>
    <span data-color="lime">eval [code]</span> <span data-color="grey">-</span> <span data-color="yellow">Eval [code] As JS.</span>
    <span data-color="lime">search [query]</span> <span data-color="grey">-</span> <span data-color="yellow">Google It!</span>
`;
}
