function sendMessage(userName: string, isLogged: boolean) {
   const sanitizedUserName = userName.replace(/[\r\n]/g, '');
   console.log(`Olá ${sanitizedUserName}. Você ${isLogged ? "está" : "não está"} logado.`);
}

const userName = "Beto";
const isLogged = true;

sendMessage(userName, isLogged);