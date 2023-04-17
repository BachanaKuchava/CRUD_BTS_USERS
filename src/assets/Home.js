import React, { useEffect, useState } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Home() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3030/create-user')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])
    const navigate = useNavigate();
    const handleDelete = (id) => {
        const confirm = window.confirm('Do you want to delete this Game ?!')
        if(confirm) {
            axios.delete('http://localhost:3030/create-user/' +id)
            .then(res => {
                navigate('/');
                
               
            }).catch(err => console.log(err))
            
        }
}
    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-light '>
            <h1>Users</h1>
            <div className='w-75 rounded bg-white border shadow p-4'>
                <div className='d-flex justify-content-end'>
                    <Link to='/create' className='btn btn-success'>Create Game</Link>
                    </div>

                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Lastname</th>
                                <th>Sex</th>
                                <th>Age</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((d, i) => (
                                     <tr key={i}>
                                        <td>{d.id}</td>
                                        <td>{d.name}</td>
                                        <td>{d.lastname}</td>
                                        <td>{d.sex}</td>
                                        <td>{d.age}</td>
                                        <td>{d.email}</td>
                                        <td>
                                            <Link to={`/read/${d.id}`} className='btn btn-sm btn-info me-2'>Read</Link>
                                            <Link to={`/update/${d.id}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
                                            <button className='btn btn-sm btn-danger' 
                                            onClick={e => handleDelete(d.id)}>Delete</button>
                                        </td>

                                    </tr>
    )) 
                            }
                        </tbody>
                    </table>
            </div>

        </div>
    )

}

export default Home
