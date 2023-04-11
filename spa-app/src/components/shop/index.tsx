import React from "react";

export type Shop = {
  id: number;
  name: string;
  location: string;
};

interface ShopComponentProps {
    shop: Shop;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ShopComponent: React.FC<ShopComponentProps> = ({ shop, handleInputChange }) => {
  return (
    <div>
      <h2>Shop</h2>
      <label>
        Name:
        <input type="text" name="name" value={shop.name} onChange={handleInputChange}  required minLength={2} maxLength={50}/>
      </label>
      <label>
        Location:
        <input type="text" name="location" value={shop.location} onChange={handleInputChange}  required minLength={2} maxLength={50}/>
      </label>
    </div>
  );
};

export default ShopComponent;