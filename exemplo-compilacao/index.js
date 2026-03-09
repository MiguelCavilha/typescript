function sendMessage(userName, isLogged) {
    var sanitizedUserName = userName.replace(/[\r\n]/g, '');
    console.log("Olá ".concat(sanitizedUserName, ". Você ").concat(isLogged ? "está" : "não está", " logado."));
}
var userName = "Beto";
var isLogged = true;
sendMessage(userName, isLogged);
