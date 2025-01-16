import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListofDocs = () => {
  const [docs, setDocs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the API data using axios
    axios
      .get('http://localhost/ios/public/iosApi/list_of_docs')
        .then((response) => {
            // alert(response);
            console.log(response);
        setDocs(response.data.data); // Assuming the response is JSON
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <h1>List of Documents</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {docs.map((doc, index) => (
          <li key={index}>{doc}</li> // Adjust according to the API's response structure
        ))}
      </ul>
    </div>
  );
};

export default ListofDocs;
