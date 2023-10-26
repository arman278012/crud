import React, { useState } from 'react'
import { useContext } from 'react'
import { AuthContextProvider } from './AuthoContext'
import { useDispatch, useSelector } from 'react-redux'
import { deleteHandler, fetchData, updateHandler } from '../Redux/action'
import { toast } from 'react-hot-toast'

const Card = () => {
    const { userData, showmore, setShowmore, dt } = useContext(AuthContextProvider)
    const [details, setdetails] = useState("")

    const [check, setCheck] = useState(0)
    const [price, setprice] = useState("")
    const [rating, setRating] = useState("")
    const [updateRating, setUpdateRating] = useState(0);


    const dispatch = useDispatch();
    const data = useSelector((prev) => (prev.reducer.deleteUser));
    const showMoreHandler = (el) => {
        setShowmore(el.id)
        setdetails(el)
    }

    const deleteProduct = (id) => {
        console.log(id)
        dispatch(deleteHandler(id, dt));
        toast.success("Deleted successfully...")
    }

    const findData = (el) => {
        setCheck(el.id);
    };
    
    const submitData = (e, id) => {
        e.preventDefault();
        if (price != "") {
            dispatch(updateHandler(id, dt, price, "uniquePrice"));
        } else if (rating != "") {
            dispatch(updateHandler(id, dt, "uniqueRating", rating));
        }
        setCheck(0);
        setUpdateRating(0);
    };

    const ratingData = (el) => {
        setUpdateRating(el.id);
    };

    console.log(rating)


    return (
        <div className='grid md:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-1 gap-10 w-[80vw] mx-auto'>
            {
                userData?.map((el) => (
                    <div key={el.id} className='p-[20px] bg-blend-soft-light border-2 rounded-lg
                    hover:scale-110 duration-300  transition ease-in-out'>
                        <img src={el.thumbnail} alt="" className='w-[320px] h-[280px] object-scale-down' />
                        <div className='flex justify-between mt-4 '>
                            <p className='text-2xl font-bold para'> {el.title}</p>
                            {check == el.id ? (
                                <div onClick={(e) => findData(el)}>
                                    <form onSubmit={(e) => submitData(e, el.id)}>
                                        <input
                                            type="float"
                                            // value={el.price}
                                            className="w-16 brd"
                                            onChange={(e) => setprice(e.target.value)}
                                        />
                                    </form>
                                </div>
                            ) : (
                                <p className="mr-10 mt-1 font-bold" onClick={(e) => findData(el)}>
                                    ${el.price}
                                </p>
                            )}
                        </div>
                        <p className='font-semibold'>{el.brand}</p>
                        {
                            showmore == el.id ? (
                                <div>
                                    <div>
                                        <p className='font-semibold text-blue-600'>{el.description}</p>
                                        {updateRating == el.id ? (
                                            <div onClick={(e) => ratingData(el)}>
                                                <form onSubmit={(e) => submitData(e, el.id)}>
                                                    <input
                                                        type="float"
                                                        className="w-16 brd"
                                                        onChange={(e) => setRating(e.target.value)}
                                                    />
                                                </form>
                                            </div>
                                        ) : (
                                            <p className="mr-10 mt-1 font-bold" onClick={(e) => ratingData(el)}>
                                                ⭐{el.rating}
                                            </p>
                                        )}
                                        <p className='font-semibold'>{el.category}</p>
                                    </div>
                                    <button
                                        onClick={(e) => deleteProduct(el.id)}
                                        className='bg-red-700 rounded-md
                             text-white font-bold flex justify-center items-center h-[40px] w-[120px] mt-5'>Delete</button>
                                </div>
                            )
                                : (< div className=' mt-5'>
                                    <button onClick={(e) => showMoreHandler(el)} className='bg-blue-700 rounded-md
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