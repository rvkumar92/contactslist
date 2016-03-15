var React = require('react'),
    ReactDOM = require('react-dom'),
    App = require('./components/App'),
    appApi = require('./utils/appApi');

appApi.getContacts();
ReactDOM.render(<App />,document.getElementById('app'));