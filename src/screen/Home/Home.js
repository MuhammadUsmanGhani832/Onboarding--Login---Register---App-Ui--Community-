import React from 'react'
import { Button, Text, View ,StyleSheet} from 'react-native'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
        <Button title='Profile Screen' style={styles.btn}
        onPress={()=>navigation.navigate('Profile')}></Button>
    </View>
  )
}

const styles= StyleSheet.create({
container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
}
})

export default Home