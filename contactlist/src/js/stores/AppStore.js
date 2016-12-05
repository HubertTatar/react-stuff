var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/appAPI.js');

var CHANGE_EVENT = 'change';

var _contacts = [];
var _contactToEdit = '';

var AppStore = assign({}, EventEmitter.prototype, {
	saveContact: function(contact) {
		_contacts.push(contact);
	},
	getContacts: function() {
		return _contacts;
	},
	setContacts: function(contacts) {
		return _contacts = contacts;
	},	
	removeContact: function(contactId) {
		var index = _contacts.find(x => x.id === contactId);
		_contacts.splice(index, 1);
	},
	setContactToEdit: function(contact) {
		_contactToEdit = contact;
	},
	getContactToEdit: function() {
		return _contactToEdit;
	},
	updateContact: function(contact) {
		for(i=0;i < _contacts.length; i++) {
			if (_contacts[i] == contact.id) {
				_contacts.splice(i ,1);
				_contacts.push(contact);
			}
		}
	},
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback){
		this.on('change', callback);
	},
	removeChangeListener: function(callback){
		this.removeListener('change', callback);
	}
});

AppDispatcher.register(function(payload){
	var action = payload.action;

	switch(action.actionType){
		case AppConstants.SAVE_CONTACT:
			console.log('Save concat');
			AppStore.saveContact(action.contact);
			//AppAPI.saveContact(action.contact);
			AppStore.emitChange(CHANGE_EVENT);
			break;
		case AppConstants.RECEIVE_CONTACTS:
			console.log('Receive concat');
			AppStore.setContacts(action.contacts);
			AppStore.emitChange(CHANGE_EVENT);
			break;
		case AppConstants.REMOVE_CONTACTS:
			console.log('Removing concat');
			AppStore.removeContact(action.contactId);
			//AppAPI.removeContact(action.contactId);
			AppStore.emitChange(CHANGE_EVENT);
			break;
		case AppConstants.EDIT_CONTACTS:
			console.log('Editing concat');
			AppStore.setContactToEdit(action.contact);
			AppStore.emitChange(CHANGE_EVENT);
			break;
		case AppConstants.UPDATE_CONTACTS:
			console.log('Editing concat');
			AppStore.updateContact(action.contact);
			//AppAPI.updateContact(action.contact);
			AppStore.emitChange(CHANGE_EVENT);
			break;				
	}

	return true;
});

module.exports = AppStore;