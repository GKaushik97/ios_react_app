import axios from "axios";
import { useEffect, useState } from "react";

export default function InsertDistrict() {
    const [inputs, setInputs] = useState({});
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const handleChange = (e) => {
       const name = e.target.name;
        const value = e.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost/ios/public/iosApi/insertDistrict', inputs)
            .then((response) => {
                if (response.data.status) {
                    setSuccessMessage(response.data.message);
                    setInputs({});  // Reset form fields after success
                } else if (response.data.errors) {
                    setErrors(response.data.errors);
                }
        })
            .catch((error) => {
                if (error.response && error.response.data.errors) {
                    setErrors(error.response.data.errors);
                } else {
                    alert('An error occurred while submitting the form.');
                }
            });
        // console.log(inputs);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={inputs.name || ""} onChange={handleChange} />
                {errors.name && <p style={{color:"red"}}>{ errors.name }</p>}
                <label>Manager</label>
                <input type="text" name="manager" value={ inputs.manager || ""} onChange={handleChange} />
                {errors.manager && <p style={{color:"red"}}>{ errors.manager }</p>}
                <button>Insert</button>
            </form>
            {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        </div>
    )
}