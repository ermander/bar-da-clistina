import React from 'react'
import { Nav, NavLink, NavIcon, Bars } from "./NavbarElements"

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to="/">Risto Bar "Da Clistina"</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar