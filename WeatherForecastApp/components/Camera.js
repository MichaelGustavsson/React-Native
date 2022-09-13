import { useState } from 'react';
import { View, Text, StyleSheet, Alert, Button, Image } from 'react-native';
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from 'expo-image-picker';
import OutlinedButton from './ui/OutlinedButton';

const Camera = () => {
  // Anropa funktionen userCameraPermission
  // Få tillbaka aktuell status via permissionInformation
  // Få även tillbaka en metod för att be om tillåtelse...
  const [permissionInformation, requestPermission] = useCameraPermissions();
  const [image, setImage] = useState('');

  const verifyAccess = async () => {
    if (permissionInformation.status === PermissionStatus.UNDETERMINED) {
      const response = await requestPermission();
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
    setImage(image.uri);
  };

  let imagePreview = <Text style={styles.textColor}>Bild saknas</Text>;

  if (image) {
    imagePreview = <Image style={styles.image} source={{ uri: image }} />;
  }

  return (
    <View style={styles.imageContainer}>
      <View style={styles.imagePreview}>{imagePreview}</View>
      {/* <Button onPress={onTakePhotoHandler} title='Ta foto' /> */}
      <OutlinedButton icon='camera-retro' onPress={onTakePhotoHandler}>
        Ta foto
      </OutlinedButton>
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
    backgroundColor: '#5b5bc9',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textColor: {
    color: '#ffffff',
  },
});
