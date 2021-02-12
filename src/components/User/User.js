import React, {Component} from 'react';
import './User.css';

class User extends Component {
    render() {
        let {user, onSelectUser} = this.props;
        let {name, id} = user;
        return (
            <div>
                <div>{name}</div>

                <button onClick={onSelectUser.bind(this, id)}>Chose user</button>
            </div>
        );
    }
}

export default User;