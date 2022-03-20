import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons, AntDesign, MaterialCommunityIcons, FontAwesome} from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from '../style/global';
import { Component } from 'react/cjs/react.production.min';


function Home({navigation}) {
  console.log("aplikasi berjalan");

  return (
    <SafeAreaView style={styles.container}>
      {/* tempat ikon */}
      <View style={[styles.isi, {flexDirection: 'row', justifyContent:'space-between'}]} >
        <View>
          <FontAwesome5 name="bars" size={24} color="black" />
        </View>
        
        <View style={[{justifyContent:'flex-end'}]}>
          <AntDesign name="user" size={24} color="black" />
        </View>
      </View>
      
      {/* Judul */}
      <Text style={styles.title}>Portus.id</Text>
      
      
      <View style={styles.area}>
        <Text  style={styles.textarea}>Lokasi Keberangkatan</Text>
        
        <View style={styles.section}>
          <MaterialCommunityIcons name="airplane-takeoff" size={24} color="black" 
            style={styles.icon}
          />
          <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            value={this.state.berangkat}
            onChangeText={berangkat => this.setState({berangkat})}
            // value={number}
            placeholder="Masukan Lokasi Keberangkatan">
          </TextInput>
        </View>

        <Text  style={styles.textarea}>Lokasi Tujuan</Text>
        
        <View style={styles.section}>
          <MaterialCommunityIcons name="airplane-landing" size={24} color="black" style={styles.icon}/>
          <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            value={this.state.tujuan}
            onChangeText={tujuan => this.setState({tujuan})}
            placeholder="Masukan Lokasi Tujuan">
          </TextInput>
        </View>
        
        <Text  style={styles.textarea}>Tanggal Keberangkatan</Text>

        <View style={styles.section}>
          <FontAwesome name="calendar" size={24} color="black" style={styles.icon}/>
          <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            value={this.state.tanggal}
            onChangeText={tanggal => this.setState({tanggal})}
            placeholder="Masukan Lokasi Tujuan">
          </TextInput>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Result',{
            Berangkat:this.state.berangkat,
            Tujuan: this.state.tujuan,
            Tanggal: this.state.tujuan
          })}
          
          style={styles.button}>
    
          <Text style={styles.btnText}>
            Cari
          </Text>  
          
        </TouchableOpacity>
      </View>
      <View style={styles.crcont} >
        <Text style={styles.copyright}>Copyright Nurul Aulia Larasati-119140008</Text> 
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
export default Home;
