```javascript
//Correct usage of $inc operator
db.collection.updateOne({"_id":1},{$inc:{a:1,b:2}});
//Check if field 'a' and 'b' are numbers before using $inc operator
```