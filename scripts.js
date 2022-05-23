//solução 1
function verificaPalindromo (string) {
    if(!string) return;

    return string.split("").reverse().join("") === string;
}