import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPath } from '../pathSlice';

const Homepage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(setPath('Homepage'));
    }, [dispatch]);
  return (
    <div>
       <h1> Homepage </h1>
    </div>
  )
}

export default Homepage