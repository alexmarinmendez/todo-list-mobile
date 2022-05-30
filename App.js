import { StyleSheet, View, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { themes } from './src/constants/themes';

export default function App() {
  const [task, setTask] = useState("");

  const handleChangeText = (value) => {
    setTask(value);
    console.log(task);
  }

  return (
    <View style={themes.container}>
      <View style={styles.containerTask}>
        <TextInput
          style={styles.inputTask}
          placeholder='Add new task'
          value={task} 
          onChangeText={text => handleChangeText(text)} />
        <Button title='ADD' color='#8CBCB9'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerTask: {
    padding: 25,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inputTask: {
    borderColor: '#8CBCB9',
    borderBottomWidth: 1,
    marginBottom: 10,
    width: '60%',
    height: 40,
    fontSize: 14,
    color: '#212121',
  }
});

