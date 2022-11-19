import { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  FlatList
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {


  const [courseGoals, setCourseGoals] = useState([])

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentGoals => [
        ...currentGoals,
        {
          id: Math.random().toString(),
          text: enteredGoalText
        }
    ]);

    console.log(courseGoals);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals} 
          renderItem={(itemData) => {
            return (
              <GoalItem textny={itemData.item.text} />
            )
          }}
          alwaysBounceVertical={false}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 7
  }
})