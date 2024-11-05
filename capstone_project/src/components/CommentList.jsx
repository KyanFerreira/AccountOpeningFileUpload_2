import { useEffect, useState } from "react";

const CommentList = ({ currentComments }) => {
  //this will be a list of comments
  const [inputValue, setInputValue] = useState("");

  console.log(currentComments);

  async function handleSendMessage(item){
    console.log(`You have clicked on: ${item.Name} and here is the address of the Account Opening: ${item.Account_Opening__r.Address__c}`);
    await getClientComments(setCurrentComments, item.Id);
    navigate('/docdetails');
  }

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
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type a message..."
          className="chat-input"
        />
        <button onClick={handleSendMessage} className="send-button">Send</button>
      </div>
          
      </div>
    </>
  );
};
// ${thinghere}
export default CommentList;
