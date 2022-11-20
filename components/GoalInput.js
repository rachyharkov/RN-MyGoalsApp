import { useState } from 'react';
import {
    Button, 
    TextInput, 
    StyleSheet,
    View,
    Modal,
    Image
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
                <Image style={styles.image} source={require('../assets/images/goal.png')}/>
                <TextInput 
                    style={styles.textInput} 
                    placeholder="What's your Course Goal?"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText} 
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Batal" onPress={props.onCancel} color="#f31282"/>
                    </View>
                    <View style={styles.button}>
                        <Button 
                            title="Tambah"
                            onPress={addGoalHandler}
                            color="#b180f0"
                        />
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
        padding: 16,
        backgroundColor: '#311b6b'
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
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
      },
      image: {
        width: 100,
        height: 100,
        margin: 20
      }
})