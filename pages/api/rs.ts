import type { NextApiRequest, NextApiResponse } from 'next'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (
  _req: NextApiRequest,
  res: NextApiResponse
) => {
  const key = process.env.READING_SUPPLY_API_KEY
  const response = await fetch('https://reading.supply/api/v1/library', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${key}`,
    },
  });

  const json = await response.json()

  res.status(200).json(json)
}