import { StyleSheet, View, Text, Pressable } from 'react-native'

function GoalItem(props) {
    return(
        <View style={styles.goalItem}>
            <Pressable 
                android_ripple={{color: '#fff'}} 
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({pressed}) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{props.textny}</Text>
            </Pressable>
        </View>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 0,
    borderRadius: 6,
    backgroundColor: "#3498db",
  },
  pressedItem: {
    // iOS: opacitynya bakal berubah
    opacity: 0.5
  },
  goalText: {
    color: "white",
    padding: 8
  },
});
