import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width} = Dimensions.get('window');

const WeeklyCalendar = ({selectedDate, setSelectedDate}) => {
  const [currentWeekStart, setCurrentWeekStart] = useState(
    moment().startOf('week'),
  );

  const daysInWeek = [...Array(7)].map((_, i) =>
    moment(currentWeekStart).add(i, 'days'),
  );

  const handleWeekScroll = direction => {
    const newStart =
      direction === 'next'
        ? moment(currentWeekStart).add(1, 'week').startOf('week')
        : moment(currentWeekStart).subtract(1, 'week').startOf('week');
    setCurrentWeekStart(newStart);
    setSelectedDate(moment(newStart)); // optionally reset selection to start of new week
  };

  return (
    <View style={styles.wrapper}>
      {/* Month and Year */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => handleWeekScroll('prev')}>
          <Ionicons name="arrow-back-circle" size={30} color="#307BA1" />
        </TouchableOpacity>

        <Text style={styles.monthLabel}>
          {currentWeekStart.format('MMMM YYYY')}
        </Text>

        <TouchableOpacity onPress={() => handleWeekScroll('next')}>
          <Ionicons
            name="arrow-forward-circle-sharp"
            size={30}
            color="#307BA1"
          />
        </TouchableOpacity>
      </View>

      {/* Days */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.calendarContainer}>
        {daysInWeek.map(day => {
          const isSelected = selectedDate && day.isSame(selectedDate, 'day');
          return (
            <TouchableOpacity
              key={day.format('YYYY-MM-DD')}
              onPress={() => setSelectedDate(day)}
              style={[styles.dayContainer, isSelected && styles.selectedDay]}>
              <Text
                style={[styles.dayLabel, isSelected && styles.selectedText]}>
                {day.format('ddd')}
              </Text>
              <Text
                style={[styles.dateLabel, isSelected && styles.selectedText]}>
                {day.format('D')}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  monthLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  calendarContainer: {
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  dayContainer: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
    backgroundColor: '#f2f2f2',
    width: width / 10,
  },
  selectedDay: {
    backgroundColor: '#307BA1',
  },
  dayLabel: {
    fontSize: 10,
    color: '#333',
  },
  dateLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
  selectedText: {
    color: 'white',
  },
});

export default WeeklyCalendar;
