var firebase = require('firebase'),
    AppActions = require('../actions/AppActions');
module.exports = {
    saveContact(contact){
        this.firebaseRef = new firebase('https://contactlistwithflux.firebaseio.com/contacts');
        this.firebaseRef.push({contact: contact});
    },
    getContacts(){
        this.firebaseRef = new firebase('https://contactlistwithflux.firebaseio.com/contacts');
        this.firebaseRef.once("value",function(snapshot){
            var contacts = [];
            snapshot.forEach(function(childSnapshot){
                var contact = {
                    id: childSnapshot.key(),
                    name: childSnapshot.val().contact.name,
                    number: childSnapshot.val().contact.number,
                    email: childSnapshot.val().contact.email
                };
                contacts.push(contact);
                AppActions.receiveContacts(contacts);
            })
        });
    },
    removeContact(contactId){
        this.firebaseRef = new firebase('https://contactlistwithflux.firebaseio.com/contacts/'+ contactId);
        this.firebaseRef.remove();
    },
    updateContact(contact){
        var id = contact.id;
        var updatedContact = {
            name: contact.name,
            number: contact.number,
            email: contact.email
        };
        console.log(updatedContact);
        this.firebaseRef = new firebase('https://contactlistwithflux.firebaseio.com/contacts/'+contact.id+'/contact');
        this.firebaseRef.update(updatedContact);
    }
};