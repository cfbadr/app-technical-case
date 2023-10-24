import React from 'react';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import colors from '../../constants/colors'
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view'
import { faArrowUpAZ, faArrowDownZA} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import styles from './styles';
import { getFlagEmoji } from '../../helpers/string';

export default function App(props) {
  const {countries} = props;
  const [searchText, setSearchText] = useState('')
  
  const renderCell = ({item}) => {
    return (
      <TouchableOpacity onPress={() => props.onPress(item.code)} style={styles.container}>
        <Text>{getFlagEmoji(item.code)} {item.name}</Text>
      </TouchableOpacity>
    )
  }

  const filteredList = (list) => {
    return list.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()))
  }

  return (
    <KeyboardAwareFlatList
      style={styles.fullWidth}
      data={filteredList(countries)}
      renderItem={(item) => renderCell(item)}     
      keyExtractor={(_, index) => index.toString()}
      stickyHeaderIndices={[0]}
      ListHeaderComponent={
        <View style={[styles.containerSearch, styles.container]}>
          <View style={styles.containerInput}>
            <TextInput value={searchText} placeholder='Search a country ...' onChangeText={setSearchText}/>
          </View>
          <TouchableOpacity style={styles.containerOrder} onPress={() => props.onChangeOrderPress()}>
            <FontAwesomeIcon size={24} icon={props.order === 'ascending' ? faArrowUpAZ : faArrowDownZA} color={colors.primary}/>
          </TouchableOpacity>
        </View>
      }
    />
  )
}