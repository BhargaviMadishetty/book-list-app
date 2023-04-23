import React from "react";
import './addbook.css';
import Logout from "../user/logout";
import { Link } from "react-router-dom";

const Addbook = () => {

    return (
        <div id="form-container">
            <div>
                <Link to="/"><span id="logout"><Logout /></span></Link>
                <Link to="/all"><button id="show">Show Book List</button></Link>
            </div>
            <h2>ADD BOOK</h2>
            <h4>Create new book</h4>
            <form method="post">
                <input type="text" placeholder="Title of the Book" /><br />
                <input type="text" placeholder="ISBN" /><br />
                <input type="text" placeholder="Author" /><br />
                <input type="text" placeholder="Describe this book" /><br />
                <input type="text" placeholder="published_date" /><br />
                <input type="text" placeholder="Publisher of this Book" /><br />
                <input type="text" placeholder="Genre" />
                <Link to="/all"><button id="submit">Submit</button></Link>
            </form>
        </div>
    );
}

export default Addbook;