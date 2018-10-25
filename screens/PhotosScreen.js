import React from 'react';
import { Text, View, Image, Button, AsyncStorage } from 'react-native';
import { ImagePicker } from 'expo';

import { getPhotos, uploadPhoto } from '../features/Photos/api';

export default class PhotosScreen extends React.Component {
  state = {
    username: '',
    albumId: '',
    photos: [],
  };

  constructor() {
    super();
    AsyncStorage.getItem('currentUser').then(async user => {
      const { username, id: albumId } = JSON.parse(user);
      this.setState({ username, albumId });
      const photos = await getPhotos(albumId);

      this.setState({ photos });
    });
  }

  uploadPhoto = async () => {
    const res = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
      aspect: [4, 3], // Lol, necessary because Expo isn't smart enought to figure out the aspect ratio
    });
    const { uri: thumbnailUrl } = res;
    let photo = await uploadPhoto({ albumId: this.state.albumId, thumbnailUrl });
    photo.thumbnailUrl = thumbnailUrl;
    this.setState({ photos: [ photo, ...this.state.photos ] });
  };

  render = () => (
    <View>
      <Text>Photos for { this.state.username }</Text>
      <Text>Album #{ this.state.albumId }</Text>
      <Button onPress={ this.uploadPhoto } title="Upload" />
      <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        { this.state.photos.map(photo =>
          <Image key={ photo.id } style={{ width: 150, height: 150 }} source={{ uri: photo.thumbnailUrl }} />
        ) }
      </View>
    </View>
  );
};
