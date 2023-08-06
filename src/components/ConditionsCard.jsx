import React from 'react';
import '../style.css';

function ConditionsCard({ icon1, condition1, icon2, condition2 }) {

    return (
        <div className="tempHighLow" >
            <div className="tempHigh">
                <p icon1={icon1}>{icon1}</p>
                <p condition1={condition1}>{condition1}</p>
            </div>
            <div className="tempLow">
                <p icon1={icon2}>{icon2}</p>
                <p condition2={condition2}>{condition2}</p>
            </div>
        </div>
    );
}

export { ConditionsCard }