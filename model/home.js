const mongose = require('mongoose')


const homeSchema = mongose.Schema({
   
    "profile_pic_url":{
        type:String, 
    },
    // "confirm_password":{
    //     type:String,
    //     required:true
    // },
})

exports.Home = mongose.model('User',homeSchema)
 