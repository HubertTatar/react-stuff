var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
    saveContact: function(contact) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.SAVE_CONTACT,
            contact: contact
        });
    },
    receiveContacts: function(contacts) {
         AppDispatcher.handleViewAction({
            actionType: AppConstants.RECEIVE_CONTACTS,
            contact: contact
        });   
    },
    removeContact: function(contactId) {
         AppDispatcher.handleViewAction({
            actionType: AppConstants.REMOVE_CONTACTS,
            contactId: contactId
        });  
    },
    editContact: function(contact) {
         AppDispatcher.handleViewAction({
            actionType: AppConstants.EDIT_CONTACTS,
            contact: contact
        });  
    },
    updateContact: function(contact) {
         AppDispatcher.handleViewAction({
            actionType: AppConstants.UPDATE_CONTACTS,
            contact: contact
        });  
    }           
}

module.exports = AppActions;