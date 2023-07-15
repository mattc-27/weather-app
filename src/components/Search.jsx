import React, { useState, useEffect } from 'react';
import { GoLocation } from "react-icons/go";
import '../style.css';

export default function Search({ setQuery }) {

    const [predictions, setPredictions] = useState([]);
    const [searchInput, setSearchInput] = useState({ p: '' });

    const handleChange = (e) => {
        setSearchInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        const autocompleteService = new window.google.maps.places.AutocompleteService();
        autocompleteService.getPlacePredictions(
            { input: searchInput.p },
            (predictions, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                    setPredictions(predictions);
                }
            }
        );
    };

    const handleClick = (prediction) => {
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ placeId: prediction.place_id }, (results, status) => {
            if (status === window.google.maps.GeocoderStatus.OK && results.length > 0) {
                const location = results[0].geometry.location;
                const queryVariable = `${location.lat()},${location.lng()}`;
                console.log(queryVariable);
                setQuery({ q: queryVariable });
                clearInput();
            }
        });
    };

    const clearInput = () => {
        setSearchInput({ p: '' });
    };

    return (
        <>
            <div className='searchContainer'>
                <div className='searchInputs'>
                    <input type='text' onChange={handleChange}
                        value={searchInput.p}
                        name='p'
                        placeholder='Search a city or postal code'
                    />
                    <GoLocation size={35} style={{ color: "#394867" }} />
                </div>
                {searchInput.p.length != 0 && (
                    <div className="dataResult">
                        {predictions.map((prediction) => {
                            return (
                                <p
                                    key={prediction.place_id}
                                    onClick={() => handleClick(prediction)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {prediction.description}
                                </p>
                            )
                        })}
                    </div>
                )}
            </div>
        </>
    );
}