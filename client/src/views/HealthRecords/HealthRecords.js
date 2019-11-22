import React from 'react';
import './HealthRecords.css';

export default function HealthRecords() {
    return (
        <div className="container record-box py-5">
            <div className="health-records ">
                <div className="no-records">
                    <img className="record-img" src="http://m.prarang.in/img/norecordfound.png"/>
                </div>
            </div>
            <p className="text-center blank-record">No records found</p>
            <button className="record-add-btn py-2">Add records</button>
        </div>
    )
}
