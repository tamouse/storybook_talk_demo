import React from "react";
import {
  Wrapper,
  Form,
  HeaderRow,
  ActionRow,
  Button,
  SubmitButton
} from "../../styles";
import { HorizontalInputField } from "../HorizontalInputField";

export class LoginForm extends React.Component {
  state = {
    email: "",
    password: "",
    passwordConfirmation: "",
    phone: ""
  };

  handleChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  };

  handleCancel = () => {
    this.props.onCancel();
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state);
  };

  componentDidMount() {
    if (this.props.account) {
      const email = this.props.account.email || "";
      const phone = this.props.account.phone || "";
      this.setState({ email, phone });
    }
  }

  render() {
    return (
      <Wrapper>
        <Form>
          <HeaderRow>
            <h3>Sign up below</h3>
          </HeaderRow>
          <HorizontalInputField
            id="email-field"
            name="email"
            label="Email:"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <HorizontalInputField
            id="password-field"
            name="password"
            label="Password:"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <HorizontalInputField
            id="password-confirmation-field"
            name="passwordConfirmation"
            label="Confirm Password:"
            value={this.state.passwordConfirmation}
            onChange={this.handleChange}
          />
          <HorizontalInputField
            id="phone-field"
            name="phone"
            label="Phone:"
            value={this.state.phone}
            onChange={this.handleChange}
          />
          <ActionRow>
            <Button type="button" onClick={this.handleCancel}>
              Cancel
            </Button>
            <SubmitButton type="button" onClick={this.handleSubmit}>
              Save
            </SubmitButton>
          </ActionRow>
        </Form>
      </Wrapper>
    );
  }
}
export default LoginForm;
