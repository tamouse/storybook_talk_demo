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
      </Form>
    </Wrapper>
  )
);
