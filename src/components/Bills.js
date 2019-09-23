import React, { Component } from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import {Container, Header, Left, Right, Button, Icon , Content ,Body , Card, CardItem } from 'native-base';
import FooterSection from "./FooterSection";

class Home extends Component {
    constructor(props){
        super(props);

        this.state={

        }
    }

    static navigationOptions = () => ({
        drawerLabel: () => null
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
                    <Text style={{color:'#797979' , textAlign:'center' , alignItems: 'center', justifyContent: 'center' , fontFamily:"BoldFont" , fontSize:17}}>طلباتي</Text>
                    </Body>
                    <Right style={{flex:0}}>
                        <Button transparent onPress={()=> this.props.navigation.navigate("home")}>
                            <Icon name='chevron-left' type={"FontAwesome"} style={{ color: "#646464" , fontSize:17 }}/>
                        </Button>
                    </Right>
                </Header>
                <Content style={{ padding: 15 }}>
                    <View style={{}}>
                        <Card style={{height:100}}>
                            <CardItem style={{ flexDirection: 'row-reverse' , paddingTop:0 , paddingBottom:0 , paddingRight:7, paddingLeft:7 , alignItems: 'center', flex: 1 , justifyContent:'center'}}>
                                <View style={{ flex: 1 }}>
                                    <TouchableOpacity style={{position:'absolute' , right:0 , top:-15}}>
                                        <Icon name='close' type={"AntDesign"} style={{ color: "#797979" , fontSize:16 , fontFamily:"RegularFont" }}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=> this.props.navigation.navigate("orders")}>
                                        <Text style={{fontFamily:"BoldFont" , color: '#ea5455', textAlign:'center' }}>فاتورة رقم 123</Text>
                                        <Text style={{color:'#818181' , fontFamily:"RegularFont", fontSize:12, textAlign:'center'}}>اسم التاجر اوامر الشبكة</Text>
                                    </TouchableOpacity>
                                </View>
                            </CardItem>
                        </Card>
                        <Card style={{height:100}}>
                            <CardItem style={{ flexDirection: 'row-reverse' , paddingTop:0 , paddingBottom:0 , paddingRight:7, paddingLeft:7 , alignItems: 'center', flex: 1 , justifyContent:'center'}}>
                                <View style={{ flex: 1 }}>
                                    <TouchableOpacity style={{position:'absolute' , right:0 , top:-15}}>
                                        <Icon name='close' type={"AntDesign"} style={{ color: "#797979" , fontSize:16 , fontFamily:"RegularFont" }}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=> this.props.navigation.navigate("orders")}>
                                        <Text style={{fontFamily:"BoldFont" , color: '#ea5455', textAlign:'center' }}>فاتورة رقم 123</Text>
                                        <Text style={{color:'#818181' , fontFamily:"RegularFont", fontSize:12, textAlign:'center'}}>اسم التاجر اوامر الشبكة</Text>
                                    </TouchableOpacity>
                                </View>
                            </CardItem>
                        </Card>
                        <Card style={{height:100}}>
                            <CardItem style={{ flexDirection: 'row-reverse' , paddingTop:0 , paddingBottom:0 , paddingRight:7, paddingLeft:7 , alignItems: 'center', flex: 1 , justifyContent:'center'}}>
                                <View style={{ flex: 1 }}>
                                    <TouchableOpacity style={{position:'absolute' , right:0 , top:-15}}>
                                        <Icon name='close' type={"AntDesign"} style={{ color: "#797979" , fontSize:16 , fontFamily:"RegularFont" }}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=> this.props.navigation.navigate("orders")}>
                                        <Text style={{fontFamily:"BoldFont" , color: '#ea5455', textAlign:'center' }}>فاتورة رقم 123</Text>
                                        <Text style={{color:'#818181' , fontFamily:"RegularFont", fontSize:12, textAlign:'center'}}>اسم التاجر اوامر الشبكة</Text>
                                    </TouchableOpacity>
                                </View>
                            </CardItem>
                        </Card>
                    </View>
                </Content>
                <FooterSection routeName={'bills'} navigation={this.props.navigation}/>
            </Container>

        );
    }
}


export default Home;