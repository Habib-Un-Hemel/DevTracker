import React from "react";

function Menu() {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg",
    },
    {
      id: 2,
      title: "Vivamus volutpat viverra",
      desc: "Viverra posuere euismod leo tincidunt facilisis.",
      img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg",
    },
    {
      id: 3,
      title: "Curabitur non mi nec ipsum",
      desc: "Curabitur nec ante eu urna sodales consectetur.",
      img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg",
    },
    {
      id: 4,
      title: "Sed accumsan ipsum",
      desc: "Aenean sollicitudin massa et neque consequat.",
      img: "https://images.pexels.com/photos/6782010/pexels-photo-6782010.jpeg",
    },
    {
      id: 5,
      title: "Fusce vehicula interdum",
      desc: "Aliquam sit amet vestibulum risus, et volutpat elit.",
      img: "https://images.pexels.com/photos/5960128/pexels-photo-5960128.jpeg",
    },
    {
      id: 6,
      title: "Mauris sit amet est",
      desc: "Mauris euismod arcu nec tempor volutpat.",
      img: "https://images.pexels.com/photos/4973390/pexels-photo-4973390.jpeg",
    },
    {
      id: 7,
      title: "Aenean interdum purus",
      desc: "Aenean euismod vel ex at euismod tristique.",
      img: "https://images.pexels.com/photos/6509364/pexels-photo-6509364.jpeg",
    },
    {
      id: 8,
      title: "Praesent condimentum libero",
      desc: "Sed et magna sit amet risus venenatis sollicitudin.",
      img: "https://images.pexels.com/photos/6510399/pexels-photo-6510399.jpeg",
    },
    {
      id: 9,
      title: "Donec mollis magna",
      desc: "Cras laoreet orci id eros mollis convallis.",
      img: "https://images.pexels.com/photos/5408724/pexels-photo-5408724.jpeg",
    },
    {
      id: 10,
      title: "Phasellus facilisis nisi",
      desc: "Etiam hendrerit metus ac libero tristique pretium.",
      img: "https://images.pexels.com/photos/6931433/pexels-photo-6931433.jpeg",
    },
  ];

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="" />
          <h2>{post.title}</h2>
          <button  >Read more</button>
        </div>
      ))}
    </div>
  );
}

export default Menu;
