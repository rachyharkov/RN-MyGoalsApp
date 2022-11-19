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

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    })
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals} 
          renderItem={(itemData) => {
            return (
              <GoalItem 
                textny={itemData.item.text} 
                onDeleteItem={deleteGoalHandler} 
                id={itemData.item.id}
              />
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