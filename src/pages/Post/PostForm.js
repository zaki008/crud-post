import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {toast } from 'react-toastify';
import FormPost from '../../components/FormPost';
import PostIdb from '../../data/postIdb';

const PostForm = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const initialState = {
    title: '',
    body: ''
  }
  const [input, setInput] = useState(initialState);

  useEffect(() => {
    if(id !== undefined){
      PostIdb.getPostsById(id).then((res) => {
        setInput({...res.data})
      })
    }
    return (() => {
      setInput(initialState);
    })
  },[id])

  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setInput({...input, [name] : value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {title, body} = input;
    if(id !== undefined){
      PostIdb.updatePost(id, {title, body}).then((res) => {
        toast.success('Anda Berhasil Memperbarui data')
        navigate('/');
        setInput(initialState);
      }).catch((err) => err.message)
    }else{
      PostIdb.createPost({title, body}).then((res) => {
        navigate('/');
        toast.success('Anda Berhasil Menambah Data');
        setInput(initialState);
      }).catch((err) => err.message);
    }
  }
  return (
    <section className='form'>
      <div className='card'>
        <h1>Form Post</h1>
        <FormPost
          valueTitle={input.title}
          valueBody={input.body}
          change={handleOnChange}
          valueSubmit={id !== undefined ? 'Update' : 'Save'}
          submit={handleSubmit}
        />
      </div>
    </section>
  );
};

export default PostForm;
