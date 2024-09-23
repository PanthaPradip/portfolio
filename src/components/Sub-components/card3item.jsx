import React from 'react'
import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import loading2 from '../json/loading2.json';

function Card3Item() {


  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const apiKey = 'W5mSOnDxwdoGHNv1XsN/ig==c5kTdLTjXsAVUOHB'; 

  const [data, setData] = useState('');
  const [prevData, setPrevData] = useState('')
  const fmt = 'png';

  const handleFileChange = (e)=>{
      const givenUrl = e.target.value;
      setData(givenUrl);
  }


  const [isFetching, setFatching] = useState(false);




  
  const generateQRCode = async () => {

    if (!data) {
      alert('No URL or text provided');
      return;
    }
    else if(data == prevData){
      return;
    }
    
    try {
      setFatching(true);
      const response = await fetch(`https://api.api-ninjas.com/v1/qrcode?format=${fmt}&data=${encodeURIComponent(data)}`, {
        method: 'GET',
        headers: {
          'X-Api-Key': apiKey,
          'Accept': 'image/png' 
        },
      });

      if (!response.ok) {
        throw new Error('Error');
      }

      const blob = await response.blob(); 

     
      const imageUrl = URL.createObjectURL(blob);
      setQrCodeUrl(imageUrl);
      
    } 

    catch (error) {
      console.error('Error Fetching', error);
    }

    setFatching(false);
    setPrevData(data);
  };

  useEffect(() => {
    if (qrCodeUrl) {
      console.log('QR Code URL:', qrCodeUrl);
    }
  }, [qrCodeUrl]);

  

  return (
    <div className='text-slate-100'>
      <div className='px-4 py-6 flex flex-col gap-2 justify-center items-center'>


        <label>Submit Your URL</label>
    
        <input className='w-full text-zinc-800 file:border-0 file:text-md font-light rounded-sm focus:outline-none px-2'  type='text' onChange={handleFileChange} />
      </div>


      <div className='flex flex-col gap-4 relative'>
      <button
        onClick={generateQRCode}
        className="bg-zinc-600 text-white py-2 px-2 mx-4 rounded hover:bg-slate-500 transition-all ease-in duration-200"
      >
        Generate QR Code
      </button>

        <Lottie className={`absolute w-full top-10 ${isFetching ? "block" : "hidden"}`} animationData={loading2} loop={true}/>

        {/* OUTPUT QR */}
        {qrCodeUrl && <img src={isFetching ? null : qrCodeUrl} />}
      </div>


    </div>
  )
}

export default Card3Item;