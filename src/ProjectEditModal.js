import axios from "axios";
import { useEffect, useState } from "react";

export default function ProjectEditModal({project, closeModal}) {
    const [editInputs, setEditInputs] = useState({
        id: '',
        name: '',
        manager : '',
    });
    const [errors, setErrors] = useState({});
    const [successEditMessage, setSuccessEditMessage] = useState("");
    useEffect(() => {
        if (project) {
            setEditInputs({
                id : project.id || '',
                name : project.name || '',
                manager : project.manager || '',
            });
            setErrors({});
            setSuccessEditMessage("");
        }
    }, [project]);
    const handleEditChange = (e) => {
       const name = e.target.name;
        const value = e.target.value;
        setEditInputs((values) => ({ ...values, [name]: value }));
    }
    const handleEditSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost/ios/public/iosApi/updateDistrict', editInputs)
            .then((response) => {
                if (response.data.status) {
                    setSuccessEditMessage(response.data.message);
                    setEditInputs({ id:project?.id || '', name: '', manager: '' });  // Reset form fields after success
                    setTimeout(() => {
                        closeModal(); // Close the modal after success
                        window.location.reload();
                    }, 2000);
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
        <div className="modal fade show" style={{ display: project ? 'block' : 'none' }} tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Project Details</h5>
                        <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleEditSubmit}>
                            <input type="hidden" name="id" value={project.id||''} onChange={handleEditChange}/>
                            <label>Code</label>&nbsp;<p>{ project.code || ''}</p>
                            <label>Name</label>
                            <input type="text" name="name" value={editInputs.name} onChange={handleEditChange} />
                            {errors.name && <p style={{color:"red"}}>{ errors.name }</p>}
                            <label>Manager</label>
                            <input type="text" name="manager" value={ editInputs.manager} onChange={handleEditChange} />
                            {errors.manager && <p style={{color:"red"}}>{ errors.manager }</p>}
                            <button>Update</button>
                        </form>
                        {successEditMessage && <p style={{ color: "green" }}>{successEditMessage}</p>}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}