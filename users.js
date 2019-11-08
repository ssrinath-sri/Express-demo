const express=require('express');
const app=express();


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://root:j7AmBGbbEgH4t2ZU@employees-sru2a.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


app.use(express.json());

const empid=[
    {id:1, name:'test' },
    {id:2, name:'greenbubble'},
    {id:3, name:'91springboard'}
]

app.get('/',(req, res) => {
    res.send('Hello world');
});

app.get('/api/empid',(req, res) => {
    res.send(empid);
});

app.get('/api/empid/:id',(req, res) => {
    const empid = empid.find(c => c.id === parseInt(req.params.id));
    if (!empid) res.status(404).send('The empid with the given ID was not found ');
    res.send(empid);
});


const port = process.env.PORT ||  3001;
app.listen(port,()=> console.log(`Listening on port ${port}`));