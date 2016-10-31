export const FETCH_POSTS = 'FETCH_POSTS';

const dummyPosts = [
  { id: 1, name: 'post1' },
  { id: 3, name: 'post2' },
];

export function fetchPosts() {
  return {
    type: FETCH_POSTS,
    payload: dummyPosts,
  };
}

