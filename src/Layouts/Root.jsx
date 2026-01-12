import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import MouseCursor from '../components/MouseCursor';
import BackToTop from '../components/BackToTop';

const Root = () => {
    return (
        <div>
            <MouseCursor />
            <BackToTop />
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;