import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { backendUrl } from '../App';

function User({token}) {
    const [allUser,setAllUser]=useState([]);

    async function fetchUser(){
        const response=await axios.get(backendUrl+"/api/user/allUsers",{headers:{token}})
        setAllUser(response.data.allUser);
    }
    useEffect(()=>{
        fetchUser();
    },[])

    return ( 
        <div className='w-full m-4'>

        
        <table className='w-[90%] '>
            <thead>
            <tr>
                <th className='font-bold text-[orange]'>UserName</th>
                <th className='font-bold text-[orange]'>Email</th>
                <th className='font-bold text-[orange]'>Date</th>
            </tr>
            </thead>
            <tbody>
                {
                    allUser.length>0 ? allUser.map((ele)=>{
                        return <tr className='text-center'> 
                            <td>{ele.username}</td>
                            <td>{ele.email}</td>
                            <td>{ele.create_At.split("T")[0]}</td>
                        </tr>
                    }):
                    <tr>
                        <td>fetching</td>
                        <td>fetching</td>
                        <td>fetching</td>
                    </tr>

                }

            </tbody>
            
        </table>
        </div>
     );
}

export default User;