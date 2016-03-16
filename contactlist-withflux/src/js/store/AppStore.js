var AppDispatcher = require('../dispatcher/AppDispatcher'),
    AppConstants = require('../constants/AppConstants'),
    assign = require('object-assign'),
    appApi = require('../utils/appApi'),
    EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _contacts = [];

var _contact_to_edit = '';

var AppStore = assign({},EventEmitter.prototype,{
    addChangeListener(callback){
        this.on('change',callback);
    },
    removeChangeListener(callback){
        this.removeListener('change',callback);
    },
    emitChange(){
        console.log('emitter');
        this.emit(CHANGE_EVENT);
    },
    saveContact(contacts){
        _contacts.push(contacts);
        console.log('_contacts',_contacts);
    },
    getContacts(){
        return _contacts;
    },
    receiveContacts(contacts){
        _contacts = contacts;
    },
    removeContact(contactId){
        var index = _contacts.findIndex(x => x.id === contactId);
        _contacts.splice(index,1);
    },
    editContact(editContact){
        _contact_to_edit = editContact;
    },
    getContactToEdit(){
        return _contact_to_edit;
    }

});

AppDispatcher.register(function(payload){
    var action = payload.action;
    switch (action.actionType){
        case AppConstants.SAVE_CONTACT:
            console.log('Saving Contact...');

            //store save
            AppStore.saveContact(action.contacts);
            //Save to api --firebase
            appApi.saveContact(action.contacts);
            //EmitChange
            AppStore.emit(CHANGE_EVENT);
            break;
        case AppConstants.RECEIVE_CONTACT:
            console.log('Receiving Contact...');

            //store save
            AppStore.receiveContacts(action.contacts);

            //EmitChange
            AppStore.emit(CHANGE_EVENT);
            break;
        case AppConstants.REMOVE_CONTACT:
            console.log('Remove Contact...');

            //store save
            AppStore.removeContact(action.contactId);

            appApi.removeContact(action.contactId);
            //EmitChange
            AppStore.emit(CHANGE_EVENT);
            break;
        case AppConstants.EDIT_CONTACT:
            console.log('Editing Contact...');

            //store save
            AppStore.editContact(action.editContact);

            //appApi.removeContact(action.contactId);
            //EmitChange
            AppStore.emit(CHANGE_EVENT);
            break;
    }
    return true;
});

module.exports = AppStore;