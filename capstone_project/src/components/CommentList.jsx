import { useEffect, useState } from "react";
import { IoIosSend  } from "react-icons/io";
import { IoPeopleSharp } from "react-icons/io5";
import { getClientComments, postClientComments } from "../api/api";


const CommentList = ({ currentComments, clientId, setCurrentComments }) => {
  //this will be a list of comments
  const [inputValue, setInputValue] = useState("");

  async function handleSendMessage(){
    await postClientComments(inputValue, clientId,setCurrentComments);
  }

  // useEffect(() => {
  //   getClientComments(setCurrentComments, clientId);
  // },[]);

  return (
    <>
      <h4> Here is the comment list </h4>
      <div className="chat-container">
        {currentComments.length
          ? currentComments.map((item) => (
              <div
                key={item.Id}
                className={`message ${
                  item.Client_Message__c ? "my-message" : "their-message"
                }`}
              >
                <p>{`${
                  item.Client_Message__c
                    ? item.Client_Message__c
                    : item.Employee_Response_Message__c
                }`}</p>
              </div>
            ))
          :<p className="empty-message">No comments!</p>}
          <div className="chat-input-container">
            <div className="flex9">
              <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type a message..."
            className="chat-input"
          />
          </div>
        <div className="flex1"></div>
        <button onClick={handleSendMessage} id="send-button">Send</button>
      </div>
          
      </div>
    </>
  );
};
// ${thinghere}
export default CommentList;
