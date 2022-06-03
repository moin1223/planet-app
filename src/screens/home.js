import { View, SafeAreaView, Platform, StatusBar, FlatList, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import PlanetHeader from '../components/planet-header'
import { colors } from '../theme/colors'
import { PLANET_LIST } from '../data/planet-list'
import { spacing } from '../theme/spacing'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

const PlanetItem = ({name,color})=>{
  const navigation =useNavigation()
  return(
    <Pressable
        onPress={() => {
          navigation.navigate("Details", { planet:item})
        }}
        style={styles.item}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={[styles.circle, { backgroundColor: color }]} />
          <Text preset='h3' style={styles.itemName}>
            {name}
          </Text>
        </View>

        <AntDesign name="right" size={24} color="white" />
      </Pressable>
  )

}


export default function Home({ navigation }) {
  const renderItem = ({ item }) => {
    const {name,color} =item
    return (
<PlanetItem name={name} color={color} />
    )

  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.black, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
      <PlanetHeader />
      <FlatList
        contentContainerStyle={styles.list}
        data={PLANET_LIST}
        keyExtractor={(item) => { item.name }}
        renderItem={renderItem}


        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  itemName: {
    textTransform: "uppercase",
    padding: spacing[4]
  },

  list: {
    padding: spacing[5]
  },
  separator: {
    borderBottomColor: colors.white,
    borderWidth: 0.5,
  },

  circle: {
    height: 20,
    width: 20,
    borderRadius: 10
  }
}) 