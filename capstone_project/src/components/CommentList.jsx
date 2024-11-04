import { useEffect, useState } from "react";

const CommentList = ({ currentComments }) => {
  //this will be a list of comments

  console.log(currentComments);

  // let chatbox;
  // currentComments.map((item) => (
  //   if (item.Client_Message__c){
  //     chatbox += <div key={item.Id} className="message my-message"></div>
  //   }
  // ))

  return (
    <>
      <h4> Here is the comment list </h4>
      <div className="chat-container">
        {currentComments.length
          ? currentComments.map((item) => (
              <div
                key={item.Id}
                className={`message ${
                  item.Client_Message__c ? "their-message" : "my-message"
                }`}
              >
                <p>{`${
                  item.Client_Message__c
                    ? item.Client_Message__c
                    : item.Employee_Response_Message__c
                }`}</p>
                {/* { ${item.Client_message__c} ? <p>{item.Client_Message__c}</p> : <p>{item.Employee_Response_Message__c}</p> } */}
              </div>
            ))
          :<p className="empty-message">No comments!</p>}
      </div>
    </>
  );
};
// ${thinghere}
export default CommentList;
