import { PropTypes } from 'prop-types';

export const Inputs = ({type, placeholder}) => {
  return (
    <>
    <input type={type} placeholder={placeholder} />
    </>
  )
}

Inputs.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
  }
