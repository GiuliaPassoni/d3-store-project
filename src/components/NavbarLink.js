import React from "react";
import style from '../style/navbar.module.scss'

export default function NavbarLink({linkName}){

    return (
        <>
            <h3 className={style.linkClass}>{linkName}</h3>
        </>
    )
}