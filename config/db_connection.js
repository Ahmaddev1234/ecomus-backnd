const  mongoose=require('mongoose');
// mongoose.connect('mongodb://localhost:27017/ecommus')
mongoose.connect('mongodb+srv://ahmad:ahmad1234@cluster0.lqdrgne.mongodb.net/ecomus?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Connection error:', err));


module.exports=mongoose.connection;