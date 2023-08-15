import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@rneui/themed';

export function HistoryScreen(): JSX.Element {
  return (
    <>
      <View style={styles.buttonContainer}>
        <Button
          title="+"
          buttonStyle={{
            backgroundColor: '#02fa30',
            borderRadius: 25,

          }}
          titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
          containerStyle={{
            height: 50,
            width: 50,
          }}
          onPress={() => console.log('aye')} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Set your desired background color
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20, // Adjust the value for desired distance from the bottom
    right: 20, // Adjust the value for desired distance from the right
  },
})