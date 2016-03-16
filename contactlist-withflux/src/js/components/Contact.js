var React = require('react'),
    AppActions = require('../actions/AppActions.js');
var Contact = React.createClass({
    handleEdit(contact, _this){
        AppActions.editContact(contact);
    },
    handleDelete(id,_this){
        console.log('_this',_this);
        console.log('id',id);
        AppActions.removeContact(id);
    },
    render(){
        return(
            <tr>
                <td>{this.props.contact.name}</td>
                <td>{this.props.contact.number}</td>
                <td>{this.props.contact.email}</td>
                <td><a href="#" className="btn btn-default" onClick={this.handleEdit.bind(this, this.props.contact)}>Edit</a></td>
                <td><a href="#" className="btn btn-danger" onClick={this.handleDelete.bind(this,this.props.contact.id)}>Delete</a></td>
            </tr>
        )
    }
});

module.exports = Contact;