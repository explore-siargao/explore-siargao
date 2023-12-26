import { Request, Response } from 'express'

export const getCountries = async (req: Request, res: Response) => {
  try {
    const response = await fetch('https://api.first.org/data/v1/countries')

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()
    const newData = Object.values(data.data)
    res.json({
      error: false,
      items: newData,
      itemCount: newData.length,
      message: '',
    })
  } catch (error) {
    console.error('Error fetching data from the API:', error)
  }
}
