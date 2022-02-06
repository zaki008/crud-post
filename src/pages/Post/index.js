import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Pagination from '../../components/pagination';
import TablePost from '../../components/TablePost';
import PostIdb from '../../data/postIdb';

const Post = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false)
  const [postsPerPage] = useState(10);
  useEffect(() => {
    getData();
  }, []);

  // get Current Posts
 const indexOfLastPost = currentPage * postsPerPage;
 const indexOfFirstPost = indexOfLastPost - postsPerPage;
 const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
 const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleEdit = (e, id) => {
    navigate(`/post/edit/${id}`);
  }

  const handleDelete = (e) => {
    const id = parseInt(e.target.value)
    if (window.confirm('Anda Yakin Menghapus Data Ini ?')){
      PostIdb.deletePost(id).then(() => {
        toast.success('Anda Berhasil Menghapus Data');
      }).catch((err) => err.message)
    }else{
      toast.error('Anda Gagal Menghapus Data')
    } 
    getData();
  }

  const getData = async () => {
    setLoading(true);
    PostIdb.getPosts().then((res) => {
      const data = res.data;
      setPosts([...data]);
      setLoading(false)
    }).catch((err) => {
      console.log(err.message)
      setLoading(false);
    })
  };
  

  return (
    <section className='post'>
      <ToastContainer position='top-center' />
      <h1>Post Table</h1>
      <Link to={'/post/create'} className='btn btn-primary link'>
        Create New Post
      </Link>
      <TablePost
        post={posts}
        currentPosts={currentPosts}
        loading={loading}
        edit={handleEdit}
        delete={handleDelete}
      />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </section>
  );
};

export default Post;
