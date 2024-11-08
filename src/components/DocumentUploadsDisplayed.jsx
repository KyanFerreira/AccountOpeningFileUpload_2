import { useEffect, useState } from "react";
import { useParams, useNavigate} from "react-router-dom";
import { getClientComments, refreshClientDocuments } from "../api/api";

const DocumentUploadsDisplayed = ({documentList, setCurrentComments, username, password, setDocumentList}) => {
  const navigate = useNavigate();
  //parsedDocumentList = JSON.parse(documentList)

  console.log(documentList);
  for(let key in documentList){
    console.log(key);
  }

  useEffect(() => {
    refreshClientDocuments(setDocumentList, username, password);
  },[]);
  //const [items, setItems] = useState([documentList]);

    async function handleClick(item){
      console.log(`${item.Id}`);
      await getClientComments(setCurrentComments, item.Id);
      navigate(`/docdetails/${item.Id}/${item.Status__c}`);
    }

    return (
      <div className='documentListWrapper'>
        <h1> Here are all of your documents! </h1>
        <div className="documents">
          {documentList.length && documentList.map((item) => (
            <div key={item.Id} className="doc-card">
              <div className="file-image-container">
                <img src="https://www.shutterstock.com/image-vector/copy-file-icon-trendy-modern-260nw-1675417978.jpg"></img>
              </div>
              <div className="doc-details">
                <h2>{item.Name}</h2>
                <p>Document Status: {item.Status__c}</p>
                <div className="buttonWrapper">
                  <button onClick={() =>handleClick(item)}>Upload Files and See Comments</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  
    
  };
  
  export default DocumentUploadsDisplayed;