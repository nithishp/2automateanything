import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      posts {
        author {
          bio
          name
          id
          photo {
            url
          }
        }
        createdAt
        slug
        title
        excerpt
        featuredImage {
          url
        }
        category {
          name
          slug
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  

  return result.posts;
};

export const getRecentPosts = async()=>{
  const query = gql`query GetPostDetails {
  posts(orderBy: createdAt_ASC, last: 3) {
    title
    createdAt
    featuredImage {
      url
    }
    slug
  }
}
  `;
   const result = await request(graphqlAPI, query);
   console.log(result.posts);

   return result.posts;
}

export const getSimilarPosts = async (categories, slug) => {
  console.log("get similar post query started")
  const query = gql`
    query MyQuery {
      posts(
        where: {
          category_some: { slug_in: "`+categories+`" }
          AND: { slug_not: "`+slug+`" }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug, categories });
console.log(result.posts,"Get similar posts")
  return result.posts;
};

export const getCategories = async () => {
  const query = gql`
    query GetGategories {
      categories {
        name
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.categories;
};
export const getPostDetails = async (slug) => {
  const query =
    gql`
    query MyQuery {
      post(where: { slug: "` +
    slug +
    `" }) {
        author {
          name
          bio
          photo {
            url
          }
        }
        title
        excerpt
        featuredImage {
          url
        }
        createdAt
        slug
        content {
          raw
        }
        category {
          name
          slug
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);
console.log(result,"get post details query")
  return result;
};

export const getFeaturedPost = async () => {
  const query = gql`
    query MyQuery {
      posts(where: { featuredPost: true }, first: 3) {
        category {
          name
          slug
        }
        excerpt
        title
        featuredImage {
          url
        }
        author {
          name
          photo {
            url
          }
        }
        createdAt
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};