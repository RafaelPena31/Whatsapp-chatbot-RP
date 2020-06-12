const banco = require("../index");

function execute(user, msg) {
  banco.bancodb[user].stage = 0;
  return [
    "🐧🍔 Obrigado pela preferência.\n Aguarde o seu pedido no conforto de sua casa :)",
    "🟢 - Quaisquer informações, entre em contato com (31) 3333-3333",
  ];
}

exports.execute = execute;
