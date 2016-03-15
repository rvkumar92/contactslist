var React = require('react'),
    Contact = require('./Contact.js');

var ContactList = React.createClass({
    render(){
        return(
            <div>
                <h3>Contacts</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.contacts.map(function(contact,index){
                            return <Contact contact={contact} key={index} />
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
});

module.exports = ContactList;