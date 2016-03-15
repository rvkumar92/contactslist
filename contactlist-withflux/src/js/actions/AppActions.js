var AppDispatcher = require('../dispatcher/AppDispatcher'),
    AppConstants = require('../constants/AppConstants');
var AppActions = {
    saveContact(contact){
        AppDispatcher.handleViewActions({
            actionType: AppConstants.SAVE_CONTACT,
            contacts: contact
        });
    },
    receiveContacts(contacts){
        console.log('AppACtions',contacts);
    }
};


module.exports = AppActions;