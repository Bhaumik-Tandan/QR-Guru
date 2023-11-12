import React from "react";
import { calcWidth } from "../../helper/res";
import { MaterialIcons } from "@expo/vector-icons";
import PAGES from "../pages";

const LocationProps = {
  icon: <MaterialIcons name="location-on" size={calcWidth(10)} color="green" />,
  componentProps: {
    generateQRContent: ({ latitude, longitude, locationName }) => {
      let locationContent = `geo:${latitude},${longitude}`;

      if (locationName) {
        locationContent += `?q=${encodeURIComponent(locationName)}`;
      }

      return locationContent;
    },
  },
  navigateTo: PAGES.LOCATION,
};

export default LocationProps;
