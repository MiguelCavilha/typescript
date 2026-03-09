type ClientId = string | number;

function printClientId(clientId: ClientId) {
    console.log(`O ID do cliente é: ${clientId}`);
}

function createClientId(nome: string, tag: number): string {
    return `${nome}#${tag}`;
}

const clienteId = createClientId("João", 1234);
printClientId(clienteId);
printClientId(12345);