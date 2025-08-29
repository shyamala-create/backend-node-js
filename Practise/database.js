const { MongoClient } = require('mongodb');

require('mongodb');
const uri = "mongodb+srv://shyamalaselvaraj87:Shyam%401996@cluster0.bmajoiz.mongodb.net/"

const client = new MongoClient(uri);

const dbName = "Todo";

async function main() {
await client.connect();
console.log("Database connected");

const db = client.db(dbName);
const collection = db.collection('user')

const data = {
    firstName: "shyamala",
    lastname: "M S",
    phoneNumber: 1234567890,
    city: "Erode"
}
const result = await collection.find({}).toArray();

console.log(result);
const inertResult = await collection.insertOne(data);
console.log(inertResult);
return "done"

}
main()
.then(console.log)
.catch(console.error)
.finally(() => client.close());