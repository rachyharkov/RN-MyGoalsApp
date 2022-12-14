import { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  FlatList,
  Button
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([])

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endGoalHandler(){
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentGoals => [
        ...currentGoals,
        {
          id: Math.random().toString(),
          text: enteredGoalText
        }
    ]);
    endGoalHandler()
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    })
  }

  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <Button title='Tambah Pencapaian mu!' color='#a065ce' onPress={startAddGoalHandler}/>
        <GoalInput
          visible={modalIsVisible} 
          onAddGoal={addGoalHandler}
          onCancel={endGoalHandler}
        />
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#311b6b'
  },
  goalsContainer: {
    flex: 7
  }
})