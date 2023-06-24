import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = { ...INITIAL_STATE };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const isAlreadyInContacts = this.props.onAddSameContact(name);

    if (isAlreadyInContacts) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.props.addContact({ name, number });
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={css.contactForm} onSubmit={this.handleSubmit}>
        <label className={css.contactFormLabel}>
          <span>Name</span>
          <input
            className={css.contactFormInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+((?:'[a-zA-Zа-яА-Я\s])?(?:-[a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я\s]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleInputChange}
          />
        </label>

        <label className={css.contactFormLabel}>
          <span>Number</span>
          <input
            className={css.contactFormInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}[\s]?[\-]?\(?\d{1,3}?\)?[\s]?[\-]?\d{1,4}[\s]?[\-]?\d{1,4}[\s]?[\-]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleInputChange}
          />
        </label>

        <button className={css.addContactBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  onAddSameContact: PropTypes.func.isRequired,
};
