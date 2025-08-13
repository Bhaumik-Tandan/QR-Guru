import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
  Switch,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { calcHeight, calcWidth, getFontSizeByWindowWidth } from '../helper/res';
import CustomizationOptions from '../constants/QRCustomizationOptions';

const QRCustomizationPanel = ({ 
  qrProps, 
  onQRPropsChange, 
  isVisible, 
  onClose 
}) => {
  const [activeTab, setActiveTab] = useState('colors');
  const [customColor, setCustomColor] = useState('#000000');

  const tabs = [
    { id: 'colors', name: 'Colors', icon: 'palette' },
    { id: 'patterns', name: 'Patterns', icon: 'shape' },
    { id: 'borders', name: 'Borders', icon: 'border-style' },
    { id: 'logo', name: 'Logo', icon: 'image' },
    { id: 'effects', name: 'Effects', icon: 'star' },
    { id: 'advanced', name: 'Advanced', icon: 'cog' },
  ];

  const updateQRProp = (key, value) => {
    onQRPropsChange({ ...qrProps, [key]: value });
  };

  const renderColorSection = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Primary Color</Text>
      <View style={styles.colorGrid}>
        {CustomizationOptions.Color.map((colorOption) => (
          <TouchableOpacity
            key={colorOption.color}
            style={[
              styles.colorOption,
              { backgroundColor: colorOption.color },
              qrProps.color === colorOption.color && styles.selectedColor
            ]}
            onPress={() => updateQRProp('color', colorOption.color)}
          >
            <Text style={styles.colorName}>{colorOption.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Background Color</Text>
      <View style={styles.colorGrid}>
        {CustomizationOptions.BackgroundColor.map((colorOption) => (
          <TouchableOpacity
            key={colorOption.color}
            style={[
              styles.colorOption,
              { backgroundColor: colorOption.color },
              qrProps.backgroundColor === colorOption.color && styles.selectedColor
            ]}
            onPress={() => updateQRProp('backgroundColor', colorOption.color)}
          >
            <Text style={styles.colorName}>{colorOption.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Custom Color</Text>
      <View style={styles.customColorContainer}>
        <TextInput
          style={[styles.colorInput, { backgroundColor: customColor }]}
          value={customColor}
          onChangeText={setCustomColor}
          placeholder="#000000"
          placeholderTextColor="#666"
        />
        <TouchableOpacity
          style={styles.applyButton}
          onPress={() => updateQRProp('color', customColor)}
        >
          <Text style={styles.applyButtonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderPatternSection = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>QR Pattern</Text>
      <View style={styles.optionGrid}>
        {CustomizationOptions.Pattern.map((patternOption) => (
          <TouchableOpacity
            key={patternOption.pattern}
            style={[
              styles.optionButton,
              qrProps.pattern === patternOption.pattern && styles.selectedOption
            ]}
            onPress={() => updateQRProp('pattern', patternOption.pattern)}
          >
            <MaterialCommunityIcons 
              name={getPatternIcon(patternOption.pattern)} 
              size={24} 
              color={qrProps.pattern === patternOption.pattern ? '#fff' : '#333'} 
            />
            <Text style={[
              styles.optionText,
              qrProps.pattern === patternOption.pattern && styles.selectedOptionText
            ]}>
              {patternOption.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Corner Style</Text>
      <View style={styles.optionGrid}>
        {CustomizationOptions.CornerStyle.map((cornerOption) => (
          <TouchableOpacity
            key={cornerOption.style}
            style={[
              styles.optionButton,
              qrProps.cornerStyle === cornerOption.style && styles.selectedOption
            ]}
            onPress={() => updateQRProp('cornerStyle', cornerOption.style)}
          >
            <Text style={[
              styles.optionText,
              qrProps.cornerStyle === cornerOption.style && styles.selectedOptionText
            ]}>
              {cornerOption.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  const renderBorderSection = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Border Style</Text>
      <View style={styles.optionGrid}>
        {CustomizationOptions.BorderStyle.map((borderOption) => (
          <TouchableOpacity
            key={borderOption.style}
            style={[
              styles.optionButton,
              qrProps.borderStyle === borderOption.style && styles.selectedOption
            ]}
            onPress={() => updateQRProp('borderStyle', borderOption.style)}
          >
            <Text style={[
              styles.optionText,
              qrProps.borderStyle === borderOption.style && styles.selectedOptionText
            ]}>
              {borderOption.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Border Width</Text>
      <View style={styles.optionGrid}>
        {CustomizationOptions.BorderWidth.map((widthOption) => (
          <TouchableOpacity
            key={widthOption.width}
            style={[
              styles.optionButton,
              qrProps.borderWidth === widthOption.width && styles.selectedOption
            ]}
            onPress={() => updateQRProp('borderWidth', widthOption.width)}
          >
            <Text style={[
              styles.optionText,
              qrProps.borderWidth === widthOption.width && styles.selectedOptionText
            ]}>
              {widthOption.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Border Color</Text>
      <View style={styles.colorGrid}>
        {CustomizationOptions.BorderColor.map((colorOption) => (
          <TouchableOpacity
            key={colorOption.color}
            style={[
              styles.colorOption,
              { backgroundColor: colorOption.color },
              qrProps.borderColor === colorOption.color && styles.selectedColor
            ]}
            onPress={() => updateQRProp('borderColor', colorOption.color)}
          >
            <Text style={styles.colorName}>{colorOption.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  const renderLogoSection = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Logo Size</Text>
      <View style={styles.optionGrid}>
        {CustomizationOptions.LogoSize.map((sizeOption) => (
          <TouchableOpacity
            key={sizeOption.size}
            style={[
              styles.optionButton,
              qrProps.logoSize === sizeOption.size && styles.selectedOption
            ]}
            onPress={() => updateQRProp('logoSize', sizeOption.size)}
          >
            <Text style={[
              styles.optionText,
              qrProps.logoSize === sizeOption.size && styles.selectedOptionText
            ]}>
              {sizeOption.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Logo Background</Text>
      <View style={styles.colorGrid}>
        {CustomizationOptions.BackgroundColor.slice(0, 10).map((colorOption) => (
          <TouchableOpacity
            key={colorOption.color}
            style={[
              styles.colorOption,
              { backgroundColor: colorOption.color },
              qrProps.logoBackgroundColor === colorOption.color && styles.selectedColor
            ]}
            onPress={() => updateQRProp('logoBackgroundColor', colorOption.color)}
          >
            <Text style={styles.colorName}>{colorOption.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  const renderEffectsSection = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Shadow</Text>
      <View style={styles.optionGrid}>
        {CustomizationOptions.Shadow.map((shadowOption) => (
          <TouchableOpacity
            key={shadowOption.shadow}
            style={[
              styles.optionButton,
              qrProps.shadow === shadowOption.shadow && styles.selectedOption
            ]}
            onPress={() => updateQRProp('shadow', shadowOption.shadow)}
          >
            <Text style={[
              styles.optionText,
              qrProps.shadow === shadowOption.shadow && styles.selectedOptionText
            ]}>
              {shadowOption.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Gradient</Text>
      <View style={styles.optionGrid}>
        {CustomizationOptions.Gradient.map((gradientOption) => (
          <TouchableOpacity
            key={gradientOption.gradient}
            style={[
              styles.optionButton,
              qrProps.gradient === gradientOption.gradient && styles.selectedOption
            ]}
            onPress={() => updateQRProp('gradient', gradientOption.gradient)}
          >
            <Text style={[
              styles.optionText,
              qrProps.gradient === gradientOption.gradient && styles.selectedOptionText
            ]}>
              {gradientOption.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  const renderAdvancedSection = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>QR Size</Text>
      <View style={styles.optionGrid}>
        {CustomizationOptions.Size.map((sizeOption) => (
          <TouchableOpacity
            key={sizeOption.size}
            style={[
              styles.optionButton,
              qrProps.size === sizeOption.size && styles.selectedOption
            ]}
            onPress={() => updateQRProp('size', sizeOption.size)}
          >
            <Text style={[
              styles.optionText,
              qrProps.size === sizeOption.size && styles.selectedOptionText
            ]}>
              {sizeOption.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Error Correction</Text>
      <View style={styles.optionGrid}>
        {CustomizationOptions.ErrorCorrection.map((levelOption) => (
          <TouchableOpacity
            key={levelOption.level}
            style={[
              styles.optionButton,
              qrProps.errorCorrectionLevel === levelOption.level && styles.selectedOption
            ]}
            onPress={() => updateQRProp('errorCorrectionLevel', levelOption.level)}
          >
            <Text style={[
              styles.optionText,
              qrProps.errorCorrectionLevel === levelOption.level && styles.selectedOptionText
            ]}>
              {levelOption.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Animated QR</Text>
        <Switch
          value={qrProps.animated}
          onValueChange={(value) => updateQRProp('animated', value)}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={qrProps.animated ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>
    </View>
  );

  const getPatternIcon = (pattern) => {
    const iconMap = {
      square: 'square-outline',
      rounded: 'rounded-square',
      dots: 'circle-multiple',
      diamond: 'diamond-outline',
      cross: 'crosshairs',
      star: 'star-outline',
      hexagon: 'hexagon-outline',
      triangle: 'triangle-outline',
    };
    return iconMap[pattern] || 'square-outline';
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'colors':
        return renderColorSection();
      case 'patterns':
        return renderPatternSection();
      case 'borders':
        return renderBorderSection();
      case 'logo':
        return renderLogoSection();
      case 'effects':
        return renderEffectsSection();
      case 'advanced':
        return renderAdvancedSection();
      default:
        return renderColorSection();
    }
  };

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Customize QR Code</Text>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <MaterialCommunityIcons name="close" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        <View style={styles.tabContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {tabs.map((tab) => (
              <TouchableOpacity
                key={tab.id}
                style={[
                  styles.tab,
                  activeTab === tab.id && styles.activeTab
                ]}
                onPress={() => setActiveTab(tab.id)}
              >
                <MaterialCommunityIcons 
                  name={tab.icon} 
                  size={20} 
                  color={activeTab === tab.id ? '#fff' : '#333'} 
                />
                <Text style={[
                  styles.tabText,
                  activeTab === tab.id && styles.activeTabText
                ]}>
                  {tab.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {renderTabContent()}
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: calcWidth(4),
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#f8f9fa',
  },
  headerTitle: {
    fontSize: getFontSizeByWindowWidth(20),
    fontWeight: 'bold',
    color: '#333',
  },
  closeButton: {
    padding: calcWidth(1),
  },
  tabContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: calcWidth(3),
    paddingVertical: calcHeight(2),
    marginHorizontal: calcWidth(1),
    borderRadius: calcWidth(2),
    backgroundColor: '#f0f0f0',
  },
  activeTab: {
    backgroundColor: '#007AFF',
  },
  tabText: {
    marginLeft: calcWidth(1),
    fontSize: getFontSizeByWindowWidth(14),
    fontWeight: '600',
    color: '#333',
  },
  activeTabText: {
    color: '#fff',
  },
  content: {
    flex: 1,
    padding: calcWidth(4),
  },
  section: {
    marginBottom: calcHeight(4),
  },
  sectionTitle: {
    fontSize: getFontSizeByWindowWidth(16),
    fontWeight: 'bold',
    color: '#333',
    marginBottom: calcHeight(2),
    marginTop: calcHeight(2),
  },
  colorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: calcHeight(2),
  },
  colorOption: {
    width: calcWidth(15),
    height: calcWidth(15),
    borderRadius: calcWidth(2),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: calcHeight(1),
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  selectedColor: {
    borderWidth: 3,
    borderColor: '#007AFF',
  },
  colorName: {
    fontSize: getFontSizeByWindowWidth(10),
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  optionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: calcHeight(2),
  },
  optionButton: {
    width: calcWidth(20),
    paddingVertical: calcHeight(2),
    paddingHorizontal: calcWidth(2),
    borderRadius: calcWidth(2),
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    marginBottom: calcHeight(1),
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  selectedOption: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  optionText: {
    fontSize: getFontSizeByWindowWidth(12),
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginTop: calcHeight(0.5),
  },
  selectedOptionText: {
    color: '#fff',
  },
  customColorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: calcHeight(2),
  },
  colorInput: {
    flex: 1,
    height: calcHeight(8),
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: calcWidth(2),
    paddingHorizontal: calcWidth(2),
    marginRight: calcWidth(2),
    fontSize: getFontSizeByWindowWidth(14),
    color: '#333',
  },
  applyButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: calcWidth(3),
    paddingVertical: calcHeight(2),
    borderRadius: calcWidth(2),
  },
  applyButtonText: {
    color: '#fff',
    fontSize: getFontSizeByWindowWidth(14),
    fontWeight: '600',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: calcHeight(2),
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  switchLabel: {
    fontSize: getFontSizeByWindowWidth(14),
    fontWeight: '600',
    color: '#333',
  },
});

export default QRCustomizationPanel;
