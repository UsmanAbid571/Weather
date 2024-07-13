import WeatherCard from "@/components/weatherCard";


async function getData() {
  const url = "https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=6cb7375344413587345ca7accc9b8ecc"
  const res = await fetch(url)
  const weather = await res.json()
  

  return weather;
  
 
}
export default async function Home() {
  const weather = await getData();
 
 // console.log(weather)
  return (
   <div className="">
    <h1></h1>
   <WeatherCard weather={weather}/>
   </div>
  );
}
