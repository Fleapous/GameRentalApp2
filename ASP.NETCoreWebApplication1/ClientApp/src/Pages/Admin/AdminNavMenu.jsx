// AdminNavMenu.js
import React, { Component } from "react";
import { Collapse, Navbar, NavbarToggler, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

class AdminNavMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true
        };
        this.toggleNavbar = this.toggleNavbar.bind(this);
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom mb-3" container light>
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                    <ul className="navbar-nav flex-grow">
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/Admin/GameAdmin">Games</NavLink>
                        </NavItem>
                        {/* Add more navigation items as needed */}
                    </ul>
                </Collapse>
            </Navbar>
        );
    }
}

export default AdminNavMenu;
