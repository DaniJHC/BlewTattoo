import React from 'react';
import a from './Anna.module.css'
import {FaInstagramSquare} from "react-icons/fa";

const Anna = () => {
    function openInfoAnna() {
        const dialog = document.getElementById('myInfoAnna');
        dialog.showModal();
    }

    function closeInfoAnna() {
        const dialog = document.getElementById('myInfoAnna');
        dialog.close();
    }
    return (
            <div>
                <img src = 'https://i.pinimg.com/564x/75/a9/9a/75a99a89f2f6d8728e3470ddf81cc7ed.jpg'/>
                <div className={a.textTattoo1}>Anna
                    <button id="openDialogBtn" onClick={openInfoAnna} className={a.question}>?</button>

                    <dialog id="myInfoAnna">
                        <form method="info">
                            <p className={a.text}>Info</p>
                            <div className={a.photo}>
                                <img className={a.photo}
                                     src='https://ctmtattoo.com/wp-content/uploads/anime-tattoo-dark-ideas.jpg'/>
                                <div className={a.aboutInfo}>
                                    Name: Anna
                                    <div>
                                        Age: 22
                                    </div>
                                    <div>
                                        Style: Anime
                                    </div>
                                    <div>
                                        Background: 4 y.o
                                    </div>
                                    <div>
                                        I hope my work will help you with your choice, more info about me below on my instagram.
                                    </div>
                                    <div>
                                        <a className={a.ref} href='https://www.instagram.com/polandtattoos/'>{FaInstagramSquare}Instagram</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className={a.textTattooBut}>
                            <button id="closeDialogBtn"
                                    onClick={closeInfoAnna}>Close</button>
                        </div>
                    </dialog>
                </div>
        </div>
    );
};

export default Anna;