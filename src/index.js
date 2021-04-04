import React from 'react'; //need to import
import ReactDom from 'react-dom'; // normally only here
import './index.css'

// stateless functional component
// always return JSX

function BookList() {
    return (
        <section className='booklist'>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
        </section>
    );
};

const Book = () => {
    return <article className='book'>
        <Image/>
        <Title/>
        <Author/>
    </article>
}
const Image = () => {
    return <img src="https://m.media-amazon.com/images/I/71CedQlX1fL.jpg" alt="" />
}
const Title = () => {
    return <h1>The Code Breaker</h1>
}
const Author = () => {
    return <h3>WALTER ISAACSON</h3>
}


ReactDom.render(<BookList/>, document.getElementById('root'));
