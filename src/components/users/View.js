import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const User = () => {
    const [user, setUser] = useState({
        name: ""
    });
    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
    };

    return (
        <div className="container py-4">
            <Link className="btn btn-warning btn-outline-dark mr-2" to="/">
                Back to Home
        </Link>
            <h1 className="display-4">User Id: {id}</h1>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item">Your Thing: {user.name}</li>
            </ul>
        </div>
    );

};

export default User;