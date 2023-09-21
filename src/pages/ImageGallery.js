import React, { useEffect, useState } from "react";
import { database } from "../Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import ImageComponent from "../components/ImageComponent";

import { ImageData } from "../ImageData";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function ImageGallery() {
  const [search, setSearch] = useState("");

  const [images, setImages] = useState(ImageData);

  const handleDrag = (results) => {
    if (!results.destination) return;

    const updatedImages = [...images];
    const [reorderImages] = updatedImages.splice(results.source.index, 1);
    updatedImages.splice(results.destination.index, 0, reorderImages);

    setImages(updatedImages);
  };

  const [authUser, setAuthUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(database, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
        setError("User authentication failed.");
      }
    });
  }, []);

  const history = useNavigate();
  function handleClick() {
    signOut(database).then((val) => {
      console.log(val);
      history("/");
    });
  }

  return (
    <div>
      {error ? (
        <div className="error">
          {error}
          <Link to="/">Sign in here</Link>
        </div>
      ) : (
        <>
          <section>
            <div className="header">
              <h3>ImageGallery</h3>
              <button onClick={handleClick} className="logout">
                Logout
              </button>
            </div>
          </section>
          <section>
            <div className="head">
              <h1>"Celebrating Life's Moments in Every Frame." </h1>
              <p>
                "Capturing Moments, Creating Memories: Where Images Come to
                Life."
              </p>
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                name="search"
                id=""
                placeholder="search"
              />
            </div>
          </section>
          <section>
            <DragDropContext onDragEnd={handleDrag}>
              <div className="imagesList">
                <Droppable droppableId="items" direction="horizontal">
                  {(provided) => (
                    <div
                      {...provided.droppableProps}
                      className="image-grid"
                      ref={provided.innerRef}
                    >
                      {images
                        .filter((image) => {
                          return search.toLowerCase() === ""
                            ? image
                            : image.tags.includes(search);
                        })
                        .map((image, index) => (
                          <Draggable
                            draggableId={image.id}
                            key={image.id}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                {...provided.dragHandleProps}
                                {...provided.draggableProps}
                                ref={provided.innerRef}
                              >
                                <ImageComponent
                                  image={image.image}
                                  tags={image.tags}
                                  title={image.title}
                                />
                              </div>
                            )}
                          </Draggable>
                        ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </DragDropContext>
          </section>
          <footer>
            <h5>Built by The Fullstack Mechanic &copy; 2023</h5>
          </footer>
        </>
      )}
    </div>
  );
}

export default ImageGallery;
