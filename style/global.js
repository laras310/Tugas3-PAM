import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E5B299',
      // alignItems: 'center',
      // justifyContent: 'center',
      // marginHorizontal: 16,
    },
  
    isi:{
      marginHorizontal:15,
      marginTop:50,
      marginBottom:10,
      // marginVertical:30,
    },
    area:{
      marginHorizontal: 50,
      marginVertical:50,
      backgroundColor:"#FFEFDF",
      paddingTop:15,
      paddingHorizontal:30,
      paddingBottom:60,
      borderRadius:10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },

    area2:{
      marginHorizontal: 30,
      marginTop:20,
      backgroundColor:"#FFEFDF",
      paddingTop:15,
      paddingHorizontal:30,
      paddingBottom:20,
      borderRadius:5,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.4,
      shadowRadius: 4,
      elevation: 7,
    },
  
    title:{
      textAlign:'center',
      // marginVertical:10,
      fontSize:30,
      fontWeight:"bold",
    },
  
    textarea:{
      fontWeight:"bold",
      marginVertical:10,
      fontSize:15,
    },
    
    input:{
      // borderWidth:1,
      // marginBottom:12,
      height:40,
      padding:10
    },
  
    button:{
      borderRadius:10,
      padding:10,
      marginTop:30,
      backgroundColor: '#7D5A50'
    },
  
    btnText:{
      fontSize:20,
      color:'white',
      textAlign:'center',
      // marginVertical: 12,
    },
  
    copyright:{
      
      alignContent:'center',
      fontSize:15,
      opacity:0.3,
    },

    crcont:{
      alignItems: 'center', flex: 1,
      justifyContent: 'flex-end',
      marginBottom: 36
    },

    section:{
      flexDirection:'row',
      // justifyContent:'center',
      alignItems: 'center',
      borderWidth:0.5,
      borderRadius:5,
      paddingLeft:10,
    },

    icnRslt:{
      marginTop:30,
      flexDirection: 'row', 
      justifyContent:'space-between'
    },

    result:{
      fontSize:24,
      fontWeight:'bold',
      marginLeft:10
    },
    
    tanggal:{
      fontSize:14,
      color:'blue',
      marginTop:10,
      fontWeight:'bold'
    },

    subjudul:{
      textAlign:'center',
      fontSize: 18,
    },

    bg2:{
      // marginHorizontal: 50,
      // marginVertical:50,
      backgroundColor:"#B4846C",
      // paddingTop:15,
      // paddingHorizontal:10,
      paddingBottom:40,
      borderRadius:10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    
  });

  export default styles;