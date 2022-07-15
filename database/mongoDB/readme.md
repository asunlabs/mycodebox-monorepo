# Learning MongoDB essentials 
## Basics
> MongoDB is a document database designed for ease of development and scaling

> A record in MongoDB is a document, which is a data structure composed of field and value pairs. MongoDB documents are similar to JSON objects. The values of fields may include other documents, arrays, and arrays of documents.

> MongoDB stores documents in collections. Collections are analogous to tables in relational databases.

> The advantages of using documents are:

1. Documents (i.e. objects) correspond to native data types in many programming languages.
1. Embedded documents and arrays reduce need for expensive joins.
1. Dynamic schema supports fluent polymorphism.

### Why MongoDB
> High performance : Support for embedded data models reduces I/O activity on database system. Indexes support faster queries and can include keys from embedded documents and arrays.

> Rich query language : MongoDB supports a rich query language to support read and write operations (CRUD) as well as: Data Aggregation, Text Search and Geospatial Queries.

> High Availability : MongoDB's replication facility, called replica set, provides: 1) automatic failover 2) data redundancy. A replica set is a group of MongoDB servers that maintain the same data set, providing redundancy and increasing data availability.

> Horizontal Scalability : MongoDB provides horizontal scalability as part of its core functionality: 1) Sharding distributes data across a cluster of machines. 2) Starting in 3.4, MongoDB supports creating zones of data based on the shard key. In a balanced cluster, MongoDB directs reads and writes covered by a zone only to those shards inside the zone. See the Zones manual page for more information.

