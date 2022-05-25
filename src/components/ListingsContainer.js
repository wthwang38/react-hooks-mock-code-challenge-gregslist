import React from "react";
import { useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, setListings}) {
  const [like, setLike]= useState(true)
  const handleLike = ()=>{
    setLike(!like)
    console.log(like)
  }

  
  const theListings = listings.map((listing)=>(
    <ListingCard key={listing.id} description={listing.description} image={listing.image} location={listing.location} handleLike={handleLike} like={like}/>
  ))
  return (
    <main>
      <ul className="cards">
        {theListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
