import React from "react";
import { storiesOf } from "@storybook/react";
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
          onChange={noop}
        />
        <HorizontalInputField
          id="password-input-field"
          name="password"
          label="Password:"
          onChange={noop}
        />
        <HorizontalInputField
          id="password-confirmation-input-field"
          name="password_confirmation"
          label="Confirm Password:"
          onChange={noop}
        />
        <HorizontalInputField
          id="phone-input-field"
          name="phone"
          label="Phone:"
          onChange={noop}
        />
      </Form>
    </Wrapper>
  )
);
