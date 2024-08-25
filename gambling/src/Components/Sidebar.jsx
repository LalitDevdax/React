import React, { useState } from 'react';
import './Sidebar.css';  // Import the CSS file htmlFor styling

const Sidebar = () => {
    const [visible, setVisible] = useState({});

    const toggleVisibility = (section) => {
        setVisible(prevVisible => ({
            ...prevVisible,
            [section]: !prevVisible[section]
        }));
    };

    const renderArrow = (section) => {
        return visible[section] ? <i className="bi bi-chevron-down"></i> : <i className="bi bi-chevron-right"></i>;
    };

    return (
        <div className='sidebar'>
            <img src="logo.png" alt="logo" className="sidebar-logo" />
            <hr />
            <ul className='sidebar-menu'>
                <li onClick={() => toggleVisibility('dashboard')}>
                    <i className="bi bi-house-door"></i> Dashboard
                </li>
                <li onClick={() => toggleVisibility('market')}>
                    <i className="bi bi-play-circle-fill"></i> Market
                    <span className="arrow">{renderArrow('market')}</span>
                </li>
                {visible.market && (
                    <ul className='sidebar-submenu'>
                        <li>Manage Market</li>
                        <li>Result</li>
                        <li>Track Live Game</li>
                        <li>Game Rate</li>
                        <li>Win History</li>
                    </ul>
                )}
                <li onClick={() => toggleVisibility('fatafat')}>
                    <i className="bi bi-controller"></i> FataFat
                    <span className="arrow">{renderArrow('fatafat')}</span>
                </li>
                {visible.fatafat && (
                    <ul className='sidebar-submenu'>
                        <li>Manage Market</li>
                        <li>Result</li>
                        <li>Fatafat Live</li>
                        <li>Fatafat Rate</li>
                        <li>Bid History</li>
                        <li>Win History</li>
                    </ul>
                )}
                <li onClick={() => toggleVisibility('disawar')}>
                    <i className="bi bi-dice-6"></i> Disawar
                    <span className="arrow">{renderArrow('disawar')}</span>
                </li>
                {visible.disawar && (
                    <ul className='sidebar-submenu'>
                        <li>Game List</li>
                        <li>Live Play Game</li>
                        <li>Update Result</li>
                        <li>Percentage Setting</li>
                    </ul>
                )}
                <li onClick={() => toggleVisibility('user')}>
                    <i className="bi bi-person"></i> User
                    <span className="arrow">{renderArrow('user')}</span>
                </li>
                {visible.user && (
                    <ul className='sidebar-submenu'>
                        <li>User's</li>
                        <li>User's Bank Details</li>
                    </ul>
                )}
                <li onClick={() => toggleVisibility('payment')}>
                    <i className="bi bi-currency-rupee"></i> Payment
                    <span className="arrow">{renderArrow('payment')}</span>
                </li>
                {visible.payment && (
                    <ul className='sidebar-submenu'>
                        <li>Accounts</li>
                        <li>Payment Received</li>
                        <li>Withdraw Request</li>
                        <li>Report</li>
                    </ul>
                )}
                <li onClick={() => toggleVisibility('adminUsers')}>
                    <i className="bi bi-person-plus"></i> Admin Users
                    <span className="arrow">{renderArrow('adminUsers')}</span>
                </li>
                {visible.adminUsers && (
                    <ul className='sidebar-submenu'>
                        <li>Admin's</li>
                        <li>Role</li>
                    </ul>
                )}
                <li onClick={() => toggleVisibility('mail')}>
                    <i className="bi bi-envelope"></i> Mail
                    <span className="arrow">{renderArrow('mail')}</span>
                </li>
                {visible.mail && (
                    <ul className='sidebar-submenu'>
                        <li>Template</li>
                        <li>Mail Settings</li>
                    </ul>
                )}
                <li onClick={() => toggleVisibility('appSettings')}>
                    <i className="bi bi-android"></i> APP Settings
                    <span className="arrow">{renderArrow('appSettings')}</span>
                </li>
                {visible.appSettings && (
                    <ul className='sidebar-submenu'>
                        <li>SMS</li>
                        <li>WhatsApp MSG</li>
                        <li>Withdraw</li>
                        <li>Deposit</li>
                        <li>Bidding</li>
                        <li>Payment</li>
                    </ul>
                )}
                <li onClick={() => toggleVisibility('settings')}>
                    <i className="bi bi-gear"></i> Settings
                    <span className="arrow">{renderArrow('settings')}</span>
                </li>
                {visible.settings && (
                    <ul className='sidebar-submenu'>
                        <li>Organization Info</li>
                        <li>Cron Setting</li>
                    </ul>
                )}
            </ul>
        </div>
    );
}

export default Sidebar;
