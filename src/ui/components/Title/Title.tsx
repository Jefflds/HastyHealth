import { View, Text } from "react-native";
import { TitleStyles } from "../../styles/Title/Title.styles";

type TitleProps = {
  titleContent: string;
};

const Title: React.FC<TitleProps> = ({ titleContent }) => {
  return (
    <View style={TitleStyles.boxTitle}>
      <Text style={TitleStyles.textTitle}>{titleContent}</Text>
    </View>
  );
};

export default Title;
