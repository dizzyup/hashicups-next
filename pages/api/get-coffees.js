import axios from 'axios'

export default async function handler(req, res) {
  try {
    axios.get('http://localhost:19090/coffees').then(response => {
      res.status(200).json(response.data);
    })
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
}