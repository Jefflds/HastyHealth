import { StyleSheet, View } from 'react-native';
import Title from './src/ui/components/Title/Title';
import Main from './src/ui/components/Main/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <Title titleContent='HASTYHEALTH'/>
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
