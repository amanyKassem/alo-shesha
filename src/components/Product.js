import React, { Component } from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import {Container, Header, Left, Right, Button, Icon , Content ,Body , Card, CardItem} from 'native-base';
import Swiper from 'react-native-swiper';
import FooterSection from "./FooterSection";
import axios from 'axios';

class Product extends Component {
    constructor(props){
        super(props);

        this.state={
            quantity: 1,
            product: [],
            images:[],
            productId: this.props.navigation.state.params.id
        }
    }
    componentWillMount() {
        axios.post('http://products.aait-sa.com/api/showProduct', { product_id: this.state.productId }).then(response => {
            this.setState({ product: response.data.data , images: response.data.data.otherImages })
        });
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
                            <Icon name='bars' type={"FontAwesome"} style={{ color: "#646464" , fontSize:17 }}/>
                        </Button>
                    </Left>
                    <Body style={{ textAlign:'center' , alignItems: 'center' ,  justifyContent: 'center' , alignSelf:'center'}}>
                    <Text style={{color:'#797979' , textAlign:'center' , alignItems: 'center', justifyContent: 'center' , fontFamily:"BoldFont" , fontSize:17}}>{this.state.product.name}</Text>
                    </Body>
                    <Right style={{flex:0}}>
                        <Button transparent onPress={()=> this.props.navigation.navigate("home")}>
                            <Icon name='chevron-left' type={"FontAwesome"} style={{ color: "#646464" , fontSize:17 }}/>
                        </Button>
                    </Right>
                </Header>
                <Content style={{  }}>
                    <View style={{ }}>
                        <Swiper style={styles.wrapper} showsButtons={true} autoplay={true}
                            paginationStyle={{position:'absolute' , bottom:0}}
                            dot={<View style={{backgroundColor:'#c8c8c8', width: 11, height: 11,borderRadius: 10, marginLeft: 5, marginRight: 5, marginTop:0, marginBottom: 0}} />}
                            activeDot={<View style={{backgroundColor: '#f0b918', width: 11, height: 11,borderRadius: 10, marginLeft: 5, marginRight: 5}} />}
                            nextButton={<Text style={{}}></Text>}
                            prevButton={<Text style={{}}></Text>}
                        >
                            {
                                this.state.images.map((img, i) => {
                                    return(
                                        <View key={i} style={styles.slideImg}>
                                            <Image source={{ uri:img.url }} resizeMode={'contain'} style={{height:'100%' , width:'100%'}}/>
                                        </View>
                                    )
                                })
                            }
                        </Swiper>
                    </View>
                    <View style={{ flex: 1 , padding:20}}>
                        <Text style={{fontFamily:"BoldFont" , color: '#818181' }}>{this.state.product.name}</Text>
                        <Text style={{color:'#9b9b9b' , fontFamily:"RegularFont" , fontSize:12}}>{this.state.product.price} ريال سعودي</Text>
                        <Text style={{color:'#818181' , fontFamily:"BoldFont", fontSize:12}}>الكمية</Text>
                        <View style={{flex: 1 , flexDirection: 'row'}}>
                            <Button onPress={()=> { this.state.quantity >= this.state.product.stock ? this.state.quantity : this.setState({ quantity: this.state.quantity+1 })}} block style={{ backgroundColor: '#ededed', alignSelf: 'center',
                                 width: 25, borderRadius: 3, justifyContent: 'center', height: 20 , paddingBottom:12 }}>
                                <Text style={{ color: '#818181', textAlign: 'center' , fontFamily:"BoldFont"}}>+</Text>
                            </Button>
                            <Text style={{ color: '#818181', textAlign: 'center' , fontFamily:"BoldFont" ,width: 25,height: 20 , marginBottom:10 }}>{ this.state.quantity }</Text>
                            <Button onPress={()=> { this.state.quantity <= 1 ? this.state.quantity : this.setState({ quantity: this.state.quantity-1 })  }} block style={{ backgroundColor: '#ededed', alignSelf: 'center',
                                width: 25, borderRadius: 3, justifyContent: 'center', height: 20 , paddingBottom:12 }}>
                                <Text style={{ color: '#818181', textAlign: 'center' , fontFamily:"BoldFont"}}>-</Text>
                            </Button>
                        </View>
                        <Button onPress={()=> this.props.navigation.navigate("cart")} block style={{ backgroundColor: '#eb5355', alignSelf: 'center',
                            marginTop: 20,marginBottom: 20, width: '100%', borderRadius: 3, justifyContent: 'center', height: 35 , paddingBottom:10 , boxShadow:"0 1px 15px 1px rgba(144, 144, 144, 0.4)"}}>
                            <Text style={{ color: '#fff', textAlign: 'center' , fontFamily:"RegularFont"}}>اشتري الآن</Text>
                        </Button>
                    </View>
                </Content>
                <FooterSection navigation={this.props.navigation}/>
            </Container>

        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        width:'100%',
        height:200
    },
    slideImg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20
    }
})


export default Product;