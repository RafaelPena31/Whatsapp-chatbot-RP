require('dotenv').config();

const express = require("express");
const venom = require("venom-bot");
const fs = require("fs");
const stages = require("./stages");
const cors = require("cors");

app.use(cors());


app.listen(process.env.PORT || 3001, () => {
  console.log("Server rodando na 3000...");
});
app.use(express.static(__dirname + "/qrcode"));
let qr;

app.get("/", (req, res) => {
  res.send(`
      <html>
          <head>
              <meta charset="utf-8">
          </head>
          <body>
              <h1>Rota padrão</h1>
          </body>
      </html>
  `);
});

app.get("/start", (req, res) => {
  res.send(`
      <html>
          <head>
              <meta charset="utf-8">
          </head>
          <body>
              <h1>Rota de start</h1>
          </body>
      </html>
  `);
  venom
    .create("session-qr", (base64Qr, asciiQR) => {
      // To log the QR in the terminal
      console.log(asciiQR);

      // To write it somewhere else in a file
      exportQR(base64Qr, "src/qrcode/qr.png");
    })
    .then((client) => start(client));

  // Writes QR in specified path
  function exportQR(qrCode, path) {
    qrCode = qrCode.replace("data:image/png;base64,", "");
    const imageBuffer = Buffer.from(qrCode, "base64");

    // Creates 'marketing-qr.png' file

    fs.writeFileSync(path, imageBuffer);
  }
});

// Second create() parameter is the QR callback

function getStage(user) {
  return bancodb[user].stage;
}

var bancodb = [];

let user = "";

function start(client) {
  client.onMessage((message) => {
    user = message.from;
    user = user.slice(0, 12);
    user = "banco" + user;
    if (bancodb.hasOwnProperty(user) === false) {
      bancodb[user] = {
        stage: 0,
        itens: [],
      };
    }
    let resp = stages.step[getStage(user)].obj.execute(user, message.body);
    for (let index = 0; index < resp.length; index++) {
      const element = resp[index];
      client.sendText(message.from, element);
    }
  });
}

exports.bancodb = bancodb;
