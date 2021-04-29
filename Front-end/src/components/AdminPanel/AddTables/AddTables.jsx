import React, { useState } from 'react'
import "./AddTables.css";

const AddTables = () => {

    const [table, setTable] = useState({
        tableName: '', password: '', cpassword: ""
    })

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setTable({ ...table, [name]: value })
    }
    console.log(table);


    const addTable = async (e) => {

        e.preventDefault();

        const { tableName, password, cpassword } = table;
        console.log(tableName, password, cpassword);
        const res = await fetch("/addtable", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                tableName,
                password,
                cpassword

            })
        });

        const data = await res.json();
        console.log(data);
        if (data.error) {
            window.alert("table not addded invalid registration");
            console.log(`erroe ${data.error}`);

        } else {
            window.alert("registration sucessfull");
            console.log(`erroe ${data.message}`);

            console.log("registration sucess");
        }

    }



    return (
        <div className="AddTable_box">
            <form className="AddTable_form" onSubmit={addTable} >
                <h1>Add New Table</h1>
                <div className="form-control">
                    <input id="name" type="text" required value={table.tableName} name="tableName" onChange={handleInput} />
                    <label htmlFor="name">Table No  </label>
                </div>
                <div className="form-control">
                    <input id="pass" type="password" required value={table.password} name="password" onChange={handleInput} />
                    <label htmlFor="pass">Password</label>
                </div>
                <div className="form-control">
                    <input id="adminCode" type="password" required value={table.cpassword} name="cpassword" onChange={handleInput} />
                    <label htmlFor="pass">Admin Code</label>
                </div>
                <div className="form-control" style={{ textAlign: 'center' }}>
                    <button className="learn-more" type='submit'>
                        <span className="circle">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Add Table</span>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddTables
