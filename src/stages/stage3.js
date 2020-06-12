const banco = require("../index");

function execute(user, msg) {
  if (msg === "*") {
    banco.bancodb[user].stage = 0;
    return ["❎ - Pedido cancelado com sucesso! "];
  }

  if (msg === "#") {
    banco.bancodb[user].stage = 4;
    return [
      "💳💵 - Digite o metodo de *pagamento*\n\n Aceitamos: \n💵 *dinheiro* 💵\ne\n💳 *cartão* 💳:\nCrédito - Débito",
    ];
  }

  return [
    `✅ Confirmar endereço: ✅\n ${msg}`,
    "🟢 - ```Digite # para continuar ou * para cancelar```",
  ];
}

exports.execute = execute;
