import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import * as Contacts from "expo-contacts";
import { MaterialIcons } from "@expo/vector-icons";
import Loader from "../../component/Loader";
import PAGES from "../../constants/pages";

export default function GetContact({ navigation }) {
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        setLoading(true);
        const { data } = await Contacts.getContactsAsync();

        if (data.length > 0) {
          setContacts(data);
        }
      }
      setLoading(false);
    })();
  }, []);

  const toggleContactSelection = (contact) => {
    if (selectedContacts.includes(contact)) {
      setSelectedContacts(selectedContacts.filter((c) => c !== contact));
    } else {
      setSelectedContacts([...selectedContacts, contact]);
    }
  };


  return loading ? (
    <Loader />
  ) : (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.cardItem,
              {
                backgroundColor: selectedContacts.includes(item)
                  ? "lightgreen"
                  : "white",
              },
            ]}
            onPress={() => toggleContactSelection(item)}
          >
            <MaterialIcons
              name={
                selectedContacts.includes(item)
                  ? "check-box"
                  : "check-box-outline-blank"
              }
              size={30}
              color={selectedContacts.includes(item) ? "green" : "lightgray"}
            />
            <Text
              style={styles.cardItemText}
            >{`${item.firstName} ${item.lastName}`}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => handleAddPeople()}
      >
        <Text style={styles.buttonText}>Add Person</Text>
      </TouchableOpacity>
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
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginBottom: 8,
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 2, // Add a shadow to the cards
  },
  cardItemText: {
    fontSize: 16,
    marginLeft: 12,
  },
  addButton: {
    backgroundColor: "#007AFF",
    color: "white",
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
