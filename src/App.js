import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState({}); // Fixed default state

  useEffect(() => {
    fetch("http://127.0.0.1:5000/members") // Use full URL
      .then(res => res.json())
      .then(data => {
        setData(data);
        console.log(data); // Debugging: Ensure correct data is fetched
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);
  

  return (
    <div>
      <h1>Members List</h1>
      <ul>
        {data.members ? data.members.map((member, index) => (
          <li key={index}>{member}</li>
        )) : <p>Loading...</p>}
      </ul>
    </div>
  );
}

export default App;
