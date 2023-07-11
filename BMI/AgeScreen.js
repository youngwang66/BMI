import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import UserContext from './UserContext';

const AgeScreen = () => {
  const { user } = useContext(UserContext);
  const { age } = user;

  // Calculate age in weeks and days
  const calculatedWeeks = Math.floor(age / 7);
  const calculatedDays = age % 7;

  return (
    <View>
      <Text>Age in Weeks: {calculatedWeeks}</Text>
      <Text>Age in Days: {calculatedDays}</Text>
    </View>
  );
};
export default AgeScreen;