import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultImc from "../../partials/ResultImc/ResultImc";

const Form: React.FC = () => {
  const [height, setHeight] = useState<number | null>(null);
  const [weight, setWeight] = useState<number | null>(null);
  const [messageImc, setMessageImc] = useState<string>(
    "Preencha o Peso e a Altura"
  );
  const [imc, setImc] = useState<number | string | null>(null);
  const [textButton, setTextButton] = useState<string>("Calcular");

  const calculateImc = (w: number, h: number) => {
    if (weight && height) {
      let squaredHeight;
      if (h > 2) {
        squaredHeight = (h / 100) * (h / 100);
      } else {
        squaredHeight = h * h;
      }

      const imcResultCalculated = w / squaredHeight;
      const formattedImc = imcResultCalculated.toFixed(2);
      setImc(formattedImc);
    }
  };
  const handleOnPress = () => {
    setTextButton("Calculando...");
    calculateImc(Number(weight), Number(height));
    setMessageImc("Seu IMC é Igual A: ");
    setTimeout(() => {
      setTextButton("Calcular Novamente");
    }, 3000);
    setHeight(null);
    setWeight(null);
    setTextButton("Calcular");
  };

  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput
          onChangeText={(e) => setHeight(Number(e))}
          value={height?.toString()}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
        />
        <Text>Peso</Text>
        <TextInput
          placeholder="Ex. 75.365"
          keyboardType="numeric"
          onChangeText={(e) => setWeight(Number(e))}
          value={weight?.toString()}
        />
        <Button title={textButton} onPress={handleOnPress} />
      </View>
      <ResultImc ResultImc={imc} messageResultImc={messageImc} />
    </View>
  );
};

export default Form;
