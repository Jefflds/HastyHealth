import { View } from 'react-native';
import Title from './src/ui/components/Title/Title';
import Main from './src/ui/components/Main/Main';
import { Appstyles } from './src/ui/styles/App/App.styles';

export default function App() {
  return (
    <View style={Appstyles.container}>
      <Title titleContent='HASTYHEALTH'/>
      <Main />
    </View>
  );
}


