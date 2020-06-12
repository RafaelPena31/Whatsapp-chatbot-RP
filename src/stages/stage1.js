const cardapio = require("../cardapio");
const banco = require("../index");

function execute(user, msg) {
  if (msg === "*") {
    banco.bancodb[user].stage = 0;
    return ["❎ - Pedido cancelado com sucesso! "];
  }

  if (msg === "#") {
    banco.bancodb[user].stage = 2;
    return [
      "🐧🍔 Estamos fechando o seu pedido, ok? 🍔🐧 \n",
      "✅ Digite ok para continuar ✅",
    ];
  }

  let menu = "🐧🍔 *CARDÁPIO* 🍔🐧\n\n";
  let drink = "\n📋🍹 *BEBIDAS* 🍹📋\n\n";
  let elementB;
  let elementC;

  console.log("init c");
  Object.keys(cardapio.menu).forEach((value) => {
    console.log("entrou");
    if (value == 1 || value == 2 || value == 3) {
      elementC = cardapio.menu[value];
    } else {
      elementB = cardapio.menu[value];
    }

    if (!elementB === true) {
      menu += `🍔 ${value} - ${elementC.description} - R$ ${elementC.price} \n`;
      if (!elementC === true) {
        drink += `🍔 ${value} - ${elementB.description} - R$ ${elementB.price} \n`;
      }
    } else {
      drink += `🍔 ${value} - ${elementB.description} - R$ ${elementB.price} \n`;
    }
    console.log("saiu");
  });
  menu += drink;
  if (!cardapio.menu[msg]) {
    return [
      "❎ - Código de pedido inválido, digite corretamente ",
      menu,
      "🟢 - ```Digite # para continuar o pedido ou * para cancelar``` ",
    ];
  }
  console.log("chegou");
  banco.bancodb[user].itens.push(cardapio.menu[msg]);
  console.log("setou");
  return [
    `✅ - Item adicionado com sucesso - \n ${cardapio.menu[msg].description}`,
    "🟢 - Digite um novo código para adicionar ao seu pedido ou:",
    "```Digite # para continuar o pedido ou * para cancelar```",
  ];
}

exports.execute = execute;
