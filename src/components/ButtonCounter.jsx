import PropTypes from 'prop-types';
import './buttonCounter.css';

export const ButtonCounter = ({
  buttonStyleVersion,
  label,
  size,
  onClick,
  backgroundColor,
}) => {
  return (
    <div>
      <button
        className={[buttonStyleVersion, `counter-button--${size}`].join(' ')}
        onClick={onClick}
        style={{ backgroundColor }}
      >
        {label}
      </button>
    </div>
  );
};

ButtonCounter.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'large']),
};
