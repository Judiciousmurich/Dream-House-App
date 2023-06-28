import { useEffect, useState } from "react";
import './Buy .css'
import { apiDomain } from "../../utils/utilsDomain";
import Card from "../../components/cards/Card";




const Buy = () => {
  const [availableListings, setAvailableListings] = useState([])


  const getAvailableListings = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("user"))
      const res = await fetch(`${apiDomain}/available`, {
        headers: { Authorization: `${token}` },
      });
      const data = await res.json()
      setAvailableListings(data);
    } catch (error) {
      console.error("Error fetching availableListings:", error);
    }
  };
  useEffect(() => {
    getAvailableListings()
  }, [])



  return (
    <>
      <div className="buy_banner">
        <div>
          <h1>Search for Property Here</h1>
          <form>
            <input
              className="search"
              type="search"
              placeholder="Search Location, Appartments, Complex etc"
              aria-label="Search"
            />
            <i>
              <button className="btn" type="submit">
                Search
              </button>
            </i>
          </form>
        </div>
      </div>
      <div className="featured_listing">
        <h1>Available Properties</h1>
        <div className="card">
          {availableListings && availableListings.map((listing) => (
            <>
              <Card listing={listing} />

            </>
          ))}
        </div>
      </div>

    </>
  );
};

export default Buy;
