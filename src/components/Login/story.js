import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { LoginForm } from "./form.js";

storiesOf("components/Login", module).add("new form", () => (
  <LoginForm
    onSubmit={action("onSubmit called")}
    onCancel={action("onCancel called")}
  />
));
