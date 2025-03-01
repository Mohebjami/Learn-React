import "../../style/mystyle.css"
import PropTypes from 'prop-types';

const CustomContainer  = ({ children }) => {
  return (
    <div className="CustomeContainer">{children}</div>
  )
}


CustomContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CustomContainer;