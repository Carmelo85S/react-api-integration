import React, { useState } from 'react';
import axios from 'axios';
import Bunny from '../../assets/bunny.svg'; // Importing a bunny image for display
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faSearch } from '@fortawesome/free-solid-svg-icons'; // Importing FontAwesome search icon
import './body.css';

const Body = () => {
    // State initialization for search input, data, loading status, and error handling
    const [search, setSearch] = useState('');  // Holds the search term entered by the user
    const [data, setData] = useState(null);  // Stores the fetched data from the API
    const [loading, setLoading] = useState(false);  // Tracks if data is loading
    const [error, setError] = useState(null);  // Tracks if there is any error during API call

    // Function to handle the search functionality
    const handleSearch = () => {

        // Check if the search input is empty
        if (!search.trim()) {
            // If the input is empty, set an error message and return early
            alert("Please enter a valid name.");
            return; // Exit the function without making the API call
    }

        // Set loading state to true and reset error before starting the request
        setLoading(true);
        setError(null);

        // Make the API call to fetch data based on the search term
        axios.get(`https://api.nationalize.io?name=${search}`)
            .then((res) => {
                // If successful, set the received data
                setData(res.data);
            })
            .catch((err) => {
                // If an error occurs, set the error message
                setError("Failed to fetch data. Please try again.");
            })
            .finally(() => {
                // Set loading state to false after the request is complete (success or failure)
                setLoading(false);
            });
    };

    // Function to handle the deletion of data and clearing the search field
    const handleDelete = () => {
        setData(null);  // Clear the data state
        setSearch('');  // Clear the search input field
    }

    return (
        <section className="hero-wrapper">
            <section className="hero-container">
                <section className="hero-container-top">
                    <h1 className="hero-text">
                        Ask me a question
                        about Your Topic
                    </h1>
                    <img src={Bunny} alt="a little cute bunny that looks at you" />
                </section>
                <section className="hero-container-bottom">
                    {/* Search icon */}
                    <FontAwesomeIcon className="icon-input" icon={faSearch} size="2x" style={{ margin: '10px' }} />
                    
                    {/* Search input field */}
                    <input 
                        type="text" 
                        className="input"
                        value={search} // Bind search state to input field
                        onChange={(e) => setSearch(e.target.value)} // Update search state when input changes
                        placeholder="Enter a name"
                    />
                    
                    {/* Search button that triggers handleSearch on click */}
                    <button className="searchBtn" onClick={handleSearch}>Search</button>
                </section>

                <section>
                    {/* Show loading text while fetching data */}
                    {loading && <p>Loading...</p>}

                    {/* Show error message if the API call fails */}
                    {error && <p className="error-message">{error}</p>}

                    {/* Show fetched data if available */}
                    {data && (
                        <div>
                            <div className="data-container">
                                {/* Delete button to clear the search data */}
                                <button className="delete" onClick={handleDelete}>X</button>
                                
                                {/* Display results */}
                                <h2>Results for "{data.name}"</h2>
                                <ul>
                                    {/* Loop through the country data and display each country ID and its probability */}
                                    {data.country.map((country, index) => (
                                        <li className="data" key={index}>
                                            Country ID: {country.country_id} - Probability: {(country.probability * 100).toFixed(2)}%
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </section>
            </section>
        </section>
    );
};

export default Body;
