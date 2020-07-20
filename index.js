const AWS = require('aws-sdk');
const fs = require('fs');
const s3 = new AWS.S3({
    accessKeyId: "AKIATZN32B3X2IDDPSCI",
    secretAccessKey: "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"
});

/* 1
//1 list Buckets///////
s3.listBuckets({}, (err, data) => {
    if (err) throw err;
    console.log(data);
});
*/



/*
// 2 list object (guardado dentro del backets)
var parametros = {
    Bucket: 'zapatos-dev-s3'
}
s3.listObjectsV2(parametros, (err, data) => {
    if (err) throw err;
    console.log(data);
});
*/

/*
//3 descargar objeto
var parametrosGeObject = {
    Bucket: 'zapatos-dev-s3',
    Key: 'imagenes/1.jpg'
}
s3.getObject(parametrosGetObject, (err, data) =>{
    if (err) throw err;
    console.log(data);
      fs.writeFile("imagen_de_s3.png", data.Body, 'binary', (err) => {
            if (err) throw err;
            console.log(" imagen grabada al disco");
        });
});
*/    
 


// subir img

fs.readFile("img/goma.jpg", (err, data) => {
    if (err) throw err;
    
 var parametrosPutObject = {
     Bucket: 'zapatos-dev-s3',
     Key: 'imagenes/goma.jpg',
     Body: data
     
 }
 s3.putObject(parametrosPutObject, (err, data) => {
            if (err) throw err;
             console.log(data);
             
 });
});





 

// 4 subir archivo

// fs.readFile("informacion.txt", (err, data) => {
//     if (err) throw err;
    
//  var parametrosGetObject = {
//      Bucket: 'zapatos-dev-s3',
//      Key: "informacion.txt",
//        Body: data
//  }
//  s3.putObject(parametrosGetObject, (err, data) => {
//             if (err) throw err;
//              console.log(data);
//  })
// })
