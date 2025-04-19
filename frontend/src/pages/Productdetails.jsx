import React, { useContext ,useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
import Upperpart from '../Component/productsdetails/Upperpart';
import RelatedProduct from '../Component/productsdetails/RelatedProduct';

function Productdetails() {
    const {productId}=useParams();
    const {products}=useContext(ShopContext);
    const [productdetail,setProductdetail]=useState(false);
    const [image,setImage]=useState(null);
    

    const fetchproudctData= ()=>{
         products.map((ele)=>{
            if(ele._id===productId){
                setProductdetail(ele);
                setImage(ele.image[0])
            }
        })
    }
    useEffect(()=>{
        fetchproudctData();
        window.scrollTo(0, 0);
    },[products,productId])
   
    function UpdateImage(img){
        setImage(img);
    }
   

    return productdetail ? ( 
       <div className='product-detail'>
          <Upperpart productdetails={productdetail} image={image} productId={productId} UpdateImage={UpdateImage}/>
          <RelatedProduct productdetail={productdetail}/>
       </div>
     ): (
        <div >
            
        </div>
     )
}

export default Productdetails;