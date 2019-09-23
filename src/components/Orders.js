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
                    <Text style={{color:'#797979' , textAlign:'center' , alignItems: 'center', justifyContent: 'center' , fontFamily:"BoldFont" , fontSize:17}}>تفاصيل الطلب</Text>
                    </Body>
                    <Right style={{flex:0}}>
                        <Button transparent onPress={()=> this.props.navigation.navigate("bills")}>
                            <Icon name='chevron-left' type={"FontAwesome"} style={{ color: "#646464" , fontSize:17 }}/>
                        </Button>
                    </Right>
                </Header>
                <Content style={{ padding: 15 }}>
                    <View style={{}}>
                        <Card style={{}}>
                            <CardItem style={{ paddingTop:0 , paddingBottom:0 , paddingRight:7, paddingLeft:7 , alignItems: 'flex-start' }}>
                                <View style={{ flex: 0 , padding:0}}>
                                    <TouchableOpacity onPress={()=> this.props.navigation.navigate("product")}>
                                        <Image source={require('../../assets/images/item.png')} resizeMode={'contain'} style={{ width: 110, height: 108, alignSelf: 'flex-end'}}/>
                                    </TouchableOpacity>
                                </View>
                                <View style={{  flex: 1 , paddingLeft:10}}>
                                    <TouchableOpacity onPress={()=> this.props.navigation.navigate("product")}>
                                        <Text style={{fontFamily:"BoldFont" , color: '#818181' }}>فاهيتا باربكيو بييف</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{position:'absolute' , right:0 , top:7}}>
                                        <Icon name='close' type={"AntDesign"} style={{ color: "#797979" , fontSize:16 , fontFamily:"RegularFont" }}/>
                                    </TouchableOpacity>
                                    <Text style={{color:'#c1c1c1' , fontFamily:"BoldFont", fontSize:12}}>55 رس</Text>
                                    <Text style={{color:'#818181' , fontFamily:"BoldFont", fontSize:12}}>الكمية 3</Text>
                                </View>
                            </CardItem>
                        </Card>
                    </View>
                    <Button onPress={()=> this.props.navigation.navigate("cart")} block style={{ backgroundColor: '#eb5355', alignSelf: 'center',
                        marginTop: 25,marginBottom: 30, width: '100%', borderRadius: 3, justifyContent: 'center', height: 35 , paddingBottom:10 , boxShadow:"0 1px 15px 1px rgba(144, 144, 144, 0.4)"}}>
                        <Text style={{ color: '#fff', textAlign: 'center' , fontFamily:"RegularFont"}}>اعادة الشراء من نفس التاجر</Text>
                    </Button>
                </Content>
                <FooterSection routeName={'orders'} navigation={this.props.navigation}/>
            </Container>

        );
    }
}


export default Home;