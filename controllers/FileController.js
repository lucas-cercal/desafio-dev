const { readFile } = require('fs');
const File = require('../models/File');
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

        const dados = fileWrite(data);
        
        //console.log(dados.substr(0, 1));
        const array = dados.split(/\r?\n/);

        //console.log(dados);
        //console.log(array.lenght);

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

        for(var i=0; i < numberOfRows ; i++){
          type[i] = array[i].substr(0,1);
          date[i] = array[i].substr(1,8);
          value[i] = array[i].substr(9,10);
          cpf[i] = array[i].substr(19,11);
          card[i] = array[i].substr(30,12);
          hour[i] = array[i].substr(42,6);
          storeowner[i] = array[i].substr(48,14);
          storename[i] = array[i].substr(62,19);
        }  
        
        database = [
          type= type[1],
          date= date[1],
          value= value[1],
          cpf= cpf[1],
          card= card[1],
          hour= hour[1],
          storeowner= storeowner[1],
          storename= storename[1]
        ];

        //console.log(numberOfRows);
        //console.log(type);
        //console.log(date);
        console.log(database);

        return;
    })
  }
}
