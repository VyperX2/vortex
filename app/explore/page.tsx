"use client";
import { PhotoProps } from "@/lib/types";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const ExplorePage: React.FC = () => {
  const [photos, setPhotos] = useState<PhotoProps[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos");
        const json: PhotoProps[] = await response.json();
        setPhotos(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-3 ml-52 mt-5">
      {photos.map((photo) => (
        <div key={photo.id}>
          <h1 className="font-bold ml-[50px] mb-8">{photo.title.slice(0, 20)}</h1>
          <Image
            src="/okiiiiiiiiiiiiiiiiiii.png"
            alt="Placeholder Image"
            width={250}
            height={250}
            className="mb-5"
          />
        </div>
      ))}
    </div>
  );
};

export default ExplorePage;
