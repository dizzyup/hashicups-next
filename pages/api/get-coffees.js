import axios from 'axios'

import { coffees } from '/mock'

export default async function handler(req, res) {
  res.status(200).json(coffees);
}