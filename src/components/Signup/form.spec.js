import React from "react";
import renderer from "react-test-renderer";
import { SignupForm } from "./form.js";

describe("<SignupForm /> test", () => {
  it("renders the component", () => {
    const actual = renderer.create(
      <SignupForm onSubmit={jest.fn()} onCancel={jest.fn()} />
    );
    expect(actual).toMatchSnapshot();
  });
  it("renders with existing account", () => {
    const account = {
      email: "test@email.com",
      phone: "555-1212"
    };
    const actual = renderer.create(
      <SignupForm
        title="Edit account"
        account={account}
        onSubmit={jest.fn()}
        onCancel={jest.fn()}
      />
    );
    expect(actual).toMatchSnapshot();
    const inputs = actual.root.findAllByType("input");
    expect(Array.isArray(inputs)).toBeTruthy();
    const values = inputs.reduce((valuesHash, input) => {
      if (input.props.value) {
        valuesHash[input.props.name] = input.props.value;
      }
      return valuesHash;
    }, {});
    expect(values).toEqual(account);
  });
});
