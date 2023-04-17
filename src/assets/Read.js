import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

function Read() {
    const [data, setData] = useState([])
    const {id} = useParams();
    useEffect(() => {
        axios.get('http://localhost:3030/create-user/' + id)
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])
    return (
       <div className='d-flex w-100  justify-content-center  align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
            <h3>User Info</h3>
            <div className='mb-2'>
                    <strong>Name: {data.name}</strong>
            </div>
            <div className='mb-2'>
                    <strong>Lastname: {data.lastname}</strong>
            </div>
            <div className='mb-2'>
                    <strong>Sex: {data.sex}</strong>
            </div>
            <div className='mb-2'>
                    <strong>Age: {data.age}</strong>
            </div>
            <div className='mb-2'>
                    <strong>Email: {data.email}</strong>
            </div>
            <Link to={`/update/${id}`} className='btn btn-success me-2 ' >Edit</Link>
            <Link to='/' className='btn btn-primary me-2'>Back</Link>

        </div>

       </div>
    )
}

export default Read
