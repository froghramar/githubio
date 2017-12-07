import * as React from 'react';
import { Menubar } from '../components/featured/menubar';
import { Home } from '../components/featured/home';
import { Switch, Route } from 'react-router';
import './app.style.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { default as appTheme } from './app.theme';

export class App extends React.Component {

    render() {
        return (
            <MuiThemeProvider muiTheme={appTheme}>
                <div className={'App'}>
                    <Menubar/>
                    <main>
                        <Switch>
                            <Route exact={true} path={'/'} component={Home}/>
                        </Switch>
                    </main>
                </div>
            </MuiThemeProvider>
        );
    }
}
