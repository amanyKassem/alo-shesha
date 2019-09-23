import React, { Component } from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import {Container, Header, Right, Button, Icon, Content, Body, Item, Label, Input, Form, Picker} from 'native-base';
import { ImagePicker } from 'expo';
import FooterSection from "./FooterSection";
import axios from "axios";

class EditProfile extends Component {
    constructor(props){
        super(props);

        this.state={
            selected1: undefined,
            selected2: undefined,
            image: null,
            name: 'اوامر الشبكة',
            userInfo:[]
        }
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
            base64:true
        });

        console.log(result);

        // check if there is image then set it and make button not disabled
        if (!result.cancelled) {
            this.setState({ image: result.uri ,base64:result.base64});
        }
    };

    static navigationOptions = () => ({
        drawerLabel: 'الاعدادات',
        drawerIcon: ( <Icon style={{ fontSize: 20, color: '#f0b918' }} type={'FontAwesome'} name={'cog'}/> )
    })

    componentWillMount() {
        axios.post('http://products.aait-sa.com/api/customerEditProfile', { product_id: this.state.productId }).then(response => {
            this.setState({ userInfo: response.data.data , user_id: 6 })
        });


    }

    render() {
        let image = this.state.image;
        return (

            <Container >
                <Header style={{ backgroundColor: "#fff" , alignItems: 'center', paddingTop: 25, height: 80, justifyContent: 'center'}}>
                    <Body style={{ textAlign:'center' , alignItems: 'center' ,  justifyContent: 'center' , alignSelf:'center'}}>
                    <Text style={{color:'#797979' , textAlign:'center' , alignItems: 'center', justifyContent: 'center' , fontFamily:"BoldFont" , fontSize:17}}>تعديل الحساب</Text>
                    </Body>
                    <Right style={{flex:0}}>
                        <Button transparent onPress={()=> this.props.navigation.navigate("home")}>
                            <Icon name='chevron-left' type={"FontAwesome"} style={{ color: "#646464" , fontSize:17 }}/>
                        </Button>
                    </Right>
                </Header>
                <Content style={{padding:15}}>
                    <View style={{flex:1 , alignItems: 'center' , paddingTop:40 , marginBottom:15}}>
                        {/*<Image resizeMode={'cover'} style={{ width: 100, height: 100 , borderRadius:50 }}/>*/}

                        {image != null?
                            <TouchableOpacity onPress={this._pickImage}>
                                <Image
                                    resizeMode={'cover'}
                                    style={{ width: 100, height: 100 , borderRadius:50 }}
                                    source={{ uri: image }}
                                />
                            </TouchableOpacity>
                                :
                            <TouchableOpacity onPress={this._pickImage}>
                                <Image
                                    resizeMode={'cover'}
                                    style={{ width: 100, height: 100 , borderRadius:50 }}
                                    source={require('../../assets/images/plus.png')}
                                    onPress={()=> this._pickImage() }
                                />
                            </TouchableOpacity>
                        }

                        <Text style={{color:'#3f3f3f', fontFamily:"BoldFont" , fontSize:15, marginTop:10}}>أوامر الشبكة</Text>
                    </View>
                    <Form style={{ width:"100%"}}>
                        <Item stackedLabel style={{marginLeft:0 , borderBottomWidth:0}}>
                            <Label style={{ fontFamily:"BoldFont" , color: "#929292" , fontSize:12 , width:"100%" , marginBottom:10 }} >الاسم</Label>
                            <Input style={styles.input}
                                   autoCapitalize='none'
                                   onChangeText={(name) => this.setState({ name })}
                                   value={this.state.name}
                            />
                        </Item>
                        <Item stackedLabel style={{marginLeft:0 , borderBottomWidth:0}}>
                            <Label style={{ fontFamily:"BoldFont" , color: "#929292" , fontSize:12 , width:"100%" , marginBottom:10 }} >رقم الجوال</Label>
                            <Input keyboardType='phone-pad'
                                   style={styles.input}
                                   value={'096625478541233'}
                            />
                        </Item>
                        <Label style={{ fontFamily:"BoldFont" , color: "#929292" , fontSize:12 , width:"100%"  , marginBottom:5 , marginTop:10 , marginLeft:5 }} >الدولة</Label>
                        <Item style={{ borderWidth: 1,paddingRight:0 , paddingLeft: 10, borderColor: '#dbdbdb', height: 35, marginTop: 5, borderRadius: 3,  width:'95%' }} regular >
                            <Picker
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
                            <Icon name={'sort-down'} type={'FontAwesome'} style={{ position: 'absolute', top: 10, right: 0, color: "#a7a7a7" , fontSize:12}}/>
                        </Item>
                        <Label style={{ fontFamily:"BoldFont" , color: "#929292" , fontSize:12 , width:"100%"  , marginBottom:5 , marginTop:10, marginLeft:5 }} >المدينة</Label>
                        <Item style={{ borderWidth: 1,paddingRight:0 , paddingLeft: 10, borderColor: '#dbdbdb', height: 35, marginTop: 5, borderRadius: 3,  width:'95%' }} regular >
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{width:undefined, backgroundColor: 'transparent' , fontFamily:"BoldFont" , color: "#5e5e5e"}}
                                placeholder="المدينة"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#fff"
                                selectedValue={this.state.selected2}
                                onValueChange={(value) => this.setState({ selected2: value  })}
                            >
                                <Picker.Item label="مصر" value="key0" />
                                <Picker.Item label="فرنسا" value="key1" />
                                <Picker.Item label="امريكا" value="key2" />
                            </Picker>
                            <Icon name={'sort-down'} type={'FontAwesome'} style={{ position: 'absolute', top: 10, right: 0, color: "#a7a7a7" , fontSize:12}}/>
                        </Item>

                        <Button onPress={()=> this.props.navigation.navigate("profile")} block style={{ backgroundColor: '#eb5355',
                            marginTop: 20,marginBottom: 20, width: '95%', borderRadius: 3, justifyContent: 'center', height: 35 , paddingBottom:10 }}>
                            <Text style={{ color: '#fff', textAlign: 'center' , fontFamily:"RegularFont" }}>حفظ</Text>
                        </Button>
                    </Form>
                </Content>
                <FooterSection routeName={'editProfile'} navigation={this.props.navigation}/>

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
export default EditProfile;