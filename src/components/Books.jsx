import React from 'react';
import { useSelector } from 'react-redux';
import { useGetBooksQuery } from '../features/api/apiSlice';
import Error from '../ui/Error';
import Loading from '../ui/Loading';
import Book from './Book';

function Books() {
  const searchTerm = useSelector((state) => state.filter.searchWord);

  const filterTerm = useSelector((state) => state.filter.filterTerm);

  const {
    data: books,
    isLoading,
    isError,
  } = useGetBooksQuery({ searchTerm, filterTerm });

  let content = null;
  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <Error error="There was an error occured!" />;

  if (!isLoading && !isError && books?.length === 0)
    content = <p>No books found!</p>;

  if (!isLoading && !isError && books?.length > 0)
    content = books.map((book) => <Book key={book.id} book={book} />);

  return (
    <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
      {content}
    </div>
  );
}

export default Books;
