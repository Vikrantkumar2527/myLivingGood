import { useState } from "react";
import React from "react";
import { assets } from "../admin_assets/assets";
import { toast } from "react-toastify";
import axios from "axios";
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import { backendUrl } from "../App";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"
function AddItem({ token }) {
  const navigate = useNavigate();
  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)
  const [name, setName] = useState("");
  const [location,setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState("BOYS");
  const [typeProperty, setTypeProperty] = useState("HOSTEL");
  const [priceTwo, setPriceTwo] = useState("");
  const [priceThree, setPriceThree] = useState("");
  const [amenities, setAmenities] = useState([]);
  const [trending, setTrending] = useState(false)

  function handleClick(e) {
    const amenitiy = e.target.innerText;
    setAmenities((pre) => (pre.includes(amenitiy)) ? amenities.filter((ele) => (ele != amenitiy)) : [...pre, amenitiy])
  }
  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!image1) {
        return toast.error("Provide first image it is mandatory!")
      }
      if (amenities.length == 0) {
        return toast.error("provide amenitiy first");
      }

      const formData = new FormData();
      formData.append("files", image1)
      image2 && formData.append("files", image2)
      image3 && formData.append("files", image3)
      image4 && formData.append("files", image4)
      formData.append("name", name)
      formData.append("location",location)
      formData.append("description", description)
      formData.append("gender",gender)
      formData.append("typeProperty",typeProperty)
      formData.append("pricetwoSetter",priceTwo)
      formData.append("priceThreeSetter",priceThree)
      formData.append("amenities", amenities)
      formData.append("trending",trending)
      Swal.fire({
        title: 'Adding Product...',
        text: 'Please wait',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });
      const response = await axios.post(backendUrl + "/api/product/add", formData, { headers: { token } })
      Swal.close();


      if (response.data.success) {
        Swal.fire('Success!', response.data.message, 'success');
        navigate("/list")
      } else {
        Swal.fire('Error!', response.data.message, 'error');
      }
    } catch (error) {
      console.log(error.message)
    }

  }
  return (
    <div className="max-w-[700px]">
      <h1 className="text-xl text-center font-bold p-3 "> Add New Property</h1>

      <form onSubmit={handleOnSubmit}>
        <div className="add  w-full px-4 sm:px-12 py-4 flex flex-col gap-4 ">
          <div>
            <p className="mb-2 pl-1">Upload Image</p>
            <div className="flex gap-2">
              <label htmlFor="image1">
                <img className="w-28 sm:w-28 h-20 sm:h-28" src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="upload image" />
                <input onChange={(e) => setImage1(e.target.files[0])} className="hidden" type="file" id="image1" />
              </label>

              <label htmlFor="image2">
                <img className="w-28 sm:w-28 h-20 sm:h-28" src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="upload image" />
                <input onChange={(e) => setImage2(e.target.files[0])} className="hidden" type="file" id="image2" />
              </label>

              <label htmlFor="image3">
                <img className="w-28 sm:w-28 h-20 sm:h-28" src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="upload image" />
                <input onChange={(e) => setImage3(e.target.files[0])} className="hidden" type="file" id="image3" />
              </label>

              <label htmlFor="image4">
                <img className="w-28 sm:w-28 h-20 sm:h-28" src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="upload image" />
                <input onChange={(e) => setImage4(e.target.files[0])} type="file" id="image4" className="hidden" />
              </label>
            </div>
          </div>


          {/* product name and Description */}
          <div>
            <p className="mb-2 pl-1" >Property Name</p>
            <input onChange={(e) => setName(e.target.value)} value={name} required className="w-full max-w-[475px] px-2 py-1" type="text" placeholder="Type Here" />
          </div>
          {/* location */}
           <div>
              <p className="mb-2 pl-1" >Location</p>
            <input onChange={(e) => setLocation(e.target.value)} value={location} required className="w-full max-w-[475px] px-2 py-1" type="text" placeholder="Location" />
          </div>
          <div>
            <p className="mb-2 pl-1" >Description</p>
            <textarea onChange={(e) => setDescription(e.target.value)} value={description} required className="w-full max-w-[475px] h-16 px-2 py-1" placeholder="Write Description" ></textarea>
          </div>
          
         


          <div className="flex flex-wrap gap-3  p-1">
            <div>
              <p className="text-sm mb-1">Gender</p>
              <select onChange={(e) => setGender(e.target.value)} value={gender} required className="text-sm px-2 py-1 w-32">
                <option value="BOYS">BOYS</option>
                <option value="GIRLS">GIRLS</option>
                <option value="BOTH">BOTH</option>
              </select>
            </div>
            <div >
              <p className="text-sm mb-1">Property Type</p>
              <select onChange={(e) => setTypeProperty(e.target.value)} value={typeProperty} required className="text-sm px-2 py-1 w-32" >
                <option value="PG">PG</option>
                <option value="HOSTEL">HOSTEL</option>
                {/* <option value="ROOM">ROOM</option> */}
              </select>
            </div>
            
          </div>
          <div>
              <div className="flex gap-4">
                <p className="text-sm mb-1">Price</p>
                <Tooltip title="In case of hostel submit price yearly & In case of pg write price monthly">
                  <Button
                    variant="contained"   // contained, outlined, text
                    color="primary"       // primary, secondary, error, success...
                    sx={{
                      backgroundColor: 'white', // custom background
                      color: 'gray',             // text/icon color
                      padding: '2px 2px', 
                      margin:'0px 0px 5px 0px',      // vertical & horizontal padding
                      fontSize: '10px',           // font size
                      minWidth: '0',  
                      border:'1px solid gray'            // remove default min width
                      
                    }}
                  >
                    More info
                  </Button>
                </Tooltip>
              </div>
              <input placeholder="3Setter" onChange={(e) => setPriceThree(e.target.value)} value={priceThree} required className="text-sm px-2 mr-4 py-1 w-32" type="number" min={100} /> 
              <input placeholder="2Setter" onChange={(e) => setPriceTwo(e.target.value)} value={priceTwo} required className="text-sm px-2 py-1 w-32" type="number" min={100} />
            </div>


          {/* 
      product size amenities*/}

          <div >
            <p className="mb-2">Amenities</p>
            <div className="flex gap-2 flex-wrap">
              <p onClick={handleClick} className={`border border-gray-300 px-2 py-1  rounded ${amenities.includes('AC') ? "bg-[orange]" : ""}`}>AC</p>
              <p onClick={handleClick} className={`border border-gray-300 px-2 py-1  rounded ${amenities.includes("Power Backup") ? "bg-[orange]" : ""}`}>Power Backup</p>
              <p onClick={handleClick} className={`border border-gray-300 px-2 py-1  rounded ${amenities.includes("Hot Water") ? "bg-[orange]" : ""}`}>Hot Water</p>
              <p onClick={handleClick} className={`border border-gray-300 px-2 py-1  rounded ${amenities.includes("24x7 Security") ? "bg-[orange]" : ""}`}>24x7 Security</p>
              <p onClick={handleClick} className={`border border-gray-300 px-2 py-1  rounded ${amenities.includes("WiFi") ? "bg-[orange]" : ""}`}>WiFi</p>
              <p onClick={handleClick} className={`border border-gray-300 px-2 py-1  rounded ${amenities.includes("Gym") ? "bg-[orange]" : ""}`}>Gym</p>
              <p onClick={handleClick} className={`border border-gray-300 px-2 py-1  rounded ${amenities.includes("Laundry") ? "bg-[orange]" : ""}`}>Laundry</p>
              <p onClick={handleClick} className={`border border-gray-300 px-2 py-1  rounded ${amenities.includes("Vegetarian Food") ? "bg-[orange]": ""}`}>Vegetarian Food</p>
              <p onClick={handleClick} className={`border border-gray-300 px-2 py-1  rounded ${amenities.includes("Fridge") ? "bg-[orange]" : ""}`}>Fridge</p>
              <p onClick={handleClick} className={`border border-gray-300 px-2 py-1  rounded ${amenities.includes("Parking") ? "bg-[orange]" : ""}`}>Parking</p>
              <p onClick={handleClick} className={`border border-gray-300 px-2 py-1  rounded ${amenities.includes("CCTV") ? "bg-[orange]" : ""}`}>CCTV</p>
            </div>

          </div>
          <label className="flex gap-2 text-sm" htmlFor="check">
            <input onChange={() => setTrending((pre) => !pre)} checked={trending} type="checkbox" id="check" />
            <p>Add To Trending</p>
          </label>
          <button className="border bg-red-500 text-white  max-w-[100px] px-1 py-1 rounded font-semibold" >Add</button>
        </div>
      </form>
    </div>

  );
}

export default AddItem;
