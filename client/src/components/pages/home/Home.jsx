import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";

import Header from "../../header/Header";
import Posts from "../../posts/Posts";
import Sidebar from "../../sidebar/Sidebar";
import { getAllPosts } from "../../../services/posts.services";

import "./home.css";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async (search) => {
      const res = await getAllPosts(search);
      setPosts(res);
    };
    fetchPosts(search);
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
