import React, {Component} from 'react';

class ContactList extends Component{

    render(){
        console.log(this.props.contacts);
        return(
            <div className="well text-center">

                <ul className="list-group">
                    <li className="list-group-item">Name: {this.props.contacts.name}</li>
                    <li className="list-group-item">Name: {this.props.contacts.mobile}</li>
                    <li className="list-group-item">Name: {this.props.contacts.email}</li>
                </ul>
            </div>
        )
    }
}

export default ContactList;