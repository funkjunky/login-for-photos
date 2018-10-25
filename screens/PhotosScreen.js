import React from 'react';
import { Text, View, Image, AsyncStorage } from 'react-native';

import { getPhotos } from '../features/Photos/api';

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

  render() {
    return (
      <View>
        <Text>Photos for { this.state.username }</Text>
        <Text>Album #{ this.state.albumId }</Text>
        <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          { this.state.photos.map(photo =>
            <Image key={ photo.id } style={{ width: 150, height: 150 }} source={{ uri: photo.thumbnailUrl }} />
          ) }
        </View>
      </View>
    );
  }
};
