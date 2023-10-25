import React, { useState } from 'react'
import { useContext } from 'react'
import { AuthContextProvider } from './AuthoContext'
import { useDispatch, useSelector } from 'react-redux'
import { deleteHandler, fetchData } from '../Redux/action'

const Card = () => {
    const { userData, showmore, setShowmore } = useContext(AuthContextProvider)
    const [details, setdetails] = useState("")
    const dispatch=useDispatch();
    const data=useSelector((prev)=>(prev.reducer.deleteUser));
    console.log(data)
    console.log(userData)
    // const {dt}=el
    // console.log(dt)
    console.log('112')
    const functionHandler = (el) => {
        setShowmore(el.id)
        console.log(el)
        setdetails(el)
    }

    const deleteProduct = (id) => {
        console.log(id)
        dispatch(deleteHandler(id));
    }
    return (
        <div className='grid grid-cols-3 gap-10 w-[80vw] mx-auto'>
            {
                userData?.map((el) => (
                    <div key={el.id} className='p-[20px]'>
                        <img src={el.thumbnail} alt="" className='w-[320px] h-[280px]' />
                        <div className='flex justify-between mt-4 '>
                            <p className='text-2xl font-bold para'> {el.title}</p>
                            <p className='mr-10 mt-1 font-bold'>${el.price}</p>
                        </div>
                        <p>{el.brand}</p>

                        {
                            showmore == el.id ? (
                                <div>
                                    <p>{el.description}</p>
                                    <p>{el.rating}</p>
                                    <button
                                        onClick={(e) => deleteProduct(el.id)}
                                        className='bg-red-700 rounded-md
                             text-white font-bold flex justify-center items-center h-[40px] w-[120px]'>Delete</button>
                                </div>
                            )
                                : (< div className='justify-center flex'>
                                    <button onClick={(e) => functionHandler(el)} className='bg-blue-700 rounded-md
                             text-white font-bold flex justify-center items-center h-[40px] w-[120px]'>Show More</button>
                                </div>)
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Card