import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPath } from '../pathSlice';

const Blogpage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(setPath('Blogpage'));
    }, [dispatch]);

    return (
        <div>
           <h1> Blogpage </h1>
        </div>
    );
}

export default Blogpage;
