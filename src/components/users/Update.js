import axios from "axios";
import React, { useState , useEffect} from "react";
import {useHistory ,useParams} from "react-router-dom";

const EditList = () => {
    let history = useHistory();
    const {id} = useParams();
    const [user, setUser] = useState({
        name: "",
        status: ""
    });

    const {name,status}=user
    const onInputChange = e => {
        setUser({...user,[e.target.name]:e.target.value});
    };

    useEffect(() => {
        loadUser()
    }, []);
    const onSubmit = async e => {
        e.preventDefault()
        await axios.put(`http://localhost:3003/users/${id}`,user);
        history.push("/")
    };
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
    };
    const check = async () => {
        const resultData = await axios.get(`http://localhost:3003/users/${id}`);
        console.log(resultData);
    }
    return (

        <div className="container">
            <div className="w-50 mx-auto shadow p-4">
                <h3 className="text-center mb-4"><b><u>Enter Your New Thing</u></b></h3>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" 
                        placeholder="Enter Your New thing" name="name" value={name} 
                        onChange={e => onInputChange(e)}/>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input mb-4" type="radio" name="status" value="Task completed"
                            onChange={e => onInputChange(e)} />
                        <label className="form-check-label mb-4" for="inlineRadio1">Task Completed</label>
                    </div>
                    <button className="btn btn-warning btn-block">Update</button>
                </form>
            </div>
        </div>

    );
};
export default EditList;