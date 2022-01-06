import React, { useState, useEffect } from 'react';
import './list.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadList();
    }, []);

    const loadList = async () => {
        const result = await axios.get("http://localhost:3003/users");
        setUser(result.data);
    };

    const deleteList = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadList();
    };
         

    return (
        <div className="container">
            {/* <Link className="add btn btn-outline-dark " to ="/users/add">ADD Your New TODO List</Link> */}
            <div className="head py-4">
                <h1><u>TODO List</u></h1>
                <Link className="add btn btn-outline-dark " to ="/users/add">ADD Your Task</Link>
                <table className="table border shadow">
                    <thead className="thead">
                        <tr>
                            <th scope="col mr-2">No.</th>
                            <th scope="col mr-2">Your Task</th>
                            <th scope='col mr-2'>Tools</th>
                            <th scope='col mr-2'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr className='trow'>
                                    <th scope="row mr-2">{index + 1}</th>
                                    <th>{user.name}</th>
                                    
                                    <th className='py-4'>
                                        <Link class="btn btn-primary mr-2" to = {`/users/${user.id}`}>View Detail</Link>
                                        <Link class="btn btn-outline-primary mr-2 my-2" to = {`/users/edit/${user.id}`}>Update Task</Link><br></br>
                                        <Link class="btn btn-outline-danger mr-2" onClick={()=>deleteList(user.id)}>Delete</Link>
                                    </th>
                                    <th>{user.status}</th>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;