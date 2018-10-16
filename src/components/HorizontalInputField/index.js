import React from "react";
import T from "prop-types";
import { FormGroup } from "../../styles";

export class HorizontalInputField extends React.Component {
  render() {
    const { label, name, ...inputProps } = this.props;
    return (
      <FormGroup>
        <label htmlFor={name}>{label}</label>
        <input className="form-control" name={name} {...inputProps} />
      </FormGroup>
    );
  }
}
export default HorizontalInputField;
