import React, { Component } from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import {Container, Header, Left, Right, Button, Icon , Content ,Body , Card, CardItem , Radio , ListItem} from 'native-base';
import Modal from "react-native-modal";
import FooterSection from "./FooterSection";
import axios from 'axios';

class Home extends Component {
    constructor(props){
        super(props);

        this.state={
            notify:true,
            isFilterModalVisible: false,
            isSortModalVisible: false,
            products: [],
            types: []
        }
    }

    filter_toggleModal = () => this.setState({ isFilterModalVisible: !this.state.isFilterModalVisible });
    sort_toggleModal = () => this.setState({ isSortModalVisible: !this.state.isSortModalVisible });


    componentWillMount() {
        axios.get('http://products.aait-sa.com/api/allProducts').then(response => {
            this.setState({ products: response.data.data })
        });
        axios.get('http://products.aait-sa.com/api/alltypes').then(response => {
            this.setState({ types: response.data.data })
        });
    }

    componentDidMount() {
        this.interval = setInterval(
            () => {
                this.setState({
                    notify:!this.state.notify
                })
            },
            1000
        );
    }

    setToCart (product_id) {
        axios.post('http://products.aait-sa.com/api/addToCart', { product_id: product_id  , user_id:6 , quantity : 1}).then(response => {
           if (response.data.value == 1)
                this.props.navigation.navigate("cart");
        });
    }

    renderNotification(){
        if(this.state.notify){
            return(
                <View style={{
                    position:'absolute',
                    left: 20,
                    top: 15,
                    backgroundColor: '#f70909',
                    width: 6,
                    height: 6,
                    borderRadius: 50,
                    zIndex:1
                }}></View>
            )
        }

        return (
            <View/>
        )
    }

    static navigationOptions = () => ({
        drawerLabel: 'الرئيسية',
        drawerIcon: ( <Icon style={{ fontSize: 20, color: '#f0b918' }} type={'FontAwesome'} name={'home'}/> )
    })

