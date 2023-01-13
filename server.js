var express = require("express")
var app = express()
var cors = require("cors")
let projectCollection; 
let dbConnect = require("./dbConnect");
let projectRoutes = require("./routes/projectRoutes");
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use('/api/projects', projectRoutes)

//mongoDb connection...
/*const MongoClient = require('mongodb').MongoClient;

//add database connections.
const uri = 'mongodb+srv://deepakhpd:kvta@cluster0.adrtj0p.mongodb.net/?retryWrites=true&w=majority' 
const client = new MongoClient(uri, {useNewUrlParser: true})*/

/* insert project
const insertProjects = (project,callback) => {
    projectCollection.insert(project,callback);
}

const getProjects = (callback) => {
    projectCollection.find({}).toArray(callback);
}*/

/*const createColllection = (collectionName) => {
    client.connect((err,db) => {
        projectCollection = client.db().collection(collectionName);
        if(!err) {
            console.log('MongoDB Connected')
        }
        else {
            console.log("DB Error: ", err);
            process.exit(1);
        }
    })
}*/

/*const cardList = [
    {
        title: "T SHIRT",
        image: "images/T4.jpg",
        link: "About the product",
        desciption: "Demo desciption"
    },
    {
        title: "T SHIRT",
        image: "images/T3.jpg",
        link: "About the product",
        desciption: "Demo desciption"
    }

]*/

/*app.get('/api/projects',(req,res) => {
    getProjects((err,result) => {
        if(err) {
            res.json({statusCode: 400, message: err})
        }
        else {
            res.json({statusCode: 200, message:"Success", data: result})
        }
    })
})

// post api
app.post('/api/projects',(req,res) => {
    console.log("New Project added", req.body)
    var newProject = req.body;
    insertProjects(newProject,(err,result) => {
        if(err) {
            res.json({statusCode: 400, message: err})
        }
        else {
            res.json({statusCode: 200, message:"Project Successfully added", data: result})
        }
    })
})*/

var port = process.env.port || 3000;
app.listen(port,()=>{
    console.log("App listening to http://localhost:"+port)
})