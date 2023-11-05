import React from "react";
import { calcWidth } from "../../helper/res";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons} from "@expo/vector-icons";

const CouponProps = {
  icon: <Ionicons name="ios-pricetags-sharp" size={calcWidth(10)} color="brown" />,
  componentProps: {
    fields: [
      {
        name: "couponCode",
        placeholder: "Coupon Code",
        type: "text",
        icon: (
          <MaterialIcons name="confirmation-number" size={calcWidth(8)} color="black" />
        ),
      },
      {
        name: "discount",
        placeholder: "Discount Amount",
        type: "text",
        icon: (
          <MaterialIcons name="local-offer" size={calcWidth(8)} color="black" />
        ),
      },
      {
        name: "expirationDate",
        placeholder: "Expiration Date",
        type: "text",
        icon: (
          <MaterialIcons name="event" size={calcWidth(8)} color="black" />
        ),
      },
    ],
    generateQRContent: ({ couponCode, discount, expirationDate }) => {
      return `Coupon Code: ${couponCode}\nDiscount: ${discount}\nExpires: ${expirationDate}`;
    },
  },
};

export default CouponProps;