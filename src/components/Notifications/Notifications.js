import PropTypes from 'prop-types';

export default function Notification({ message }) {
  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string,
};