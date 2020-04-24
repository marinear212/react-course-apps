import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

// class App extends React.Component {
//     state = { resource: 'posts' };

//     render() {
//         return (
//             <div>
//                 <div>
//                     <button onClick={() => this.setState({ resource: 'posts' })}>Posts</button>
//                     <button onClick={() => this.setState({ resource: 'todos' })}>Todos</button>
//                 </div>
//                 <ResourceList resource={this.state.resource} />
//             </div>            
//         );
//     };    
// }

// |
// | class state to function hook
// V

const App = () => {
    const [resource, setResource] = useState('posts');

    return (
        <div>
            <UserList />
            <div>
                <button onClick={() => setResource('posts')}>Posts</button>
                <button onClick={() => setResource('todos')}>Todos</button>
            </div>
            <ResourceList resource={resource} />
        </div>            
    );   
}

export default App;