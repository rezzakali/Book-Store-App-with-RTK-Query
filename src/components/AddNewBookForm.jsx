import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddBookMutation } from '../features/api/apiSlice';

function AddNewBookForm() {
  const [input, setInput] = useState({
    name: '',
    author: '',
    thumbnail: '',
    price: '',
    rating: '',
    featured: false,
  });
  const navigate = useNavigate();

  const [addBook, { isSuccess, isLoading, isError }] = useAddBookMutation();

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setInput({ ...input, [name]: value });
  };

  const resetForm = () => {
    setInput({
      name: '',
      author: '',
      thumbnail: '',
      price: '',
      rating: '',
      featured: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(input);
    resetForm();
  };

  useEffect(() => {
    if (isSuccess) navigate('/');
  }, [isSuccess, navigate]);

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label htmlFor="lws-bookName">Book Name</label>
        <input
          required
          className="text-input"
          type="text"
          id="lws-bookName"
          name="name"
          value={input.name}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="lws-author">Author</label>
        <input
          required
          className="text-input"
          type="text"
          id="lws-author"
          name="author"
          value={input.author}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="lws-thumbnail">Image Url</label>
        <input
          required
          className="text-input"
          type="text"
          id="lws-thumbnail"
          name="thumbnail"
          value={input.thumbnail}
          onChange={handleInputChange}
        />
      </div>

      <div className="grid grid-cols-2 gap-8 pb-4">
        <div className="space-y-2">
          <label htmlFor="lws-price">Price</label>
          <input
            required
            className="text-input"
            type="number"
            id="lws-price"
            name="price"
            value={input.price}
            onChange={handleInputChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="lws-rating">Rating</label>
          <input
            required
            className="text-input"
            type="number"
            id="lws-rating"
            name="rating"
            min="1"
            max="5"
            value={input.rating}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="flex items-center">
        <input
          id="lws-featured"
          type="checkbox"
          name="featured"
          className="w-4 h-4"
          checked={input.featured}
          onChange={handleInputChange}
        />
        <label htmlFor="lws-featured" className="ml-2 text-sm">
          {' '}
          This is a featured book{' '}
        </label>
      </div>

      <button
        type="submit"
        className="submit"
        id="lws-submit"
        disabled={isLoading}
      >
        Add Book
      </button>
      {isSuccess && <p>Book added successfully!</p>}
      {!isLoading && isError && <p>There was an error occured!</p>}
    </form>
  );
}

export default AddNewBookForm;
