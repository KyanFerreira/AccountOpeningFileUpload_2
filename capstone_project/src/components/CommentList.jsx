import { useEffect, useState } from "react";

const CommentList = ({currentComments}) => {
  //this will be a list of comments

  console.log(currentComments);

  const handleClick = (thisComment) => {
    console.log(`You have clicked on: ${thisComment.Name} and here is the time: ${thisComment.Response_Date_Time__c}`);
  }

    return (
      <>
        <h4> Here is the comment list </h4>
        <ul>
          {currentComments.length && currentComments.map((thisComment) => (
            <li key={thisComment.Id} onClick={() => handleClick(thisComment)}>{thisComment.Client_Message__c}</li>
          ))}
        </ul>
      </>
    );
  };
  
  export default CommentList;