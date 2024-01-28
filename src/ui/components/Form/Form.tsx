import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard,
  FlatList,
} from "react-native";
import ResultImc from "../../partials/ResultImc/ResultImc";
import { FormStyles } from "../../styles/Form/Form.styles";

const Form: React.FC = () => {
  const [height, setHeight] = useState<number | null>(null);
  const [weight, setWeight] = useState<number | null>(null);
  const [messageImc, setMessageImc] = useState<string>(
    "Preencha o Peso e a Altura"
  );
  const [imc, setImc] = useState<number | string | null>(null);
  const [textButton, setTextButton] = useState<string>("Calcular");
  const [errormMessage, setErrorMessage] = useState<string | null>(null);
  const [imcList, setImcList] = useState<{ id: number; imc: string }[]>([]);

  const calculateImc = (w: number, h: number) => {
    if (weight && height) {
      let squaredHeight;
      if (h > 2.5) {
        squaredHeight = (h / 100) * (h / 100);
      } else {
        squaredHeight = h * h;
      }

      const imcResultCalculated = w / squaredHeight;
      const formattedImc = imcResultCalculated.toFixed(2);
      setImcList((arr) => [
        ...arr,
        { id: new Date().getTime(), imc: formattedImc },
      ]);
      setImc(formattedImc);
    }
  };

  const verificationImc = () => {
    if (imc == null) {
      Vibration.vibrate();
      setErrorMessage("Campo Obrigatório*");
    }
  };

  const handleOnPress = () => {
    if (weight == null || height == null) {
      verificationImc();
    } else {
      calculateImc(weight, height);

      setHeight(null);
      setWeight(null);
      setMessageImc("Seu IMC é Igual A:");
      setTimeout(() => {
        setTextButton("Calcular Novamente");
        setImc(null);
        setMessageImc("Preencha o Peso e a Altura");
      }, 5000);

      setErrorMessage(null);
    }
  };

  return (
    <View style={FormStyles.FormContext}>
      {imc == null ? (
        <Pressable style={FormStyles.form} onPress={Keyboard.dismiss}>
          <Text style={FormStyles.FormLabel}>Altura</Text>
          <Text style={FormStyles.errorMessage}>{errormMessage}</Text>
          <TextInput
            onChangeText={(e) => setHeight(Number(e.replace(",", ".")))}
            value={height?.toString()}
            placeholder="Ex. 1.75"
            keyboardType="numeric"
            style={FormStyles.FormInput}
          />
          <Text style={FormStyles.FormLabel}>Peso</Text>
          <Text style={FormStyles.errorMessage}>{errormMessage}</Text>
          <TextInput
            placeholder="Ex. 75.365"
            keyboardType="numeric"
            onChangeText={(e) => setWeight(Number(e.replace(",", ".")))}
            value={weight?.toString()}
            style={FormStyles.FormInput}
          />

          <TouchableOpacity
            onPress={handleOnPress}
            style={FormStyles.ButtonCalculator}
          >
            <Text style={FormStyles.TextButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </Pressable>
      ) : (
        <View style={FormStyles.exhibitionResultIMC}>
          <ResultImc ResultImc={imc} messageResultImc={messageImc} />
        </View>
      )}
      <FlatList
        style={FormStyles.listasImc}
        data={imcList.reverse()}
        renderItem={({ item }) => {
          return (
            <Text style={FormStyles.resultImcItem}>
              <Text style={FormStyles.textResultItemList}>Resultado IMC = </Text>
              {item.imc}
            </Text>
          );    
        }}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Form;
