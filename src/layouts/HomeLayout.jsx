import React from 'react'
import { Outlet } from "react-router-dom";
import AboutUsTab from "src/components/AboutUsTab";
import NavBar from "src/components/NavBar";
import Footer from '../components/Footer';

const HomeLayout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <AboutUsTab />
            <Footer />
        </div>
    )
}

export default HomeLayout
