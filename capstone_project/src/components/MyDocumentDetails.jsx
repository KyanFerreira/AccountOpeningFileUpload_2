import { useEffect, useState } from "react";
import CommentList from "./CommentList";

const myDocumentDetails = ({currentComments}) => {

  //this will be a list of comments
  console.log(currentComments);

    return (
      <>
        <h1> Here Are Your Documents Details! </h1>
        {<CommentList currentComments={currentComments}/>}
      </>
    );
  };
  
  export default myDocumentDetails;