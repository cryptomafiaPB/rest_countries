import { useState, useEffect } from "react";
import React from "react";
import url from "./url.jsx";
import Search from "./search.jsx";
import { Filter } from "./filter.jsx";
import { Link } from "react-router-dom";

function Allcountry() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const getAllCountries = async () => {
    try {
      const res = await fetch(`${url}/all`);
      // console.log(res)
      if (!res.ok) throw new Error("Something went wrong");

      const data = await res.json();

      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.massage);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  const getCountryBySearch = async (CountryName) => {
    try {
      const res = await fetch(`${url}/name/${CountryName}`);

      if (!res.ok)
        throw new Error(`Not Found any Country by name of ${CountryName}`);

      const data = await res.json();

      setCountries(data);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.massage);
    }
  };

  const getCountryByRegion = async (region) => {
    try {
      const res = await fetch(`${url}/region/${region}`);

      if (!res.ok) throw new Error("Not Found.....");

      const data = await res.json();

      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.massage);
    }
  };

  return (
    <>
      <div className="filter_container">
        <div className="search_field">
          <Search onSearch={getCountryBySearch} />
        </div>
        <div className="filter_field">
          <Filter onFilter={getCountryByRegion} />
        </div>
      </div>
      <div className="c_wrapper">
        {isLoading && !error && <h2>Loading ....</h2>}
        {error && !isLoading && <h2>Error</h2>}

        {countries?.map((country) => (
          <Link to={`/country/${country.name.common}`}>
            <div className="c_card">
              <div className="c_img">
                <img src={country.flags.png} alt={country.flags.alt} />
              </div>
              <div className="cc_descrip">
                <h3>{country.name.common}</h3>
                <p>
                  Population: <span>{country.population}</span>
                </p>
                <p>
                  Region: <span>{country.subregion}</span>
                </p>
                <p>
                  Capital: <span>{country.capital}</span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Allcountry;
