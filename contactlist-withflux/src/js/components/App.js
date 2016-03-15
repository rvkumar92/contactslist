var React = require('react'),
    AppActions = require('../actions/AppActions'),
    AppStore = require('../store/AppStore'),
    AddContact = require('./AddContact.js'),
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
        console.log('contacts',this.state.contactsList);
        return(
            <div>
                <AddContact />
                <ContactList contacts={this.state.contactsList}/>
            </div>
        )
    }
});

function getAppState(){
    return{
        contactsList: AppStore.getContacts()
    }
}
module.exports = App;