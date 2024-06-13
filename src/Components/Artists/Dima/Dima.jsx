import React from 'react';
import d from './Dima.module.css'
import {FaInstagramSquare} from "react-icons/fa";

const Dima = () => {
    function openInfoDima() {
        const dialog = document.getElementById('myInfoDima');
        dialog.showModal();
    }

    function closeInfoDima() {
        const dialog = document.getElementById('myInfoDima');
        dialog.close();
    }
    return (
            <div>
                <img src = 'https://i.pinimg.com/originals/50/c7/5c/50c75cc582dd4810a01281cca5d3e1e0.jpg'/>
                <div className={d.textTattoo1}>Dima
                    <button id="openDialogBtn" onClick={openInfoDima} className={d.question}>?</button>

                    <dialog id="myInfoDima">
                        <form method="info">
                            <p className={d.text}>Info</p>
                            <div className={d.photo}>
                                <img className={d.photo}
                                     src='https://inkppl.com/assets/php/files/062021/210621-1155-7916.jpg'/>
                                <div className={d.aboutInfo}>
                                    Name: Dima
                                    <div>
                                        Age: 24
                                    </div>
                                    <div>
                                        Style: Graphics
                                    </div>
                                    <div>
                                        Background: 6 y.o
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
                                    onClick={closeInfoDima}>Close</button>
                        </div>
                    </dialog>
                </div>
        </div>
    );
};

export default Dima;