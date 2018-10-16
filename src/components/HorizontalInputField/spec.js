import React from "react";
import renderer from "react-test-renderer";
import { HorizontalInputField } from "./index.js";

describe("<HorizontalInputField /> testing", () => {
  it("renders component", () => {
    const actual = renderer.create(
      <HorizontalInputField label="Test" name="test" />
    );
    expect(actual).toMatchSnapshot();
  });

  it("passes props through", () => {
    const actual = renderer.create(
      <HorizontalInputField
        id="input-field"
        label="Test 2:"
        name="email"
        type="email"
        onBlur={jest.fn()}
      />
    );
    expect(actual).toMatchSnapshot();
  });
});
