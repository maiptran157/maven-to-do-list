import React from 'react';

export const renderInput = ({ input, id, label, type }) => {
    return (
        <div className="row">
            <div className="col s12">
                <label>{label}</label>
                <input {...input} id={id} type={type || "text"} autoComplete="off" className="validate" />
            </div>

        </div >
    )
}