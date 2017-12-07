import * as React from 'react';
import {
    Link
} from 'react-router-dom';
import ActionHome from 'material-ui/svg-icons/action/home';
const css = require('./menubar.style.css');

export class Menubar extends React.Component {

    render() {
        return (
            <nav className="frog-navbar" style={css}>
                <ul style={{display: 'inline'}}>
                    <li>
                        <Link to={'/'}>
                            <ActionHome/>
                        </Link>
                    </li>
                </ul>

                <ul className="frog-navbar-ul-right">
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/resume'}>Resume</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
