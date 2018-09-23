import axios from 'axios';

export default {
  async getAllShops() {
    return await axios.get('http://localhost:3000/data/shops.json');
  }
}