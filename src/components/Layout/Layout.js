import React from 'react';

import Container from '@material-ui/core/Container';
 import Footer from "./Footer/Footer";
 import Toolbar from "./Toolbar/Toolbar";

const Layout = (props) => {

    return (
        <div>
            <Toolbar/>
            <Container maxWidth="md">
            <main>
                {props.children}
            </main>
            </Container>
            <Footer/>
        </div>
    );
}


export default Layout;
