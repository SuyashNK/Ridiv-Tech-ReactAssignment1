import React from 'react';
import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import './styles.css';

const blogPosts = [
  {
    id: 1,
    title: 'How to use React Router',
    content: 'React Router is a library that allows you to create dynamic routes in your React application. You can use it to define different components for different paths, and navigate between them using links or programmatic logic. In this post, I will show you how to set up React Router and create some basic routes for your blog.'
  },
  {
    id: 2,
    title: 'Why I love React',
    content: 'React is a JavaScript library for building user interfaces. It is fast, flexible, and easy to use. React lets you create components that can render different data depending on the state and props. React also has a powerful ecosystem of tools and libraries that can help you with development, testing, and deployment. In this post, I will share some of the reasons why I love React and why you should try it too.'
  },
  {
    id: 3,
    title: 'My journey as a React developer',
    content: 'I started learning React about a year ago, and since then I have built several projects using it. React has helped me to improve my skills as a web developer and to create engaging and interactive user interfaces. In this post, I will tell you about my journey as a React developer and some of the challenges and achievements that I have faced along the way.'
  }
];

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to my blog</h1>
      <ul className="blog-list">
        {blogPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === Number(id));
  return (
    <div className="blog-post">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link to="/">Back to home</Link>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About this blog</h1>
      <p>This blog is a personal project that I created to showcase my skills and knowledge in React. I write about various topics related to React, such as React Router, hooks, state management, and more. I hope you find my posts useful and informative.</p>
      <Link to="/">Back to home</Link>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="app-header">
          <h1>My React Blog</h1>
          <Link to="/about">About</Link>
        </header>
        <main className="app-main">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/posts/:id" element={<BlogPost />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
