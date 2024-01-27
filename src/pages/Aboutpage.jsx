import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPath } from '../pathSlice';

const Aboutpage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPath('Aboutpage'));
  }, [dispatch]);

  return (
    <div>
        <h1>Aboutpage</h1>
    </div>
  );
};

export default Aboutpage;
