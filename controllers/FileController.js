const { readFile } = require('fs');
const File = require('../models/File');

// Helpers
const { fileWrite } = require('../helpers/file-write')

module.exports = class FileController {
  static home(req, res) {
    res.render('files/home');
  }

  static uploadFile(req, res) {
    res.render('files/upload');

    const caminhoArquivo = "uploads/CNAB.txt";
    
    readFile(caminhoArquivo, (err, data) => {
        if(err){
          res.send(err);
          return;
        }

        // Transforma em string

        const dados = fileWrite(data);
        
        const array = dados.split(/\r?\n/);

        var numberOfRows = array.length;

        var type = [];
        var date = [];
        var value = [];
        var cpf = [];
        var card = [];
        var hour = [];
        var storeowner = [];
        var storename = [];
        var database = [];

        // Extrai separadamente os dados

        for(var i=0; i < numberOfRows ; i++){
          type[i] = array[i].substr(0,1);
          date[i] = array[i].substr(1,8);
          value[i] = array[i].substr(9,10);
          cpf[i] = array[i].substr(19,11);
          card[i] = array[i].substr(30,12);
          hour[i] = array[i].substr(42,6);
          storeowner[i] = array[i].substr(48,14);
          storename[i] = array[i].substr(62,19);

            // Insere os dados formatados em um array

            database[i] = [
              type[i] = {
                'type': type[i]
              },
              date[i] = {
                'date': date[i]
              },
              value[i] = {
                'value': value[i]
              },
              cpf[i] = {
                'cpf': cpf[i]
              },
              card[i] = {
                'card': card[i]
              },
              hour[i] = {
                'hour': hour[i]
              },
              storeowner[i] = {
                'storeowner': storeowner[i]
              },
              storename[i] = {
                'storename': storename[i]
              },
            ]; 
        }  

        console.log(database);
        return;
    })
  }
}
