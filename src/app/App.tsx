import * as React from 'react';
import { Menubar } from '../components/featured/menubar';
import { Home } from '../components/featured/home/home';
import { Switch, Route } from 'react-router';

export class App extends React.Component {

    render() {
        return (
            <div>
                <Menubar/>
                <main>
                    <Switch>
                        <Route exact={true} path={'/'} component={Home}/>
                    </Switch>
                </main>
            </div>
        );
    }
}
