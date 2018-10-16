import React from "react";
import PropTypes from "prop-types";
import { FormGroup } from "../../styles";

/**
 * HorizontalInputField
 *
 * The component will pass all other props straight through to the form control, so you can add event handlers, type, id, etc.
 *
 * @function
 * @param {object} props Properties passed to function
 * @property {string} label The text label for the field
 * @property {string} name The name of the input field
 * @property {*} * all other props are passed to the input form control
 *
 * @todo TODO: allow caller to pass in class names that can be added to the .form-control class
 */

const propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export const HorizontalInputField = ({ label, name, ...inputProps }) => (
  <FormGroup>
    <label htmlFor={name}>{label}</label>
    <input className="form-control" name={name} {...inputProps} />
  </FormGroup>
);

HorizontalInputField.propTypes = propTypes;
export default HorizontalInputField;
