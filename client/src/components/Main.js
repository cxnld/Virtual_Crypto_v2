import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Portfolio from './Portfolio';
import Browse from './Content/Browse/Browse';
import CoinInfo from './CoinInfo';
import Dashboard from './Content/Dashboard';

import 'fontsource-roboto';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'


import HomeIcon from '@material-ui/icons/Home';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import theme from './theme'

import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
    
    }, 
    appBar: {
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px'
    },
    contentContainer: {
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        backgroundColor: '#e5e5e5',
        height: '700px',
        
    },    
    navButton: {
        color: 'white',
        marginRight: '20px'
    },
}));

const Main = () => {
    const classes = useStyles()
    const history = useHistory()
    const jwt = sessionStorage.getItem("jwt")

    useEffect(() => {
        // If we don't find a JWT in sessionStorage, redirect to login page
        if (!jwt) { history.push('/login') }
    }, [])

    return (
        <Router>
            <ThemeProvider theme={theme}>
                <Container className={classes.mainContainer} disableGutters={true} maxWidth="md">
                    <AppBar position="static" className={classes.appBar}>
                        <Toolbar>
                            <Button className={classes.navButton} startIcon={<HomeIcon/>}           component={Link} to='/main/dashboard'>   Dashboard        </Button>
                            <Button className={classes.navButton} startIcon={<MonetizationOnIcon/>} component={Link} to='/main/portfolio'>   Portfolio   </Button>
                            <Button className={classes.navButton} startIcon={<ShoppingCartIcon/>}   component={Link} to='/main/browse'>      Browse      </Button>
                        </Toolbar>
                    </AppBar>

                    <Container className={classes.contentContainer} disableGutters={true}>
                        <Switch>
                            <Route path='/main' exact component={Dashboard}></Route>
                            <Route path='/main/dashboard' exact component={Dashboard}></Route>
                            <Route path='/main/portfolio' exact component={Portfolio}></Route>
                            <Route path='/main/browse' exact component={Browse}></Route>
                            <Route path='/main/browse/:id' exact component={CoinInfo}></Route>
                        </Switch>
                    </Container>
                </Container>
            </ThemeProvider>
        </Router>
    )
}

export default Main
