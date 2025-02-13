import { router } from "expo-router";
import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, Image, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import InfoModal from "./InfoModal";
import { Colors } from "@/Color";

type ValidAppRoutes = "/app1" | "/app2" | "/app3" | "/app4" | "/app5" | "/app6" | "/app7";

type CardProps = {
  title: string;
  appRoute: ValidAppRoutes;
  imageSource: any;
};

const Card: React.FC<CardProps> = ({ title, appRoute, imageSource }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const description = `Once upon a time in a small village, a young girl named Elara discovered a hidden lake...`;

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => router.push(appRoute)}>
        <Image source={imageSource} style={styles.cardImage} />
      </TouchableOpacity>

      <View style={styles.cardFooter}>
        <Text style={styles.cardText}>{title}</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <MaterialIcons name="keyboard-arrow-down" size={30} color={Colors.primary} />
        </TouchableOpacity>
      </View>

      <InfoModal visible={modalVisible} onClose={() => setModalVisible(false)} title={title} description={description} image={imageSource} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.backgroundLight,
    margin: 10,
    borderRadius: 12,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    alignItems: "center",
    overflow: "hidden",
  },
  cardImage: {
    width: 145,
    height: 145,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    margin: 5,
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: Colors.lightModeBackground,
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
    color: Colors.textPrimary,
  },
});

export default Card;
