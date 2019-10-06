import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';

import { HumanBody, SquareButton, Title } from '../../components';

import styles from './homeStyles';

const STEPS_KM = 0.000762;
const GOAL = 2500;

const DATA = [
  {
    id: 1,
    date: 'Sun 6 Des',
    cal: 820,
    steps: 1000,
    time: '0:18:22',
  },
  {
    id: 2,
    date: 'Mon 7 Des',
    cal: 820,
    steps: 1739,
    time: '0:18:22',
  },
  {
    id: 3,
    date: 'Tues 8 Des',
    cal: 820,
    steps: 2039,
    time: '0:18:22',
  },
  {
    id: 4,
    date: 'Wends 9 Des',
    cal: 820,
    steps: 300,
    time: '0:18:22',
  },
  {
    id: 5,
    date: 'Today',
    cal: 820,
    steps: 2039,
    time: '0:18:22',
  },
  {
    id: 6,
    date: 'Wends 11 Des',
    cal: 820,
    steps: 1539,
    time: '0:18:22',
  },
  {
    id: 7,
    date: 'Thurs 12 Des',
    cal: 820,
    steps: 2039,
    time: '0:18:22',
  },
];

/**
 * KM calcualtion
 * const distance = STEPS_KM * steps;
 *
 * default selectedDay will be moment() data
 * id's wil lbe date compare instead doing id compare
 * calories calculated at render time
 * Only two data is enough for now steps and date
 *
 *  */

const HomeScreen = () => {
  const [selectedDay, setSelectedDay] = useState(5);
  const [selectedStepCount, setSelectedStepCount] = useState(2039);
  const currentDate = 5;

  const listItem = item => {
    return (
      <View style={styles.itemWrapper}>
        <SquareButton
          title={item.date}
          onPress={() => {
            setSelectedDay(item.id);
            setSelectedStepCount(item.steps);
          }}
          isActive={selectedDay === item.id}
          disabled={currentDate < item.id}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.daysWrapper}>
        <FlatList
          data={DATA}
          initialScrollIndex={selectedDay}
          renderItem={({ item }) => listItem(item)}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          horizontal
        />
      </View>

      <HumanBody goal={GOAL} steps={selectedStepCount} />

      <View style={styles.actionsWrapper}>
        <View style={styles.actionsItem}>
          <Title
            variant="secondaryTitle"
            title={selectedStepCount ? (selectedStepCount / 4).toFixed(0) : 0}
          />
          <Title title="cal" size={14} variant="subTitle" />
        </View>

        <View style={styles.actionsItem}>
          <Title
            variant="secondaryTitle"
            title={selectedStepCount ? '0:18:22' : 0}
          />
          <Title title="Time" size={14} variant="subTitle" />
        </View>
        <View style={styles.actionsItem}>
          <Title
            variant="secondaryTitle"
            title={
              selectedStepCount ? (selectedStepCount * STEPS_KM).toFixed(2) : 0
            }
          />
          <Title title="km" size={14} variant="subTitle" />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
