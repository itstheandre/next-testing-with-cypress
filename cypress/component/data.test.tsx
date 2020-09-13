import React from "react";
import { mount } from "cypress-react-unit-test";
import DataComponent from "../../components/Data";

describe("render", () => {
  it("renders", () => {
    mount(<DataComponent />);
  });
});
