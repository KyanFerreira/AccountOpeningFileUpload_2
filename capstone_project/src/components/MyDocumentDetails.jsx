import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import { handleFileChange } from "../api/api";
import { useParams } from 'react-router-dom';

const MyDocumentDetails = ({currentComments}) => {

  const [uploadAllowed, setUploadAllowed] = useState([])

  let { clientId } = useParams();
  
  useEffect

    return (
      <>
      <div className='documentListWrapper'>
        <h1> Here Are Your Documents Details! </h1>
        {uploadAllowed ? 
                <div className="input-box-file">
                <label htmlFor="fileToUpload">Upload a file here: </label>
                  <input
                    type="file"
                    id="fileToUpload"
                    name="fileToUpload"
                    accept="image/png, image/jpeg, application/pdf"
                    onChange={(event) => handleFileChange(event, clientId, setUploadAllowed)}/>
                </div>
        : 
        <p>Upload is processing</p>}

        {<CommentList currentComments={currentComments}/>}
      </div>
        
      </>
    );
  };
  
  export default MyDocumentDetails;