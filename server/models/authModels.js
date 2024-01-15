
const mongoose = require('mongoose');

const startupSchema = new mongoose.Schema({

    startupname:{type:String, required:true},
     incorporationdate:{type:String, required:true},
     startupaddress: {type:String, required:true},
     city:{type:String, required:true},
     state:{type:String, required:true},
     emailaddress:{type:String, required:true , unique:true},
     phonenumber:{type:String, required:true, unique:true},
     foundername:{type:String, required:true},
     city:{type:String, required:true},
     industry:{type:String, required:true, 
      enum: ['IT services', 'agriculture', 'biotechnologies', 'Design', 'Fashion', 'Green Technologies', 'Marketing', 'Others']
    },
    sector:{type:String, required:true, 
        enum: ['IT consultancy', 'IT management', 'IT services', 'agri tech', 'agriculture chemicals', 'organic agriculture', 'web design', 'fashion technologies', 'Others'
      ]
      },
      businessidea: {type: String, required:true}
})
const Startup = mongoose.model('Startup', startupSchema);
module.exports = Startup;