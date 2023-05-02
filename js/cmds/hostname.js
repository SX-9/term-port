export default function(output) {
    let a = navigator.userAgent;
    let os = a.slice(a.indexOf('(') + 1, a.indexOf(')')).split('; ');
    output.innerHTML += os.join(' ').toLowerCase().replace(/[, \s]+/g, '-');
}