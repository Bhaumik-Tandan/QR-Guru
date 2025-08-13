const CustomizationOptions = {
  // Primary QR Code Colors
  Color: [
    { color: "#000000", name: "Black" },
    { color: "#0802A3", name: "Blue" },
    { color: "#A30202", name: "Red" },
    { color: "#02A302", name: "Green" },
    { color: "#A3A302", name: "Yellow" },
    { color: "#02A3A3", name: "Turquoise" },
    { color: "#A302A3", name: "Magenta" },
    { color: "#FF6B35", name: "Orange" },
    { color: "#8B5CF6", name: "Purple" },
    { color: "#EC4899", name: "Pink" },
    { color: "#10B981", name: "Emerald" },
    { color: "#F59E0B", name: "Amber" },
    { color: "#EF4444", name: "Rose" },
    { color: "#3B82F6", name: "Sky Blue" },
    { color: "#84CC16", name: "Lime" },
    { color: "#F97316", name: "Orange Red" },
    { color: "#6366F1", name: "Indigo" },
    { color: "#06B6D4", name: "Cyan" },
    { color: "#8B5A2B", name: "Brown" },
    { color: "#6B7280", name: "Gray" },
  ],

  // Background Colors
  BackgroundColor: [
    { color: "#FFFFFF", name: "White" },
    { color: "#F3F4F6", name: "Light Gray" },
    { color: "#E5E7EB", name: "Gray" },
    { color: "#FEF3C7", name: "Light Yellow" },
    { color: "#DBEAFE", name: "Light Blue" },
    { color: "#D1FAE5", name: "Light Green" },
    { color: "#FCE7F3", name: "Light Pink" },
    { color: "#FEF2F2", name: "Light Red" },
    { color: "#FEF5E7", name: "Light Orange" },
    { color: "#F3E8FF", name: "Light Purple" },
    { color: "#ECFDF5", name: "Mint" },
    { color: "#F0F9FF", name: "Ice Blue" },
    { color: "#FFFBEB", name: "Cream" },
    { color: "#FDF2F8", name: "Rose White" },
    { color: "#F0FDF4", name: "Mint White" },
    { color: "#FAFAFA", name: "Off White" },
    { color: "#F8FAFC", name: "Slate White" },
    { color: "#F1F5F9", name: "Cool Gray" },
    { color: "#FEFCE8", name: "Warm White" },
    { color: "#FDF4FF", name: "Lavender White" },
  ],

  // QR Code Patterns
  Pattern: [
    { pattern: "square", name: "Square", description: "Classic square pattern" },
    { pattern: "rounded", name: "Rounded", description: "Rounded corners" },
    { pattern: "dots", name: "Dots", description: "Circular dots" },
    { pattern: "diamond", name: "Diamond", description: "Diamond shaped" },
    { pattern: "cross", name: "Cross", description: "Cross pattern" },
    { pattern: "star", name: "Star", description: "Star shaped" },
    { pattern: "hexagon", name: "Hexagon", description: "Hexagonal pattern" },
    { pattern: "triangle", name: "Triangle", description: "Triangular pattern" },
  ],

  // QR Code Sizes
  Size: [
    { size: 200, name: "Small", description: "200x200 pixels" },
    { size: 250, name: "Medium", description: "250x250 pixels" },
    { size: 300, name: "Large", description: "300x300 pixels" },
    { size: 350, name: "Extra Large", description: "350x350 pixels" },
    { size: 400, name: "Huge", description: "400x400 pixels" },
  ],

  // Logo Sizes
  LogoSize: [
    { size: 0.1, name: "Small", description: "10% of QR size" },
    { size: 0.15, name: "Medium", description: "15% of QR size" },
    { size: 0.2, name: "Large", description: "20% of QR size" },
    { size: 0.25, name: "Extra Large", description: "25% of QR size" },
    { size: 0.3, name: "Huge", description: "30% of QR size" },
  ],

  // Border Styles
  BorderStyle: [
    { style: "none", name: "No Border", description: "Clean look" },
    { style: "solid", name: "Solid", description: "Classic border" },
    { style: "dashed", name: "Dashed", description: "Dotted line" },
    { style: "dotted", name: "Dotted", description: "Small dots" },
    { style: "double", name: "Double", description: "Two lines" },
    { style: "groove", name: "Groove", description: "3D effect" },
    { style: "ridge", name: "Ridge", description: "3D raised" },
    { style: "inset", name: "Inset", description: "3D sunken" },
    { style: "outset", name: "Outset", description: "3D raised" },
  ],

  // Border Colors
  BorderColor: [
    { color: "#000000", name: "Black" },
    { color: "#374151", name: "Dark Gray" },
    { color: "#6B7280", name: "Gray" },
    { color: "#9CA3AF", name: "Light Gray" },
    { color: "#0802A3", name: "Blue" },
    { color: "#A30202", name: "Red" },
    { color: "#02A302", name: "Green" },
    { color: "#A3A302", name: "Yellow" },
    { color: "#FF6B35", name: "Orange" },
    { color: "#8B5CF6", name: "Purple" },
  ],

  // Border Widths
  BorderWidth: [
    { width: 0, name: "None", description: "No border" },
    { width: 1, name: "Thin", description: "1px border" },
    { width: 2, name: "Normal", description: "2px border" },
    { width: 3, name: "Thick", description: "3px border" },
    { width: 4, name: "Extra Thick", description: "4px border" },
    { width: 5, name: "Bold", description: "5px border" },
  ],

  // Corner Styles
  CornerStyle: [
    { style: "square", name: "Square", description: "Sharp corners" },
    { style: "rounded", name: "Rounded", description: "Soft corners" },
    { style: "circle", name: "Circle", description: "Fully rounded" },
    { style: "bevel", name: "Bevel", description: "Angled corners" },
    { style: "cut", name: "Cut", description: "Cut corners" },
  ],

  // Error Correction Levels
  ErrorCorrection: [
    { level: "L", name: "Low", description: "7% recovery, smaller size" },
    { level: "M", name: "Medium", description: "15% recovery, balanced" },
    { level: "Q", name: "Quartile", description: "25% recovery, larger size" },
    { level: "H", name: "High", description: "30% recovery, largest size" },
  ],

  // Shadow Options
  Shadow: [
    { shadow: "none", name: "No Shadow", description: "Flat look" },
    { shadow: "light", name: "Light", description: "Subtle shadow" },
    { shadow: "medium", name: "Medium", description: "Visible shadow" },
    { shadow: "heavy", name: "Heavy", description: "Strong shadow" },
    { shadow: "colored", name: "Colored", description: "Custom shadow" },
  ],

  // Gradient Options
  Gradient: [
    { gradient: "none", name: "No Gradient", description: "Solid color" },
    { gradient: "linear", name: "Linear", description: "Straight gradient" },
    { gradient: "radial", name: "Radial", description: "Circular gradient" },
    { gradient: "diagonal", name: "Diagonal", description: "Angled gradient" },
    { gradient: "rainbow", name: "Rainbow", description: "Multi-color" },
  ],
};

export default CustomizationOptions;
