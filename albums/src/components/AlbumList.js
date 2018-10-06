import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component{
  state = {albums: [] }; //inicial base state

  componentWillMount(){
    axios.get('https://5b97477729cbd70014a8fd43.mockapi.io/api/v1/music_albums')
      .then(response => this.setState({albums: response.data}));
  }

  renderAlbums(){
    return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />
  }

  render() {
    console.log(this.state);

    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}
 //npm install --save axios

export default AlbumList;

// props = parent to child comunication
// state = internal components ( update )
