// TEMPORARY DATA
const users = [
  { id: "660963b78d25fd69d8851f09", name: "John" },
  { id: "660968a6980cf63eb1403e9a", name: "Jane" },
];

const posts = [
  {
    title: "Post Title 1",
    desc: "This is the description for post 1.",
    userId: "660963b78d25fd69d8851f09",
    slug: "random-1-unique-slug",
    img: "https://images.unsplash.com/photo-1711619034404-665a4bc6dcd3",
    createdAt: "2024-03-31T13:23:03.918Z",
    updatedAt: "2024-03-31T13:23:03.918Z",
  },
  {
    title: "Post Title 2",
    desc: "Here is the content for post 2.",
    userId: "660968a6980cf63eb1403e9a",
    slug: "random-2-unique-slug",
    img: "https://images.unsplash.com/photo-1711348263557-37b13ae668cb",
    createdAt: "2024-03-31T13:23:03.918Z",
    updatedAt: "2024-03-31T13:23:03.918Z",
  },
  {
    title: "Random Post 3",
    desc: "Random description for the third post.",
    userId: "660968a6980cf63eb1403e9a",
    slug: "random-3-unique-slug",
    img: "https://images.unsplash.com/photo-1711554360706-799231ab7aa8",
    createdAt: "2024-03-31T13:23:03.918Z",
    updatedAt: "2024-03-31T13:23:03.918Z",
  },
];
export const getPosts = async () => {
  return posts;
};

export const getPost = async (slug) => {
  return posts.find((post) => post.slug === slug);
};

export const getUser = async (id) => {
  return users.find((user) => user.id === id);
};
