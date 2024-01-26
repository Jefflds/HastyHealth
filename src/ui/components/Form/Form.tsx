import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import ResultImc from "../../partials/ResultImc/ResultImc";

const Form: React.FC = () => {
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [messageImc, setMessageImc] = useState<string>(
    "Preencha o Peso e a Altura"
  );
  const [imc, setImc] = useState<number | null>(null);
  const [textButton, setTextButton] = useState<string>("Calcular");

  const ImcCalculator = (w: number, h: number) => {
    const imcResult = w / (h * h);
    setImc(imcResult);
  };

  const handleOnPress = () => {
    try {
      if (weight && height) {
        ImcCalculator(Number(weight), Number(height));
        setMessageImc(`Seu IMC é igual a: ${imc}`);
      } else {
        setMessageImc("Preencha o Peso e a Altura");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setTextButton("Calcular Novamente");
    }
  };

  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput
          onChangeText={(text) => setHeight(text)}
          value={height}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
        />
        <Text>Peso</Text>
        <TextInput
          placeholder="Ex. 75.365"
          keyboardType="numeric"
          onChangeText={(text) => setWeight(text)}
          value={weight}
        />
        <TouchableOpacity onPress={handleOnPress}>
          <View>
            <Text>{textButton}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ResultImc ResultImc={imc} messageResultImc={messageImc} />
    </View>
  );
};

export default Form;
