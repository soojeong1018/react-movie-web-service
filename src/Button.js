import propTypes from "prop-types";
import PropTypes from "prop-types";

function Button({text}) {
    return <button>{text}</button>;
}

Button.propTYpe = {
    text: PropTypes.string.isRequired,
}

export default Button;