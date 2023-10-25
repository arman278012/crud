import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../Redux/action';
import Card from './Card';
import { AuthContextProvider } from './AuthoContext';

const Cards = () => {

    // const [mydata, setMydata] = useState([]);

    const { userData, setUserData } = useContext(AuthContextProvider)
    const [clickMe, setClickMe] = useState(false);


    const dispatch = useDispatch();
    const data = useSelector((prev) => prev.reducer)

    console.log(data.user.products)
    setUserData(data.user.products)
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
        <div>
            {
                clickMe ? (<div>
                    <button onClick={hideHandle}>Hide Me</button>
                    <div>
                        <Card></Card>
                    </div>
                </div>) : (<div>
                    <button onClick={showhandle}>Show me</button>
                </div>)
            }
        </div>


    )
}

export default Cards