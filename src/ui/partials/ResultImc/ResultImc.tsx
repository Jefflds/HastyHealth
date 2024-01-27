import { View, Text, TouchableOpacity, Share } from "react-native";
import { ResultImcStyles } from "../../styles/ResultImc/ResultImc.styles";

type ResultImcProps = {
  messageResultImc: string;
  ResultImc: string | number | null | undefined;
};

const ResultImc: React.FC<ResultImcProps> = ({
  messageResultImc,
  ResultImc,
}) => {
  const onShare = async () => {
    await Share.share({
      message: `Meu IMC é de ${ResultImc}`,
    });
  };
  return (
    <View style={ResultImcStyles.ResultImc}>
      <Text style={ResultImcStyles.information}>{messageResultImc}</Text>
      <Text style={ResultImcStyles.numberImc}>{ResultImc}</Text>
      <View style={ResultImcStyles.boxShareButton}>
        <TouchableOpacity onPress={onShare} style={ResultImcStyles.shared}>
          <Text style={ResultImcStyles.sharedText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResultImc;
