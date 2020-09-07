// @flow
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Text} from 'react-native';

import {getLessonsAction} from '../actions/lessonActions';

const TopScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLessonsAction());
  }, [dispatch]);

  return (
    <>
      <Text> LESSONS</Text>
    </>
  );
};

export default TopScreen;
