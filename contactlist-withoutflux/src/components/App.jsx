import React, {Component} from 'react';
import ContactList from './contacts/ContactList.jsx';
import AddContact from './contacts/AddContact.jsx';
class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            contact: []

        }
    }
    handleAddContact(contact){
        console.log('from App',contact);
        this.setState({contact: contact});
        console.log('from state',contact);
    }
    render(){
        console.log(this.state.contact.length);
        if(this.state.contact == '' ){
            var contactList = '';
        }else{
            var contactList = <ContactList contacts={this.state.contact} />;
        }
        return(
            <div>
                <AddContact addContact={this.handleAddContact.bind(this)}/>
                -Add Contact
                -List contact
                -delete contact
                -edit contact
                {contactList}
            </div>
        )
    }
}

export default App;