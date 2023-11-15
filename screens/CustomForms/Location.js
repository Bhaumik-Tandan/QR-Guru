import React, { useState, useRef, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, TouchableOpacity, Text, Alert } from "react-native";
import * as Location from "expo-location";
import PAGES from "../../constants/pages";
import LocationProps from "../../constants/QRTypes/LocationProps";


const getDisplayData = ({ latitude, longitude }) => {
  // Determine the cardinal direction based on latitude and longitude
  let latitudeDirection = latitude >= 0 ? 'N' : 'S';
  let longitudeDirection = longitude >= 0 ? 'E' : 'W';

  // Format the display data
  const displayData = `${Math.abs(latitude).toFixed(2)}° ${latitudeDirection}\n${Math.abs(longitude).toFixed(2)}° ${longitudeDirection}`;

  return displayData;
};



export default function LocationPicker({ navigation }) {
  const [mapType, setMapType] = useState("standard");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const mapRef = useRef(null);

  const toggleMapType = () => {
    setMapType(mapType === "standard" ? "hybrid" : "standard");
  };

  const handleMapPress = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setSelectedLocation({ latitude, longitude });
    const { generateQRContent } = LocationProps.componentProps;
    Alert.alert(
      "Location",
      `Do you want to generate QR code for this location? \n Latitude: ${latitude} \n Longitude: ${longitude}`,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            navigation.navigate(PAGES.QR, {
              data: generateQRContent({ latitude, longitude }),
              displayData: getDisplayData({ latitude, longitude }),
              type: "Location",
            });
          },
        },
      ],
      { cancelable: false },
    );
  };

  useEffect(() => {
    // Get the user's current location and set the map's initial region
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      setSelectedLocation({ latitude, longitude });

      mapRef.current.animateToRegion({
        latitude,
        longitude,
        latitudeDelta: 0.01, // Adjust these values to set the initial zoom level
        longitudeDelta: 0.01,
      });
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        mapType={mapType}
        onPress={handleMapPress}
      >
        {selectedLocation && (
          <Marker coordinate={selectedLocation} title="Selected Location" />
        )}
      </MapView>
      <TouchableOpacity style={styles.mapTypeButton} onPress={toggleMapType}>
        <Text>Toggle Map Type</Text>
      </TouchableOpacity>
      {selectedLocation && (
        <View style={styles.locationInfo}>
          <Text>Latitude: {selectedLocation.latitude}</Text>
          <Text>Longitude: {selectedLocation.longitude}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  mapTypeButton: {
    position: "absolute",
    top: 16,
    right: 16,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },
  locationInfo: {
    position: "absolute",
    bottom: 16,
    left: 16,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },
});
