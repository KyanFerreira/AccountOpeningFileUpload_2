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
        <ul>
          {documentList.length && documentList.map((item) => (
            <li key={item.Id} onClick={() => handleClick(item)}>{item.Name}</li>
          ))}
        </ul>
      </>
    );
  
    
  };
  
  export default DocumentUploadsDisplayed;