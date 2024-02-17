import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { AuthContext } from "./AuthProvider";

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
      return (
          <AuthContext.Consumer>
            {({ isLoggedIn }) => (
                <div>
                  {isLoggedIn ? <p>User is signed in.</p> : <p>User is not signed in.</p>}
                  <header>
                    <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom mb-3" container light>
                      <NavbarBrand tag={Link} to="/">Game Rental App 2</NavbarBrand>
                      <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                      <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                        <ul className="navbar-nav flex-grow">
                          <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/AboutMe">About ME</NavLink>
                          </NavItem>
                          {isLoggedIn ? (
                              <React.Fragment>
                                <NavItem>
                                  <NavLink tag={Link} className="text-dark" to="/SignOut">Sign Out</NavLink>
                                </NavItem>
                              </React.Fragment>
                          ) : (
                              <React.Fragment>
                                <NavItem>
                                  <NavLink tag={Link} className="text-dark" to="/Login">Login</NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink tag={Link} className="text-dark" to="/Register">Register</NavLink>
                                </NavItem>
                              </React.Fragment>
                          )}
                        </ul>
                      </Collapse>
                    </Navbar>
                  </header>
                </div>
            )}
          </AuthContext.Consumer>
      );
    }
}

