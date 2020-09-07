// @flow
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import LessonList from '../components/lists/lessonList';
import {getLessonsAction} from '../actions/lessonActions';

const LessonsScreen = () => {
  const lessons = useSelector((state) => state.lesson.lessons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLessonsAction());
  }, [dispatch]);

  return (
    <View>
      {lessons && lessons.length ? (
        <LessonList lessons={lessons} />
      ) : (
        <Text>No Lessons</Text>
      )}
    </View>
  );
};

export default LessonsScreen;
