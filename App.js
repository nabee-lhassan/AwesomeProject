import Button from './Components/Button';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {ImageBackground} from 'react-native';
import { SafeAreaView } from 'react-native';
import { Image } from 'react-native';
import { onPress } from 'react-native';
import { title } from 'react-native';
// import { bgImage } from 'react-native';


const myBgImage = {uri: 'https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHx8fDE2OTYyOTQyMjl8MA&ixlib=rb-4.0.3'};

export default function App() {
  return (
    <View style={styles.container}>
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        
      </View>
    </SafeAreaView>
   



      <View style={styles.innerContainer2}>
    
      
     
    </View>
      
      
      <View style={styles.innerContainer3}>
      <ImageBackground style={styles.bgShade} source={require('./assets/Vector.png')}> 
<Image style={styles.uerImage} source={require('./assets/unsplash_v2aKnjMbP_k.png')}></Image>

<Button title={'Change profile picture'} inlineCss={{padding:10, backgroundColor:'white', borderRadius:20,}} changeProfile={() => {
alert("Change profile picture")

}} ></Button>


<Button title={'Upload Picture'} inlineCss={{marginTop:150,padding:20, fontSize:30, backgroundColor:'white', borderRadius:50,}} changeProfile={() => {
alert("Upload Picture")

}} ></Button>


<TouchableOpacity onPress={() =>{}} style={styles.skiBtn}>
    
      <Text style={styles.buttonSkip}>Skip</Text>
    
  </TouchableOpacity>

      </ImageBackground>
 
    </View>
   
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#0C8EE0',
  },

  uploadFromS1:{
    marginTop:10,
  },

  ImageBackground:{
    flex: 1,
    resizeMode: 'cover', // or 'stretch' for different scaling modes
    justifyContent: 'top', // Optional: center your content vertically
    alignItems: 'center', // Optional: center your content horizontally

  },


  title:{

  },


  innerContainer2: {
    flex: 2,
    // backgroundColor:'yellow',
    flexDirection: 'row'
    
  },
  
  
  uerImage:{

    width:130,
    height:130,
  },

 
 
  
  innerContainer3: {
    flex: 5,
    // backgroundColor:'green',
    
   
    
  },


  bgShade:{
    flex:5,
    alignItems:'center',
  },


  buttonSkip:{
    color:'white',
    marginTop:20,
  }

  
});







