import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

import initContacts from './contacts.json';

import { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState(initContacts);
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
