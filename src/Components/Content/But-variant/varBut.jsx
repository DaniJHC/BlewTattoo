import React, { useState } from 'react';
import v from './varBut.module.css'

const NameSelector = () => {
    const [selectedName, setSelectedName] = useState('');
    const names = ['Anna', 'Dima', 'Dima', 'Vlad', 'Dani'];

    const handleChange = (event) => {
        setSelectedName(event.target.value);
    };

    return (
        <div className={v.var}>
            <select className={v.option} id="name-select" value={selectedName} onChange={handleChange}>
                <option value="">Enter Artist:</option>
                {names.map((name, index) => (
                    <option key={index} value={name}>
                        {name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default NameSelector;