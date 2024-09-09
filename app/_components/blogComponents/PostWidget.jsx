'use client'
import React ,{useState,useEffect} from 'react'
import moment from'moment';
import Link from 'next/link';
import { getRecentPosts,getSimilarPosts } from '@/services';
import Image from 'next/image';
const PostWidget = ({categories,slug}) => {
  const [relatedPosts,setRelatedPosts] = useState([]);
  console.log(categories)
  useEffect(()=>{
    if(slug){
      getSimilarPosts(categories,slug).then((result)=>setRelatedPosts(result))
    }else{
      getRecentPosts().then((result) =>
        setRelatedPosts(result)
      ); 
    }

  },[slug])
  console.log(relatedPosts,"related post")
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              
              alt={post.title}
              height={60}
              width={60}
             
              className="align-middle rounded-lg"
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link href={`/post/${post.slug}`} className="text-lg font-semibold" key={index}>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostWidget