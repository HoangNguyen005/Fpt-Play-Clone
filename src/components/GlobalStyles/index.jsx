import PropTypes from 'prop-types';
import './GlobalStyle.module.scss';

function GlobalStyle({ children }) {
    return (children);
}

GlobalStyle.propTypes = {
    children: PropTypes.node.isRequired,  // Ensure that the prop is a React node (element, string, number, etc.)
};


export default GlobalStyle;