import axios from 'axios';
import { Customer } from '../components/customer';
import BASE_API_URL from './constant';

const API_URL = BASE_API_URL + "Customers"
class CustomerService {
  getAll() {
    return axios.get<Customer[]>(API_URL);
  }

  get(id: number) {
    return axios.get<Customer>(`${API_URL}/${id}`);
  }

  create(data: Customer) {
    return axios.post(API_URL, data);
  }

  update(id: number, data: Customer) {
    return axios.put(`${API_URL}/${id}`, data);
  }

  delete(id: number) {
    return axios.delete(`${API_URL}/${id}`);
  }
}

export default new CustomerService();
