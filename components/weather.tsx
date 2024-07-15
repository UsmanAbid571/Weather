"use client"
import { useState } from 'react';

export default function Weather() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    const fetchWeather = async () => {
        setError(null);
        setWeather(null);
        try {


            const apiKey = "6cb7375344413587345ca7accc9b8ecc";

            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

            const response = await fetch(apiUrl);
            const data = await response.json()
            console.log(data)
            if (!response.ok) {
                throw new Error(data.error || 'Failed to fetch weather data');
            }
            setWeather(data);
        } catch (error) {
            setError(error.message);
        }
    };
    const handleChange = (e: any) => {
        setCity(e.target.value);
    };
   

    return (
        <div className="flex flex-col min-h-screen py-2 items-center ">
            <div className="w-full max-w-xs my-4 bg-white p-8 rounded-xl">
                <input
                    type="text"

                    onChange={handleChange}
                    placeholder="Enter city name"
                    className="w-full px-3 py-2 mb-3 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                />
                <button
                    onClick={fetchWeather}
                    className="w-full px-3 py-2 text-white bg-blue-500 rounded shadow-sm hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                >
                    Get Weather
                </button>
            </div>
            {error && <p className="mt-3 text-red-500">{error}</p>}
            {weather && (
                <div className='flex'>
                    <div className='temperatureCard mx-2 bg-white  rounded-xl px-10 py-6  h-[200px]  my-4'>
                        <h1 className="text-xl">{weather.name}</h1>
                        <h1 className='text-6xl text-center py-4'>{weather.main.temp}°C</h1>
                        <span className='text-md flex justify-end'>{new Date().toDateString()}</span>
                    </div>
                    <div className='bg-white  rounded-xl px-10 py-6  h-[200px] mx-1 my-4'>
                        <h1 className="text-xl">Feels Like</h1>
                        <h1 className='text-6xl text-center py-4'>{weather.main.feels_like}°C</h1>
                        <span className='text-sm flex justify-center'></span>
                    </div>
                </div>
             
                 
             
            )}
        </div>
    );
}
