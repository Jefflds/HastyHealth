import { View, Text } from "react-native";

type TitleProps = {
  titleContent: string;
};

const Title: React.FC<TitleProps> = ({ titleContent }) => {
  return (
    <View>
      <Text>{titleContent}</Text>
    </View>
  );
};

export default Title;