### Getting started
Visit [this website](https://docs.mongodb.com/manual/tutorial/getting-started/) to get an interactive MongoDB shell. 

#### Switch database
> Within the shell, db refers to your current database. Type db to display the current database.

```shell
$db
```

> To switch databases, type use <db>. For example, to switch to the examples database:

```shell
$use examples
```

> You do not need to create the database before you switch. MongoDB creates the database when you first store data in that database (such as create the first collection in the database).

#### Insert data
> MongoDB stores documents in collections. Collections are analogous to tables in relational databases
> If a collection does not exist, MongoDB creates the collection when 
you first store data for that collection.

```js 
db.movies.insertMany([
   {
      title: 'Titanic',
      year: 1997,
      genres: [ 'Drama', 'Romance' ],
      rated: 'PG-13',
      languages: [ 'English', 'French', 'German', 'Swedish', 'Italian', 'Russian' ],
      released: ISODate("1997-12-19T00:00:00.000Z"),
      awards: {
         wins: 127,
         nominations: 63,
         text: 'Won 11 Oscars. Another 116 wins & 63 nominations.'
      },
      cast: [ 'Leonardo DiCaprio', 'Kate Winslet', 'Billy Zane', 'Kathy Bates' ],
      directors: [ 'James Cameron' ]
   },
   {
      title: 'The Dark Knight',
      year: 2008,
      genres: [ 'Action', 'Crime', 'Drama' ],
      rated: 'PG-13',
      languages: [ 'English', 'Mandarin' ],
      released: ISODate("2008-07-18T00:00:00.000Z"),
      awards: {
         wins: 144,
         nominations: 106,
         text: 'Won 2 Oscars. Another 142 wins & 106 nominations.'
      },
      cast: [ 'Christian Bale', 'Heath Ledger', 'Aaron Eckhart', 'Michael Caine' ],
      directors: [ 'Christopher Nolan' ]
   },
   {
      title: 'Spirited Away',
      year: 2001,
      genres: [ 'Animation', 'Adventure', 'Family' ],
      rated: 'PG',
      languages: [ 'Japanese' ],
      released: ISODate("2003-03-28T00:00:00.000Z"),
      awards: {
         wins: 52,
         nominations: 22,
         text: 'Won 1 Oscar. Another 51 wins & 22 nominations.'
      },
      cast: [ 'Rumi Hiiragi', 'Miyu Irino', 'Mari Natsuki', 'Takashi Naitè' ],
      directors: [ 'Hayao Miyazaki' ]
   },
   {
      title: 'Casablanca',
      genres: [ 'Drama', 'Romance', 'War' ],
      rated: 'PG',
      cast: [ 'Humphrey Bogart', 'Ingrid Bergman', 'Paul Henreid', 'Claude Rains' ],
      languages: [ 'English', 'French', 'German', 'Italian' ],
      released: ISODate("1943-01-23T00:00:00.000Z"),
      directors: [ 'Michael Curtiz' ],
      awards: {
         wins: 9,
         nominations: 6,
         text: 'Won 3 Oscars. Another 6 wins & 6 nominations.'
      },
      lastupdated: '2015-09-04 00:22:54.600000000',
      year: 1942
   }
])
```

> The operation returns a document that contains the acknowledgement indicator and an array that contains the _id of each successfully inserted documents.

#### Find all data
To verify the insert, you can query the collection.
```js
db.movies.find( { } )
```

#### Filter data
> For an equality match (<field> equals <value>), specify <field>: <value> in the query filter document and pass to the db.collection.find() method.

```js 
// note that field is string
db.movies.find( { "directors": "Christopher Nolan" } );
```

#### Comparison query operator
MongoDB provides various query operators. 

1. $eq : Matches values that are equal to a specified value.
1. $gt : Matches values that are greater than a specified value.
1. $gte : Matches values that are greater than or equal to a specified value.
1. $in : Matches any of the values specified in an array.
1. $lt : Matches values that are less than a specified value.

```js
db.movies.find( { "awards.win" : {$lt : 150} } )
```

1. $lte : Matches values that are less than or equal to a specified value.
1. $ne : Matches all values that are not equal to a specified value.
1. $nin : Matches none of the values specified in an array.

## Documents
> MongoDB stores data records as BSON documents. BSON is a binary representation of JSON documents, though it contains more data types than JSON.

> BSON documents may have more than one field with the same name. Most MongoDB interfaces, however, represent MongoDB with a structure (e.g. a hash table) that does not support duplicate field names. If you need to manipulate documents that have more than one field with the same name, see the driver documentation for your driver.

### Document size limit
> The maximum BSON document size is 16 megabytes. The maximum document size helps ensure that a single document cannot use excessive amount of RAM or, during transmission, excessive amount of bandwidth. To store documents larger than the maximum size, MongoDB provides the GridFS API. 

### Document field order
> Unlike JavaScript objects, the fields in a BSON document are ordered.
> When comparing documents, field ordering is significant. For example, when comparing documents with fields a and b in a query:

```js
{a: 1, b: 1} // is equal to {a: 1, b: 1}
{a: 1, b: 1} // is not equal to {b: 1, a: 1}
```

> For efficient query execution, the query engine may reorder fields during query processing. Among other cases, reordering fields may occur when processing these projection operators: $project, $addFields, $set, and $unset.

> Field reordering may occur in intermediate results as well as the final results returned by a query. Because some operations may reorder fields, you should not rely on specific field ordering in the results returned by a query that uses the projection operators listed earlier.

> The _id field is always the first field in the document. Updates that include renaming of field names may result in the reordering of fields in the document.

### The _id field
> In MongoDB, each document stored in a collection requires a unique _id field that acts as a primary key. If an inserted document omits the _id field, the MongoDB driver automatically generates an ObjectId for the _id field.

> By default, MongoDB creates a unique index on the _id field during the creation of a collection.

> The _id field is always the first field in the documents. If the server receives a document that does not have the _id field first, then the server will move the field to the beginning.

>  If the _id contains subfields, the subfield names cannot begin
with a ($) symbol.

> The _id field may contain values of any BSON data type, other than an array, regex, or undefined.

> Most MongoDB driver clients will include the _id field and generate an ObjectId before sending the insert operation to MongoDB; however, if the client sends a document without an _id field, the mongod will add the _id field and generate the ObjectId.


## Learning by doing
Took below courses and summarized essentials. 

- [NetNinja - MongoDB for beginners](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jpvoYriLI0bY8DOgWZfi6u)

MongoDB is a NO-SQL database that stores JSON documents. Mongoose is a npm package used to control MongoDB with Javascript, creating schemas. 

- SQL : table, row, column
- NO-SQL : collection, document

```json
{
    "_id" : 12345, 
    "blogs" : [
        { "title" : "hello world" },
        { "title" : "goodbye world" },
    ]
}
```

MongoDB's format is JSON, which is Javascript Object Notation. 

<span>Web - Server - Database</span><br/>
<img src="reference/client-mongoose-db.png" width=250 height=350 />

- Web client : HTML, CSS, Javascript
- Web server : Node.js/Express
- Database : JSON, Mongoose

## Comparison With Relational Database
### Relational DB : SQL
Create two different tables and tangle them with SQL. 
<img src="reference/rdb-tables.png" width=550 height=330 />

### MongoDB : No-SQL
Create two different objects and nest. 
<img src="reference/mongodb-no-tables.png" width=450 height=400 />

```javascript
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookSchema = new Schema({
    title: String, 
    pages: Number
})

const AuthorScheam = new Schema({
    name: String,
    age: Number, 
    book: [BookSchema] // nested
}) 

// mongoose.model(model name, model schema)
const Author = mongoose.model('Author', AuthorSchema)
module.exports = Author
```

## Installation
Deployment with MongoDB can be served with 
- Atlas : MongoDB as a service
- On-premises : Local MongoDB => install MongoDB Compass
- Mobile & Edge : Realm mobile database. Lightweight data storage for mobile and edge

## Connection
1. Create an account in MongoDB website
2. Choose a plan : 1) serverless 2) dedicated 3) shared(free, 1 per account)
3. Set database username and password, which will be used in Mongoose. 
4. Set other configurations for the MongoDB, like **IP Access List**. One of the common reasons of DB connection failure is not to include your IP address.
5. Get your MongoDB Atlas URI and set **environment variables**. 
6. Require Mongoose/Express in your Javascript file and connect database like below.

