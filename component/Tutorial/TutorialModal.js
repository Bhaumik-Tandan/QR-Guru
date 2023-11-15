import React, { useState } from "react";
import {
  Modal,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Image,
} from "react-native";
import {
  calcHeight,
  calcWidth,
  getFontSizeByWindowWidth,
} from "../../helper/res";

function TutorialModal({ isVisible, onClose }) {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      image: require("./home.png"),
      text: "Select the kind of QR you want to create",
    },
    { image: require("./website.png"), text: "Fill out the details" },
    { image: require("./qr.png"), text: "Get your QR" },
    { image: require("./edit.png"), text: "Customize it as per your choice" },
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleClose = () => {
    onClose();
  };

  const imageSize = {
    width: calcWidth(30),
    height: calcHeight(30),
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
            <Text>x</Text>
          </TouchableOpacity>
          <Text style={styles.modalHeading}>QR Code Tutorial</Text>
          <Image
            source={steps[currentStep - 1].image}
            style={[styles.image, imageSize]}
          />
          <Text style={styles.stepText}>{steps[currentStep - 1].text}</Text>
          <View style={styles.navigationContainer}>
            {currentStep > 1 ? (
              <TouchableOpacity onPress={handlePrev} style={styles.arrowButton}>
                <Text style={styles.arrowButtonText}>&lt;</Text>
              </TouchableOpacity>
            ) : (
              <View></View>
            )}
            <Text style={styles.stepIndicator}>
              Step {currentStep} of {steps.length}
            </Text>
            <TouchableOpacity
              onPress={currentStep === steps.length ? handleClose : handleNext}
              style={styles.arrowButton}
            >
              <Text style={styles.arrowButtonText}>&gt;</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: calcWidth(5),
    borderRadius: calcWidth(2),
    alignItems: "center",
    width: "80%",
  },
  modalHeading: {
    fontSize: getFontSizeByWindowWidth(20),
    fontWeight: "bold",
    marginBottom: calcHeight(3),
    textAlign: "center",
  },
  image: {
    marginBottom: calcHeight(2),
    borderRadius: calcWidth(2),
  },
  stepText: {
    fontSize: getFontSizeByWindowWidth(10),
    textAlign: "center",
    marginBottom: calcHeight(2),
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: calcWidth(2),
  },
  button: {
    padding: calcHeight(1.5),
    backgroundColor: "#3498db",
    borderRadius: calcWidth(1),
    marginTop: calcHeight(2),
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: getFontSizeByWindowWidth(12),
  },
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: calcWidth(2),
  },
  arrowButton: {
    padding: calcWidth(1.5),
    backgroundColor: "#3498db",
    borderRadius: calcWidth(1),
    marginTop: calcHeight(2),
  },
  arrowButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: getFontSizeByWindowWidth(16),
  },
  stepIndicator: {
    fontSize: getFontSizeByWindowWidth(12),
    fontWeight: "bold",
  },
  closeButton: {
    position: "absolute",
    right: calcWidth(2),
    fontSize: getFontSizeByWindowWidth(20),
    fontWeight: "bold",
    color: "red",
  },
});

export default TutorialModal;
