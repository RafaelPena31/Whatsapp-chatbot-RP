const banco = require("../index");

function execute(user, msg) {
  if (msg === "*") {
    banco.bancodb[user].stage = 0;
    return ["❎ - Pedido cancelado com sucesso! "];
  }

  if (msg === "#") {
    banco.bancodb[user].stage = 3;
    return ["🟢 Digite o endereço por favor: 🟢"];
  }

  let resumo = "🐧🍔 *RESUMO DO PEDIDO* 🍔🐧\n ";
  let total = 0;
  banco.bancodb[user].itens.forEach((value) => {
    console.log(value);
    total += value.price;
    resumo += `${value.description} => R$ ${value.price} \n`;
    resumo += "--------------------------------- \n";
  });

  resumo += `*Total* R$ ${total}`;

  return [
    resumo,
    "🟢 - ```Para confirmar o pedido digite # ou para cancelar digite *``` ",
  ];
}

exports.execute = execute;
