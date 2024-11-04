import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import { handleFileChange } from "../api/api";

const myDocumentDetails = ({currentComments}) => {

  //this will be a list of comments
  console.log(currentComments);
  let comment = '';

  // const onChangeHandler = (event) => {
  //   handleFileChange(event, currentComments[0].Client_Document__c);
  // }

    return (
      <>
        <h1> Here Are Your Documents Details! </h1>
        <label htmlFor="avatar">Choose a profile picture:</label>
        <input
          type="file"
          id="avatar"
          name="avatar"
          accept="image/png, image/jpeg, application/pdf"
          onChange={(event) => handleFileChange(event, currentComments[0].Client_Document__c)}
        />
        {<CommentList currentComments={currentComments}/>}
      </>
    );
  };
  
  export default myDocumentDetails;