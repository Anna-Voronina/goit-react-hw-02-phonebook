import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContactItem = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContactItem} />

        <h2>Contacts</h2>
        <Filter />
        <ContactList contacts={contacts} />
      </div>
    );
  }
}
