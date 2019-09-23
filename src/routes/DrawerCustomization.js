import React, { Component } from "react";
import { View, Text, Image  } from "react-native";
import {Container,  Content } from 'native-base';
import {DrawerItems} from 'react-navigation';


class DrawerCustomization extends Component {


    render() {
        return (
            <Container>
                <Content>
                    <View style={{flex:1 , alignItems: 'center' , paddingTop:70 , marginBottom:15}}>
                        <Image source={require('../../assets/images/profileImg.png')} resizeMode={'cover'} style={{ width: 80, height: 80 , borderRadius:50 }}/>
                        <Text style={{color:'#5d5d5d', fontFamily:"BoldFont" , fontSize:15}}>أوامر الشبكة</Text>
                    </View>
                    <DrawerItems {...this.props}   activeBackgroundColor='transparent' inactiveBackgroundColor='transparent'
                     labelStyle={{color: '#5b5b5b' , marginLeft: 0 , marginRight: 0 , fontFamily:"BoldFont" , marginBottom:10 , marginTop:10  }} iconContainerStyle ={{  marginRight: 12}}
                     itemStyle  = {{marginBottom:0 , paddingBottom:0 , marginTop:0 , paddingTop:0, fontFamily:"BoldFont"}} itemsContainerStyle ={{fontFamily:"BoldFont"}} />
                </Content>
            </Container>
        );
    }
}


export default DrawerCustomization;