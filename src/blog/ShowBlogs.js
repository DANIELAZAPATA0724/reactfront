import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const URI = "http://localhost:8000/blogs/";

const ShowBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    try {
      const response = await axios.get(URI);
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const deleteBlog = async (id) => {
    try {
      await axios.delete(`${URI}${id}`);
      getBlogs();
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  return (
    <div className="container mt-4">
      <Link to="/create" className="btn btn-primary mb-3">
        <i className="fas fa-plus"></i> Add Blog
      </Link>

      <div className="row">
        {blogs.map((blog) => (
          <div key={blog.id} className="col-md-4 mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={blog.Url_image}
                style={{ height: "200px", objectFit: "cover" }}
              />

              <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text>{blog.content}</Card.Text>
                <Link to={`/edit/${blog.id}`} className="btn btn-info me-2">
                  <i className="fas fa-edit"></i> Edit
                </Link>
                <Button variant="danger" onClick={() => deleteBlog(blog.id)}>
                  <i className="fas fa-trash-alt"></i> Delete
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ShowBlogs;
