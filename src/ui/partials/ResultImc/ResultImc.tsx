import { View, Text } from "react-native"
import { ResultImcStyles } from "../../styles/ResultImc/ResultImc.styles";

type ResultImcProps = {
    messageResultImc: string;
    ResultImc: string | number | null | undefined;
}

const ResultImc: React.FC<ResultImcProps> = ({messageResultImc, ResultImc}) => {
  return (
    <View style={ResultImcStyles.ResultImc}>
        <Text style={ResultImcStyles.information}>{messageResultImc}</Text>
        <Text style={ResultImcStyles.numberImc}>{ResultImc}</Text>
    </View>
  )
}

export default ResultImc