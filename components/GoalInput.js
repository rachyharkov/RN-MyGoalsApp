import { useState } from 'react';
import {
    Button, 
    TextInput, 
    StyleSheet,
    View,
    Modal
} from 'react-native';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.textInput} 
                    placeholder="Ur Course goal"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText} 
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button 
                            title="Add Goal"
                            onPress={addGoalHandler}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        padding: 16
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#ccccccc',
        width: '100%',
        marginRight: 8,
        padding: 8
      },
      buttonContainer: {
        marginTop: 15,
        flexDirection: 'row',
      },
      button: {
        width: 100,
        marginHorizontal: 8
      }
})