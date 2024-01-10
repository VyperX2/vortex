import Image from "next/image";
import React from "react";

const PostPage = () => {
  return (
    <div className="ml-[150px] sm:ml-[600px]">
      <h1 className="mt-12 font-bold md:ml-[220px]">Title</h1>
      <Image
        src="https://picsum.photos/200/300"
        alt="profile_img"
        height={160}
        width={160}
        className="h-40 w-40 mt-5 md:h-[400px] sm:w-[500px]"
      />
      <p className="mt-20 md:ml-[200px]">Description.</p>
    </div>
  );
};

export default PostPage;
