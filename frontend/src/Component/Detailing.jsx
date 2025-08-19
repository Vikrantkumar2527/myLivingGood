import React, { useContext, useState } from 'react';
import ImageCarousel from './ImageCarousel';
import { assets } from '../assets/frontend_assets/assets';
import { ShopContext } from '../context/shopContext';
import Form from './form';
import Comment from './Comment';
import Facility from './Facility';
import ShowComment from './showComment';
function Detailing({info,currency}) {
    const [less,setLess]=useState(true);
    const [comments,setComments]=useState(info.comments)
    
    return ( 
        <>
        <div className='p-4 min-w-[400px]  flex flex-col md:flex-row bg-gray-100'>
            <div className="one w-[100%] md:w-[60%]">
                <div className='mb-1'>
                    <h1 className='text-[30px] text-[#faac0f] font-bold'>{info.name}</h1>
                   <p className='font-light'><span className='text-lg'>An exclusive</span> <span className='text-[gray] font-bold'>{info.typeProperty}</span></p>
                </div>
                <div className='mb-1'>
                    <span className='text-xl'>Allowed Gender</span> <span className='text-[red] font-bold'>{info.gender}</span>
                </div>
                <div>
                    <p><i class="fa-solid fa-location-dot"></i>&nbsp;&nbsp;&nbsp;
                        {info.location}</p>
                </div>
                {/* image section */}
                <div className='mt-2'>
                    <ImageCarousel images={info.image}/>
                </div>
                {/* priceSection */}
                <div>
                    <p className='text-[#faac0f] my-4 text-2xl'>Price Details</p>
                    <div className='w-[100%] flex gap-4'>
                        <div className='w-[50%] md:w-[30%] flex p-2 gap-2 border border-black text-[gray] rounded'>
                            <img className='' src={assets.twobed} alt="2seater" />
                            <div>
                                <p>
                                {currency}&nbsp;<span className=' text-[#faac0f]'>{info.priceTwoSetter}&nbsp;</span> /bed/Year
                               </p>
                               <p className='font-light hidden md:block'>
                                  two Occupancy
                               </p>
                            </div>
                            
                        </div>
                        <div className='w-[50%] md:w-[30%] flex p-2 gap-2 border border-black text-[gray] rounded'>
                            <img src={assets.threebed} alt="2seater" />
                            <div>
                                <p>
                                {currency}&nbsp;<span className=' text-[#faac0f]'>{info.priceThreeSetter}&nbsp;</span> /bed/Year
                               </p>
                               <p className='font-light hidden md:block'>
                                  three Occupancy
                               </p>
                            </div>
                            
                        </div>

                    </div>
                </div>
                {/* facilitysection */}
                <p className='text-[#faac0f] my-4 text-2xl'>Room Features</p>
                <div className='grid grid-cols-3 gap-2 gap-y-6 w-[100%] md:w-[60%] my-4'>
                    {info.amenities.map((ele,idx)=>{return<Facility key={idx} facility={ele}/>})}
                </div>

                {/* description section */}
                <p className='text-[grey] mt-8'>{less?info.description.slice(0,200):info.description}</p>
        
                {less && <span onClick={()=>setLess(!less)} className='text-[blue] cursor-pointer'>Show More</span>}
                {!less && <span onClick={()=>setLess(!less)} className='text-[blue] cursor-pointer'>Show less</span>}
               
                
            </div>
            <div className="two sticky top-0 h-fit">
                <Form/>
            </div>
        </div>
        <ShowComment productId={info._id} setComments={setComments} comments={comments} />
        <Comment productId={info._id} setComments={setComments}/>
        </>
     );
}

export default Detailing;