import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

// const Input = (props) => {
//   return (
//     <View style={styles.input}>
//       <TextInput placeholder={props.holder} />
//     </View>
//   );
// };
// yukarıda uzun olanı deconstruction yaptık
const Input = ({holder}) => {
  return (
    <View style={styles.input}>
      <TextInput placeholder={holder} />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    backgroundColor: '#eceff1',
    margin: 10,
    borderRadius: 10,
    padding: Platform.OS == 'ios' ? 10 : 0,
  },
});
export {Input};
