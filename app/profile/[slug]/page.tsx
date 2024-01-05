import Post from "@/components/Post";
import { Userfame } from "@/lib/constants";
import { UserFameProps } from "@/lib/types";
// console.log(Userfame);
const ProfilePage = ({ posts, followers, following }: UserFameProps) => {
  return (
    <>
      <div className="flex justify-center mt-9 items-center">
        <img
          src="https://picsum.photos/200/300"
          alt="profile_img"
          className="h-24 w-24 rounded-full"
        />
        <p className="font-bold ml-5">VyperX</p>
      </div>
      <div className="flex justify-center mt-10 mr-[80px] ml-[60px]">
        <h1 className="mr-5">
          {posts} <b>2</b> Posts
        </h1>
        <h1 className="mr-5 ">
          {followers} <b>10</b> Followers
        </h1>
        <h1>
          {following} <b>20</b> Following
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 place-items-center mt-20 gap-y-12">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
};
export default ProfilePage;
