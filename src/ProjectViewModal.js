import React from 'react';
import {format_date} from "./Main"
export default function ProjectModal({ project, closeModal }) {
    return (
        <div className="modal fade show" style={{ display: project ? 'block' : 'none' }} tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Project Details</h5>
                        <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {project ? (
                            <div>
                                <p><strong>Code:</strong> {project.code}</p>
                                <p><strong>Name:</strong> {project.name}</p>
                                <p><strong>Manager:</strong> {project.manager}</p>
                                <p><strong>Created At:</strong> {format_date(project.created_at)}</p>
                                <p><strong>Updated At:</strong> {project.updated_at && format_date(project.updated_at)}</p>
                            </div>
                        ) : (
                            <p>No project selected</p>
                        )}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
