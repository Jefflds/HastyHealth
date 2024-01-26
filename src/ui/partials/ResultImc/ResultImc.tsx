import { View, Text } from "react-native"

type ResultImcProps = {
    messageResultImc: string;
    ResultImc: string | number | null | undefined;
}

const ResultImc: React.FC<ResultImcProps> = ({messageResultImc, ResultImc}) => {
  return (
    <View>
        <Text>{messageResultImc}</Text>
        <Text>{ResultImc}</Text>
    </View>
  )
}

export default ResultImc