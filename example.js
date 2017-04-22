const mongoose = require('mongoose');
//mongo
//use mongooseExample
mongoose.connect('mongodb://localhost/mongooseExample');

const Cat = mongoose.model('Cat', //<== name of the model
{
        name: String //<==== SCHEMA the structure that the document will have
    }
// collection Cat ==>>> (cats) it will make the name plural (db.cats.find(),etc)
//Fields:name (type String )
);
//create (c of crud)

const kitty = new Cat({name:'Mr.Nibbles'}); // db.cats.insertOne()
kitty.save((err)=>{
  if (err) {
    console.log('OH NO IT DIDINT SAVE');
  }else {
    console.log('NICE');

  }
});
// read (R from CRUD)
Cat.find((err,catslist) => {
  if (err) {
    console.log('OH NO IT DIDINT query');
  }else {
    console.log('NICE here you go');
  }
  catslist.forEach((onecat)=>{
    console.log(`---> cat:${onecat.name}`);
  });
});//thre arguments

Cat.find({name : "Mr.Nibbles"},//criteria obj
{name:1,_id:0},// to show what you want PROJECTION
(err,catslist) => {
  if (err) {
    console.log('OH NO IT DIDINT query');
  }else {
    console.log('NICE here you go');
  }
  catslist.forEach((onecat)=>{
    console.log(`---> cat:${onecat.name}`);
  });
});
Cat.find({name : "Mr.Nibbles"},//criteria obj
// to show what you want PROJECTION
(err,catslist) => {
  if (err) {
    console.log('OH NO IT DIDINT query');
  }else {
    console.log('NICE here you go');
  }
  catslist.forEach((onecat)=>{
    console.log(`---> cat:${onecat.name}`);
  });
});
