import React from "react";
import { calcWidth } from "../../helper/res";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const LocationProps = {
  icon: <MaterialIcons name="location-on" size={calcWidth(10)} color="blue" />,
  componentProps: {
    fields: [
      {
        name: "latitude",
        placeholder: "Latitude",
        type: "text",
        icon: <Entypo name="location" size={calcWidth(8)} color="black" />,
      },
      {
        name: "longitude",
        placeholder: "Longitude",
        type: "text",
        icon: <FontAwesome name="map-marker" size={calcWidth(8)} color="black" />,
      },
      {
        name: "locationName",
        placeholder: "Location Name (optional)",
        type: "text",
        icon: <MaterialIcons name="place" size={calcWidth(8)} color="black" />,
        optional: true,
      },
    ],
    generateQRContent: ({ latitude, longitude, locationName }) => {
      let locationContent = `geo:${latitude},${longitude}`;

      if (locationName) {
        locationContent += `?q=${encodeURIComponent(locationName)}`;
      }

      return locationContent;
    },
  },
};

export default LocationProps;
