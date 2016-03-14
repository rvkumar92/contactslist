var AppDispatcher = require('../dispatcher/AppDispatcher'),
    AppConstants = require('../constants/AppConstants'),
    assign = require('object-assign'),
    appApi = require('../utils/appApi'),
    EventEmitter = require('events').EventEmitter;

var AppStore = assign({},EventEmitter.prototype,{

});

AppDispatcher.register(function(payload){
    var action = paylaod.action;
    switch (action.actionType){

    }
    return true;
});

module.exports = AppStore;