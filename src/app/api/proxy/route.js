import { NextResponse } from "next/server";

const { default: axios } = require("axios");

export async function POST(req, res) {
  const { image_url } = await req.json();
  const url = `https://braintumor-workspace-guyap.eastus.inference.ml.azure.com/score`;

  console.log("Image URL:", image_url);
  try {
    const { data } = await axios.post(
      url,
      {
        image_url: image_url,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 6MUJqtpiLKfbYv3Hgn8OBcNr1ciaXjzd`,
        },
      }
    );
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error making request to AI service:", error);

    return new NextResponse("Internal Error", { status: 500 });
  }
}
