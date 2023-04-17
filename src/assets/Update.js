import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Update() {
    // const [data, setData] = useState([])
    const {id} = useParams();
    const [values, setValues] = useState({
        name: "",
        lastname: "",
        sex: "",
        age: 0,
        email: ""
    })
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:3030/create-user/' + id)
        .then(res => setValues(res.data))
        .catch(err => console.log(err));
    }, [])
    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('http://localhost:3030/create-user/' + id, values)
        .then(res => {
            console.log(res)
            navigate('/')
        })
        .catch(err => console.log(err));
    }
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
            <h1>Edit User</h1>
            <form onSubmit={handleUpdate}>
                <div className='mb-2'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' className='form-control' placeholder='Enter  Name' 
                    value={values.name} onChange={e => setValues({...values, name: e.target.value})}/>

                </div>
                <div className='mb-2'>
                    <label htmlFor='desc'>Lastname:</label>
                    <input type='text' name='desc' className='form-control' placeholder='Enter Description'
                    value={values.desc} onChange={e => setValues({...values, desc: e.target.value})}/>

                </div>
                <div className='mb-2'>
                    <label htmlFor='type'>Sex:</label>
                    <input type='text' name='type' className='form-control' placeholder='Enter Type'
                    value={values.type} onChange={e => setValues({...values, type: e.target.value})}/>

                </div>
                <div className='mb-2'>
                    <label htmlFor='img'>Age:</label>
                    <input type='text' name='img' className='form-control' placeholder='Enter IMG'
                    value={values.img} onChange={e => setValues({...values, img: e.target.value})}/>

                </div>
                <div className='mb-2'>
                    <label htmlFor='rtp'>Email:</label>
                    <input type='text' name='rtp' className='form-control' placeholder='Enter RTP'
                    value={values.rtp} onChange={e => setValues({...values, rtp: e.target.value})}/>

                </div>
                
                <button className='btn btn-success'>Update</button>
                <Link to='/' className='btn btn-primary ms-3'>Back</Link>
            </form>

        </div>

    </div>
    )
}

export default Update
