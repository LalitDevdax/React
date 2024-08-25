import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <i class="bi bi-house-door"></i>
                <a className='Dashboard' href="#">DashBoard</a>

            </div>
            <div className="navbar-menu">
                <div className="btn-group">
                    <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-person-lines-fill"></i>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li><a className="dropdown-item" href="https://webplans.in/" target='_blank'>Web Host Plans</a></li>
                        <li><a className="dropdown-item" href="#">+917240933807</a></li>
                    </ul>
                    <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-box-arrow-right iconsx"></i>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><a className="dropdown-item" href="#">Sign Out</a></li>
                    </ul>
                </div>


            </div>
        </div>
    );
}

export default Navbar;
