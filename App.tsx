import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
// Form validation
import * as Yup from 'yup';


const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be a minimum of 4 characters')
    .max(16, 'Should be maximum of 16 characters')
    .required('Length is required'),
});
const App = () => {
  const [password, setPassword] = useState('');
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength:number) => {
    let characterList= '';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWYZX';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwyzx';
    const numberChars = '123456789';
    const symbolChars = '+-*/!#$%&()=?€|_><';

    if (lowerCase) {
      characterList += lowerCaseChars;
    }
    if (upperCase) {
      characterList += upperCaseChars;
    }
    if (number){
      characterList += numberChars;
    }
    if (symbols){
      characterList += symbolChars;
    }
    const passwordResult = createPasswod(characterList, passwordLength);
    setPassword(passwordResult);
    setIsPasswordGenerated(true);
  };

  const createPasswod = (characters:string, passwordLength:number)=> {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);

      return result;
    }
  };

  const resetPassword = () =>{
    setPassword('');
    setIsPasswordGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setSymbols(false);
    setNumber(false);
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>App</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container:{
    padding: 10,
  },
});

export default App;
