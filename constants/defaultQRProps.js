import { calcWidth } from "../helper/res";

const defaultQRProps = {
  // Basic Properties
  color: "#000000",
  backgroundColor: "#ffffff",
  size: 250,
  
  // Logo Properties
  logoSize: calcWidth(15),
  logoBackgroundColor: "#ffffff",
  logoPadding: 2,
  
  // Border Properties
  borderStyle: "none",
  borderColor: "#000000",
  borderWidth: 0,
  borderRadius: 0,
  
  // Pattern Properties
  pattern: "square",
  cornerStyle: "square",
  
  // Error Correction
  errorCorrectionLevel: "M",
  
  // Shadow Properties
  shadow: "none",
  shadowColor: "#000000",
  shadowOffset: { x: 2, y: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
  
  // Gradient Properties
  gradient: "none",
  gradientColors: ["#000000", "#ffffff"],
  gradientDirection: "linear",
  
  // Advanced Properties
  quietZone: 4,
  margin: 10,
  scale: 1,
  rotation: 0,
  
  // Animation Properties
  animated: false,
  animationDuration: 1000,
  animationType: "fade",
};

export default defaultQRProps;
