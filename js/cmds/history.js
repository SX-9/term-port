export default function(output, history) {
    history.forEach((cmd, index) => {
        output.innerHTML += "<span data-color=grey>" + ( index + 1 ) + "</span>  " + cmd + "<br>";
    });
}