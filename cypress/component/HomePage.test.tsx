import React from "react";
import { mount } from "cypress-react-unit-test";
import Index from "../../pages/index";

describe("something", () => {
  beforeEach(() => {
    cy.server();
  });
  it("tests home", () => {
    cy.route("/api/getData", "Hello");
    mount(<Index />);
    cy.get(".text").should("have.text", "Hello");
  });

  it("tests Post", () => {
    const errorMessage = "This is not cool";
    cy.route({
      url: "/api/postData",
      method: "POST",
      status: 400,
      response: { cool: errorMessage },
    });
    cy.contains(/submit/i).click();
    cy.get(".error").should("have.text", errorMessage);
  });
});
