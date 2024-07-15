import fetch from 'node-fetch';
import { NextResponse } from 'next/server';

export async function GET(req, res) {
  if (req.method !== 'GET') {
    return NextResponse.status(405).json({ error: 'Method Not Allowed' });
  }

  const  {city}  = req.query;
  const apiKey = process.env.NEXT_WEATHER_API_KEY;

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return NextResponse.json(data);
  }catch(error) {
    console.log(error)
  }
}