import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders ContactForm without crashing", () => {
    render(<ContactForm />);
  });

test("checking the labels", () => {
    const { getByLabelText, findByTestId} = render(<ContactForm />);
    
    const firstNameInput = getByLabelText(/first name*/i);
    const lastNameInput = getByLabelText(/last name*/i);
    const emailInput = getByLabelText(/email*/i);
    const messageInput = getByLabelText(/message/i);

    fireEvent.change(firstNameInput, {
        target: { name: "firstName", value: "Adrian" }
      });

      fireEvent.change(lastNameInput, {
        target: { name: "lastName", value: "Nasaruk" }
      });

      fireEvent.change(emailInput, {
        target: { name: "email", value: "adriannasaruk@gmail.com" }
      });
      fireEvent.change(messageInput, {
        target: { name: "message", value: "Hello" }
      });

      expect(firstNameInput).toBeInTheDocument()

            

      expect(firstNameInput.placeholder).toBe("Name")      

      findByTestId('submit').then((res) => {
        fireEvent.click(res);
    })
  });

  

