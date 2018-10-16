import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { LoginForm } from "./form.js";

class Consumer extends React.Component {
  render() {
    return (
      <LoginForm
        account={this.props.account}
        onSubmit={this.props.onSubmit}
        onCancel={this.props.onCancel}
      />
    );
  }
}
storiesOf("components/Login", module)
  .add("new form", () => (
    <Consumer
      onSubmit={action("submit called")}
      onCancel={action("cancel called")}
    />
  ))
  .add("edit form", () => {
    const loginDetails = {
      email: "existing@email.com",
      phone: "555-1212"
    };

    return (
      <Consumer
        account={loginDetails}
        onSubmit={action("submit called")}
        onCancel={action("cancel called")}
      />
    );
  });
