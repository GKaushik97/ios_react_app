import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectViewModal from "./ProjectViewModal";
import ProjectEditModal from "./ProjectEditModal";
export default function Project() {
    const [projects, setProject] = useState([]);
    const [error, setError] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedEditProject, setSelectedEditProject] = useState(null);
    useEffect(() => {
        axios.get('http://localhost/ios/public/iosApi/getProjectDetails')
            .then((response) => {
                console.log(response);
                setProject(response.data.project_details);
            }).catch((error) => {
                setError(error.message);
            });
    }, []);
    const OpenModal = (project) => {
        setSelectedProject(project);
    }
    const OpenEditModal = (project_ext) => {
        setSelectedEditProject(project_ext);
    }
     const closeModal = () => {
        setSelectedProject(null);
     };
    const closeEditModal = () => {
        setSelectedEditProject(null);
    };
    return (
        <div className='table-responsive'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Manager</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {error ? (
                        <tr>
                            <td colSpan="5" className="text-center text-danger">
                                Error: {error}
                            </td>
                        </tr>
                    ) : (
                        projects.map((project, index) => (
                            <tr key={index}>
                                <td>{ index+1 }</td>
                                <td>{project.code}</td>
                                <td>{project.name}</td>
                                <td>{project.manager}</td>
                                <td>{project.created_at}</td>
                                <td>
                                    <a href='#' onClick={() => OpenModal(project)}>View</a>&nbsp;
                                    <a href='#' onClick={() => OpenEditModal(project)}>Edit</a>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
            {selectedProject && <ProjectViewModal project={ selectedProject} closeModal={closeModal} />}
            {selectedEditProject && <ProjectEditModal project={ selectedEditProject} closeModal={closeEditModal} />}
        </div>
    )
}