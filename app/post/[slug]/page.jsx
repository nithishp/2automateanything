import React from "react";
import { getPostDetails } from "@/services";
import PostWidget from "@/app/_components/blogComponents/PostWidget";
import Categories from "@/app/_components/blogComponents/Categories";
import PostDetail from "@/app/_components/blogComponents/PostDetail";
import Author from "@/app/_components/blogComponents/Author";

// This component is now a Server Component fetching the data on the server side
const PostDetails = async ({params}) => {
  // Fetch the post details based on the slug
  const data = await getPostDetails(params.slug);
  console.log(data.post,"PostDetail")
  return (
    <div className="container mx-auto px-10 mt-[20vh] mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {/* Pass the fetched post data to the PostDetail component */}
          <PostDetail post={data.post} />
          
          <Author author={data.post.author} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-[20vh]">
            <PostWidget
              slug={data.post.slug}
              categories={data.post.category.map((category)=>category.slug)}
            />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
