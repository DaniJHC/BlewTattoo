import React from 'react';
import v from './Vlad.module.css'
import {FaInstagramSquare} from "react-icons/fa";

const Vlad = () => {
    function openInfoVlad() {
        const dialog = document.getElementById('myInfoVlad');
        dialog.showModal();
    }

    function closeInfoVlad() {
        const dialog = document.getElementById('myInfoVlad');
        dialog.close();
    }
    return (
            <div>
                <img src = 'https://tattoo-leader.ru/wp-content/uploads/1/2019/12/Nikita-Sustavov.jpg'/>
                <div className={v.textTattoo1}>Vlad
                    <button id="openDialogBtn" onClick={openInfoVlad} className={v.question}>?</button>

                    <dialog id="myInfoVlad">
                        <form method="info">
                            <p className={v.text}>Info</p>
                            <div className={v.photo}>
                                <img className={v.photo}
                                     src='https://vean-tattoo.pl/media/images/1615826292_24-p-.2e16d0ba.fill-1440x960-c100.format-jpeg.jpg'/>
                                <div className={v.aboutInfo}>
                                    Name: Vlad
                                    <div>
                                        Age: 26
                                    </div>
                                    <div>
                                        Style: Blackwork
                                    </div>
                                    <div>
                                        Background: 7 y.o
                                    </div>
                                    <div>
                                        I hope my work will help you with your choice, more info about me below on my instagram.
                                    </div>
                                    <div>
                                        <a className={v.ref} href='https://www.instagram.com/polandtattoos/'>{FaInstagramSquare}Instagram</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className={v.textTattooBut}>
                            <button id="closeDialogBtn"
                                    onClick={closeInfoVlad}>Close</button>
                        </div>
                    </dialog>
                </div>
            </div>
    );
};

export default Vlad;