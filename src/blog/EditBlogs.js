import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const URI = "http://localhost:8000/blogs/";

const EditBlogs = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [Url_image, setImageUrl] = useState("");
  const [previewImageUrl, setPreviewImageUrl] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getBlogById();
  }, []);

  const getBlogById = async () => {
    const res = await axios.get(URI + id);
    setTitle(res.data.title);
    setContent(res.data.content);
    setImageUrl(res.data.Url_image);
    setPreviewImageUrl(res.data.Url_image);
  };

  // Procedimiento para actualizar
  const update = async (e) => {
    e.preventDefault();
    await axios.put(URI + id, {
      title: title,
      content: content,
      Url_image: Url_image,
    });
    navigate("/");
  };

  // Manejar cambios en la URL de la imagen y actualizar la vista previa
  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
    setPreviewImageUrl(e.target.value); // Actualizar la vista previa en tiempo real
  };

  // Limpiar la URL de la imagen y la vista previa
  const clearImageUrl = () => {
    setImageUrl("");
    setPreviewImageUrl("");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Edit POST</h3>
            </div>
            <div className="card-body">
              <form onSubmit={update}>
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
                  <label className="form-label">Image URL</label>
                  <div className="input-group">
                    <input
                      value={Url_image}
                      onChange={handleImageUrlChange}
                      type="text"
                      className="form-control"
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={clearImageUrl}
                    >
                      Clear
                    </button>
                  </div>
                  {previewImageUrl && (
                    <div className="text-center">
                      <img
                        src={previewImageUrl}
                        alt="Preview"
                        className="img-thumbnail mt-9 mx-auto d-block"
                        style={{ maxHeight: "300px", maxWidth: "100%" }}
                      />
                    </div>
                  )}
                </div>
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBlogs;
