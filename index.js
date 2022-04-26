const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;


// use middleware
app.use(cors());
app.use(express.json());

// uesr: dbuser1;
// password: hqgtgHF21dxncgrf







const uri = "mongodb+srv://dbuser1:hqgtgHF21dxncgrf@cluster0.6b1pb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
  try {

    await client.connect();
    const usercollection = client.db("dbuser1").collection("users");
    const user = {name: 'sadia', email: 'sadia@gmail.com'};
    const result = await usercollection.insertOne(user);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
    // app.get('/product',(req, res)=>{
    //   res.send('hi ')
    // })
  }

  finally{
    // await client.close();
  }
  
}
run().catch(console.dir); 






app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })