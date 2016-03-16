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
        AppDispatcher.handleViewActions({
            actionType: AppConstants.RECEIVE_CONTACT,
            contacts: contacts
        });

    },
    removeContact(contactId){
        AppDispatcher.handleViewActions({
            actionType: AppConstants.REMOVE_CONTACT,
            contactId: contactId
        })
    },
    editContact(editContact){
        AppDispatcher.handleViewActions({
            actionType: AppConstants.EDIT_CONTACT,
            editContact: editContact
        })
    },
    updateContact(updateContact){
        AppDispatcher.handleViewActions({
            actionType: AppConstants.UPDATE_CONTACT,
            updateContact: updateContact
        })
    }
};


module.exports = AppActions;