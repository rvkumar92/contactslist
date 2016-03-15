var React = require('react'),
    AppActions = require('../actions/AppActions'),
    AppStore = require('../store/AppStore'),
    AddContact = require('./AddContact.js');
var AddContact = React.createClass({
    handleSubmit(e){
        e.preventDefault();
        var contact = {
            name: this.refs.name.value.trim(),
            number: this.refs.number.value.trim(),
            email: this.refs.email.value.trim()
        }
        AppActions.saveContact(contact);
    },
    render(){
        return(
            <div className="well">
                <h3>Add Contact</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" placeholder="Enter contact name..." ref="name" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Specify contact number..." ref="number" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Specify contact email..." ref="email" className="form-control"/>
                    </div>
                    <button type="submit" className="btn btn-primary">AddContact</button>
                </form>
            </div>
        )
    }
});

module.exports = AddContact;