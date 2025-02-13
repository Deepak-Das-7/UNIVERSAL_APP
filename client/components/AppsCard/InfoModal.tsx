import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "@/Color";

type InfoModalProps = {
  visible: boolean;
  onClose: () => void;
  title: string;
  description: string;
  image: any;
};

const InfoModal: React.FC<InfoModalProps> = ({
  visible,
  onClose,
  title,
  description,
  image,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalView}>
          {/* Close Button */}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <MaterialCommunityIcons name="close-circle" size={30} color={Colors.lightModeBackground} />
          </TouchableOpacity>

          {/* Image */}
          <Image source={image} style={styles.modalImage} />

          {/* Title */}
          <Text style={styles.modalTitle}>{title}</Text>

          {/* Description */}
          <Text style={styles.modalText}>{description}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for better visibility
  },
  modalView: {
    width: "90%",
    backgroundColor: Colors.lightModeBackground,
    borderRadius: 20,
    paddingVertical: 25,
    alignItems: "center",
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
  },
  closeButton: {
    position: "absolute",
    top: 5,
    right: 5,
    zIndex: 1,
    backgroundColor: Colors.textPrimary,
    borderRadius: 50,
    padding: 5,
  },
  modalImage: {
    width: "90%",
    height: 300,
    borderRadius: 12,
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.textPrimary,
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    textAlign: "center",
    color: Colors.textSecondary,
    lineHeight: 22,
    paddingHorizontal: 10,
  },
});

export default InfoModal;
