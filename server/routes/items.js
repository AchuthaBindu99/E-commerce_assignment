const axios = require('axios');
const {User, validate} = require("../model/electro")
const options = {
  method: 'GET',
  url: 'https://real-time-product-search.p.rapidapi.com/search',
  params: {
    q: 'Nike shoes',
    country: 'us',
    language: 'en'
  },
  headers: {
    'X-RapidAPI-Key': '3d53590a40msha7b4e8c664e2697p1954dbjsn9bd5e1ad9028',
    'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}