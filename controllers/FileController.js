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
        
        console.log(dados.substr(1, 2));

        //console.log(dados);

        return;
    })
  }
}
