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
    const result = await Share.share({
      message: `Meu IMC é de ${ResultImc}`,
    });
  };
  return (
    <View style={ResultImcStyles.ResultImc}>
      <View style={ResultImcStyles.boxShareButton}>
        {ResultImc != null ? (
          <TouchableOpacity onPress={onShare} style={ResultImcStyles.shared}>
            <Text style={ResultImcStyles.sharedText}>Share</Text>
          </TouchableOpacity>
        ) : null}
      </View>
      <Text style={ResultImcStyles.information}>{messageResultImc}</Text>
      <Text style={ResultImcStyles.numberImc}>{ResultImc}</Text>
    </View>
  );
};

export default ResultImc;
