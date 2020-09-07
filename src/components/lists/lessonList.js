import React from 'react';
import {FlatList, Text} from 'react-native';
import PropTypes from 'prop-types';

const LessonList = (props) => {
  return (
    <FlatList
      data={props.lessons}
      renderItem={({item}) => <Text>{item}</Text>}
      keyExtractor={(item, i) => i.toString()}
    />
  );
};

LessonList.propTypes = {
  lessons: PropTypes.array,
};

export default LessonList;
