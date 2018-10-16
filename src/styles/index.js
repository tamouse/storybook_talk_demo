import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  margin: 10px;
  align-items: center;

  > label {
    flex: 2;
    text-align: right;
    margin-right: 10px;
    white-space: nowrap;
  }
  > .form-control {
    flex: 5;
    padding: 10px;
  }
`;
