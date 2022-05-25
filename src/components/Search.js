import React, { useState } from "react";

function Search({ listings }) {
  const [formData, setFormData] = useState("")
  function handleSearch(e){
    const lowerCase = e.target.value.toLowerCase();
    setFormData(lowerCase);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={formData}
        onChange={handleSearch}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
