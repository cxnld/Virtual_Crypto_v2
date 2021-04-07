import { BrowserRouter as Router, Route, Switch, Link, Redirect, useHistory } from 'react-router-dom';
import { useEffect } from 'react'
import Portfolio from './Portfolio/Portfolio';
import Browse from './Browse/Browse';
import CoinInfo from './Browse/CoinInfo/CoinInfo';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import 'fontsource-roboto'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => createStyles({
    root: {
        display: 'flex',
        height: '100%',
        width: '100%'
    },
    title: {
        flexGrow: 1
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        backgroundColor: '#e5e5e5',
        height: '100%',
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}))

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
            <div className={classes.root}>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6" noWrap className={classes.title}>
                            Virtual Crypto v2
                        </Typography>
                        {jwt?
                            <Button color="inherit">Logout</Button>
                            :
                            <Button color="inherit">Login</Button>
                        }
                        
                    </Toolbar>
                </AppBar>

                <Drawer className={classes.drawer} variant="permanent" classes={{ paper: classes.drawerPaper }}>
                    <Toolbar />
                        <div className={classes.drawerContainer}>
                            <List>
                                <ListItem button component={Link} to='/main/portfolio'>
                                    <ListItemIcon><MonetizationOnIcon/></ListItemIcon>
                                    <ListItemText primary="Portfolio" />
                                </ListItem>
                                <ListItem button component={Link} to='/main/browse'>
                                    <ListItemIcon><ShoppingCartIcon/></ListItemIcon>
                                    <ListItemText primary="Browse" />
                                </ListItem>
                            </List>
                            <Divider />
                        </div>
                    <Toolbar />
                </Drawer>

                <main className={classes.content}>
                        <Switch>
                            <Redirect from="/main" to="/main/portfolio" exact /> 
                            <Route path='/main/portfolio' exact component={Portfolio}></Route>
                            <Route path='/main/browse' exact component={Browse}></Route>
                            <Route path='/main/browse/:id' exact component={CoinInfo}></Route>
                        </Switch>
                </main>
            </div>
        </Router>
    )
}

export default Main