import { StyleSheet,SafeAreaView, Platform, StatusBar,} from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import PlanetHeader from '../components/planet-header'
import { colors } from '../theme/colors'

export default function Details({route}) {
    const planet = route.params.planet;
    console.log(planet)
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.black, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
       <PlanetHeader backBtn={true}></PlanetHeader>
 </SafeAreaView>
  )
}

const styles = StyleSheet.create({})