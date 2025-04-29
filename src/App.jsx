import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox.jsx';
import ContactList from './components/ContactList/ContactList';

import initContacts from './contacts.json';

import { useState, useEffect } from 'react';

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedObject = window.localStorage.getItem('contactList');
    if (savedObject !== null) {
      return JSON.parse(savedObject);
    }
    return initContacts;
  });

  const [searchQuery, setSearchQuery] = useState('');

  const addContact = newContact => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    window.localStorage.setItem('contactList', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox value={searchQuery} onSearch={setSearchQuery} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </>
  );
}

export default App;
