import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FileUpload = () => {

    const [file, setFile] = useState(null);

    const handleFile = (e: any) => {
        setFile(e.target.files[0]);
    };

    const uploadFile = async () => {
        const formData = new FormData();
        formData.append("file", file);

        const response = await axios.post("http://localhost:8080/upload", formData);
        console.log(response.data);

        return (
            <div>
                <input type="file" accept=".xls,.xlsx" onChange={handleFile} />
                <button onClick={uploadFile}>Upload</button>
            </div>
        );
    };
}
export default FileUpload;