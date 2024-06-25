"use client";

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { LoaderCircleIcon, UploadCloud } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

function MedixAiPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [names, setNames] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const handleAi = async (imgUrl) => {
    const proxyUrl = "/api/proxy"; // This points to the API route we created in Next.js

    try {
      const { data } = await axios.post(proxyUrl, {
        image_url: imgUrl,
      });
      const { names } = await JSON.parse(data);
      setNames(names[0]);
    } catch (error) {
      console.error("Error making request to AI service:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = async (e) => {
    if (isLoading) return;
    const file = e.target.files[0];
    const uploadUrl = `https://api.imgbb.com/1/upload?expiration=600&key=5dde1938587cd962bb46deb732884ae3`;
    const formData = new FormData();
    setIsLoading(true);
    formData.append("image", file);
    const { data } = await axios.post(uploadUrl, formData);
    const imgUrl = await data.data.display_url;
    setImageUrl(imgUrl);
    handleAi(imgUrl);
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="min-h-[80vh] flex justify-center items-center">
        <div className="flex justify-center items-center h-full flex-col">
          <Badge className="mb-4 text-2xl cursor-none">Medix AI</Badge>
          {isLoading && !names && (
            <div className="w-full h-full flex justify-center items-center">
              <LoaderCircleIcon className="h-28 w-28 text-[#2A99A2] animate-spin" />
            </div>
          )}
          {!isLoading && !names && (
            <>
              <label htmlFor="file">
                <div className="relative w-40 h-40 rounded-full overflow-hidden cursor-pointer">
                  <UploadCloud className="absolute top-0 left-0 w-full h-full text-[#2A99A2]" />
                </div>
              </label>
              <Input
                id="file"
                type="file"
                onChange={handleChange}
                className="bg-[#D4EDED] hidden file:bg-red-500 file:text-red-500 focus-visible:ring-offset-0 border-0 focus-visible:ring-0"
                placeholder="Upload your image"
              />
            </>
          )}

          {!isLoading && names && (
            <>
              <div className="flex flex-col items-center">
                <Image
                  src={imageUrl}
                  alt="Uploaded image"
                  width={200}
                  height={200}
                  loading="lazy"
                />
                <p className="text-lg text-[#2A99A2] mt-4 flex justify-center items-center gap-2">
                  MedixAI has identified the following tumor:
                  <Badge
                    className=""
                    variant={"destructive"}
                  >
                    {names}
                  </Badge>
                </p>
              </div>
              <div>
                <button
                  onClick={() => {
                    setNames(null);
                    setImageUrl(null);
                  }}
                  className="bg-[#2A99A2] text-white px-4 py-2 rounded-md mt-4"
                >
                  Try again
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      ;
    </>
  );
}

export default MedixAiPage;
