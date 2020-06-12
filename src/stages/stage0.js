const cardapio = require("../cardapio");
const banco = require("../index");

function execute(user, msg) {
  let menu = "📋🍔 *CARDÁPIO* 🍔📋\n\n";
  let drink = "\n📋🍹 *BEBIDAS* 🍹📋\n\n";
  let elementC;
  let elementB;

  Object.keys(cardapio.menu).forEach((value) => {
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
  });
  menu += drink;
  banco.bancodb[user].stage = 1;

  return [
    "🐧🍔 - Olá, sou o Piter, assistente virtual da Hamburgueria The Penguins, estarei aqui para lhe auxiliar no pedido, irei apresentar o cardápio para você.",
    "🟢 - Para fazer o pedido, envie o código do produto (um código de cada vez)",
    menu,
  ];
}

exports.execute = execute;
