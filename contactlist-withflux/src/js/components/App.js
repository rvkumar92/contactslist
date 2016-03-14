var React = require('react'),
    AppActions = require('../actions/AppActions'),
    AppStore = require('../store/AppStore');
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
        return(
            <div>
                ContactList
            </div>
        )
    }
});

function getAppState(){
    return{

    }
}
module.exports = App;