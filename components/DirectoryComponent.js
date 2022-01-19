import React from 'react'
import { FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'

const Directory = props => {

  const renderDirectoryItem = ({ item }) => {
    <ListItem
      title={item.nane}
      subtitle={item.description}
      leftAvatar={{ source: require('./images/react-lake.jpg')}}
    />
  }
  return (
    <FlatList
      data={props.campsites}
      renderItem={renderDirectoryItem}
      keyExtractor={item=> item.id.toString()}
    />
  )
}

export default Directory;