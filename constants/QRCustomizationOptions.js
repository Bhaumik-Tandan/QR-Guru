const CustomizationOptions = {
  Pattern: [
    { codeStyle: "square", name: "Square" },
    { codeStyle: "circle", name: "Circle" },
    { codeStyle: "dot", name: "Dot" },
    { codeStyle: "diamond", name: "Diamond" },
    { codeStyle: "sharp", name: "Sharp" },
  ],
  Eyes: [
    { outerEyeStyle: "square", innerEyeStyle: "square", name: "Square In-Out" },
    { outerEyeStyle: "square", innerEyeStyle: "circle", name: "Square In-Circle Out" },
    { outerEyeStyle: "square", innerEyeStyle: "diamond", name: "Square In-Diamond Out" },
    { outerEyeStyle: "circle", innerEyeStyle: "square", name: "Circle In-Square Out" },
    { outerEyeStyle: "circle", innerEyeStyle: "circle", name: "Circle In-Out" },
    { outerEyeStyle: "circle", innerEyeStyle: "diamond", name: "Circle In-Diamond Out" },
    { outerEyeStyle: "diamond", innerEyeStyle: "square", name: "Diamond In-Square Out" },
    { outerEyeStyle: "diamond", innerEyeStyle: "circle", name: "Diamond In-Circle Out" },
    { outerEyeStyle: "diamond", innerEyeStyle: "diamond", name: "Diamond In-Out" },
  ],
  Color: [
    { color: "#0802A3", name: "Blue" },
    { color: "#A30202", name: "Red" },
    { color: "#A3A302", name: "Yellow" },
    { color: "#02A3A3", name: "Turquoise" },
    { color: "#A302A3", name: "Magenta" },
    { color: "#02A302", name: "Green" },
    { color: "#000000", name: "Black" },
  ],
};

export default CustomizationOptions;
