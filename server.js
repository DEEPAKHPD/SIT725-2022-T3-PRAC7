var express = require("express");
//const req = require("express/lib/request");
//const res = require("express/lib/response");
var app = express()

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({extends:false}))

/*const AddNum = (number1,number2) =>
{
    var number1 = parseInt(number1)
    var number2 = parseFloat(number2)
    var result = number1+number2;
    return result;

}

app.get("/AddNum", (req,res) => 
{
    var number1 = req.query.number1;
    var number2 = req.query.number2;
    var result = AddNum(number1,number2)
    res.json({statusCode: 200, data:result,message :'Success'})

})
*/
var port = process.env.port || 3000;
app.listen(port,()=>{
    console.log("App listening to:http://localhost:"+port)
})