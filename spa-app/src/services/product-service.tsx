import axios from 'axios';
import { Product } from '../components/product';
import BASE_API_URL from './constant';

const API_URL = BASE_API_URL + "Products"
class CustomerService {
  getAll() {
    return axios.get<Product[]>(API_URL);
  }

  get(id: number) {
    return axios.get<Product>(`${API_URL}/${id}`);
  }

  create(data: Product) {
    return axios.post(API_URL, data);
  }

  update(id: number, data: Product) {
    return axios.put(`${API_URL}/${id}`, data);
  }

  delete(id: number) {
    return axios.delete(`${API_URL}/${id}`);
  }
}

export default new CustomerService();
