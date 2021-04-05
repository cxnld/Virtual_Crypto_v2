import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Portfolio from '../Portfolio';
import Browse from './Browse/Browse';
import CoinInfo from '../CoinInfo';
import Dashboard from './Dashboard';

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
import DashboardIcon from '@material-ui/icons/Dashboard';
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

const Main2 = () => {
    const classes = useStyles()

    return (
        <Router>
            <div className={classes.root}>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6" noWrap className={classes.title}>
                            Virtual Crypto v2
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>

                <Drawer className={classes.drawer} variant="permanent" classes={{ paper: classes.drawerPaper }}>
                    <Toolbar />
                        <div className={classes.drawerContainer}>
                            <List>
                                <ListItem button component={Link} to='/main2/portfolio'>
                                    <ListItemIcon><DashboardIcon/></ListItemIcon>
                                    <ListItemText primary="Dashboard" />
                                </ListItem>
                                <ListItem button component={Link} to='/main2/browse'>
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
                            <Redirect from="/main2" to="/main2/dashboard" exact /> 
                            <Route path='/main2/dashboard' exact component={Dashboard}></Route>
                            <Route path='/main2/portfolio' exact component={Portfolio}></Route>
                            <Route path='/main2/browse' exact component={Browse}></Route>
                            <Route path='/main2/browse/:id' exact component={CoinInfo}></Route>
                        </Switch>
                </main>
            </div>
        </Router>
    )
}

export default Main2
