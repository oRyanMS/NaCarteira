import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from '../../config/firebaseconfig';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { MotiView } from 'moti';

const Entrada = () => {
  const [label, setLabel] = useState("");
  const [value, setValue] = useState("");
  const [date, setDate] = useState(new Date());
  const [type, setType] = useState(true);
  const navigation = useNavigation();

  const [showDatePicker, setShowDatePicker] = useState(false);

  const user = auth.currentUser;

  function showDatepicker() {
    setShowDatePicker(true);
  }

  function hideDatepicker() {
    setShowDatePicker(false);
  }

  function handleDateChange(event, selectedDate) {
    hideDatepicker();
    if (selectedDate) {
      setDate(selectedDate);
    }
  }

  function formatarDataParaExibicao(data) {
    return format(data, "dd/MM/yyyy", { locale: ptBR });
  }

  function formatValue(text) {
    let cleanValue = text.replace(/[^0-9]/g, '');

    if (cleanValue.length >= 3) {
      let formattedValue = '';
      for (let i = cleanValue.length - 1, j = 0; i >= 0; i--, j++) {
        if (j > 0 && j % 3 === 0) {
          formattedValue = '.' + formattedValue;
        }
        formattedValue = cleanValue[i] + formattedValue;
      }
      return formattedValue;
    } else {
      return cleanValue;
    }
  }

  function clearFormFields() {
    setLabel("");
    setValue("");
    setDate(new Date());
    setType(true); // Você pode definir o valor padrão correto aqui
  }

  function cadastrar() {
    const valorNumerico = parseFloat(value.replace('.', '').replace(',', '.'));

    addDoc(collection(db, `users/${user.uid}/Movements`), {
      label: label,
      value: valorNumerico,
      date: date,
      type: type,
    }).then((docRef) => {
      clearFormFields(); // Chame a função para limpar os campos
      navigation.navigate('Home');
    }).catch(error => {
      console.error("Erro ao adicionar:", error);
    });
  }

  return (
    <View style={styles.container}>
      <MotiView
        style={styles.containerheader}
        from={{
          translateX: -150
        }}
        animate={{
          translateX: 0
        }}
        transition={{
          type: "timing",
          duration: 700,
          delay: 200,
        }}
      >
      </MotiView>
      <MotiView
        style={styles.containerForm}
        from={{
          translateY: 300
        }}
        animate={{
          translateY: 0
        }}
        transition={{
          type: "timing",
          duration: 300,
        }}
      >
        <Text style={styles.title}> Descrição </Text>
        <TextInput
          placeholder="Descrição da entrada do valor"
          value={label}
          onChangeText={setLabel}
          style={styles.input}
        />
        <Text style={styles.title}> Valor </Text>
        <TextInput
          placeholder="Digite o valor da entrada"
          value={value}
          onChangeText={(text) => setValue(formatValue(text))}
          style={styles.input}
        />
        <Text style={styles.title}> Data </Text>
        <TouchableOpacity onPress={showDatepicker} style={styles.datePicker}>
          <Text style={styles.datePickerText}>
            {formatarDataParaExibicao(date)}
          </Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={handleDateChange}
          />
        )}
        <Text style={styles.title}> Tipo </Text>
        <Picker
          selectedValue={type ? 'entrada' : 'despesa'}
          onValueChange={(itemValue, itemIndex) => setType(itemValue === 'entrada')}
          style={styles.picker}
        >
          <Picker.Item label="Entrada" value="entrada" />
          <Picker.Item label="Saída" value="despesa" />
        </Picker>
        <TouchableOpacity
          style={styles.button}
          onPress={cadastrar}
        >
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </MotiView>
    </View>
  );
}

export default Entrada;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dadada',
  },
  containerheader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  tileheader: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  containerForm: {
    backgroundColor: '#FF8C00',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 25,
    marginTop: 20,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 20,
    fontSize: 16,
  },
  datePicker: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    height: 40,
    justifyContent: 'center',
  },
  datePickerText: {
    fontSize: 16,
  },
  picker: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    height: 40,
  },
  button: {
    backgroundColor: '#dadada',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 16,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonLogin: {
    width: '100%',
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
