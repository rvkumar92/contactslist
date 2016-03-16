var React = require('react'),
    AppActions = require('../actions/AppActions'),
    AppStore = require('../store/AppStore');
var EditContact = React.createClass({
    handleSubmit(e){
        e.preventDefault();
        var contact = {
            name: this.refs.name.value.trim(),
            number: this.refs.number.value.trim(),
            email: this.refs.email.value.trim()
        }
        //AppActions.saveContact(contact);
    },
    handleEdit(editedContact){
        console.log('editedContact', editedContact.value);
    },
    render(){
        return(
            <div className="well">
                <h3>Edit Contact</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" value={this.props.contactToEdit.name} onChange={this.handleEdit.bind(this, 'name')} ref="name" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="text" value={this.props.contactToEdit.number} onChange={this.handleEdit.bind(this, 'number')} ref="number" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="text" value={this.props.contactToEdit.email} onChange={this.handleEdit.bind(this, 'email')} ref="email" className="form-control"/>
                    </div>
                    <button type="submit" className="btn btn-primary">AddContact</button>
                </form>
            </div>
        )
    }
});

module.exports = EditContact;