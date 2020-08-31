import React from 'react'
import "../Css/Home.css"
import {  Link } from "react-router-dom";
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Search from '../Components/Search';

function Home() {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerLeft">
                    {/* Link 1 */}
                    <Link to="/about">About</Link>
                    {/* Link 2 */}
                    <Link to="/store">Store</Link>
                </div>
                <div className="home__headerRight">
                    {/* Link 1 */}
                    <Link to="/gmail">Gmail</Link>
                    {/* Link 2 */}
                    <Link to="/images">Images</Link>
                    {/* Icon */}
                    <AppsIcon />
                    {/* Avatar */}
                    <Avatar />
                </div>
            </div>

            <div className="home__body">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />
                <div className="home__inputContainer">
                    {/* Search */}
                    <Search/>
                </div>
            </div>
        </div>
    )
}

export default Home
