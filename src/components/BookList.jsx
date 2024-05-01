import React, {useState, useEffect} from 'react'

export default ({updated, setUpdated}) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    
    fetch("http://localhost:3002/books")
    .then(res=>res.json())
    .then(data=>{
        setBooks(data);
    })
    }, [updated])

    const handleDelete = (e) => {
        fetch(`http://localhost:3002/books/${e.target.id}`, {
            method: 'DELETE',
        }).then(() => {
            setUpdated(!updated);
        });
    }

  return (
    <>
    <h1>Book List</h1>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Rating</th>
                <th>Year Published</th>
                <th></th>
                {/* <th></th> */}
            </tr>
        </thead>
        <tbody>
            {books.map((book) => (
                <tr key={book.id}>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.rating}</td>
                    <td>{book.year_published}</td>
                    <td><button id={book.id} onClick={handleDelete} >Delete</button></td>
                    {/* <td><button id={book.id} onClick={handleEdit} >Edit</button></td> */}
                </tr>
            ))}
        </tbody>
    </table>
    </>
  )
}
