
import express from 'express';
import { addProduct, collectionProduct,deleteProduct, singleProduct,addComment,deleteComment } from '../controller/productController.js';
import { uploads } from '../config/cloudinaryConfig.js';
import authMid from '../middleWare/authMid.js';
import userAuth from '../middleWare/userAuthMid.js';

const productRoute =express.Router();


productRoute.post(
  "/add",authMid,
  (req, res, next) => {
    uploads.array("files", 4)(req, res, function (err) {
      if (err) {
        console.error("Multer error:", err);
        return res.json({
          success: false,
          message: "File upload error",
          error: err.message || err,
        });
      }
      next(); //  tabhi chalega jab upload success ho jaye
    });
  },
  addProduct
);

//for showing all collections

productRoute.get("/collection",collectionProduct)
  

//delete product route

productRoute.post("/delete",authMid,deleteProduct);
productRoute.post("/:pd/comment",userAuth,addComment);
productRoute.delete("/deletecomment/:ui/:pi/:ci",userAuth,deleteComment)
//route for single product
productRoute.post("/single",singleProduct)
  



export default productRoute;