import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      {contacts.length === 0 ? (
        <h3>There are no contacts in your phone book.</h3>
      ) : (
        <ul className={css.contactList}>
          {contacts.map(({ name, id, number }) => (
            <li key={id} className={css.contactListItem}>
              <span className={css.contactListItemText}>
                {name}: {number}
              </span>
              <button
                className={css.contactListItemBtn}
                type="button"
                onClick={() => onDeleteContact(id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
