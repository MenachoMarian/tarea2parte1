var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ejercicio1', function(req, res, next) {
  var entrada = req.query.params;
  var resul = new Array(0,0);

  entrada = entrada.split("-");

  for(var i=0; i<entrada.length; i++)
  {
    if (i%2==0){
      resul[0]+=parseInt(entrada[i]);
    }
    else {
      resul[1]+=parseInt(entrada[i]);
    }
  }

  res.status(200).json(resul);
});

router.post('/ejercicio2', function(req, res, next) {
  var params = req.body.entrada.split("-");
  var aux = new Array;
  var aster="";
   for(var i=0; i<params[0].length+2; i++){
     aster = aster +"*";
     aux [0] = aster;
     aux [params.length+1]=aster;
   }
   for (var j=1; j<params.length+1; j++){
     aux[j]="*"+params[j-1]+"*";
   }
  //var aux = params["entrada"].split("-");
  //var aux[0],
  res.status(200).json(aux);
});

router.get('/ejercicio3',function(req, res, next) {
  var arr = req.query.params.split("*");
  var aux1 = new Array();
  var aux2 = new Array();
  var answer;
  var cont=0;

    aux1=arr[0].split("-").sort();
    aux2=arr[1].split("-").sort();

    for(var i=0; i<aux1.length; i++){
      for(var j=0; j<aux2.length; j++){
        if(aux1[i]==aux2[j]){
          cont++
        }
      }
    }
    if(cont==aux1.length && cont==aux2.length ){
      answer = true;
    }
    else{
      answer = false;
    }
  //aux[0]=arr[0].split("-").sort();
  //aux[1]=arr[1].split("-").sort();
  //ux[1]=arr[1];8
  //aux=aux.sort();
    res.status(200).json(answer);
});

router.get('/ejercicio4', function(req, res, next){
  var num = req.query.params.split("*");
  var cont=0;
  var j;
  for(var i=0; i<num.length; i++){
    j=i+1;
    while(parseInt(num[j]) <= parseInt(num[i])){
      num[j]++;
      cont++;
    }
   }
  res.status(200).json(cont);
});

module.exports = router;
