var AppDispatcher = require('../dispatcher/AppDispatcher'),
    AppConstants = require('../constants/AppConstants'),
    assign = require('object-assign'),
    appApi = require('../utils/appApi'),
    EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _contacts = [];

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
    }
    return true;
});

module.exports = AppStore;