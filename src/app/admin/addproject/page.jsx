'use client';
import { useState } from 'react';
import Link from 'next/link';
import Papa from 'papaparse'; // A CSV parsing library
import Layout from '../../../components/Layout';

function App() {
  const [csvData, setCsvData] = useState();
  const [file, setFile] = useState(null);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    // Parse the uploaded CSV file
    Papa.parse(selectedFile, {
      complete: (result) => {
        const data = result.data;
        setCsvData(data);
      },
      header: true, // Treat the first row as header
      skipEmptyLines: true,
    });
  };

  const handleUpload = () => {
    if (file) {
      fetch('/api/projects', {
        method: 'POST',
        body: JSON.stringify(csvData),
      })
        .then((response) => response.json())
        .then((data) => {
          setSuccessMsg(data.message);
          setErrorMsg('');
        })
        .catch((error) => {
          setSuccessMsg('');
          setErrorMsg(`Error! ${error}`);
        });
    }
  };

  return (
    <Layout>
      <div className='p-2 min-h-[85vh]'>
        <h1 className='text-xl font-bold mb-4'>
          Please download the{' '}
          <a href='/files/Projects.csv' download className='text-blue-800'>
            project.csv
          </a>{' '}
          , and provide the project is exactly same format.
        </h1>
        <h2 className='mt-8 text-xl font-bold'>Special Instructions:</h2>
        <ul className='list-disc ml-6 mt-2'>
          <li>
            <b>Show</b> should be a boolean (true or false) in the CSV file.
          </li>
          <li>
            <b>Building Type</b> should be one of the predefined options.
          </li>
        </ul>
        <br />
        <div className='py-4 border-t-2 border-white'>
          <input type='file' accept='.csv' onChange={handleFileUpload} />
          <button
            onClick={handleUpload}
            className='my-4 w-full py-2 px-4 bg-black text-white rounded'
          >
            Upload CSV
          </button>
          {successMsg && <div className='p-1 text-green-800'>{successMsg}</div>}
          {errorMsg && <div className='p-1 text-red-700'>{errorMsg}</div>}

          <Link href='/admin/showprojects'>
            <div className='my-4 w-full py-2 px-4 bg-black text-center text-white rounded'>
              Show All Projects
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default App;
