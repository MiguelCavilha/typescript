enum StatusPedido {
    Pendente = "Pendente",
    Pago = "Pago",
    Enviado = "Enviado"
}

const statusAtual: StatusPedido = StatusPedido.Pago;

console.log(statusAtual);