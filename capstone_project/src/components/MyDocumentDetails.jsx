import { useEffect, useState } from "react";
import CommentList from "./CommentList";

const myDocumentDetails = () => {

  //this will be a list of comments
  const [items, setItems] = useState({
    name: "Placeholder Doc",
    status: "Still Needed",
  });

    return (
      <>
        <h1> Here is your document Detail </h1>
        <h2>items.name</h2>
        <h2>items.status</h2>
        {<CommentList/>}
      </>
    );
  };
  
  export default myDocumentDetails;