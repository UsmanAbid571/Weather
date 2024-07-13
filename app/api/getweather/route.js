import { NextResponse } from "next/server"

export async function GET(request) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=islamabad&appid=6cb7375344413587345ca7accc9b8ecc"
  const res = await fetch(url)
  const weather = await res.json()

  console.log(weather.main.temp)
  
  

  return NextResponse.json(weather)
}