import { StatusBar } from 'expo-status-bar';
import {Card, Text, View, SafeAreaView, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import { Ionicons,MaterialIcons, AntDesign, MaterialCommunityIcons, FontAwesome} from '@expo/vector-icons';
import styles from '../style/global';
import {Bandara, Maskapai, Jadwal} from '../data'


function Result({navigation, route}) {
  console.log("aplikasi berjalan");
  const { asal } = route.params;
  const { tujuan } = route.params;
  const { tanggal } = route.params;

  // const {berangkat}=Bandara.find(id =>id.bandara_nama.toLowerCase()===asal.toLowerCase() ).bandara_kode
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bg2}>
          {/* tempat ikon */}
          
        <View style={[styles.isi, {flexDirection: 'row', justifyContent:'space-between'}]} >
          {/* ikon panah */}
          <View style={[{marginTop:10}]}>
            <TouchableOpacity
            onPress={() => navigation.goBack}>
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
            {JSON.stringify(tanggal).replace(/"/g, '')}
            </Text>
      </View>
      
      <View style={styles.area2}>
        <Text style={[styles.h2]}>{JSON.stringify(asal).replace(/"/g, '')}    -    {JSON.stringify(tujuan).replace(/"/g, '')}</Text>

        <View style={styles.icnRslt} >
          {/* ikon panah */}
          <View style={[{flexDirection: 'row'}]}>
            <MaterialIcons name="airplanemode-active" size={30} color="black" style={styles.icon}/>
            <Text style={[styles.result]}>Elang</Text>
          </View>
          <Text style={[styles.tanggal]}>{JSON.stringify(tanggal).replace(/"/g, '')}</Text>
        </View>          
      </View>

      <View style={styles.area2}>
        <Text style={[styles.h2]}>{JSON.stringify(asal).replace(/"/g, '')}    -    {JSON.stringify(tujuan).replace(/"/g, '')}</Text>

        <View style={styles.icnRslt} >
          {/* ikon panah */}
          <View style={[{flexDirection: 'row'}]}>
            <MaterialIcons name="airplanemode-active" size={30} color="black" style={styles.icon}/>
            <Text style={[styles.result]}>Elang</Text>
          </View>
          <Text style={[styles.tanggal]}>{JSON.stringify(tanggal).replace(/"/g, '')}</Text>
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