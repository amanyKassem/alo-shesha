import React, { Component } from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import {Container, Header, Left, Right, Button, Icon , Content ,Body , Card, CardItem } from 'native-base';
import FooterSection from "./FooterSection";
import axios from "axios";

class Home extends Component {
    constructor(props){
        super(props);

        this.state={
            notifications:[]
        }
    }

    componentWillMount() {
        axios.post('http://products.aait-sa.com/api/showNotifications', { user_id: 6 }).then(response => {
            this.setState({ notifications: response.data.data  })
        });
    }

    deleteFromNoti(notiId){
        axios.post('http://products.aait-sa.com/api/deleteNotify', {  notify_id:notiId }).then(response => {
            this.componentWillMount();
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
                            <Icon name='bars' type={"FontAwesome"} style={{ color: "#646464" , fontSize:18 }}/>
                        </Button>
                    </Left>
                    <Body style={{ textAlign:'center' , alignItems: 'center' ,  justifyContent: 'center' , alignSelf:'center'}}>
                    <Text style={{color:'#797979' , textAlign:'center' , alignItems: 'center', justifyContent: 'center' , fontFamily:"BoldFont" , fontSize:17}}>الاشعارات</Text>
                    </Body>
                    <Right style={{flex:0}}>
                        <Button transparent onPress={()=> this.props.navigation.navigate("home")}>
                            <Icon name='chevron-left' type={"FontAwesome"} style={{ color: "#646464" , fontSize:17 }}/>
                        </Button>
                    </Right>
                </Header>
                <Content style={{ padding: 15 }}>
                    <View style={{marginBottom: 30}}>

                        {
                            this.state.notifications.map((noti, i) => {
                                return(

                                    <Card key={i} style={{}}>
                                        <CardItem style={{  paddingTop:0 , paddingBottom:0 , paddingRight:7, paddingLeft:7 , alignItems: 'flex-start' }}>
                                            <View style={{  flex: 1 , paddingLeft:20}}>
                                                <View style={{position:'absolute', left: 2, top: 10, backgroundColor: '#f0b917',
                                                    width: 10, height: 10, borderRadius: 50, zIndex:1}}></View>
                                                <Text style={{fontFamily:"BoldFont" , color: '#363636' }}>{noti.title}</Text>
                                                <TouchableOpacity onPress={()=> this.deleteFromNoti(noti.id)} style={{position:'absolute' , right:0 , top:7}}>
                                                    <Icon name='close' type={"AntDesign"} style={{ color: "#797979" , fontSize:16 , fontFamily:"RegularFont" }}/>
                                                </TouchableOpacity>
                                                <Text style={{color:'#156c84' , fontFamily:"RegularFont", fontSize:12}}>منذ ساعتان</Text>
                                                <Text style={{color:'#8d8d8d' , fontFamily:"RegularFont", fontSize:12 , marginBottom:10}}>{noti.body}</Text>
                                            </View>
                                        </CardItem>
                                    </Card>
                                )
                            })
                        }
                    </View>
                </Content>
                <FooterSection  navigation={this.props.navigation}/>
            </Container>

        );
    }
}


export default Home;