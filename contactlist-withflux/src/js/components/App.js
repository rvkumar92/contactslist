var React = require('react'),
    AppActions = require('../actions/AppActions'),
    AppStore = require('../store/AppStore'),
    AddContact = require('./AddContact.js'),
    EditContact = require('./EditContact.js'),
    ContactList = require('./ContactList');
var App = React.createClass({
    componentDidMount(){
        AppStore.addChangeListener(this.onChange);
    },
    componentWillUnmount(){
        AppStore.removeChangeListener();
    },
    onChange(){
        this.setState(getAppState());
    },
    getInitialState(){
        return getAppState();
    },
    render(){
        if(this.state.contactToEdit == ''){
            var form = <AddContact />
        }else{
            var form = <EditContact contactToEdit={this.state.contactToEdit}/>
        }
        return(
            <div>
                {form}
                <ContactList contacts={this.state.contactsList}/>
            </div>
        )
    }
});

function getAppState(){
    return{
        contactsList: AppStore.getContacts(),
        contactToEdit: AppStore.getContactToEdit()
    }
}
module.exports = App;