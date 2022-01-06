import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AddList = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        status:"Task not Completed"
    });

    const { name, status } = user
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault()
        await axios.post("http://localhost:3003/users", user);
        history.push("/")
    }
    return (

        <div className="container">
            <div className="w-50 mx-auto shadow p-4">
                <h3 className="text-center mb-4"><b><u>Enter Your New Task</u></b></h3>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg"
                            placeholder="Enter Your New Task" name="name" value={name}
                            onChange={e => onInputChange(e)} />
                    </div>
                    <button className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        </div>

    );
};
export default AddList;