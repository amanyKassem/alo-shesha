import React, { Component } from "react";
import {View, Text, TouchableOpacity , Dimensions , Image  } from "react-native";
import {Container, Header, Left, Right, Button, Icon , Content ,Body} from 'native-base';
import FooterSection from "./FooterSection";
import { LinearGradient } from 'expo';
import axios from 'axios';

const width = Dimensions.get('window').width ;

class AboutApp extends Component {
    constructor(props){
        super(props);

        this.state={
            notify:true,
            isFilterModalVisible: false,
            isSortModalVisible: false,
            about: []
        }
    }


    componentWillMount() {
        axios.get('http://products.aait-sa.com/api/about-app').then(response => {
            this.setState({ about: response.data.data })
        });
    }

    static navigationOptions = () => ({
        drawerLabel: 'عن التطبيق',
        drawerIcon: ( <Icon style={{ fontSize: 20, color: '#f0b918' }} type={'FontAwesome'} name={'info-circle'}/> )
    })

    render() {
        return (

            <Container >
                <Header style={{ backgroundColor: "#fff" , alignItems: 'center', paddingTop: 25, height: 80, justifyContent: 'center'}}>
                    <Left style={{flex:0}}>
                        <Button transparent onPress={() => this.props.navigation.openDrawer()} >
                            <Icon name='bars' type={"FontAwesome"} style={{ color: "#646464" , fontSize:18 }}/>
                        </Button>
                    </Left>
                    <Body style={{ textAlign:'center' , alignItems: 'center' ,  justifyContent: 'center' , alignSelf:'center'}}>
                    <Text style={{color:'#797979' , textAlign:'center' , alignItems: 'center', justifyContent: 'center' , fontFamily:"BoldFont" , fontSize:17}}>مشاركة التطبيق</Text>
                    </Body>
                    <Right style={{flex:0}}>
                        <Button transparent onPress={()=> this.props.navigation.navigate("home")}>
                            <Icon name='chevron-left' type={"FontAwesome"} style={{ color: "#646464" , fontSize:17 }}/>
                        </Button>
                    </Right>
                </Header>
                <Content style={{ padding: 15 }}>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' , width:width , marginRight: 0, marginLeft: 0 ,paddingLeft:0 , paddingRight:0 , alignSelf:'center'}}>
                        <LinearGradient
                            colors={['#fadb0f', '#f89c1c']}
                            style={{ borderRadius: 5 , flex:1 , width:'90%' , padding: 10,  marginBottom:10}}
                            start={[0, 1]} end={[1, 0]}
                        >
                            <Text style={{backgroundColor: 'transparent', fontSize: 15, color: '#fff' , fontFamily:"RegularFont" }}>عن التطبيق</Text>
                            <Text style={{backgroundColor: 'transparent', fontSize: 14, color: '#fff' , fontFamily:"RegularFont" }}>{this.state.about.aboutApp}</Text>
                        </LinearGradient>

                        <LinearGradient
                            colors={['#fadb0f', '#f89c1c']}
                            style={{ borderRadius: 5 , flex:1 , width:'90%' , padding: 10,  marginBottom:10}}
                            start={[0, 1]} end={[1, 0]}
                        >
                            <Text style={{backgroundColor: 'transparent', fontSize: 15, color: '#fff' , fontFamily:"RegularFont" }}>الرسالة</Text>
                            <Text style={{backgroundColor: 'transparent', fontSize: 14, color: '#fff' , fontFamily:"RegularFont" }}>{this.state.about.message}</Text>
                        </LinearGradient>
                        <LinearGradient
                            colors={['#fadb0f', '#f89c1c']}
                            style={{ borderRadius: 5 , flex:1 , width:'90%' , padding: 10,  marginBottom:10}}
                            start={[0, 1]} end={[1, 0]}
                        >
                            <Text style={{backgroundColor: 'transparent', fontSize: 15, color: '#fff' , fontFamily:"RegularFont" }}>الرؤية</Text>
                            <Text style={{backgroundColor: 'transparent', fontSize: 14, color: '#fff' , fontFamily:"RegularFont" }}>{this.state.about.vission}</Text>
                        </LinearGradient>
                    </View>
                </Content>
                <FooterSection navigation={this.props.navigation}/>
            </Container>

        );
    }
}


export default AboutApp;