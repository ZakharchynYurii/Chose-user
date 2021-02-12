import React, {Component} from 'react';
import './AllUsers.css';
import User from "../User/User";

class AllUsers extends Component {
    state = {
        users: [],
        chosenOne: null,
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(users => {
                return users.json();
            })
            .then(users => {
                this.setState({users});
            })
    }

    onSelectUser = (id) => {
        let {users} = this.state;
        let chosenOne = users.find(user => user.id === id);
        this.setState({chosenOne});
    }

    render() {
        let {users, chosenOne} = this.state;
        return (
            <div>
                {
                    users.map((user, index) => {
                        return(
                            <User key={index} user={user} onSelectUser={this.onSelectUser}/>
                        )
                    })
                }
                {
                    chosenOne && <h2>Active user: {chosenOne.name}</h2>
                }
            </div>
        );
    }
}

export default AllUsers;