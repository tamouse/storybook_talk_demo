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
    font-size: 1em;
  }
`;

export const HeaderRow = styled.header`
  flex: 1;
  display: flex;
  flex-direction: row;
  margin: 10px;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #666;
`;

export const ActionRow = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  margin: 10px;
  align-items: center;
  justify-content: flex-end;
  border-top: 1px solid #666;
`;

export const Button = styled.button`
  margin: 5px;
  padding: 5px 15px;
  font-size: 1em;
  color: black;
  background-color: #eee;
`;

export const SubmitButton = styled(Button)`
  color: white;
  background-color: #3b3;
`;
