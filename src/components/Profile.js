import React, { Component } from "react";
import {View, Text, Dimensions, Image, StyleSheet, TouchableOpacity} from "react-native";
import {Container, Header, Right, Button, Icon, Content, Body, Item, Label, Input, Form, Picker} from 'native-base';
import FooterSection from "./FooterSection";
import axios from "axios";

class Profile extends Component {
    constructor(props){
        super(props);

        this.state={
            user: []
        }
    }

    static navigationOptions = () => ({
        drawerLabel: () => null
    })


    componentWillMount() {
        axios.post('http://products.aait-sa.com/api/userData', { user_id: 6 }).then(response => {
            this.setState({ user: response.data.data })
        });
    }

    render() {
        return (

            <Container >
                <Header style={{ backgroundColor: "#fff" , alignItems: 'center', paddingTop: 25, height: 80, justifyContent: 'center'}}>
                    <Body style={{ textAlign:'center' , alignItems: 'center' ,  justifyContent: 'center' , alignSelf:'center'}}>
                    <Text style={{color:'#797979' , textAlign:'center' , alignItems: 'center', justifyContent: 'center' , fontFamily:"BoldFont" , fontSize:17}}>حسابي</Text>
                    </Body>
                    <Right style={{flex:0}}>
                        <Button transparent onPress={()=> this.props.navigation.navigate("home")}>
                            <Icon name='chevron-left' type={"FontAwesome"} style={{ color: "#646464" , fontSize:17 }}/>
                        </Button>
                    </Right>
                </Header>
                <Content style={{padding:15}}>
                    <View style={{flex:1 , alignItems: 'center' , paddingTop:70 , marginBottom:15}}>
                        <Image source={require('../../assets/images/profileImg.png')} resizeMode={'cover'} style={{ width: 100, height: 100 , borderRadius:50  }}/>
                        <Text style={{color:'#3f3f3f', fontFamily:"BoldFont" , fontSize:15 , marginTop:10}}>{ this.state.user.name }</Text>
                        <TouchableOpacity style={{position:'absolute', flex:1 , bottom:40 , left:'35%' , width:25 , height:25 , borderRadius:50 , justifyContent:'center' , alignItems:'center' , textAlign:'center'}}
                                          onPress={()=> this.props.navigation.navigate("editProfile")}>
                            <Icon name='pencil' type={"FontAwesome"} style={{ color: "#fff" , fontSize:12 , borderWidth:3 , borderColor:'#fff' , backgroundColor:'#f0b917'
                                , alignSelf:'center' ,borderRadius:50 , width:25 , height:25 , flex:1 , textAlign:'center' , paddingTop:6}}/>
                        </TouchableOpacity>
                    </View>
                    <Form style={{ width:"100%"}}>
                        <Item stackedLabel style={{marginLeft:0 , borderBottomWidth:0}}>
                            <Label style={{ fontFamily:"BoldFont" , color: "#929292" , fontSize:12 , width:"100%" , marginBottom:10 }} >الاسم</Label>
                            <Input style={styles.input}
                                   autoCapitalize='none'
                                   editable={false}
                                   value={this.state.user.name}
                            />
                            <TouchableOpacity style={{position:'absolute', flex:1 , top:7 , right:5 , width:25 , padding:0 , height:60 , borderRadius:50 , justifyContent:'center' , alignItems:'center' , textAlign:'center'}}
                                              onPress={()=> this.props.navigation.navigate("editProfile")}>
                                <Icon name='pencil' type={"FontAwesome"} style={{ color: "#fff" , fontSize:12 , borderWidth:3 , borderColor:'#fff' , backgroundColor:'#f0b917'
                                    , alignSelf:'center' ,borderRadius:50 , width:'100%' , height:'100%' , flex:1 , textAlign:'center' , paddingRight:0 , paddingTop:6}}/>
                            </TouchableOpacity>
                        </Item>
                        <Item stackedLabel style={{marginLeft:0 , borderBottomWidth:0}}>
                            <Label style={{ fontFamily:"BoldFont" , color: "#929292" , fontSize:12 , width:"100%" , marginBottom:10 }} >رقم الجوال</Label>
                            <Input style={styles.input}
                                   keyboardType='phone-pad'
                                   editable={false}
                                   value={ this.state.user.phone }
                            />
                            <TouchableOpacity style={{position:'absolute', flex:1 , top:7 , right:5 , width:25 , padding:0 , height:60 , borderRadius:50 , justifyContent:'center' , alignItems:'center' , textAlign:'center'}}
                                              onPress={()=> this.props.navigation.navigate("editProfile")}>
                                <Icon name='pencil' type={"FontAwesome"} style={{ color: "#fff" , fontSize:12 , borderWidth:3 , borderColor:'#fff' , backgroundColor:'#f0b917'
                                    , alignSelf:'center' ,borderRadius:50 , width:'100%' , height:'100%' , flex:1 , textAlign:'center' , paddingRight:0 , paddingTop:6}}/>
                            </TouchableOpacity>
                        </Item>
                        <Label style={{ fontFamily:"BoldFont" , color: "#929292" , fontSize:12 , width:"100%"  , marginBottom:5 , marginTop:10 , marginLeft:5 }} >الدولة</Label>
                        <Item style={{ borderWidth: 1,paddingRight:0 , paddingLeft: 10, borderColor: '#dbdbdb', height: 35, marginTop: 5, borderRadius: 3,  width:'95%' }} regular >
                            <Picker
                                enabled={false}
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{width:undefined, backgroundColor: 'transparent' , fontFamily:"BoldFont" , color: "#5e5e5e"}}
                                placeholder="الدولة"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#fff"
                                selectedValue={this.state.selected1}
                                onValueChange={(value) => this.setState({ selected1: value  })}
                            >
                                <Picker.Item label="مصر" value="key0" />
                                <Picker.Item label="فرنسا" value="key1" />
                                <Picker.Item label="امريكا" value="key2" />
                            </Picker>
                            <TouchableOpacity style={{position:'absolute', flex:1 , top:7 , right:5 , width:25 , padding:0 , height:60 , borderRadius:50 , justifyContent:'center' , alignItems:'center' , textAlign:'center'}}
                                              onPress={()=> this.props.navigation.navigate("editProfile")}>
                                <Icon name='pencil' type={"FontAwesome"} style={{ color: "#fff" , fontSize:12 , borderWidth:3 , borderColor:'#fff' , backgroundColor:'#f0b917'
                                    , alignSelf:'center' ,borderRadius:50 , width:'100%' , height:'100%' , flex:1 , textAlign:'center' , paddingRight:0 , paddingTop:6}}/>
                            </TouchableOpacity>
                        </Item>
                    </Form>
                </Content>
                <FooterSection routeName={'profile'} navigation={this.props.navigation}/>
            </Container>

        );
    }
}

const styles = StyleSheet.create({
    input : {
        fontFamily:"BoldFont" ,
        color: "#5e5e5e",
        fontSize:11 ,
        width: '95%' ,
        backgroundColor:"#fff" ,
        height:35,
        borderRadius:3 ,
        paddingRight: 20 ,
        paddingLeft: 20 ,
        textAlign:"right",
        borderColor:'#dbdbdb',
        borderWidth:1
    }
});
export default Profile;