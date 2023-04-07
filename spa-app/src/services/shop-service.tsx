import axios from 'axios';
import { Shop } from '../components/shop';
import BASE_API_URL from './constant';

const API_URL = BASE_API_URL + "Shops"
class CustomerService {
  getAll() {
    return axios.get<Shop[]>(API_URL);
  }

  get(id: number) {
    return axios.get<Shop>(`${API_URL}/${id}`);
  }

  create(data: Shop) {
    return axios.post(API_URL, data);
  }

  update(id: number, data: Shop) {
    return axios.put(`${API_URL}/${id}`, data);
  }

  delete(id: number) {
    return axios.delete(`${API_URL}/${id}`);
  }
}

export default new CustomerService();
