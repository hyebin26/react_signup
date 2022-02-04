import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "./postSlice";

const Post = (props) => {
  const { post, loading, err } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const fetchPostData = async () => {
    try {
      const getPostData = await dispatch(fetchPost()).unwrap();
      // 추출된 정보(rejectValue, fullfilled)를 사용하고 싶을 때 unwrap사용
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchPostData();
  }, []);
  if (loading) {
    return <div>Loading....</div>;
  }
  if (!loading) {
    return (
      <div>
        <ul>
          {post.map((item) => (
            <li>{item.post}</li>
          ))}
        </ul>
      </div>
    );
  }
};

export default Post;
