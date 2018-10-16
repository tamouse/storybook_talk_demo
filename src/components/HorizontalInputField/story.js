import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Wrapper, Form } from "../../styles";

import HorizontalInputField from "./index";
import docString from "./index.md";

const noop = () => {};

class Consumer extends React.Component {
  render() {
    return (
      <div>
        <Wrapper>
          <Form>
            <HorizontalInputField {...this.props} />
          </Form>
        </Wrapper>
        <hr />
        <div
          dangerouslySetInnerHTML={{ __html: docString }}
          style={{ margin: 20, fontFamily: `sans-serif` }}
        />
      </div>
    );
  }
}

storiesOf("components/HorizontalInputField", module)
  .add("email form", () => (
    <Consumer
      id="basic-input-field"
      name="email"
      type="email"
      label="Email:"
      onChange={action("onChange callback")}
    />
  ))
  .add("text form", () => (
    <Consumer
      id="text-input-field"
      name="name"
      type="text"
      label="Name:"
      placeholder="Enter you name"
      onKeyPress={action("key pressed")}
      onBlur={action("field blurred")}
    />
  ));