    render() {
                // console.log(this.state.products);
        return (

            <Container >
                <Header style={{ backgroundColor: "#fff" , alignItems: 'center', paddingTop: 25, height: 80, justifyContent: 'center'}}>
                    <Left style={{flex:0}}>
                        <Button transparent onPress={() => this.props.navigation.openDrawer()} >
                            <Icon name='bars' type={"FontAwesome"} style={{ color: "#646464" , fontSize:18 }}/>
                        </Button>
                    </Left>
                    <Body style={{ textAlign:'center' , alignItems: 'center' ,  justifyContent: 'center' , alignSelf:'center'}}>
                        <Text style={{color:'#797979' , textAlign:'center' , alignItems: 'center', justifyContent: 'center' , fontFamily:"BoldFont" , fontSize:17}}>الرئيسية</Text>
                    </Body>
                    <Right style={{flex:0}}>
                        <Button transparent onPress={()=> this.props.navigation.navigate("notifications")}>
                            {this.renderNotification()}
                            <Icon name='bell' type={"FontAwesome"} style={{ color: "#646464" , fontSize:18 }}/>
                        </Button>
                    </Right>
                </Header>
                <Content style={{ padding: 15 }}>
                    <View style={{flex:1 , flexDirection:'row' ,paddingRight:5 }}>
                        <Button transparent onPress={this.filter_toggleModal} >
                            <Image source={require('../../assets/images/filter.png')} resizeMode={'contain'} style={{ width: 18, height: 18 }}/>
                        </Button>
                        <Button transparent onPress={this.sort_toggleModal} style={{marginLeft:15}}>
                            <Image source={require('../../assets/images/sort.png')} resizeMode={'contain'} style={{ width: 18, height: 18}}/>
                        </Button>
                        <Modal isVisible={this.state.isFilterModalVisible} style={{ margin: 0}}>
                            <View style={{ flex: 1 , textAlign:'right' , backgroundColor:'#fff' , padding:15 , paddingTop:5 }}>
                                <Text style={{color:'#838383', fontFamily:"BoldFont" , fontSize:15}}>تصفية المنتجات</Text>
                                <View style={{ flex: 1 ,padding:0 , margin:0}}>

                                    {
                                        this.state.types.map((type, i) => (
                                            // return (

                                                <ListItem key={i} style={{borderBottomWidth: 0, paddingBottom: 0}}>
                                                    <Left>
                                                        <Text style={{
                                                            color: '#3c3c3c',
                                                            fontFamily: "BoldFont"
                                                        }}>{type.name}</Text>
                                                    </Left>
                                                    <Right style={{flex: 1}}>
                                                        <Radio selected={true} selectedColor={'#f0b917'}/>
                                                    </Right>
                                                </ListItem>
                                            // )
                                        ))
                                    }

                                </View>
                                <Button onPress={this.filter_toggleModal}block style={{ backgroundColor: '#eb5355', alignSelf: 'center', marginBottom: 5, width: '95%', borderRadius: 4, justifyContent: 'center', height: 40 , paddingBottom:13 }}>
                                    <Text style={{ color: '#fff', textAlign: 'center' , fontFamily:"RegularFont" }}>تصفية</Text>
                                </Button>
                                <TouchableOpacity onPress={this.filter_toggleModal}block style={{ backgroundColor: '#fff', alignSelf: 'center', marginBottom: 20, width: '95%', borderRadius: 4, justifyContent: 'center', height: 40 , paddingBottom:13 }}>
                                    <Text style={{ color: '#3f3f3f', textAlign: 'center' , fontFamily:"RegularFont" }}>إلغاء</Text>
                                </TouchableOpacity>
                            </View>
                        </Modal>
                        <Modal isVisible={this.state.isSortModalVisible} style={{ margin: 0}}>
                            <View style={{ flex: 1 , textAlign:'right' , backgroundColor:'#fff' , padding:15 , paddingTop:5 }}>
                                <Text style={{color:'#838383', fontFamily:"BoldFont" , fontSize:15}}>ترتيب</Text>
                                <View style={{ flex: 1 ,padding:0 , margin:0}}>
                                    <ListItem style={{ borderBottomWidth: 0 ,paddingBottom:0}}>
                                        <Left>
                                            <Text style={{color:'#3c3c3c', fontFamily:"BoldFont"}}>الاعلي سعراً</Text>
                                        </Left>
                                        <Right style={{flex:1}}>
                                            <Radio selected={true}  selectedColor={'#f0b917'} />
                                        </Right>
                                    </ListItem>
                                    <ListItem  style={{ borderBottomWidth: 0 ,paddingBottom:0}}>
                                        <Left>
                                            <Text style={{color:'#3c3c3c', fontFamily:"BoldFont"}}>الاقل سعراً</Text>
                                        </Left>
                                        <Right style={{flex:1}}>
                                            <Radio selected={false} color={'#b4b4b4'}/>
                                        </Right>
                                    </ListItem>
                                    <ListItem  style={{ borderBottomWidth: 0 ,paddingBottom:0}}>
                                        <Left>
                                            <Text style={{color:'#3c3c3c', fontFamily:"BoldFont"}}>الاكثر مبيعا</Text>
                                        </Left>
                                        <Right style={{flex:1}}>
                                            <Radio selected={false} color={'#b4b4b4'}/>
                                        </Right>
                                    </ListItem>
                                    <ListItem  style={{ borderBottomWidth: 0 ,paddingBottom:0}}>
                                        <Left>
                                            <Text style={{color:'#3c3c3c', fontFamily:"BoldFont"}}>العروض</Text>
                                        </Left>
                                        <Right style={{flex:1}}>
                                            <Radio selected={false} color={'#b4b4b4'}/>
                                        </Right>
                                    </ListItem>
                                    <ListItem  style={{ borderBottomWidth: 0 ,paddingBottom:0}}>
                                        <Left>
                                            <Text style={{color:'#3c3c3c', fontFamily:"BoldFont"}}>الكل</Text>
                                        </Left>
                                        <Right style={{flex:1}}>
                                            <Radio selected={false} color={'#b4b4b4'}/>
                                        </Right>
                                    </ListItem>
                                </View>
                                <Button onPress={this.sort_toggleModal}block style={{ backgroundColor: '#eb5355', alignSelf: 'center', marginBottom: 5, width: '95%', borderRadius: 4, justifyContent: 'center', height: 40 , paddingBottom:13 }}>
                                    <Text style={{ color: '#fff', textAlign: 'center' , fontFamily:"RegularFont" }}>ترتيب</Text>
                                </Button>
                                <TouchableOpacity onPress={this.sort_toggleModal}block style={{ backgroundColor: '#fff', alignSelf: 'center', marginBottom: 20, width: '95%', borderRadius: 4, justifyContent: 'center', height: 40 , paddingBottom:13 }}>
                                    <Text style={{ color: '#3f3f3f', textAlign: 'center' , fontFamily:"RegularFont" }}>إلغاء</Text>
                                </TouchableOpacity>
                            </View>
                        </Modal>
                    </View>
                    <View style={{marginBottom:30}}>
                        {
                            this.state.products.map((product, i) => {
                                return (
                                    <Card key={i} style={{}}>
                                        <CardItem style={{ flexDirection: 'row' , paddingTop:0 , paddingBottom:0 , paddingRight:7, paddingLeft:7 }}>
                                            <View style={{ flex: 0 , padding:0}}>
                                                <TouchableOpacity onPress={()=> this.props.navigation.navigate("product", {id: product.id})}>
                                                    <Image source={{ uri:product.logo }} resizeMode={'contain'} style={{ width: 110, height: 108, alignSelf: 'flex-end'}}/>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{ flex: 1 , paddingLeft:10}}>
                                                <TouchableOpacity onPress={()=> this.props.navigation.navigate("product", {id: product.id})}>
                                                    <Text style={{fontFamily:"BoldFont" , color: '#818181' }}>{ product.name }</Text>
                                                </TouchableOpacity>
                                                <Text style={{color:'#9b9b9b' , fontFamily:"RegularFont" , fontSize:11}}>بواسطة <Text style={{color:'#818181' , fontFamily:"BoldFont", fontSize:11}}>{product.provider}</Text></Text>
                                                <Text style={{color:'#818181' , fontFamily:"BoldFont", fontSize:11}}>{product.price} رس</Text>
                                                <Button onPress={()=> this.setToCart(product.id) } block style={{ backgroundColor: '#eb5355',  borderRadius: 4, justifyContent: 'center' , height:27
                                                    , width:'50%' , marginBottom:8 , marginTop:5 , alignItems:'center' , paddingBottom:10}}>
                                                    <Text style={{ color: '#fff', textAlign: 'center' , fontFamily:"RegularFont" , fontSize:12 , alignSelf:'center' }}>أضف إلي العربة</Text>
                                                </Button>
                                            </View>
                                        </CardItem>
                                    </Card>
                                )
                            })
                        }

                    </View>
                </Content>
                <FooterSection routeName={'home'} navigation={this.props.navigation}/>
            </Container>

        );
    }
}


export default Home;