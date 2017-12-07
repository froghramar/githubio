import * as React from 'react';
import {
    Link
} from 'react-router-dom';

export class Menubar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to={'/'}>Home</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to={'/about'}>About</Link>
                            </li>
                            <li>
                                <Link to={'/resume'}>Resume</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}