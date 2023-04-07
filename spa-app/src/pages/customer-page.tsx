import React, { useEffect, useState } from "react";
import CustomerComponent, { Customer } from "../components/customer";
import CustomerService from '../services/customer-service';

const CustomerPage: React.FC = () => {
  const defaultCustomer =  {
    id: 0,
    fullName:"",
    email:"",
    dateOfBirth: ""
  };
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [customer, setCustomer] = useState<Customer>(defaultCustomer);

  useEffect(() => {
    retrieveCustomers();
  }, []);

  const retrieveCustomers = () => {
    CustomerService.getAll()
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCustomer((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    CustomerService.create(customer)
    .then(() => {
      setCustomer(defaultCustomer);
      retrieveCustomers();
    })
    .catch((error) => {
      console.error(error);
    });
  };

  const handleBuy = (customerId: number) => {
 
  };

  const handleDelete = (id: number) => {
    CustomerService.delete(id)
      .then(() => {
        setCustomers(customers.filter((customer) => customer.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <CustomerComponent customer={customer} handleInputChange={handleInputChange} />
        <button type="submit">Create</button>
      </form>
        <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Date of Birth</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.fullName}</td>
              <td>{customer.dateOfBirth}</td>
              <td>{customer.email}</td>
              <td>
                <button onClick={() => handleDelete(customer.id)}>Delete</button>
                <button onClick={() => handleBuy(customer.id)}>Buy</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerPage;
