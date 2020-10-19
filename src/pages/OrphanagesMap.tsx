import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from "react-native-maps";
import { Feather } from "@expo/vector-icons";
import {
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/nunito";
import { useNavigation } from "@react-navigation/native";


import mapMarker from "../images/map-marker.png";

export default function OrphanagesMap() {
    const navigation = useNavigation();

    function handleNavigateToOrphangeDetails() {
        navigation.navigate('OrphanageDetails');
    }
    
    return (
      <View style={styles.container}>
        {/*       <Text style={styles.title}>Hello World</Text> */}
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: -23.9642901,
            longitude: -46.4039812,
            latitudeDelta: 0.009,
            longitudeDelta: 0.009,
          }}
        >
          <Marker
            icon={mapMarker}
            calloutAnchor={{
              x: 3,
              y: 0.8,
            }}
            coordinate={{
              latitude: -23.9642901,
              longitude: -46.4039812,
            }}
          >
            <Callout tooltip onPress={handleNavigateToOrphangeDetails}>
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutText}>Orfanatos do Bem</Text>
              </View>
            </Callout>
          </Marker>
        </MapView>
  
        <View style={styles.footer}>
          <Text style={styles.footerText}>2 Orfanatos encontrados!</Text>
          <TouchableOpacity
            style={styles.createOrphanageButton}
            onPress={() => {}}
          >
            <Feather name="plus" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  
    /* title: { 
      fontSize: 24,
    } */
  
    map: {
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
    },
  
    calloutContainer: {
      width: 168,
      height: 46,
      paddingVertical: 16,
      backgroundColor: "rgba(255,255,255, 0.8)",
      borderRadius: 16,
  
      justifyContent: "center",
      alignItems: "center",
    },
  
    calloutText: {
      color: "#0089a5",
      fontSize: 14,
      fontFamily: 'Nunito_700Bold',
    },
  
    footer: {
      position: "absolute",
      left: 24,
      right: 24,
      bottom: 30,
  
      backgroundColor: "#ffffff",
      borderRadius: 20,
      height: 56,
      paddingLeft: 24,
  
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
  
      elevation: 15,
    },
  
    footerText: {
      fontFamily: 'Nunito_700Bold',
      color: "#8fa7b3",
    },
  
    createOrphanageButton: {
      width: 56,
      height: 56,
      backgroundColor: "#15c3d6",
      borderRadius: 20,
  
      justifyContent: "center",
      alignItems: "center",
    },
  });
  