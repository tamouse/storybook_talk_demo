import React from "react";
import T from "prop-types";
import { FormGroup } from "../../styles";

export class HorizontalInputField extends React.Component {
  render() {
    const { id, label, name, onChange } = this.props;
    return (
      <FormGroup>
        <label for={name}>{label}</label>
        <input
          className="form-control"
          id={id}
          type="text"
          name={name}
          onChange={onChange}
        />
      </FormGroup>
    );
  }
}
export default HorizontalInputField;
