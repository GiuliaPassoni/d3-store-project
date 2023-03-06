import React from "react";
import { Link} from "react-router-dom";
import style from './../style/navbar.module.scss'

import NavbarLink from './../components/NavbarLink'

export default function Navbar(){

    return (
        <nav>
            <Link to='/' className={style.logo}>
                <h1>LOGO HERE</h1>
            </Link>
            <ul>
                <li>
                    <Link to='/'>
                        <NavbarLink linkName={'Homepage'} />
                    </Link>
                </li>
                <li>
                    <Link to='/case-study'>
                        <NavbarLink linkName={'Case Study'} />
                    </Link>
                </li>
                <li>
                    <Link to='/shop'>
                        <NavbarLink linkName={'Shop'} />
                    </Link>
                </li>
                <li>
                    <Link to='/contact'>
                        <NavbarLink linkName={'Contact'} />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}