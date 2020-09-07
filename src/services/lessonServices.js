import ENV from 'react-native-config';

export const getLessonsService = () => {
  // const getLessonsApiEndpoint = `${ENV.API_URL}/lessons`;
  return {
    status: 200,
    data: ['Lesson1', 'Lesson2', 'Lesson3'],
  };
};
