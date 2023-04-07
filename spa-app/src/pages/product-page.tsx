import React, { useEffect, useState } from "react";
import ProductComponent, { Product } from "../components/product";
import { Shop } from "../components/shop";
import ProductService from '../services/product-service';
import ShopService from '../services/shop-service';

const ProductPage: React.FC = () => {
  const defaultProduct = {
    id: 0,
    shopId:0,
    name: "",
    price: 0
  };
  const [products, setProducts] = useState<Product[]>([]);
  const [shops, setShops] = useState<Shop[]>([]);
  const [product, setProduct] = useState<Product>(defaultProduct);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    retrieveProducts();
    retrieveShops();
  }, []);

  const retrieveProducts = () => {
    ProductService.getAll()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const retrieveShops = () => {
    ShopService.getAll()
      .then((response) => {
        setShops(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = (id: number) => {
    ProductService.delete(id)
      .then(() => {
        setProducts(products.filter((product) => product.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: parseInt(value),
    }));
    console.log(event.target)
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (product.name.trim() === "" || product.price <= 0) {
      setError("Please enter all the fields and ensure that price is greater than 0");
      return;
    }
    setError(null);
    ProductService.create(product)
    .then(() => {
      setProduct(defaultProduct);
      retrieveProducts();
    })
    .catch((error) => {
      console.error(error);
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <ProductComponent product={product} handleInputChange={handleInputChange}
            shops={shops} handleShopChange ={handleSelectChange}/>
        <button type="submit">Create</button>
        {error && <p>{error}</p>}
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductPage;
