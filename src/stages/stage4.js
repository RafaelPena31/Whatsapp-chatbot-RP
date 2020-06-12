const banco = require("../index");

function execute(user, msg) {
  if (msg === "*") {
    banco.bancodb[user].stage = 0;
    return ["❎ - Pedido cancelado com sucesso!"];
  }

  if (msg === "#") {
    banco.bancodb[user].stage = 5;
    return [`🟢 - Digite ok para finalizar o pedido `];
  }

  return [
    `✅ - Confirmar método de pagamento:\n *${msg}*`,
    "🟢 - ```Digite # para finalizar ou * para cancelar```",
  ];
}

exports.execute = execute;
