import { View, Text, StyleSheet, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";

const ScannerPage = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>No access to camera</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 justify-center items-center">
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
};

export default ScannerPage;
