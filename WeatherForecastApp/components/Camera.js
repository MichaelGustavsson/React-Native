import { useState } from 'react';
import { View, Text, StyleSheet, Alert, Button, Image } from 'react-native';
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from 'expo-image-picker';

const Camera = () => {
  // Anropa funktionen userCameraPermission
  // Få tillbaka aktuell status via permissionInformation
  // Få även tillbaka en metod för att be om tillåtelse...
  const [permissionInformation, requestPermission] = useCameraPermissions();

  const verifyAccess = async () => {
    if (permissionInformation.status === PermissionStatus.UNDETERMINED) {
      const response = await requestPermission();

      console.log(response);

      return response.granted;
    }
    if (permissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Saknar åtkomst',
        'Du behöver tillåta åtkomst till kameran för att använda applikationen.'
      );
      return false;
    }

    return true;
  };

  const onTakePhotoHandler = async () => {
    const hasPermission = await verifyAccess();

    if (!hasPermission) return;

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    console.log(image);
  };

  return (
    <View style={styles.imageContainer}>
      <View style={styles.imagePreview}></View>
      <Button onPress={onTakePhotoHandler} title='Ta foto' />
    </View>
  );
};

export default Camera;

const styles = StyleSheet.create({
  imageContainer: {
    marginHorizontal: 20,
  },
  imagePreview: {
    width: '100%',
    height: 200,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    color: '#ffffff',
    backgroundColor: '#5b5bc9',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
