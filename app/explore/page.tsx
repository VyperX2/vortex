import { PhotoProps } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

const ExplorePage: React.FC = async () => {
  // NO NEED FOR CLIENT COMPONENTS TO FETCH DATA
  // PAGES SHOULD BE SERVER COMPONENTS
  const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data: PhotoProps[] = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const data = await fetchData();

  return (
    <div className="grid grid-cols-3 ml-52 mt-5">
      {data?.map((post) => (
        <Link href={`/${post.id}`} key={post.id}>
          <h1 className="font-bold ml-[50px] mb-8">{post.title.slice(0, 20)}</h1>
          <Image
            src="/okiiiiiiiiiiiiiiiiiii.png"
            alt="Placeholder Image"
            width={250}
            height={250}
            className="mb-5"
          />
        </Link>
      ))}
    </div>
  );
};

export default ExplorePage;
