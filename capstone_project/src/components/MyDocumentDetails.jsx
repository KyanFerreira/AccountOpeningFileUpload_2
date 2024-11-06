import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import { handleFileChange } from "../api/api";

const MyDocumentDetails = ({currentComments}) => {

  //this will be a list of comments
  console.log(currentComments);
  let comment = '';

  // const onChangeHandler = (event) => {
  //   handleFileChange(event, currentComments[0].Client_Document__c);
  // }

    return (
      <>
      <div className='documentListWrapper'>
        <h1> Here Are Your Documents Details! </h1>
        
        <div className="input-box-file">
        <label htmlFor="avatar">Upload a file here: </label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg, application/pdf"
            onChange={(event) => handleFileChange(event, currentComments[0].Client_Document__c)}
          />
        </div>
        {<CommentList currentComments={currentComments}/>}
      </div>
        
      </>
    );
  };
  
  export default MyDocumentDetails;