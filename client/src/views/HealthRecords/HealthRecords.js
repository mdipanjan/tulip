import React from 'react';
import './HealthRecords.css';

export default function HealthRecords() {
    return (
        <div className="container record-box py-5">
            <div className="health-records ">
                <div className="no-records">
                    <img src="http://m.prarang.in/img/norecordfound.png"/>
                    <p className="text-center">No records found</p>
                </div>
            </div>
            <button className="record-add-btn py-2">Add records</button>
        </div>
    )
}
