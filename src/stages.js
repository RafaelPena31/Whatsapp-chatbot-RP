var stages = {
  0: {
    description: "Boas vindas",
    obj: require("./stages/stage0"),
  },
  1: {
    description: "Vendas",
    obj: require("./stages/stage1"),
  },
  2: {
    description: "Resumo",
    obj: require("./stages/stage2"),
  },
  3: {
    description: "Endereço",
    obj: require("./stages/stage3"),
  },
  4: {
    description: "Pagamento",
    obj: require("./stages/stage4"),
  },
  5: {
    description: "Encerramento",
    obj: require("./stages/stage5"),
  },
};
exports.step = stages;
