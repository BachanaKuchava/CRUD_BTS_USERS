import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Create() {
    const [values, setValues] = useState({
        name: "",
        lastname: "",
        sex: "",
        age: 0,
        email: ""
    })
    const navigate = useNavigate();

   const handleSubmit = (event) =>  {
        event.preventDefault();
        axios.post('http://localhost:3030/create-user', values)
        .then(res => navigate('/'))
        .catch(err => console.log(err));
 

    }
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h1>Create User</h1>
                <form onSubmit={handleSubmit}>
                    <div className='mb-2'>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' name='name' className='form-control' placeholder='Enter  Name' 
                        onChange={e => setValues({...values, name: e.target.value})}/>

                    </div>
                    <div className='mb-2'>
                        <label htmlFor='desc'>Lastname:</label>
                        <input type='text' name='desc' className='form-control' placeholder='Enter Description'
                        onChange={e => setValues({...values, lastname: e.target.value})}/>

                    </div>
                    <div className='mb-2'>
                        <label htmlFor='type'>Sex:</label>
                        <input type='text' name='type' className='form-control' placeholder='Enter Type'
                        onChange={e => setValues({...values, sex: e.target.value})}/>

                    </div>
                    <div className='mb-2'>
                        <label htmlFor='img'>Age:</label>
                        <input type='number' name='img' className='form-control' placeholder='Enter IMG'
                        onChange={e => setValues({...values, age: e.target.value})}/>

                    </div>
                    <div className='mb-2'>
                        <label htmlFor='rtp'>Email:</label>
                        <input type='text' name='rtp' className='form-control' placeholder='Enter RTP'
                        onChange={e => setValues({...values, email: e.target.value})}/>

                    </div>
                    
                    <button className='btn btn-success'>Submit</button>
                    <Link to='/' className='btn btn-primary ms-3'>Back</Link>
                </form>

            </div>

        </div>
    )
}

export default Create
