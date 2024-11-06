import { useEffect, useState } from "react";
import { getBankAccountInfo } from "../api/api";

const BankAccountInfo = () => {
  const [bankAccountInfo, setBankAccountInfo] = useState([]);

  useEffect(() => {
    getBankAccountInfo(setBankAccountInfo);
  },[])

    return (
      <>
      <div className="documentListWrapper">
        <h1> Bank Account Information Page</h1>
        <div className="documents">
          {bankAccountInfo.length && bankAccountInfo.map((item) => (
          <div key={item.Id} className="doc-card">
            <h2>{item.Name}</h2>
            <div className="file-image-container"><img src={item.Main_Image__c}></img></div>
            <div className="doc-details">
                <h2>{item.Bank_Information__c}</h2>
              </div>
          </div>
        ))}
        </div>
        
      </div>
      </>
    );
  
    
  };
  
  export default BankAccountInfo;