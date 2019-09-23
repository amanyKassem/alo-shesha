import React, { Component } from "react";
import { View, Text, Image , TouchableOpacity  } from "react-native";
import {Container, Header, Left, Right, Button, Icon , Content , Form, Item, Input, Label} from 'native-base';

class Login extends Component {


    render() {
        return (
        <Container >
            {/* if file is local : source={require('/path')} ||  if file is online: source={{ uri:'url' }} */}
            {/*<Image source={require('../../assets/images/logo.png')} resizeMode={'contain'} style={{ width: 200, height: 200 }}/>*/}
            <Header style={{ backgroundColor: "#fff" , alignItems: 'center', paddingTop: 25, height: 80, justifyContent: 'center'}} >
                <Left>
                    <Image source={require('../../assets/images/logo_.png')} resizeMode={'contain'} style={{ width: 100 }}/>
                </Left>
                <Right>
                    <Button transparent onPress={()=> this.props.navigation.navigate("loginAndRegister")}>
                        <Icon name='angle-left' type={"FontAwesome"} style={{ color: "#646464" }}/>
                    </Button>
                </Right>
            </Header>
            <Content style={{ padding: 20 }}>
                <View style={{marginVertical: 25}}>
                    <Text style={{ fontFamily:"BoldFont" , color: "#646464" }}>تسجيل الدخول</Text>
                </View>
                <Form style={{ width:"100%"}}>
                    <Item stackedLabel style={{marginLeft:0 , borderBottomWidth:0}}>
                        <Label style={{ fontFamily:"BoldFont" , color: "#656565" , fontSize:12 , width:"100%" , marginBottom:10 }} >رقم الجوال</Label>
                        <Input placeholder="رقم الجوال"
                               keyboardType='phone-pad'
                               style={{ fontFamily:"BoldFont" , color: "#5e5e5e", fontSize:11 , width: '100%'
                            , backgroundColor:"#eeeeee" , height:35, borderRadius:3 , paddingRight: 20 , paddingLeft: 20 , textAlign:"right"}}
                               placeholderTextColor={{ color: '#a7a7a7' }}
                               autoFocus
                        />
                    </Item>
                    <Button onPress={()=> this.props.navigation.navigate("drawerNavigator")} block style={{ backgroundColor: '#eb5355', alignSelf: 'center',
                        marginTop: 20,marginBottom: 20, width: '100%', borderRadius: 3, justifyContent: 'center', height: 35 , paddingBottom:10 , boxShadow:"0 1px 15px 1px rgba(144, 144, 144, 0.4)"}}>
                        <Text style={{ color: '#fff', textAlign: 'center' , fontFamily:"RegularFont"}}>دخول</Text>
                    </Button>
                </Form>
                <View style={{flex: 1 , justifyContent:'center' ,flexDirection: 'row'}}>
                    <Text style={{color:"#a7a7a7" , fontFamily:"RegularFont"}}>ليس لديك حساب ؟ </Text>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate("register")}>
                        <Text style={{color:"#f0b917" , fontFamily:"RegularFont"}}>انشاء حساب</Text>
                    </TouchableOpacity>
                </View>
            </Content>
        </Container>

        );
    }
}


export default Login;