<details>
    <summary>Understanding Mongoose</summary>

Mongoose is an object document mapping library(**ODM library**). Connecting MongoDB and your backend can be done other than Mongoose if preferred. 
</details>

During connecting MongoDB using mongoose/express, database info such as username and password is required and can be seen in codes. Also, sensitive information such as API key should not be displayed in public neither. Thus, environment variable/file is needed to manage that. 

```js
// Environment variable in Node.js
// The process.env property returns an object containing the user environment.
process.env // global object. approachable in whole application. 

// case 1 : using process.env to import MONGO_URI
const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI // In .env file, MONGO_URI="your_uri". No space allowed in .env file.

mongoose.connect(MONGO_URI, { })
        .then(()=>{ console.log("MongoDB connected") })
        .catch((err)=>{ console.log(err) })

// case 2 : using modules to import MONGO_URI
module.exports = { MONGO_URI : "your_uri" } // file name : key.js
require('./key')

mongoose.connect(MONGO_URI, {})
        .then(()=>{ console.log("MongoDB connected") })
        .catch((err)=>{ console.log(err) })
```



## Schema, Collection, And Model
In creating database, the first thing we need is to create a schema. Each schema maps to a MongoDB collection. 

- Schema => Collection => Model ===(instantiation)===> Document

In MongoDB, a lot of databases can exist. Choose the one that you need and connect it using mongoose. 
Database is structured as follows

- <img src="reference/database-collection-record.png" width=540 height=360 />

<details>
    <summary>What is schema?</summary>

- Model : a list of concepts describing data **(abstract)**
- Schema : a list of attributes and instructions **where database engine reads/follows(concrete, physical)**. Schema is to decide and tell the record what type of property they should have. 

```Javascript
const mongoose = require('mongoose') 

// Create a schema
const HumanSchema = moongose.Schema({
    name : {
        type : String, 
        required : true
    }
    age : Number
})

```
</details>

## CRUD in MongoDB
Inserting, searching, updating, and deleting are asynchronous actions in database. The 'done' callback function should be called once the asynchronous operations are done.

```javascript
// done callback convention in Node.js
const doSomething = function (done) { 
    if (err) return console.log(err)
    done(null, result)
}

```

Types of Mongoose CRUD methods are as follows(cb : short for callback). Methods are pretty much self-explanatory.

