import React, { Component } from "react";
import {View, Text, TouchableOpacity , Dimensions , Image , Share } from "react-native";
import {Container, Header, Left, Right, Button, Icon , Content ,Body} from 'native-base';
import FooterSection from "./FooterSection";
import { LinearGradient } from 'expo';
import axios from 'axios';

const width = Dimensions.get('window').width ;

class ShareApp extends Component {
    constructor(props){
        super(props);

        this.state={
            notify:true,
            isFilterModalVisible: false,
            isSortModalVisible: false,
            Links: []
        }
    }


    componentWillMount() {
        axios.get('http://products.aait-sa.com/api/contact-us').then(response => {
            this.setState({ Links: response.data.data })
        });
    }

    static navigationOptions = () => ({
        drawerLabel: 'شارك التطبيق',
        drawerIcon: ( <Icon style={{ fontSize: 20, color: '#f0b918' }} type={'FontAwesome'} name={'share-alt'}/> )
    })

     onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'React Native | A framework for building native apps using React',
            })

            if (result.action === Share.sharedAction) {
            if (result.activityType) {
            // shared with activity type of result.activityType
            } else {
            // shared
            }
            } else if (result.action === Share.dismissedAction) {
            // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

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
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' , width:width , marginRight: 0, marginLeft: 0 ,paddingLeft:0 , paddingRight:0 , alignSelf:'center'
                        , marginTop:100}}>
                        <LinearGradient
                            colors={['#fadb0f', '#f89c1c']}
                            style={{  alignItems: 'center', borderRadius: 5 , flex:1 , width:'90%' , padding: 30}}
                            start={[0, 1]} end={[1, 0]}
                        >
                            <Text style={{backgroundColor: 'transparent', fontSize: 15, color: '#fff' , fontFamily:"RegularFont" ,  marginBottom:10}}>
                                يمكنك مشاركة التطبيق من خلال
                            </Text>
                            <View style={{flex:1 , flexDirection: 'row'}}>
                                {
                                    this.state.Links.map((link, i) => {
                                        return (
                                            <TouchableOpacity key={i} style={{marginLeft:5,marginRight:5}} onPress={this.onShare}>
                                                <Image source={{ uri:link.logo }} resizeMode={'contain'} style={{ width: 20, height: 20}}/>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </View>
                        </LinearGradient>
                    </View>
                </Content>
                <FooterSection navigation={this.props.navigation}/>
            </Container>

        );
    }
}


export default ShareApp;