
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';
import Swal from "sweetalert2"

function List({ token }) {
    const [products, setProducts] = useState([])

    const deleteItem = async (id) => {
        try {
            const response = await axios.post(backendUrl + "/api/product/delete", { id }, { headers: { token } })
            if (response.data.success) {
                Swal.fire(
                    'Deleted!',
                    'Your item has been deleted.',
                    'success'
                );
                listProduct();
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }

    }
    function updateClick() {
            Swal.fire({
                title: 'Coming Soon',
                icon: 'info',
                confirmButtonText: 'OK'
            });
        }

    

    function handleClick(id) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteItem(id)

            }
        })
    }
    const listProduct = async () => {
        try {
            const response = await axios.get(backendUrl + "/api/product/collection")
            if (response.data.success) {
                const items = response.data.products
                setProducts(items);

            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        listProduct();
    }, [])
    return (
        <div className='list p-5  w-full'>
            <h1 className='text-3xl text-center'>All Properties-</h1>
            <table className='w-full mt-4'>
                <thead>
                    <tr>
                        <th className='w-[15%]  font-semibold text-sm sm:text-2xl text-pink-400'>Image</th>
                        <th className='w-[40%] font-semibold text-sm sm:text-2xl text-pink-400'>Name</th>
                        <th className='w-[15%] font-semibold text-sm sm:text-2xl text-pink-400 '>Gender</th>
                        <th className='w-[15%] font-semibold text-sm sm:text-2xl text-pink-400'>Price</th>
                        <th className='w-[15%] font-semibold text-sm sm:text-2xl text-pink-400'>Action</th>
                    </tr>
                </thead>
                {products.map((ele, idx) => {
                    return <tbody key={idx}>
                        <tr className='text-center'>
                            <td ><img src={ele.image[0]} alt="Proudct image" /></td>
                            <td className='text-[8px] p-1 sm:text-lg'>{ele.name}</td>
                            <td className='text-[8px] p-1 sm:text-lg'>{ele.gender}</td>
                            <td className='text-[8px] p-1 sm:text-lg'><span>2 Setter-{ele.priceTwoSetter}/Year</span><br /><hr className='' /><span>3 Setter-{ele.priceThreeSetter}/Year</span></td>
                            <td className='p-5'>
                                <div onClick={updateClick} className='mr-2 border w-[100px] mb-2 cursor-pointer rounded text-[white] bg-[orange] p-1' >Update</div>
                                <div onClick={() => handleClick(ele._id)} className='mr-2 border w-[100px] cursor-pointer rounded text-[white] bg-[red] p-1'>Delete</div>

                            </td>
                        </tr>
                    </tbody>
                })}
            </table>
        </div>

    );
}

export default List;