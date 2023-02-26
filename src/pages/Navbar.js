import React from "react";
import { Link} from "react-router-dom";

import NavbarLink from './../components/NavbarLink'

export default function Navbar(){

    return (
        <nav>
            <Link to='/'>
                <h1>Hi</h1>
            </Link>
            <ul>
                <li>
                    <Link to='/'>
                        <NavbarLink linkName={'Homepage'} />
                    </Link>
                </li>
                <li>
                    <Link to='/shop'>
                        <NavbarLink linkName={'Shop'} />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}