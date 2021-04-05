import React from 'react'; //need to import
import ReactDom from 'react-dom'; // normally only here
import './index.css'

// stateless functional component
// always return JSX
const books = [
    {
        title: 'The Code Breaker',
        author: 'WALTER ISAACSON',
        img: 'https://m.media-amazon.com/images/I/71CedQlX1fL.jpg'
    },
    {
        title: 'The Code Breaker 2',
        author: 'WALTER ISAACSON 2',
        img: 'https://m.media-amazon.com/images/I/71CedQlX1fL.jpg'
    }
]

function BookList() {
    return (
        <section className='booklist'>
            {books.map((book) => {
                const {img, title, author} = book;
                return (
                    <Book book = {book}/>
                )
            })}
        </section>
    );
}

const Book = (props) => {

    return (
        <article className='book'>
            <img src={props.book.img} alt="" />
            <h1>{props.book.title}</h1>
            <h3>{props.book.author}</h3>

        </article>
    )
}

ReactDom.render(<BookList/>, document.getElementById('root'));
