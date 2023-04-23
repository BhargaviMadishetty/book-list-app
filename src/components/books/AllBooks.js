import React from "react";
import './allbooks.css';
import Logout from '../user/logout'
import { Link } from "react-router-dom";

const AllBooks = () => {
    return (
        <div id="full-container">
            <h2>Books List</h2>
            <Link to="/" ><div id="logout"><Logout /></div></Link>
            <Link to="/add"><button id="addnew">Add New Book</button></Link>
            <div id="main-container">
                <div id="container1">
                    <div className="card">
                        <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" id="book-image" alt="book image" />
                        <div id="book-title">The Hunger Games</div>
                        <div id="book-author">Suzanne Collins</div>
                        <div id="book-genre">Popular</div>
                    </div>
                </div>
                <div id="container2">
                    <div className="card">
                        <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" id="book-image" alt="book image" />
                        <div id="book-title">The Little Red Book</div>
                        <div id="book-author">Mao Zedong</div>
                        <div id="book-genre">Political</div>
                    </div>
                </div>
                <div id="container3">
                    <div className="card">
                        <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" id="book-image" alt="book image" />
                        <div id="book-title">The Pilgrim's Progress</div>
                        <div id="book-author">John Bunyan</div>
                        <div id="book-genre">Fantasy</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllBooks;