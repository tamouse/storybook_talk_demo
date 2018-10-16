import React from "react";
import PropTypes from "prop-types";
import {
  Wrapper,
  Form,
  HeaderRow,
  ActionRow,
  Button,
  SubmitButton
} from "../../styles";
import { HorizontalInputField } from "../HorizontalInputField";

/**
 * SignupForm - presents and manages a signup form for a web site
 *
 * @class
 * @param {object} props Properties passed to the instance of the class
 * @property {string} [title] Title to use for form
 * @property {object} [account] Prior account data
 * @property {function} onSubmit Callback to recieve the form data object when the submit button is clicked
 * @property {function} onCancel Callback invoked when the Cancel button is clicked
 */
export class SignupForm extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    account: PropTypes.object,
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
  };

  static defaultProps = {
    title: "Sign up",
    account: {}
  };

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
            <h3>{this.props.title}</h3>
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
export default SignupForm;
