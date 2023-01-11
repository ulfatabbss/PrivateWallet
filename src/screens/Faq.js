import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {primary} from '../utilis/colors';

const Faq = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: primary}}>
      <Header navigation={navigation} text={'E-Wallet'} color={'#fff'} />
      <ScrollView>
        <View style={{flex: 1, backgroundColor: primary, padding: 30}}>
          <Text style={{fontSize: 18, fontWeight: '800', color: '#fff'}}>
            About Us
          </Text>
          <Text style={{color: '#fff', fontSize: 14, marginVertical: 20}}>
            At FRNZ innovation, we aim to simplify digital adaption for
            businesses and consumers alike. We identify avenues where in
            businesses can increase efficiencies without impacting their
            operating costs; while their customers get to experience a seamless
            user journey. E-Wallet is our recent iinovation where we connect
            scrap dealers and sellers through our mobile application hence
            increasing the footprint for scrap dealers while sitting at their
            warehouses or shops. When you partner with us, you are shaking hands
            with a strong ally who can make yoour digital dreams come true.
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '800',
              color: '#fff',
              marginTop: 20,
            }}>
            About E-Wallet
          </Text>
          <Text style={{color: '#fff', fontSize: 14, marginVertical: 20}}>
            Mr.Scrap is a mobile application developed by FRNZ innovation. Over
            a research our team understands that the importance of scrap
            recycling and more thean 60% scrap materials are not recycled
            because of inconvenience. Hence we developed an app where people can
            sell their recyclable waste setteled at their home, offie or
            construction site through our Scrap app. E-Wallet app made the
            entire process simply to understand both sellers and buyer easily.
          </Text>
          <Text
            style={{
              color: '#fff',
              fontSize: 14,
              marginVertical: 20,
              width: 120,
            }}>
            Office Address **************** ---------- ********** -----------
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Faq;

const styles = StyleSheet.create({});
