import React from 'react';

export const Form = () =>{
    return(
    <div>
        <form className="search-form">
            <input className="search-bar" type="text" placeholder="Search for your movie"></input>
            <button className="search-button">Search</button>
        </form>
    </div>
    );
}

export default Form;