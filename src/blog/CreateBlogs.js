import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';


const URI = "http://localhost:8000/blogs/";

const CreateBlogs = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [Url_image, setUrl_image] = useState("");
  const [errors, setErrors] = useState({});

  const store = async (e) => {
    e.preventDefault();

    if (!isValidUrl(Url_image)) {
      setErrors({ Url_image: "Ingrese una URL válida para la imagen." });
      return;
    }

    try {
      await axios.post(URI, { title, content, Url_image });
      clearForm();
    } catch (error) {
      console.error("Error al almacenar el blog:", error);
    }
  };

  const clearForm = () => {
    setTitle("");
    setContent("");
    setUrl_image("");
    setErrors({});
  };

  const isValidUrl = (url) => {
    return url.startsWith("http://") || url.startsWith("https://");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Create Blog</h3>
            </div>
            <div className="card-body">
              <form onSubmit={store}>
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Content</label>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">URL de la imagen</label>
                  <input
                    value={Url_image}
                    onChange={(e) => setUrl_image(e.target.value)}
                    type="text"
                    className={`form-control ${
                      errors.Url_image && "is-invalid"
                    }`}
                  />
                  {errors.Url_image && (
                    <div className="invalid-feedback">{errors.Url_image}</div>
                  )}
                </div>
                <button type="submit" className="btn btn-primary">
                  Store
                </button>
              </form>
              {Url_image && (
                <div className="mt-4 text-center">
                  <h5>Image Preview</h5>
                  <img
                    src={Url_image}
                    className="img-fluid mx-auto"
                    alt="Preview"
                    style={{ maxHeight: "300px", maxWidth: "100%" }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogs;
