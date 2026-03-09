function printClientId(clientId) {
    console.log("O ID do cliente \u00E9: ".concat(clientId));
}
function createClientId(nome, tag) {
    return "".concat(nome, "#").concat(tag);
}
var clienteId = createClientId("João", 1234);
printClientId(clienteId);

