"use client"




// import { useState } from 'react';

// export default function MedixAI() {
//   const [messages, setMessages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleImageUpload = async (event) => {
//     const file = event.target.files[0];
//     if (!file) return;

//     const formData = new FormData();
//     formData.append('image', file);

//     setMessages((prevMessages) => [
//       ...prevMessages,
//       { type: 'user', content: URL.createObjectURL(file) },
//     ]);

//     setIsLoading(true);

//     try {
//       // Replace this URL with your AI model's endpoint
//       const response = await fetch('http://your-ai-model-endpoint', {
//         method: 'POST',
//         body: formData,
//       });

//       const data = await response.json();

//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { type: 'ai', content: data.result },
//       ]);
//     } catch (error) {
//       console.error('Error:', error);
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { type: 'ai', content: 'Error processing image.' },
//       ]);
//     }

//     setIsLoading(false);
//   };

//   return (
//     <div style={containerStyle} className="py-16 bg-gradient-to-t from-customTeal to-customDarkGreen w-full" >
//       <h1 className='font-bold m-2 p-2 text-4xl text-gray-300'>MedixAI Chat</h1>
//       <div  style={chatContainerStyle} className='bg-gray-200 bg-opacity-50'>
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             style={
//               msg.type === 'user' ? userMessageStyle : aiMessageStyle
//             }
//           >
//             {msg.type === 'user' ? (
//               <img src={msg.content} alt="Uploaded" style={imageStyle} />
//             ) : (
//               <p>{msg.content}</p>
//             )}
//           </div>
//         ))}
//         {isLoading && <p>Loading...</p>}
//       </div>
//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleImageUpload}
//         style={inputStyle}
//       />
//     </div>
//   );
// }

// const containerStyle = {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   padding: '20px',
  
// };

// const chatContainerStyle = {
//   width: '100%',
//   maxWidth: '900px',
//   border: '1px solid #ccc',
//   borderRadius: '8px',
//   padding: '10px',
//   overflowY: 'scroll',
//   height: '70vh',
//   marginBottom: '20px',
// };

// const userMessageStyle = {
//   alignSelf: 'flex-end',
//   backgroundColor: '#e0f7fa',
//   padding: '10px',
//   borderRadius: '10px',
//   margin: '5px 0',
//   maxWidth: '80%',
// };

// const aiMessageStyle = {
//   alignSelf: 'flex-start',
//   backgroundColor: '#f0f0f0',
//   padding: '10px',
//   borderRadius: '10px',
//   margin: '5px 0',
//   maxWidth: '80%',
// };

// const imageStyle = {
//   maxWidth: '300px',
//   borderRadius: '10px',
//   margin:"auto"
// };

// const inputStyle = {
//   padding: '10px',
//   borderRadius: '8px',
//   border: '1px solid #ccc',
// };


// import { useState } from 'react';



// export default function MedixAI() {
//   const [imageUrl, setImageUrl] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleInputChange = (e) => {
//     setImageUrl(e.target.value);
//   };

//   const analyzeImage = async () => {
//     if (!imageUrl) {
//       alert('Please enter an image URL.');
//       return;
//     }

//     setMessages((prevMessages) => [
//       ...prevMessages,
//       { type: 'user', content: imageUrl },
//     ]);

//     setIsLoading(true);

//     try {
//       const response = await fetch('/api/analyze', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ imageUrl }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setMessages((prevMessages) => [
//           ...prevMessages,
//           { type: 'ai', content: data.result },
//         ]);
//       } else {
//         const errorData = await response.json();
//         setMessages((prevMessages) => [
//           ...prevMessages,
//           { type: 'ai', content: 'Error processing image.' },
//         ]);
//       }
//     } catch (err) {
//       console.error('Error analyzing image:', err);
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { type: 'ai', content: 'Error processing image.' },
//       ]);
//     }

//     setIsLoading(false);
//   };

//   return (
//     <div style={containerStyle} className="py-16 bg-gradient-to-t from-customTeal to-customDarkGreen w-full">
//       <h1 className="font-bold m-2 p-2 text-4xl text-gray-300">MedixAI Chat</h1>
//       <div style={chatContainerStyle} className="bg-gray-200 bg-opacity-50">
//         {messages.map((msg, index) => (
//           <div key={index} style={msg.type === 'user' ? userMessageStyle : aiMessageStyle}>
//             {msg.type === 'user' ? (
//               <img src={msg.content} alt="Uploaded" style={imageStyle} />
//             ) : (
//               <p>{msg.content}</p>
//             )}
//           </div>
//         ))}
//         {isLoading && <p>Loading...</p>}
//       </div>
//       <input
//         type="text"
//         value={imageUrl}
//         onChange={handleInputChange}
//         placeholder="Enter image URL"
//         style={inputStyle}
//       />
//       <button onClick={analyzeImage} style={buttonStyle}>Analyze</button>
//     </div>
//   );
// }

// const containerStyle = {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   padding: '20px',
// };

// const chatContainerStyle = {
//   width: '100%',
//   maxWidth: '900px',
//   border: '1px solid #ccc',
//   borderRadius: '8px',
//   padding: '10px',
//   overflowY: 'scroll',
//   height: '70vh',
//   marginBottom: '20px',
// };

// const userMessageStyle = {
//   alignSelf: 'flex-end',
//   backgroundColor: '#e0f7fa',
//   padding: '10px',
//   borderRadius: '10px',
//   margin: '5px 0',
//   maxWidth: '80%',
// };

// const aiMessageStyle = {
//   alignSelf: 'flex-start',
//   backgroundColor: '#f0f0f0',
//   padding: '10px',
//   borderRadius: '10px',
//   margin: '5px 0',
//   maxWidth: '80%',
// };

// const imageStyle = {
//   maxWidth: '300px',
//   borderRadius: '10px',
//   margin: 'auto',
// };

// const inputStyle = {
//   padding: '10px',
//   borderRadius: '8px',
//   border: '1px solid #ccc',
//   marginBottom: '10px',
//   width: '100%',
//   maxWidth: '500px',
// };

// const buttonStyle = {
//   padding: '10px 20px',
//   borderRadius: '8px',
//   border: 'none',
//   backgroundColor: '#007bff',
//   color: '#fff',
//   cursor: 'pointer',
// };

// // API Route handler
// export async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { imageUrl } = req.body;

//     try {
//       const response = await fetch('https://braintumor-workspace-rklsg.eastus.inference.ml.azure.com/score', {
//         method: 'POST',
//         headers: {
//           'Authorization': 'Bearer 6MUJqtpiLKfbYv3Hgn8OBcNr1ciaXjzd',
//           'Content-Type': 'application/json',
//           'azureml-model-deployment': 'braintumor'
//         },
//         body: JSON.stringify({ imageUrl })
//       });

//       if (response.ok) {
//         const result = await response.json();
//         res.status(200).json(result);
//       } else {
//         const error = await response.json();
//         res.status(response.status).json(error);
//       }
//     } catch (err) {
//       console.error('Error:', err);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

// import { useState } from 'react';

// export default function MedixAI() {
//   const [imageUrl, setImageUrl] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleInputChange = (e) => {
//     setImageUrl(e.target.value);
//   };

//   const analyzeImage = async () => {
//     if (!imageUrl) {
//       alert('Please enter an image URL.');
//       return;
//     }

//     setMessages((prevMessages) => [
//       ...prevMessages,
//       { type: 'user', content: imageUrl },
//     ]);

//     setIsLoading(true);

//     try {
//       const response = await fetch('/api/analyze', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ imageUrl }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setMessages((prevMessages) => [
//           ...prevMessages,
//           { type: 'ai', content: JSON.stringify(data, null, 2) },
//         ]);
//       } else {
//         const errorData = await response.json();
//         setMessages((prevMessages) => [
//           ...prevMessages,
//           { type: 'ai', content: `Error: ${JSON.stringify(errorData, null, 2)}` },
//         ]);
//       }
//     } catch (err) {
//       console.error('Error analyzing image:', err);
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { type: 'ai', content: 'Error processing image.' },
//       ]);
//     }

//     setIsLoading(false);
//   };

//   return (
//     <div style={containerStyle} className="py-16 bg-gradient-to-t from-customTeal to-customDarkGreen w-full">
//       <h1 className="font-bold m-2 p-2 text-4xl text-gray-300">MedixAI Chat</h1>
//       <div style={chatContainerStyle} className="bg-gray-200 bg-opacity-50">
//         {messages.map((msg, index) => (
//           <div key={index} style={msg.type === 'user' ? userMessageStyle : aiMessageStyle}>
//             {msg.type === 'user' ? (
//               <img src={msg.content} alt="Uploaded" style={imageStyle} />
//             ) : (
//               <p>{msg.content}</p>
//             )}
//           </div>
//         ))}
//         {isLoading && <p>Loading...</p>}
//       </div>
//       <input
//         type="text"
//         value={imageUrl}
//         onChange={handleInputChange}
//         placeholder="Enter image URL"
//         style={inputStyle}
//       />
//       <button onClick={analyzeImage} style={buttonStyle}>Analyze</button>
//     </div>
//   );
// }

// const containerStyle = {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   padding: '20px',
// };

// const chatContainerStyle = {
//   width: '100%',
//   maxWidth: '900px',
//   border: '1px solid #ccc',
//   borderRadius: '8px',
//   padding: '10px',
//   overflowY: 'scroll',
//   height: '70vh',
//   marginBottom: '20px',
// };

// const userMessageStyle = {
//   alignSelf: 'flex-end',
//   backgroundColor: '#e0f7fa',
//   padding: '10px',
//   borderRadius: '10px',
//   margin: '5px 0',
//   maxWidth: '80%',
// };

// const aiMessageStyle = {
//   alignSelf: 'flex-start',
//   backgroundColor: '#f0f0f0',
//   padding: '10px',
//   borderRadius: '10px',
//   margin: '5px 0',
//   maxWidth: '80%',
// };

// const imageStyle = {
//   maxWidth: '300px',
//   borderRadius: '10px',
//   margin: 'auto',
// };

// const inputStyle = {
//   padding: '10px',
//   borderRadius: '8px',
//   border: '1px solid #ccc',
//   marginBottom: '10px',
//   width: '100%',
//   maxWidth: '500px',
// };

// const buttonStyle = {
//   padding: '10px 20px',
//   borderRadius: '8px',
//   border: 'none',
//   backgroundColor: '#007bff',
//   color: '#fff',
//   cursor: 'pointer',
// };



import { useState } from 'react';

export default function MedixAI() {
  const [imageUrl, setImageUrl] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setImageUrl(e.target.value);
  };

  const analyzeImage = async () => {
    if (!imageUrl) {
      alert('Please enter an image URL.');
      return;
    }

    setMessages((prevMessages) => [
      ...prevMessages,
      { type: 'user', content: imageUrl },
    ]);

    setIsLoading(true);

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image_url: imageUrl }), // Send image_url parameter
      });

      if (response.ok) {
        const data = await response.json();
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: 'ai', content: JSON.stringify(data, null, 2) },
        ]);
      } else {
        const errorData = await response.json();
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: 'ai', content: `Error: ${JSON.stringify(errorData, null, 2)}` },
        ]);
      }
    } catch (err) {
      console.error('Error analyzing image:', err);
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: 'ai', content: 'Error processing image.' },
      ]);
    }

    setIsLoading(false);
  };

  return (
    <div style={containerStyle} className="py-16 bg-gradient-to-t from-customTeal to-customDarkGreen w-full">
      <h1 className="font-bold m-2 p-2 text-4xl text-gray-300">MedixAI Chat</h1>
      <div style={chatContainerStyle} className="bg-gray-200 bg-opacity-50">
        {messages.map((msg, index) => (
          <div key={index} style={msg.type === 'user' ? userMessageStyle : aiMessageStyle}>
            {msg.type === 'user' ? (
              <img src={msg.content} alt="Uploaded" style={imageStyle} />
            ) : (
              <p>{msg.content}</p>
            )}
          </div>
        ))}
        {isLoading && <p>Loading...</p>}
      </div>
      <input
        type="text"
        value={imageUrl}
        onChange={handleInputChange}
        placeholder="Enter image URL"
        style={inputStyle}
      />
      <button onClick={analyzeImage} style={buttonStyle}>Analyze</button>
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
};

const chatContainerStyle = {
  width: '100%',
  maxWidth: '900px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '10px',
  overflowY: 'scroll',
  height: '70vh',
  marginBottom: '20px',
};

const userMessageStyle = {
  alignSelf: 'flex-end',
  backgroundColor: '#e0f7fa',
  padding: '10px',
  borderRadius: '10px',
  margin: '5px 0',
  maxWidth: '80%',
};

const aiMessageStyle = {
  alignSelf: 'flex-start',
  backgroundColor: '#f0f0f0',
  padding: '10px',
  borderRadius: '10px',
  margin: '5px 0',
  maxWidth: '80%',
};

const imageStyle = {
  maxWidth: '300px',
  borderRadius: '10px',
  margin: 'auto',
};

const inputStyle = {
  padding: '10px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  marginBottom: '10px',
  width: '100%',
  maxWidth: '500px',
};

const buttonStyle = {
  padding: '10px 20px',
  borderRadius: '8px',
  border: 'none',
  backgroundColor: '#007bff',
  color: '#fff',
  cursor: 'pointer',
};
