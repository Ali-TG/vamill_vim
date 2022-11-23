import { useState } from "react";
import { Cross as Hamburger } from 'hamburger-react';

const NavBar = () => {
    return(
        <header>
            <nav>
                <Hamburger color="#4FD1C5"/>
            </nav>
        </header>
    )
}

export default NavBar;