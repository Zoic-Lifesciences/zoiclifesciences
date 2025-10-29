export const GET_POSTS = `
  {
    posts(orderBy: date_DESC) {
      title
      slug
      excerpt {
        text
      }
      date
      coverimage {
        url
      }
    }
  }
`;

export const GET_POST_BY_SLUG = `
  query Post($slug: String!) {
    post(where: {slug: $slug}) {
      title
      date
      content {
        html
      }
      coverimage {
        url
      }
    }
  }
`;

export const GET_ALL_SLUGS = `
  {
    posts {
      slug
    }
  }
`;
