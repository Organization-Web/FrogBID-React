import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

function Header() {
    // Scroll behavior logic
    useEffect(() => {
        const handleScroll = () => {
            const fixedTop = document.querySelector(".header-area");
            if (window.scrollY > 50) {
                fixedTop.classList.add("menu-fixed", "animated", "fadeInDown");
            } else {
                fixedTop.classList.remove("menu-fixed", "fadeInDown");
            }
        };

        // Attach the scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // Empty dependency array ensures this runs once on mount

    return (
        <div>
            <header className="header-area bg-white">
                <div className="container">
                    <div className="header__main">
                        <Link to="/" className="logo">
                            <img src="assets/images/logo/logo.png" alt="logo" />
                        </Link>
                        <Link to="/" className="logo logo-light">
                            <img src="assets/images/logo/logo.png" alt="logo" />
                        </Link>
                        <div className="main-menu">
                            <Navbar expand="lg" className="bg-body-tertiary menubar-b">
                                <Container>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className="me-auto">
                                            <Nav.Link as={Link} to="/" className='b-navlink p-3'>Home</Nav.Link>
                                            <Nav.Link as={Link} to="/About" className='b-navlink p-3'>About</Nav.Link>
                                            <NavDropdown title="Services" id="basic-nav-dropdown" className='b-navlink p-2'>
                                                <NavDropdown.Item as={Link} to="/Web-Development" className='b-navlink'>
                                                    🌐 Website Design and Development
                                                </NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/Web-Research" className='b-navlink'>
                                                    🔍 Web Research
                                                </NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/Graphic-Design" className='b-navlink'>
                                                    🎨 Graphic Design
                                                </NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/SEO" className='b-navlink'>
                                                    🚀 Search Engine Optimization (SEO)
                                                </NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/PPC" className='b-navlink'>
                                                    💡 Pay-Per-Click Advertising (PPC)
                                                </NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/Social-Media-Marketing" className='b-navlink'>
                                                    📱 Social Media Marketing
                                                </NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/Content-Writting" className='b-navlink'>
                                                    📝 Content Writing
                                                </NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/Email-Marketing" className='b-navlink'>
                                                    ✉️ Email Marketing
                                                </NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/Analytics-Reporting" className='b-navlink'>
                                                    📊 Analytics and Reporting
                                                </NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/Reputation-Management" className='b-navlink'>
                                                    👍 Online Reputation Management
                                                </NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/Advertising" className='b-navlink'>
                                                    📣 Advertising
                                                </NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/Lead-Generation" className='b-navlink'>
                                                    📈 Lead Generation
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                            <Nav.Link as={Link} to="/Portfolio" className='b-navlink p-3'>Portfolio</Nav.Link>
                                            <Nav.Link as={Link} to="/Faq" className='b-navlink p-3'>FAQ</Nav.Link>
                                            <Nav.Link as={Link} to="/Contact" className='b-navlink p-3'>Contact</Nav.Link>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </div>
                        <Link to="/Contact" className="btn-menu d-none d-lg-inline-block">
                            Get in Touch<i className="fa-regular fa-circle-arrow-right ml-10"></i>
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
