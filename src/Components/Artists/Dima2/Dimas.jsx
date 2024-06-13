import React from 'react';
import s from './DImas.module.css'
import {FaInstagramSquare} from "react-icons/fa";

const Dimas = () => {
    function openInfoDimas() {
        const dialog = document.getElementById('myInfoDimas');
        dialog.showModal();
    }

    function closeInfoDimas() {
        const dialog = document.getElementById('myInfoDimas');
        dialog.close();
    }
    return (
            <div>
                <img src = 'https://www.tattoolife.com/wp-content/uploads/2022/07/Billy-Bernert-tattoo-artist-@billybernert.jpeg'/>
                <div className={s.textTattoo1}>Dima
                    <button id="openDialogBtn" onClick={openInfoDimas} className={s.question}>?</button>

                    <dialog id="myInfoDimas">
                        <form method="info">
                            <p className={s.text}>Info</p>
                            <div className={s.photo}>
                                <img className={s.photo}
                                     src='https://i.pinimg.com/736x/57/46/26/5746260613502ba7c3b533f16fd71ac2.jpg'/>
                                <div className={s.aboutInfo}>
                                    Name: Dima
                                    <div>
                                        Age: 24
                                    </div>
                                    <div>
                                        Style: OLD School
                                    </div>
                                    <div>
                                        Background: 6 y.o
                                    </div>
                                    <div>
                                        I hope my work will help you with your choice, more info about me below on my instagram.
                                    </div>
                                    <div>
                                        <a className={s.ref} href='https://www.instagram.com/polandtattoos/'>{FaInstagramSquare}Instagram</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className={s.textTattooBut}>
                            <button id="closeDialogBtn"
                                    onClick={closeInfoDimas}>Close</button>
                        </div>
                    </dialog>
                </div>
        </div>
    );
};

export default Dimas;