import React, { useState } from "react";

// define types for Customer, Shop, and Product
type Customer = {
  fullName: string;
  dob: string;
  email: string;
};

type Shop = {
  name: string;
  location: string;
};

type Product = {
  name: string;
  price: number;
};

// define the Customer component
const CustomerComponent: React.FC = () => {
  const [customer, setCustomer] = useState<Customer>({
    fullName: "",
    dob: "",
    email: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCustomer((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Customer</h2>
      <label>
        Full Name:
        <input type="text" name="fullName" value={customer.fullName} onChange={handleInputChange} />
      </label>
      <label>
        Date of Birth:
        <input type="date" name="dob" value={customer.dob} onChange={handleInputChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={customer.email} onChange={handleInputChange} />
      </label>
    </div>
  );
};

// define the Shop component
const ShopComponent: React.FC = () => {
  const [shop, setShop] = useState<Shop>({
    name: "",
    location: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setShop((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Shop</h2>
      <label>
        Name:
        <input type="text" name="name" value={shop.name} onChange={handleInputChange} />
      </label>
      <label>
        Location:
        <input type="text" name="location" value={shop.location} onChange={handleInputChange} />
      </label>
    </div>
  );
};

// define the Product component
const ProductComponent: React.FC = () => {
  const [product, setProduct] = useState<Product>({
    name: "",
    price: 0,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Product</h2>
      <label>
        Name:
        <input type="text" name="name" value={product.name} onChange={handleInputChange} />
      </label>
      <label>
        Price:
        <input type="number" name="price" value={product.price} onChange={handleInputChange} />
      </label>
    </div>
  );
};