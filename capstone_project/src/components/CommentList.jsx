import { useEffect, useState } from "react";

const CommentList = () => {
  //this will be a list of comments
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const handleClick = (item) => {
    console.log(`You have clicked on: ${item}`);
  }

    return (
      <>
        <h4> Here is the comment list </h4>
        <ul>
          {items.length && items.map((item, index) => (
            <li key={index} onClick={() => handleClick(item)}>{item}</li>
          ))}
        </ul>
      </>
    );
  };
  
  export default CommentList;