- mongoose.Schema
- mongoose.model
- document.save
- model.find(filter, cb) : find all matches
- model.findOne(filter, cb) : find one match
- model.findById(filter, cb) : find one match with the id
- model.findAndUpdate(filter, update, new) : set the third argument 'new'. Otherwise it will return unchanged object by default. 
- model.findByIdAndRemove(filter, cb)
- model.remove : delete all matches. returns JSON object, not updated(meaning some records deleted) docs. 
- chain search : making **query chains** to narrow results.

```javascript 
// query chain search in MongoDB
const queryChain = (done) => { 
    const myKeyword = "sushi"
    Sushi.find(myKeyword)
         .sort( { price : 1 } ) // show expensive sushi first
         .limit(5) // show 5 of them 
         .select( { location : 1} ) // show location 
         .exec(function(err, data) {
             if (err) return console.log(err)
             done(null, data)
         }) // execute queries. If exec method is not provided with the callback, it won't work. 
}

```

### Creating And Saving records
You can create model and save the document(model instance) in database, which is the purpose of creating it. 

```Javascript 
// Create a model from schema
let Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
  // Create a document(model instance)
  const person = new Person( {
    name : "Jake Sung", 
    age : 27, 
    favoriteFoods : ["Pizza, Sushi"]
   })

   // Save the document in database
   person.save(function(err, data) { 
    if (err) return console.log(err)
    done(null, data);
   })
};
```

<span>Document is stored in database</span><br/>
<img src="reference/data-stored.png" width=700 height=400/>

When saving a document, **MongoDB creates a field called "_id"**, which is a unqiue alphanumeric(letter + number) key. **Searching records by _id** is super common operation in MongoDB. 

### Finding records
- find(condition) : find **multiple records** matched with the conditions
- findOne(condition) : find the **first record** matched with the condition

#### Object ID
Once model instance(document) is saved in the database, how do we know which one is which if the name is all the same? **Finding a specific record is done with object id** since each record in database has a different object id.
 
<img src="reference/mongodb-object-id.png" width=800 height=400 />

### Deleting records
- model(instance).remove
- model(whole collections).remove 
- model.findOneAndRemove

- 1. Create and save a new record
- 2. Use findOneAndRemove to remove the record
- 3. Use findOne to check if the removed record exists. It should be null if deleted. 

### Updating records
- model(instance).update
- model(whole collections).update 
```javascript
myModel.update({}, {$inc : { weight : 1 } }) // update whole collections, increasing weight property by 1 
```

- model.findOneAndUpdate

- 1. Create a save a new record
- 2. Use findOneAndUpdate to update the record
- 3. Use findOne to check the updated record. Its value should be changed.

## Testing With Mocha
Mocha is a testing framework used to make test cases. Running tests consistently ensures newly added features are well integrated with previous ones. 

You can test such as : 
- Creating records
- Reading records
- Updating records
- Deleting records

Install Mocha like below

```shell
$npm install mocha --save

# Installing mocha is not required for production setting.
$npm install mocha --save-dev
```

<details> 
<summary>What is assert in Node js?</summary>

**Assert is a built-in module in Node.js**. It evaluates a value parameter and if it is not true, throw error. 

```javascript
assert(value, message) // message is optional
```
</details> 


### Mocha configuration in package.json
Configurate Mocha like below in package.json to use Mocha with command npm test.

```json
  "scripts": {
    "test": "node_modules/.bin/mocha $(find your/foler/directory -name '*.js') --recursive -w",
    "start": "nodemon"
  },
```

### Handling Asynchronous Request With Mocha
Saving model into database is an asynchronous request. Deliver 'done' function parameter provided by Node.js and call it after the asynchronous request is done. 

```javascript
myModel.save()
       .then(function(done) {
           // do what is needed
           done(); // finish the asynchronous request
       }); 

```

When the done parameter is not properly delivered
- <img src="reference/mocha-test-async-fail.png" width=740 height=530 />

When delivered
- <img src="reference/mocha-test-async-success.png" width=740 height=530 />

## Reference
- [MongoDB official manual](https://docs.mongodb.com/manual/introduction/)
- [NetNinja - MongoDB for beginners](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jpvoYriLI0bY8DOgWZfi6u)