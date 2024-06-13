import React, { useState } from 'react';
import c from './Content.module.css';
import Vlad from '../Artists/Vlad/Vlad';
import Anna from '../Artists/Anna/Anna';
import Dima from '../Artists/Dima/Dima';
import Dimas from '../Artists/Dima2/Dimas';
import Dani from '../Artists/Dani/Dani';
import NameSelector from './But-variant/varBut';

const Content = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        master: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:5000/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
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
        const dialog = document.getElementById('myDialog');
        dialog.showModal();
    };

    const closeDialog = () => {
        const dialog = document.getElementById('myDialog');
        dialog.close();
    };

    return (
        <div className={c.content}>
            <div className={c.containerflex1}>
                <img
                    className={c.containerflex1}
                    src='https://i.pinimg.com/564x/5c/85/3c/5c853cf099a68eee203f86fc7d21b45c.jpg'
                    alt='Tattoo'
                />
                <div className={c.aboutRoom}>our creativity room</div>
                <div className={c.containerflex2}>
                    "What determines the fate of humanity in this world? Some unprecedented tattoo style or an infinity like hand of God hovering over the world? At least it is true that man is not even in control of his own choices."
                </div>
            </div>
            <div className={c.containerflex4}>
                <div className={c.alert}>
                    Want to get a tattoo at a discount?
                    <div>
                        Sign up for <span className={c.text}>May days</span> and get -20% on tattoos from $1000
                    </div>
                    <div>
                        <button id="openDialogBtn" onClick={openDialog}>May Days</button>

                        <dialog id="myDialog">
                            <form onSubmit={handleSubmit}>
                                <p className={c.text}>Tattoo appointment</p>
                                <div className={c.tab}>
                                    <div className={c.appointment}>
                                        <textarea
                                            placeholder="Name"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                        />
                                        <textarea
                                            className={c.textAr}
                                            placeholder="Surname"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                        />
                                        <NameSelector
                                            name="master"
                                            value={formData.master}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className={c.description}>
                                        <textarea
                                            placeholder="Description of tattoo:"
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className={c.closeopen}>
                                    <button type="button" onClick={closeDialog}>
                                        Close
                                    </button>
                                    <button type="submit">
                                        Send
                                    </button>
                                </div>
                            </form>
                        </dialog>
                        <div className={c.discount}>The discount is valid until 31.05.2024</div>
                    </div>
                </div>
                <div className={c.examples}>
                    <div className={c.imag}>
                        <img
                            className={c.imag}
                            src='https://skindreams.tattoo/wp-content/uploads/2018/08/IMG_0022-1-475x520.jpg'
                            alt='Tattoo example'
                        />
                    </div>
                    <div className={c.imag1}>
                        <img
                            className={c.imag1}
                            src='https://vean-tattoo.pl/media/images/1615962977_27-p-rukav-tatu-do-lokty.original.format-jpeg.jpg'
                            alt='Tattoo example'
                        />
                    </div>
                    <div className={c.imag2}>
                        <img
                            className={c.imag2}
                            src='https://avatars.dzeninfra.ru/get-zen_doc/8169736/pub_641f20707eb49d4e188340c6_641f215b7eb49d4e18852fe5/scale_1200'
                            alt='Tattoo example'
                        />
                    </div>
                </div>
            </div>
            <div className={c.containerflex3}>
                <p className={c.title}>Our tattoo artists</p>
                <div className={c.tattoo1}>
                    <Anna />
                    <Dima />
                    <Dimas />
                    <div className={c.tattoo2}>
                        <Dani />
                        <Vlad />
                    </div>
                    <div className={c.copy}>All rights reserved &copy;</div>
                </div>
            </div>
        </div>
    );
};

export default Content;
