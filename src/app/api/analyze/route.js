// src/app/api/analyze/route.js

// import { NextResponse } from 'next/server';

// export async function POST(request) {
//   const { imageUrl } = await request.json();

//   try {
//     const response = await fetch('https://braintumor-workspace-rklsg.eastus.inference.ml.azure.com/score', {
//       method: 'POST',
//       headers: {
//         'Authorization': 'Bearer 6MUJqtpiLKfbYv3Hgn8OBcNr1ciaXjzd',
//         'Content-Type': 'application/json',
//         'azureml-model-deployment': 'braintumor'
//       },
//       body: JSON.stringify({ url: imageUrl })  // Ensure the correct body format
//     });

//     if (response.ok) {
//       const result = await response.json();
//       return NextResponse.json(result);
//     } else {
//       const error = await response.json();
//       return NextResponse.json(error, { status: response.status });
//     }
//   } catch (err) {
//     console.error('Error:', err);
//     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//   }
// }


// src/app/api/analyze/route.js

// import { NextResponse } from 'next/server';

// export async function POST(request) {
//   const { imageUrl } = await request.json();

//   try {
//     const imageResponse = await fetch(imageUrl);
//     if (!imageResponse.ok) {
//       console.error('Failed to fetch image from URL:', imageResponse.statusText);
//       return NextResponse.json({ error: 'Failed to fetch image' }, { status: 400 });
//     }

//     const imageBlob = await imageResponse.blob();
//     const formData = new FormData();
//     formData.append('image', imageBlob, 'image.jpg');

//     const response = await fetch('https://braintumor-workspace-rklsg.eastus.inference.ml.azure.com/score', {
//       method: 'POST',
//       headers: {
//         'Authorization': 'Bearer 6MUJqtpiLKfbYv3Hgn8OBcNr1ciaXjzd',
//         'azureml-model-deployment': 'braintumor'
//       },
//       body: formData
//     });

//     if (response.ok) {
//       const result = await response.json();
//       return NextResponse.json(result);
//     } else {
//       const error = await response.json();
//       console.error('Error from Azure ML endpoint:', error);
//       return NextResponse.json(error, { status: response.status });
//     }
//   } catch (err) {
//     console.error('Error:', err);
//     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//   }
// }


// src/app/api/analyze/route.js

import { NextResponse } from 'next/server';

export async function POST(request) {
  const { image_url } = await request.json(); // Extract image_url from request body

  try {
    // Fetch image from provided URL
    const imageResponse = await fetch(image_url);
    if (!imageResponse.ok) {
      console.error('Failed to fetch image from URL:', imageResponse.statusText);
      return NextResponse.json({ error: 'Failed to fetch image' }, { status: 400 });
    }

    // Convert image to Blob
    const imageBlob = await imageResponse.blob();

    // Prepare FormData with image file
    const formData = new FormData();
    formData.append('image', imageBlob, 'image.jpg');

    // Send FormData to Azure ML endpoint
    const response = await fetch('https://braintumor-workspace-rklsg.eastus.inference.ml.azure.com/score', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer 6MUJqtpiLKfbYv3Hgn8OBcNr1ciaXjzd',
        'azureml-model-deployment': 'braintumor'
      },
      body: formData
    });

    if (response.ok) {
      const result = await response.json();
      return NextResponse.json(result);
    } else {
      const error = await response.json();
      console.error('Error from Azure ML endpoint:', error);
      return NextResponse.json(error, { status: response.status });
    }
  } catch (err) {
    console.error('Error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
