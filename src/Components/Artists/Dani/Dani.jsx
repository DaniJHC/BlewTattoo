import React from 'react';
import d from './Dani.module.css'
import {FaInstagramSquare} from "react-icons/fa";

const Dani = () => {
    function openInfoDani() {
        const dialog = document.getElementById('myInfoDani');
        dialog.showModal();
    }

    function closeInfoDani() {
        const dialog = document.getElementById('myInfoDani');
        dialog.close();
    }
    return (
            <div>
                <img src = 'https://i.pinimg.com/564x/1e/09/7d/1e097d8333cdb8d8a41ce02a1643f559.jpg'/>
                <div className={d.textTattoo1}>Dani
                    <button id="openDialogBtn" onClick={openInfoDani} className={d.question}>?</button>

                    <dialog id="myInfoDani">
                        <form method="info">
                            <p className={d.text}>Info</p>
                            <div className={d.photo}>
                                <img className={d.photo}
                                     src='https://funtattoo.ru/wp-content/uploads/2019/08/image7.jpg'/>
                                <div className={d.aboutInfo}>
                                    Name: Dani
                                    <div>
                                        Age: 28
                                    </div>
                                    <div>
                                        Style: Realism
                                    </div>
                                    <div>
                                        Background: 11 y.o
                                    </div>
                                    <div>
                                        I hope my work will help you with your choice, more info about me below on my instagram.
                                    </div>
                                    <div>
                                        <a className={d.ref} href='https://www.instagram.com/polandtattoos/'>{FaInstagramSquare}Instagram</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className={d.textTattooBut}>
                            <button id="closeDialogBtn"
                                    onClick={closeInfoDani}>Close</button>
                        </div>
                    </dialog>
                </div>
        </div>
    );
};

export default Dani;