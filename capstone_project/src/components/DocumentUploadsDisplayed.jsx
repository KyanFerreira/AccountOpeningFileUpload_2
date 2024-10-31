import { useEffect, useState } from "react";
import { useParams, useNavigate} from "react-router-dom";
import { getClientComments } from "../api/api";

const DocumentUploadsDisplayed = ({documentList, setCurrentComments}) => {
  const navigate = useNavigate();
  //parsedDocumentList = JSON.parse(documentList)

  console.log(documentList);
  for(let key in documentList){
    console.log(key);
  }

  //const [items, setItems] = useState([documentList]);

    const handleClick = (item) => {
      console.log(`You have clicked on: ${item.Name} and here is the address of the Account Opening: ${item.Account_Opening__r.Address__c}`);
      getClientComments(setCurrentComments, item.Id);
      navigate('/docdetails');
    }

    return (
      <>
        <h1> Here are all of your documents! </h1>
        <div classname="documents">
          {documentList.length && documentList.map((item) => (
            <div key={item.Id} classname="doc-card">
              <div className="file-image-container">
                <img src="https://www.shutterstock.com/image-vector/copy-file-icon-trendy-modern-260nw-1675417978.jpg"></img>
              </div>
              <div className="doc-details">
                <h2>item.Name</h2>
                <p>The address is: {item.Account_Opening__r.Address__c}</p>
                <button onClick={() => handleClick(item)}>See comments</button>
              </div>
            </div>
            // <li key={item.Id} onClick={() => handleClick(item)}>{item.Name}</li>
          ))}
        </div>
        
      </>
    );
  
    
  };
  
  export default DocumentUploadsDisplayed;