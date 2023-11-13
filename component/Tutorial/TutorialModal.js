import React, { useState } from 'react';
import { Modal, TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';
import { calcHeight, calcWidth, getFontSizeByWindowWidth } from '../../helper/res';

function TutorialModal({ isVisible, onClose }) {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { image: require('./home.png'), text: 'Select the kind of QR you want to create' },
    { image: require('./website.png'), text: 'Fill out the details' },
    { image: require('./qr.png'), text: 'Get your QR' },
    { image: require('./edit.png'), text: 'Customize it as per your choice' },
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
    width: calcWidth(30), // Adjust the percentage as needed
    height: calcHeight(30), // Adjust the percentage as needed
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
          <Text style={styles.modalHeading}>QR Code Tutorial</Text>
          <Image source={steps[currentStep - 1].image} style={[styles.image, imageSize]} />
          <Text style={styles.stepText}>{steps[currentStep - 1].text}</Text>
          <View style={styles.buttonContainer}>
            {currentStep > 1 && (
              <TouchableOpacity onPress={handlePrev} style={styles.button}>
                <Text style={styles.buttonText}>Previous</Text>
              </TouchableOpacity>
            )}
            {currentStep === steps.length ? (
              <TouchableOpacity onPress={handleClose} style={styles.button}>
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={handleNext} style={styles.button}>
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    marginBottom: 20,
  },
  stepText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    padding: 10,
    backgroundColor: '#3498db',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default TutorialModal;
