import React, { useState, useEffect } from "react";
import url from "./url";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Countryinfo() {
  const [countri, setCountry] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const { name } = useParams();

  const getCountryByName = async () => {
    try {
      const res = await fetch(`${url}/name/${name}`);
      console.log("Hey-2");
      if (!res.ok) throw new Error("Not found!");

      const data = await res.json();
      console.log(data, "Hey");

      setCountry(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.massage);
    }
  };
  useEffect(() => {
    getCountryByName();
  }, [name]);

  return (
    <>
      <div className="back">
        <Link to={"/"}>
          <button type="button" className="back-btn">
            Back
          </button>
        </Link>
      </div>
      {countri?.map((country) => (
        <div className="country-d">
          <div className="d-img">
            <img src={country.flags.png} alt={country.flags.alt} />
          </div>
          <div className="d-info">
            <div className="c_name">
              <h1>{country.name.common}</h1>
            </div>
            <div className="d-info-sec">
              <div className="d-1">
                <p>
                  <span>Native Name: </span>
                  {country.name.official}
                </p>
                <p>
                  <span>Popolation: </span>
                  {country.population}
                </p>
                <p>
                  <span>Region: </span>
                  {country.region}
                </p>
                <p>
                  <span>Sub Region: </span>
                  {country.subregion}
                </p>
                <p>
                  <span>Capital: </span>
                  {country.capital}
                </p>
              </div>
              <div className="d-2">
                <p>
                  <span>Top Level Domain: </span>
                  {country.tld}
                </p>
                <p>
                  <span>Currencies: </span>
                  {country.currencies.name}
                </p>
                <p>
                  <span>Languages: </span>

                  {country.languages.eng}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* {countri?.map((country) => (
        <div className="country-d">
          <div className="d-img">
            <img src={country.flags.png} alt={country.flags.alt} />
          </div>
          <div className="d-info">
            <div className="c_name">{country.name.common}</div>
            <div className="d-info-sec">
              <div className="d-1">
                <span>Native Name: </span>
                <p>{country.name.official}</p>
                <span>Popolation: </span>
                <p>{country.population}</p>
                <span>Region: </span>
                <p>{country.region}</p>
                <span>Sub Region: </span>
                <p>{country.subregion}</p>
                <span>Capital: </span>
                <p>{country.capital}</p>
              </div>
              <div className="d-2">
                <span>Top Level Domain: </span>
                <p>{country.tld}</p>
                <span>Currencies: </span>
                <p>{country.currencies.name}</p>
                <span>Languages: </span>
                <p>{country.languages}</p>
              </div>
            </div>
          </div>
        </div>
      ))} */}
    </>
  );
}

export default Countryinfo;
