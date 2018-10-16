import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { SignupForm } from "./form.js";
import docString from "./form.md";

class Consumer extends React.Component {
  render() {
    return (
      <div>
        <SignupForm {...this.props} />
        <hr />
        <div
          dangerouslySetInnerHTML={{ __html: docString }}
          style={{ fontFamily: `sans-serif`, margin: 20 }}
        />
      </div>
    );
  }
}
storiesOf("components/SignUpForm", module)
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
        title="Update your credentials"
        account={loginDetails}
        onSubmit={action("submit called")}
        onCancel={action("cancel called")}
      />
    );
  });
