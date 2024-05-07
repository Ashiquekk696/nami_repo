

const cloudinary = require('../config/cloudinary_config');
const { Home } = require('../model/home');

exports.uploadImage = async (req,res) =>{
  const {filename,path} =await req.file
    await cloudinary.v2.uploader.upload(path,{folder:"ashique_ecommerce_subfolder"},async(error, cldResult) => {

        console.log(cldResult);
        if(error){
          res.status(500).json({ error: 'Error uploading image to Cloudinary' });
          return;
        }
  const url = cldResult.secure_url;
        const user =     new Home({url})
        await user.save(); 
     const result = {
        
      profile_pic_url:cldResult.secure_url
     }
     await res.status(201).json({mess:"Image uploaded Successfully",result:result})
    })
}