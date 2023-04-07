import React, { useState } from "react";

export type Customer = {
  id: number;
  fullName: string;
  dateOfBirth: string;
  email: string;
};

interface CustomerComponentProps {
  customer: Customer;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomerComponent: React.FC<CustomerComponentProps> = ({ customer, handleInputChange }) => {
  return (
    <div>
      <h2>Customer</h2>
      <label>
        Full Name:
        <input type="text" name="fullName" value={customer.fullName} onChange={handleInputChange} required minLength={2} maxLength={50}/>
      </label>
      <label>
        Date of Birth:
        <input type="date" name="dateOfBirth" value={customer.dateOfBirth} onChange={handleInputChange} required/>
      </label>
      <label>
        Email:
        <input type="email" name="email" value={customer.email} onChange={handleInputChange} required/>
      </label>
    </div>
  );
};

export default CustomerComponent;