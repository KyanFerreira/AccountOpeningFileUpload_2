import { useEffect, useState } from "react";

const DocumentUploadsDisplayed = () => {
  const [items, setItems] = useState([
    {id: 1, name: 'File 1', status: 'Uploaded'}, 
    {id: 2, name: 'File 2', status: 'Pending'}, 
    {id: 3, name: 'File 3', status: 'Pending'}
  ]);

    const handleClick = (item) => {
      console.log(`You have clicked on: ${item.name}`);
    }

    return (
      <>
        <h1> Here are all of your documents! </h1>
        <ul>
          {items.length && items.map((item) => (
            <li key={item.id} onClick={() => handleClick(item)}>{item.name}</li>
          ))}
        </ul>
      </>
    );
  
    
  };
  
  export default DocumentUploadsDisplayed;