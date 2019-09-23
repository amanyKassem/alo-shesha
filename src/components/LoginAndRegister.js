import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { Container, Content, Button  } from 'native-base';

class LoginAndRegister extends Component {

    navigateToLogin(){
        this.props.navigation.navigate("login");
    }

    render() {
        return (
            <Container style={{ backgroundColor: '#2e3f59' }}>
                <Content>
                    {/* if file is local : source={require('/path')} ||  if file is online: source={{ uri:'url' }} */}
                    <View style={{ alignItems: 'center', height: 500, justifyContent: 'center' }}>
                        <Image source={require('../../assets/images/logo.png')} resizeMode={'contain'} style={{ width: 300, height: 300 }}/>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <Button onPress={()=> this.navigateToLogin()} block style={{ backgroundColor: '#eb5355', alignSelf: 'center', marginBottom: 20, width: '95%', borderRadius: 4, justifyContent: 'center', height: 40 , paddingBottom:13 }}>
                            <Text style={{ color: '#fff', textAlign: 'center' , fontFamily:"RegularFont" }}>تسجيل الدخول</Text>
                        </Button>
                        <Button onPress={()=> this.props.navigation.navigate("register")} block style={{ backgroundColor: '#f0b918', alignSelf: 'center', width: '95%', borderRadius: 4, justifyContent: 'center', height: 40 , paddingBottom:13}}>
                            <Text style={{ color: '#fff', textAlign: 'center' , fontFamily:"RegularFont"  }}>التسجيل</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}


export default LoginAndRegister;