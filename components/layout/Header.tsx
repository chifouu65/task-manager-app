import Link from "next/link";
import React from "react";
import { Navbar, Container, Button, NavbarBrand } from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar>
            <Container>
                <NavbarBrand>
                    Project Management
                </NavbarBrand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="p-3">
                        Signed in as: <a href="#login">MNoah Lotte</a>                   
                    </Navbar.Text>
                    <Link href="" passHref>
                        <Button>Log out</Button>
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header