import * as React from 'react';
import { Helmet } from 'react-helmet';
import './home.style.css';

export class Home extends React.Component {

    render() {
        return (
            <div className={'Home'}>
                <Helmet>
                    <title> Froghramar </title>
                </Helmet>
                <h3 color={'accent'}>Home</h3>
            </div>
        );
    }
}
