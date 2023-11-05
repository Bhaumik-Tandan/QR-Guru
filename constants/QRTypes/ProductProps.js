import React from "react";
import { calcWidth } from "../../helper/res";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const ProductProps = {
  icon: <AntDesign name="shoppingcart" size={calcWidth(10)} color="purple" />,
  componentProps: {
    fields: [
      {
        name: "productName",
        placeholder: "Product Name",
        type: "text",
        icon: (
          <MaterialIcons name="shopping-cart" size={calcWidth(8)} color="black" />
        ),
      },
      {
        name: "productCode",
        placeholder: "Product Code",
        type: "text",
        icon: (
          <MaterialIcons name="code" size={calcWidth(8)} color="black" />
        ),
      },
      {
        name: "price",
        placeholder: "Price",
        type: "number",
        icon: (
          <MaterialIcons name="monetization-on" size={calcWidth(8)} color="black" />
        ),
      },
    ],
    generateQRContent: ({ productName, productCode, price }) => {
      return `Product: ${productName}\nCode: ${productCode}\nPrice: $${price}`;
    },
  },
};

export default ProductProps;
