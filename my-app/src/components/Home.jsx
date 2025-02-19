import React from 'react'
import { useState } from "react";
import axios from "axios";

const Home = () => {
  const [name, setName] = useState("");
    const [greeting, setGreeting] = useState("");

    const getGreeting = async () => {
        if (!name) {
            setGreeting("Name is required.");
            return;
        }

        try {
            const response = await axios.get(`https://backend-1-sdyk.onrender.com/api/greet?name=${name}`);
            setGreeting(response.data.message);
        } catch (error) {
            setGreeting(error.response?.data?.error || "Error fetching greeting");
        }
    };
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-700 p-6">
            <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-center">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">Greeting App</h1>
                
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
                />
                
                <button 
                    onClick={getGreeting} 
                    className="w-full bg-gray-800 text-white py-2 rounded-lg "
                >
                    Get Greeting
                </button>

                <p className="mt-4 text-lg text-gray-700">{greeting}</p>
            </div>
        </div>

        
    
    </>
  )
}

export default Home
