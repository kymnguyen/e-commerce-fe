import React, { useState } from "react";
import { Shop } from "../shop";

export type Product = {
  id: number;
  shopId?: number;
  name: string;
  price: number;
};

interface ProductComponentProps {
    product: Product;
    shops: Shop[];
    handleShopChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProductComponent: React.FC<ProductComponentProps> = ({ product, shops, handleInputChange, handleShopChange }) => {

  return (
    <div>
      <h2>Product</h2>
      <label>
        Shop:
        <select name="shopId" onChange={handleShopChange} value={product.shopId}>
          <option value="">Select a shop</option>
          {shops.map((shop) => (
            <option key={shop.id} value={shop.id}>
              {shop.name} - {shop.location}
            </option>
          ))}
        </select>
      </label>
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

export default ProductComponent;