import React, { useState } from 'react';
import { IoSettings } from "react-icons/io5";
import s from './Settings.module.css'
const Settings = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <div className={s.icons} onClick={openModal}>
                <IoSettings />
            </div>
            {isModalOpen && (
                <div className={s.modal}>
                    <div>Settings</div>
                    <button className={s.but} onClick={closeModal}>Close</button>
                </div>
            )}
        </div>
    );
};

export default Settings;