import PropTypes from 'prop-types';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => (
        <li key={id}>
          {name}: {number}
        </li>
      ))}
    </ul>
  );
};
