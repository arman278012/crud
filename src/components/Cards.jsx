import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../Redux/action';
import Card from './Card';
import { AuthContextProvider } from './AuthoContext';

const Cards = () => {

    const { userData, setUserData, setDt } = useContext(AuthContextProvider)
    const [clickMe, setClickMe] = useState(false);

    const dispatch = useDispatch();
    const data = useSelector((prev) => prev.reducer)

    // console.log(data.user.products)
    setUserData(data.user.products)
    setDt(data)
    useEffect(() => {
        dispatch(fetchData())
    }, [])
    // setMydata(data);

    const hideHandle = () => {
        setClickMe(false)
    }

    const showhandle = () => {
        setClickMe(true)
        // console.log('1')
    }

    return (
        <div className=''>
            {
                clickMe ? (<div >
                    <div className='flex justify-center items-center'>
                        <button onClick={hideHandle} className='mt-5 h-[50px] mb-8 rounded-xl w-[130px] bg-red-600 text-center text-white
                    font-bold'>
                            Hide Cards</button>
                    </div>

                    <div>
                        <Card></Card>
                    </div>
                </div>) : (<div className='flex justify-center items-center'>
                    <button onClick={showhandle} className='mt-5 h-[50px] w-[130px] rounded-xl bg-green-600 text-center text-white 
                    font-bold p-3'>Show Cards</button>
                </div>)
            }
        </div>


    )
}

export default Cards