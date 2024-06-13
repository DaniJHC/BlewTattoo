import React, {useState} from 'react';
import h from './Header.module.css'
import { IoMoon } from "react-icons/io5";
import Settings from "../Settings/Settings";
import { FaHighlighter } from "react-icons/fa";
import { VscDebugBreakpointUnsupported } from "react-icons/vsc";

const Header = () => {
    const [formSup, setFormSup] = useState({
        firstName: '',
        lastName: '',
        email: '',
        description: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormSup({ ...formSup, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:5000/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formSup),
        })
            .then((response) => response.json())
            .then((data) => {
                alert('Email sent successfully!');
                closeDialog();
            })
            .catch((error) => {
                alert('There was an error sending the email.');
            });
    };

    const openDialog = () => {
        const dialog = document.getElementById('mySupport');
        dialog.showModal();
    };

    const closeDialog = () => {
        const dialog = document.getElementById('mySupport');
        dialog.close();
    };
    return (
        <div className={h.header}>
            <div className={h.logo}>
                <FaHighlighter />BleW Tattoo
            </div>
            <div className={h.sup}>
                <a  id="openDialogBtn" onClick={openDialog}>Support <VscDebugBreakpointUnsupported /></a>
                <dialog id="mySupport">
                    <form onSubmit={handleSubmit}>
                        <p className={h.text1}>Tattoo appointment</p>
                        <div className={h.tab1}>
                            <div className={h.appointment1}>
                                        <textarea
                                            placeholder="Name"
                                            name="firstName"
                                            value={formSup.firstName}
                                            onChange={handleChange}
                                            required
                                        />
                                <textarea
                                    className={h.textAr1}
                                    placeholder="Surname"
                                    name="lastName"
                                    value={formSup.lastName}
                                    onChange={handleChange}
                                    required
                                />
                                <textarea
                                    className={h.textAr1}
                                    placeholder="Email"
                                    name="Email"
                                    value={formSup.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={h.description1}>
                                        <textarea
                                            placeholder="Descript your error"
                                            name="description"
                                            value={formSup.description}
                                            onChange={handleChange}
                                            required
                                        />
                            </div>
                        </div>
                        <div className={h.closeOpen}>
                            <button type="button" onClick={closeDialog}>
                                Close
                            </button>
                            <button type="submit">
                                Send
                            </button>
                        </div>
                    </form>
                </dialog>
            </div>
            <div className={h.item}>
                <Settings/>
                <div className={h.icons}>
                    <IoMoon />
                </div>
            </div>

        </div>
    );
};

export default Header;