const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const citySchema = require('./models/citymodel'); //aqui importamos el esuqema creado
const itinerarySchema = require('./models/itinerarymodel');
const activitySchema = require('./models/activitymodel');
const commentSchema = require('./models/commentmodel')
const multer = require('multer');


const storage = multer.diskStorage({
    destination: function(req, file, cb){   //cb es call back
      cb(null, './uploads');
    },
    filename: function(req, file, cb){
      cb(null, file.originalname)
    }
});



const upload = multer({storage: storage});




app.use('/uploads', express.static('uploads'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://Schan:conquistador23@ds149744.mlab.com:49744/mytineraryapp",{ useNewUrlParser: true }).then(()=> console.log('database connected')); //este then es una promesa, me devuelve un console.log para comprobar si la base de datos esta conectada.
  //Aqui conectamos con mongodb a traves de mongoose que sera el que administra las relaciones entre los datos, valida el esquema y se utiliza para traducir entre los objetos en el codigo y la presentacion de esos objetos en mongodb.

app.get('/city', (req, res) => {
citySchema.find().then(cities => res.json(cities)); //Aqui lo que hacemos es que busque el ¿esquema? que hemos creado en city.js y enviados por el post y nos de la informacion.
});

app.get('/itinerary', (req, res) => {
  itinerarySchema.find().then(itinerarys => res.json(itinerarys));
});

app.get('/itinerary/:id', (req, res) => {
  itinerarySchema.find({city_id:req.params.id}).then(itinCity => res.json(itinCity)); //en parametro id que tenemos en el get cogera cualquier valor que introdujamos en el id de abajo, es decir la cogera el id y lo convertira en la nueva ruta
  //res.send(req.params.id)
}); //en este caso ponemos title, al poner el title de uno de los itinerarys me llevara hasta esa info.//lo cambiamos por el id por defecto que nos da la database.
   //en nuestro esquema tenemos que añadir la id de la ciudad en la que queremos añadir esos itinerarys.//al poner el campo de id con el id de la ciudad de barcelona obtenemos los dos itinerarios para esa ciudad.

app.get('/activity',(req, res) => {
  itinerarySchema.find(activities => res.json(activities));
});

app.get('/activity/:itinerary_id', (req, res) => {
  console.log(req.params.itinerary_id)
  activitySchema.find({itinerary_id:req.params.itinerary_id}).then(activItinerary => {
  
    
    res.json(activItinerary)});
});

app.get('/comments',(req, res) =>{
  commentSchema.find(comments => res.json(comments));
});

app.get('/comments/:itinerary_id', (req, res) =>{
  commentSchema.find({itinerary_id:req.params.itinerary_id}).then(commentsItinerary =>{
    
    res.json(commentsItinerary)});
});


//POST
app.post('/city', (req, res) =>{ //Aqui en el post ¿recibimos? los datos los guardamos y los enviamos a un sitio especifico, ¿usamos post para agregar un nuevo elemento a los datos ?
  const city = new citySchema({
    name: req.body.name,
    country: req.body.country  // aqui ponemos informacion en base de datos 

  })
  city.save().then(cities => res.json(cities)); //Aqui creamos la collection ?.
});


app.post('/itinerary', upload.single('profilePic'),(req, res) =>{
  console.log(req.file);
  
  const itinerary = new itinerarySchema({
    city_id: req.body.city_id,
    title: req.body.title,
    profilePic: req.file.filename,
    likes: req.body.likes,
    time: req.body.time,
    price: req.body.price,
    hashtag: req.body.hashtag
  })
  itinerary.save().then(itinerarys => res.json(itinerarys))
});


app.post('/activity', upload.single('activityPic'),(req, res)=>{

  const activity = new activitySchema({
    city_id: req.body.city_id,
    itinerary_id: req.body.itinerary_id,
    activityPic: req.file.filename
  })
   activity.save().then(activities => res.json(activities))
  
});


app.post('/comment',(req, res) =>{
  
  const comment = new commentSchema({
    itinerary_id: req.body.itinerary_id,
    user: req.body.user,
    comment: req.body.comment,
  })
   comment.save().then(comments => res.json(comments))
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));

