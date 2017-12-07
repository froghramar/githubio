import * as React from 'react';
import { Helmet } from 'react-helmet';

export class Home extends React.Component {

    render() {
        return (
            <div>
                <Helmet>
                    <title>Home :: froghramar</title>
                </Helmet>
                Home
            </div>
        );
    }
}