import React, {Component} from 'react';
import Contact from './Contact.jsx';

class ContactList extends Component{
    render(){
        console.log('contactlist',this.props.contacts);
        console.log('contactlist',this.props.contacts.length);
        return(
            <div className="well">
                <h3>Contacts</h3>
                <div className="row">
                    <div className="col-md-3">
                        <h4>Name</h4>
                    </div>
                    <div className="col-md-3">
                        <h4>Mobile</h4>
                    </div>
                    <div className="col-md-6">
                        <h4>Email</h4>
                    </div>
                </div>
                {
                    this.props.contacts.map(function(contact,i){
                        return (<Contact key={i} contact={contact}/>);
                    })
                }
            </div>
        )
    }
}

export default ContactList;