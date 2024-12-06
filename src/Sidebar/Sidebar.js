// Sidebar.js
import React from 'react';
import './Sidebar.css';
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { LiaSearchengin } from "react-icons/lia";
import { BsBookmark } from "react-icons/bs";
import { GrAnalytics } from "react-icons/gr";
import { RiDashboardLine } from "react-icons/ri";
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-menu">
                <a href="#dashboard" className="sidebar-item active">
                <RiDashboardLine className="sideicon"/>Dashboard</a>
                <a href="#portfolio" className="sidebar-item">
                <GrAnalytics className="sideicon"/>Portfolio Analysis</a>
                <a href="#watchlist" className="sidebar-item">
                <BsBookmark className="sideicon"/>Watchlist</a>
                <a href="#research" className="sidebar-item">
                <LiaSearchengin className="sideicon"/>Research</a>
                <a href="#security" className="sidebar-item">
                <  AiOutlineSecurityScan className="sideicon" />Security</a>
                <a href="#settings" className="sidebar-item">
                <IoSettingsOutline className="sideicon" />Setting</a>
            </div>
        </div>
    );
};

export default Sidebar;