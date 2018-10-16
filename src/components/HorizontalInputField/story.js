import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Wrapper, Form } from "../../styles";

import HorizontalInputField from "./index";

const noop = () => {};

storiesOf("components/HorizontalInputField", module).add(
  "basic example",
  () => (
    <Wrapper>
      <Form>
        <HorizontalInputField
          id="email-input-field"
          name="email"
          label="Email:"
          onChange={action("email field changed")}
        />
        <HorizontalInputField
          id="password-input-field"
          name="password"
          label="Password:"
          onChange={action("password field changed")}
        />
        <HorizontalInputField
          id="password-confirmation-input-field"
          name="password_confirmation"
          label="Confirm Password:"
          onChange={action("password confirmation field changed")}
        />
        <HorizontalInputField
          id="phone-input-field"
          name="phone"
          label="Phone:"
          onChange={action("phone field changed")}
        />
      </Form>
    </Wrapper>
  )
);
