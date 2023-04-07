import React, { useEffect, useState } from "react";
import { Customer } from "../components/customer";
import { Product } from "../components/product";
import { Shop } from "../components/shop";
import CustomerService from "../services/customer-service";
import ProductService from "../services/product-service";
import ShopService from "../services/shop-service";

const Home: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [shops, setShops] = useState<Shop[]>([]);
    const [customers, setCustomers] = useState<Customer[]>([]);

    useEffect(() => {
        retrieveShops();
        retrieveCustomers();
        retrieveProducts();
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

    const retrieveCustomers = () => {
        CustomerService.getAll()
            .then((response) => {
                setCustomers(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const retrieveProducts = () => {
        ProductService.getAll()
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            {customers.length < 5 || shops.length < 3 || products.length < 5 ? (
                <p>Not Enough data</p>
            ) : (
                <div className="d-flex p-2">
                    <ul>
                        {customers.map((customer) => (
                            <li key={customer.id}>
                                Customer({customer.fullName} - {customer.email})
                            </li>
                        ))}
                    </ul>
                    <ul>
                        {shops.map((shop) => (
                            <li key={shop.id}>
                                Shop ({shop.name} - {shop.location})
                            </li>
                        ))}
                    </ul>
                    <ul>
                        {products.map((product) => (
                            <li key={product.id}>
                                Product( {product.name} - {product.price})
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Home;
