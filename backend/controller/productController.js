

//add product controller

import productModel from "../model/productModel.js";

const addProduct = async (req, res) => {
        try {
                const { name, description, location, priceThreeSetter, pricetwoSetter, gender, typeProperty, amenities, trending } = req.body;
                if (!name || !description || !location || !priceThreeSetter || !pricetwoSetter || !gender || !typeProperty || !amenities || !trending) {
                        return res.status(400).json({
                                success: false,
                                message: "All fields are required!"
                        })
                }

                if (!req.files || req.files.length === 0) {
                        return res.status(400).json({
                                success: false,
                                message: "At least upload one Image! out to 4"
                        })
                }
                const imageArr = req.files.map((ele) => ele.path);
                const newProudct = new productModel({
                        name: name,
                        description: description,
                        location: location,
                        gender: gender,
                        priceTwoSetter: pricetwoSetter,
                        trending: trending,
                        priceThreeSetter: priceThreeSetter,
                        amenities: amenities.split(","),
                        image: imageArr,
                        typeProperty: typeProperty
                })


                const product = await newProudct.save();
                res.json({
                        success: true,
                        message: "product add sucessfully",
                })

        } catch (error) {
                console.error(error);
                res.json({
                        message: error.message
                })
        }


}

//list all the products

const collectionProduct = async (req, res) => {
        try {
                const products = await productModel.find();
                res.json({
                        success: true,
                        products,
                })
        } catch (error) {
                res.json({
                        success: false,
                        message: error.message
                })
        }

}


//deleting the product

const deleteProduct = async (req, res) => {
        try {
                const { id } = req.body;
                const product = await productModel.findByIdAndDelete(id);
                if (product == null) {
                        return res.status(400).json({
                                success: false,
                                message: "Given product is not Exist!"
                        })
                }
                res.json({
                        success: true,
                        message: "Proudct Delete Sucessfully!",
                        product
                })

        } catch (error) {
                res.json({
                        success: false,
                        message: error.message
                })
        }
}

//find single product

const singleProduct = async (req, res) => {
        const { id } = req.body;
        const product = await productModel.findById(id);
        if (!product) {
                return res.status(400).json({
                        sucess: false,
                        message: "Given proudct is not exist"
                })

        }
        res.json({
                success: true,
                product
        })

}
const addComment = async (req, res) => {
        try {
                
                const { pd } = req.params;
                const {user,text,userId} = req.body;
                
                
                if(!user || !text){
                        res.json({
                                success:false,
                                message:"user and comment are required"
                        })
                }
                let comment={
                        user:user,
                        text:text,
                        userId:userId
                }
                const product = await productModel.findById(pd);
                product.comments.push(comment);
                await product.save();
                res.json({
                                success:true,
                                comments:product.comments,
                                message:"Comment added successfully"
                        })


        } catch (error) {
              res.json({
                                success:false,
                                message:error
                        })
        }


}
const deleteComment=async(req,res)=>{
        const {ui,pi,ci}=req.params;
        const {userId}=req.body;
        if(ui!=userId){
                res.json({
                        message:"you can't delete this comment",
                        success:false,

                })
        }
        const product=await productModel.findById(pi);
        product.comments=product.comments.filter((e)=>e._id!=ci)
        await product.save();
        res.json({
                message:"comment Deleted successfully",
                comments:product.comments,
                success:true
        })
}

export { addProduct, collectionProduct, deleteProduct, singleProduct, addComment,deleteComment };