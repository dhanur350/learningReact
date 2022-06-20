import React from "react";
import { useState } from "react";
import dummyData from '../utils/DummyData';
console.log(dummyData);
let { dummyPatients } = dummyData;
export function Component1() {
    return <div >
        {dummyPatients.map((usr) => (
            <div className="patientCard">
                <div className="patientItem">Name:{usr.name}</div>
                <div className="patientItem">Gender:{usr.gender}</div>
                <div className="patientItem">Id:{usr.id}</div>
                <div className="patientItem">DOB:{usr.dateOfBirth}</div>
                <div className="patientItem">Occupation:{usr.occupation}</div>
                <div className="patientItem">SSN:{usr.ssn}</div>
            </div>
            //<p>{usr}</p>
        ))}
    </div>
}


