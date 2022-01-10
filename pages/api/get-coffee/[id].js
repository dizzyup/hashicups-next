import axios from 'axios'

export default async function handler(req, res) {
  const coffee_id = req.query.id
  
  try {
    axios.get('http://localhost:19090/coffees').then(response => {
      const coffee = response.data.find(item => item.id == coffee_id)
      res.status(200).json(coffee);
    })
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
}