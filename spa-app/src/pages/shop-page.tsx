import React, { useEffect, useState } from "react";
import ShopComponent, { Shop } from "../components/shop";
import ShopService from '../services/shop-service';

const ShopPage: React.FC = () => {
  const defaultShop = {
    id: 0,
    name: "",
    location: ""
  };
  const [shops, setShops] = useState<Shop[]>([]);
  const [shop, setShop] = useState<Shop>(defaultShop);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    retrieveShops();
  }, []);

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
    ShopService.delete(id)
      .then(() => {
        setShops(shops.filter((shop) => shop.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setShop((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (shop.name.trim() === "" || shop.location.trim() === "") {
      setError("Please enter all the fields");
      return;
    }
    setError(null);
    ShopService.create(shop)
    .then(() => {
      setShop(defaultShop);
      retrieveShops();
    })
    .catch((error) => {
      console.error(error);
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <ShopComponent shop={shop} handleInputChange={handleInputChange} />
        <button type="submit">Create</button>
        {error && <p>{error}</p>}
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {shops.map((shop) => (
            <tr key={shop.id}>
              <td>{shop.id}</td>
              <td>{shop.name}</td>
              <td>{shop.location}</td>
              <td>
                <button onClick={() => handleDelete(shop.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShopPage;
