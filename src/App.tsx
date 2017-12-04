import * as React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

const PEEPS = [
    { id: 0, name: 'Michelle', friends: [ 1, 2, 3 ] },
    { id: 1, name: 'Sean', friends: [ 0, 3 ] },
    { id: 2, name: 'Kim', friends: [ 0, 1, 3 ] },
    { id: 3, name: 'David', friends: [ 1, 2 ] }
];

function find(id: number): any {
    return PEEPS.find((p: any) => p.id === id);
}

function App() {
    return (
        <Router>
            <Person match={{params: {id: 0}, url: ''}}/>
        </Router>
    );
}

class Person extends React.Component <any, any> {

    constructor(props: any) {
        super(props);
    }

    render(): any {

        const match = this.props.match;
        const person: any = find(+match.params.id);

        return (
            <div>
                <h3>{person.name}’s Friends</h3>
                <ul>
                    {person.friends.map((id: number) => (
                        <li key={id}>
                            <Link to={`${match.url}/${id}`}>
                                {find(id).name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Route path={`${match.url}/:id`} component={Person}/>
            </div>
        );
    }
}

export default App;
