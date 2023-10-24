import { StyleSheet } from "react-native"
import { Spacing } from "../../constants/spacing";

export default StyleSheet.create({
  fullWidth: {
    width: '100%'
  },
  container: {
    backgroundColor: '#fff',
    padding: Spacing.s03,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    margin: Spacing.s01
  },
  containerSearch: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  containerInput: {
    flex: 9
  },
  containerOrder: {
    flex: 2,
    alignItems: 'center'
  }
});