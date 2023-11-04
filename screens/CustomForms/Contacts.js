import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import * as Contacts from "expo-contacts";
import ContactsProps from "../../constants/QRTypes/ContactsProps";
import Loader from "../../component/Loader";
import PAGES from "../../constants/pages";

export default function GetContact({ navigation }) {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading as true
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync();
        if (data.length > 0) {
          // sort contacts by name
          data.sort((a, b) => {
            if (a.firstName && b.firstName) {
              if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) {
                return -1;
              }
              if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) {
                return 1;
              }
              return 0;
            }
            return 0;
          });
          setContacts(data);
        }
      }
      setLoading(false); // Set loading to false when data is loaded
    })();
  }, []);

  const handleAddPeople = (a) => {
    const { generateQRContent } = ContactsProps.componentProps;

    const content = generateQRContent({
      name: `${a.firstName} ${a.lastName}`,
      phone:
        a.phoneNumbers && a.phoneNumbers.length > 0
          ? a.phoneNumbers[0].number
          : "",
      email: a.emails && a.emails.length > 0 ? a.emails[0].email : "",
    });

    navigation.navigate(PAGES.QR, {
      data: content,
    });
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <FlatList
          data={contacts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.cardItem}
              onPress={() => handleAddPeople(item)}
            >
              <Text style={styles.cardItemName}>
                {`${item.firstName} ${item.lastName}`}
              </Text>
              <Text style={styles.cardItemDetail}>
                {item.phoneNumbers && item.phoneNumbers.length > 0
                  ? item.phoneNumbers[0].number
                  : "No phone number"}
              </Text>
              <Text style={styles.cardItemDetail}>
                {item.emails && item.emails.length > 0
                  ? item.emails[0].email
                  : "No email"}
              </Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5", // Light gray background
    padding: 20,
  },
  cardItem: {
    alignItems: "center",
    padding: 16,
    marginBottom: 8,
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 2, // Add a shadow to the cards
  },
  cardItemName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  cardItemDetail: {
    fontSize: 14,
    color: "#333",
  },
  addButton: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
