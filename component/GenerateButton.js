import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { calcHeight, calcWidth, getFontSizeByWindowWidth } from "../helper/res";
function GenerateButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.generateButton} onPress={onPress}>
      <Text style={styles.buttonText}>Generate</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  generateButton: {
    backgroundColor: "blue",
    padding: calcHeight(2),
    borderRadius: calcHeight(2),
    alignItems: "center",
    width: calcWidth(50),
  },
  buttonText: {
    color: "white",
    fontSize: getFontSizeByWindowWidth(16),
  },
});

export default GenerateButton;
