import React, { Component } from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import {Container, Header, Left, Right, Button, Icon , Content ,Body , Card, CardItem , List, ListItem} from 'native-base';
import FooterSection from "./FooterSection";
import axios from 'axios';

class Home extends Component {
    constructor(props){
        super(props);

        this.state={
            quantity: 1,
            products: [],
            charge: 0 ,
            total:0
        }
    }

    static navigationOptions = () => ({
        drawerLabel: () => null
    })


    componentWillMount() {
        axios.post('http://products.aait-sa.com/api/showCart', {  user_id:6 }).then(response => {
            this.setState({ products: response.data.data , charge: response.data.charge, total: response.data.total})
        });
    }

    deleteFromCart(productId){
        axios.post('http://products.aait-sa.com/api/deleteFromCart', {  cart_id:productId }).then(response => {
            this.componentWillMount();
        });
    }

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
                    <Text style={{color:'#797979' , textAlign:'center' , alignItems: 'center', justifyContent: 'center' , fontFamily:"BoldFont" , fontSize:17}}>السلة</Text>
                    </Body>
                    <Right style={{flex:0}}>
                        <Button transparent onPress={()=> this.props.navigation.navigate("home")}>
                            <Icon name='chevron-left' type={"FontAwesome"} style={{ color: "#646464" , fontSize:17 }}/>
                        </Button>
                    </Right>
                </Header>
                <Content style={{ padding: 15 }}>
                    <View style={{}}>
                        {
                            this.state.products.map((product, i) => {
                                return (

                                    <Card key={i} style={{}}>
                                        <CardItem style={{ paddingTop:0 , paddingBottom:0 , paddingRight:7, paddingLeft:7 }}>
                                            <View style={{ flex: 0 , padding:0}}>
                                                <TouchableOpacity onPress={()=> this.props.navigation.navigate("product", {id: product.id})}>
                                                    <Image source={{ uri:product.logo }} resizeMode={'contain'} style={{ width: 110, height: 108, alignSelf: 'flex-end'}}/>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{ flex: 1 , paddingLeft:10}}>
                                                <TouchableOpacity onPress={()=> this.props.navigation.navigate("product", {id: product.id})}>
                                                    <Text style={{fontFamily:"BoldFont" , color: '#818181' }}>{product.name}</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={()=> this.deleteFromCart(product.id)} style={{position:'absolute' , right:0 , top:7}} >
                                                    <Icon name='close' type={"AntDesign"} style={{ color: "#797979" , fontSize:16 , fontFamily:"RegularFont" }}/>
                                                </TouchableOpacity>
                                                <Text style={{color:'#c1c1c1' , fontFamily:"BoldFont", fontSize:12}}>{product.price} رس</Text>
                                                <Text style={{color:'#818181' , fontFamily:"BoldFont", fontSize:12}}>الكمية</Text>
                                                <View style={{flex: 1 , flexDirection: 'row'}}>
                                                    <Button onPress={()=> this.setState({ quantity: this.state.quantity+1 })} block style={{ backgroundColor: '#ededed', alignSelf: 'center',
                                                        width: 25, borderRadius: 3, justifyContent: 'center', height: 20 , paddingBottom:12 }}>
                                                        <Text style={{ color: '#818181', textAlign: 'center' , fontFamily:"BoldFont"}}>+</Text>
                                                    </Button>
                                                    <Text style={{ color: '#818181', textAlign: 'center' , fontFamily:"BoldFont" ,width: 25,height: 20 , marginBottom:10 }}>{ product.quantity }</Text>
                                                    <Button onPress={()=> { this.state.quantity <= 1 ? this.state.quantity : this.setState({ quantity: this.state.quantity-1 })  }} block style={{ backgroundColor: '#ededed', alignSelf: 'center',
                                                        width: 25, borderRadius: 3, justifyContent: 'center', height: 20 , paddingBottom:12 }}>
                                                        <Text style={{ color: '#818181', textAlign: 'center' , fontFamily:"BoldFont"}}>-</Text>
                                                    </Button>
                                                </View>
                                            </View>
                                        </CardItem>
                                    </Card>
                                )
                            })
                        }
                    </View>
                    <View style={{  flex: 1 , paddingRight:5 , paddingLeft:5 }}>
                        {/*<ListItem style={{ borderBottomWidth: 0 ,paddingBottom:0 , paddingRight:0, paddingLeft:0 , marginLeft:0}}>*/}
                            {/*<Left style={{flex:1}}>*/}
                                {/*<Text style={{color:'#818181', fontFamily:"BoldFont", fontSize:12}}>سعر المنتج:</Text>*/}
                            {/*</Left>*/}
                            {/*<Right style={{flex:1}}>*/}
                                {/*<Text style={{color:'#b6b6b6', fontFamily:"BoldFont", fontSize:12}}>80.00 ريال سعودي</Text>*/}
                            {/*</Right>*/}
                        {/*</ListItem>*/}
                        <ListItem style={{ borderBottomWidth: 0 ,paddingBottom:0 , paddingRight:0, paddingLeft:0 , marginLeft:0}}>
                            <Left style={{flex:1}}>
                                <Text style={{color:'#818181', fontFamily:"BoldFont", fontSize:12}}>الشحن:</Text>
                            </Left>
                            <Right style={{flex:1}}>
                                <Text style={{color:'#b6b6b6', fontFamily:"BoldFont", fontSize:12}}>{this.state.charge} ريال سعودي</Text>
                            </Right>
                        </ListItem>
                        <ListItem style={{ borderBottomWidth: 0 ,paddingBottom:0 , paddingRight:0, paddingLeft:0 , marginLeft:0}}>
                            <Left style={{flex:1}}>
                                <Text style={{color:'#818181', fontFamily:"BoldFont", fontSize:12}}>المجموع:</Text>
                            </Left>
                            <Right style={{flex:1}}>
                                <Text style={{color:'#b6b6b6', fontFamily:"BoldFont", fontSize:12}}>{this.state.total} ريال سعودي</Text>
                            </Right>
                        </ListItem>
                    </View>
                    <Button onPress={()=> this.props.navigation.navigate("mapLocation")} block style={{ backgroundColor: '#eb5355', alignSelf: 'center',
                        marginTop: 25,marginBottom: 30, width: '100%', borderRadius: 3, justifyContent: 'center', height: 35 , paddingBottom:10}}>
                        <Text style={{ color: '#fff', textAlign: 'center' , fontFamily:"RegularFont"}}>اتمام عملية الشراء</Text>
                    </Button>
                </Content>
                <FooterSection routeName={'cart'} navigation={this.props.navigation}/>
            </Container>

        );
    }
}


export default Home;