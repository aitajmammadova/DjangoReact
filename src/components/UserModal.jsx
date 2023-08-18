import React from 'react';
import { useEffect, useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { logout } from '../store/features/authSlice'
 
const UserModal = ({
    currentUser,
    handleUserExit,

}) => {
     
    const dispatch = useDispatch();

    const handleLogout = () => {
    
        dispatch(logout());
        
    };
 
 
    return (
        <div className="user-modal">
            <div className='i' onClick={handleUserExit}>
                <i class="fa-solid fa-xmark"></i>
                </div>
            <div className="user-img">
                <img src="/static/client-image-1.jpg"></img>
            </div>
            <div>
                <p>{currentUser.email}</p>
            </div>
 
            <div className='logout-user' onClick={handleLogout}>
                <button className='blue_btn'><p>Log Out</p></button>
            </div>
             
 
            
        </div>

    );
};

export default UserModal;
