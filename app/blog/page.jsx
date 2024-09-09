import React from "react";
import { getPosts } from "@/services";
import PostCard from "../_components/blogComponents/PostCard";
import PostWidget from "../_components/blogComponents/PostWidget";
import Categories from "../_components/blogComponents/Categories";

const Page = async () => {
  
  const posts = (await getPosts()) || [];
  // console.log(posts)
  return (
    <div className="container mx-auto w-full mt-[20vh] px-10 mb-8 ">
      <h1 className="text-5xl font-bold my-5">Blog</h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post,id) => (
            <PostCard key={id} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-[20vh]">
            <PostWidget />
            <Categories/>
           
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default Page;
