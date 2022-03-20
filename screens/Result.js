import { StatusBar } from 'expo-status-bar';
import { Text, Button, View, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import { Ionicons,MaterialIcons, AntDesign, MaterialCommunityIcons, FontAwesome} from '@expo/vector-icons';
import styles from '../style/global';



function Result({navigation}) {
  console.log("aplikasi berjalan");
  const{navigation}=this.props;
  const pergi=navigation.getParam('Berangkat')
  const tuju = navigation.getParam('Tujuan')
  const tgl=navigation.getParam('Tanggal')

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bg2}>
          {/* tempat ikon */}
          
        <View style={[styles.isi, {flexDirection: 'row', justifyContent:'space-between'}]} >
          {/* ikon panah */}
          <View style={[{marginTop:10}]}>
            <TouchableOpacity
            onPress={() => navigation.navigate('Home')}>
              <FontAwesome name="long-arrow-left" size={24} color="black" />
            </TouchableOpacity>
            
          </View>
          
          {/* Judul */}
          <Text style={styles.title}>Portus.id</Text>

          {/* ikon user */}
          <View style={[{marginTop:6}]}>
            <AntDesign name="user" size={24} color="black" />
          </View>
        </View>
        
        <Text style={styles.subjudul}>
          Hasil Pencarian Penerbangan             
        </Text>
        <Text style={styles.subjudul}>
              (Tanggal Keberangkatan)
            </Text>
      </View>
      
      <View style={styles.area2}>
        <Text>{JSON.stringify(pergi)}    -    {JSON.stringify(tuju)}</Text>

        <View style={styles.icnRslt} >
          <View style={[{flexDirection: 'row'}]}>
            <MaterialIcons name="airplanemode-active" size={30} color="black" style={styles.icon}/>
            <Text style={[styles.result]}>Elang</Text>
          </View>
          <Text style={[styles.tanggal]}>{JSON.stringify(tgl)}</Text>
        </View>          
      </View>

      <View style={styles.area2}>
        <Text>(L. Keberangkatan)    -    (L. Tujuan)</Text>

        <View style={styles.icnRslt} >
          
          <View style={[{flexDirection: 'row'}]}>
            <MaterialIcons name="airplanemode-active" size={30} color="black" style={styles.icon}/>
            <Text style={[styles.result]}>Elang</Text>
          </View>
          <Text style={[styles.tanggal]}>Tanggal Keberangkatan</Text>
        </View>

      </View>

      <View style={styles.crcont} >
        <Text style={styles.copyright}>Copyright Nurul Aulia Larasati-119140008</Text> 
      </View>
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
export default Result;
