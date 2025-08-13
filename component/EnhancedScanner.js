import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Dimensions,
  Animated,
  Vibration,
} from 'react-native';
import { Camera } from 'expo-camera';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { calcHeight, calcWidth, getFontSizeByWindowWidth } from '../helper/res';

const { width, height } = Dimensions.get('window');

const EnhancedScanner = ({ 
  onQRCodeScanned, 
  onClose, 
  isVisible,
  showFlashlight = true,
  showGallery = true,
  showSettings = true,
}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [isScanning, setIsScanning] = useState(true);
  const [scannedCount, setScannedCount] = useState(0);
  
  const scanAnimation = useRef(new Animated.Value(0)).current;
  const focusAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  useEffect(() => {
    if (isVisible && hasPermission) {
      startScanAnimation();
    }
  }, [isVisible, hasPermission]);

  const startScanAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scanAnimation, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: false,
        }),
        Animated.timing(scanAnimation, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  };

  const startFocusAnimation = () => {
    Animated.sequence([
      Animated.timing(focusAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(focusAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const handleBarCodeScanned = ({ data, type }) => {
    if (!isScanning) return;
    
    setIsScanning(false);
    setScannedCount(prev => prev + 1);
    
    // Haptic feedback
    Vibration.vibrate(100);
    
    // Focus animation
    startFocusAnimation();
    
    // Call the callback
    onQRCodeScanned({ data, type });
    
    // Re-enable scanning after a delay
    setTimeout(() => {
      setIsScanning(true);
    }, 2000);
  };

  const toggleFlashMode = () => {
    setFlashMode(
      flashMode === Camera.Constants.FlashMode.off
        ? Camera.Constants.FlashMode.torch
        : Camera.Constants.FlashMode.off
    );
  };

  const switchCamera = () => {
    setCameraType(
      cameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const handleGalleryPress = () => {
    // This would integrate with image picker
    Alert.alert('Gallery', 'Gallery feature would be implemented here');
  };

  const handleSettingsPress = () => {
    Alert.alert('Scanner Settings', 'Scanner settings would be implemented here');
  };

  if (hasPermission === null) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>Requesting camera permission...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.permissionContainer}>
        <MaterialCommunityIcons name="camera-off" size={64} color="#ff6b6b" />
        <Text style={styles.permissionText}>No access to camera</Text>
        <Text style={styles.permissionSubtext}>
          Please enable camera permissions in your device settings
        </Text>
        <TouchableOpacity style={styles.permissionButton} onPress={onClose}>
          <Text style={styles.permissionButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (!isVisible) return null;

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={cameraType}
        flashMode={flashMode}
        onBarCodeScanned={handleBarCodeScanned}
        barCodeScannerSettings={{
          barCodeTypes: ['qr', 'code128', 'code39', 'ean13', 'ean8'],
        }}
      >
        <View style={styles.overlay}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.headerButton} onPress={onClose}>
              <MaterialCommunityIcons name="close" size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Scan QR Code</Text>
            <TouchableOpacity style={styles.headerButton} onPress={switchCamera}>
              <MaterialCommunityIcons name="camera-switch" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* Scanning Frame */}
          <View style={styles.scanFrame}>
            {/* Corner Indicators */}
            <View style={[styles.corner, styles.topLeft]} />
            <View style={[styles.corner, styles.topRight]} />
            <View style={[styles.corner, styles.bottomLeft]} />
            <View style={[styles.corner, styles.bottomRight]} />
            
            {/* Scanning Line */}
            <Animated.View
              style={[
                styles.scanLine,
                {
                  transform: [{
                    translateY: scanAnimation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 200],
                    }),
                  }],
                },
              ]}
            />
            
            {/* Focus Indicator */}
            <Animated.View
              style={[
                styles.focusIndicator,
                {
                  opacity: focusAnimation,
                  transform: [{
                    scale: focusAnimation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 1.2],
                    }),
                  }],
                },
              ]}
            />
          </View>

          {/* Instructions */}
          <View style={styles.instructions}>
            <Text style={styles.instructionText}>
              Position the QR code within the frame
            </Text>
            <Text style={styles.instructionSubtext}>
              The code will be scanned automatically
            </Text>
          </View>

          {/* Bottom Controls */}
          <View style={styles.bottomControls}>
            {showFlashlight && (
              <TouchableOpacity style={styles.controlButton} onPress={toggleFlashMode}>
                <MaterialCommunityIcons
                  name={flashMode === Camera.Constants.FlashMode.torch ? 'flashlight' : 'flashlight-off'}
                  size={28}
                  color={flashMode === Camera.Constants.FlashMode.torch ? '#ffd700' : '#fff'}
                />
                <Text style={styles.controlButtonText}>
                  {flashMode === Camera.Constants.FlashMode.torch ? 'Flash On' : 'Flash Off'}
                </Text>
              </TouchableOpacity>
            )}

            {showGallery && (
              <TouchableOpacity style={styles.controlButton} onPress={handleGalleryPress}>
                <MaterialCommunityIcons name="image" size={28} color="#fff" />
                <Text style={styles.controlButtonText}>Gallery</Text>
              </TouchableOpacity>
            )}

            {showSettings && (
              <TouchableOpacity style={styles.controlButton} onPress={handleSettingsPress}>
                <MaterialCommunityIcons name="cog" size={28} color="#fff" />
                <Text style={styles.controlButtonText}>Settings</Text>
              </TouchableOpacity>
            )}
          </View>

          {/* Stats */}
          <View style={styles.stats}>
            <Text style={styles.statsText}>Scanned: {scannedCount}</Text>
            <Text style={styles.statsText}>
              {isScanning ? 'Ready to scan' : 'Processing...'}
            </Text>
          </View>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  camera: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: calcHeight(4),
    paddingHorizontal: calcWidth(4),
    paddingBottom: calcHeight(2),
  },
  headerButton: {
    width: calcWidth(10),
    height: calcWidth(10),
    borderRadius: calcWidth(5),
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: getFontSizeByWindowWidth(18),
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  scanFrame: {
    position: 'absolute',
    top: height * 0.25,
    left: width * 0.1,
    width: width * 0.8,
    height: width * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  corner: {
    position: 'absolute',
    width: calcWidth(8),
    height: calcWidth(8),
    borderColor: '#00ff00',
    borderWidth: 3,
  },
  topLeft: {
    top: 0,
    left: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  topRight: {
    top: 0,
    right: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  scanLine: {
    position: 'absolute',
    width: '100%',
    height: 2,
    backgroundColor: '#00ff00',
    shadowColor: '#00ff00',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  focusIndicator: {
    position: 'absolute',
    width: calcWidth(20),
    height: calcWidth(20),
    borderRadius: calcWidth(10),
    borderWidth: 2,
    borderColor: '#00ff00',
    backgroundColor: 'rgba(0, 255, 0, 0.1)',
  },
  instructions: {
    position: 'absolute',
    top: height * 0.55,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingHorizontal: calcWidth(4),
  },
  instructionText: {
    fontSize: getFontSizeByWindowWidth(16),
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    marginBottom: calcHeight(1),
  },
  instructionSubtext: {
    fontSize: getFontSizeByWindowWidth(14),
    color: '#ccc',
    textAlign: 'center',
  },
  bottomControls: {
    position: 'absolute',
    bottom: calcHeight(8),
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: calcWidth(4),
  },
  controlButton: {
    alignItems: 'center',
    paddingVertical: calcHeight(2),
    paddingHorizontal: calcWidth(3),
    borderRadius: calcWidth(3),
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    minWidth: calcWidth(20),
  },
  controlButtonText: {
    fontSize: getFontSizeByWindowWidth(12),
    color: '#fff',
    marginTop: calcHeight(0.5),
    textAlign: 'center',
  },
  stats: {
    position: 'absolute',
    bottom: calcHeight(4),
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  statsText: {
    fontSize: getFontSizeByWindowWidth(12),
    color: '#ccc',
    textAlign: 'center',
    marginBottom: calcHeight(0.5),
  },
  permissionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: calcWidth(4),
  },
  permissionText: {
    fontSize: getFontSizeByWindowWidth(18),
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: calcHeight(2),
    marginBottom: calcHeight(1),
  },
  permissionSubtext: {
    fontSize: getFontSizeByWindowWidth(14),
    color: '#666',
    textAlign: 'center',
    marginBottom: calcHeight(3),
    lineHeight: calcHeight(2.5),
  },
  permissionButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: calcWidth(4),
    paddingVertical: calcHeight(2),
    borderRadius: calcWidth(2),
  },
  permissionButtonText: {
    color: '#fff',
    fontSize: getFontSizeByWindowWidth(16),
    fontWeight: '600',
  },
});

export default EnhancedScanner;
