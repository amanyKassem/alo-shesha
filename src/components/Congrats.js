import React, { Component } from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import {Container, Button , Content } from 'native-base';

class Congrats extends Component {
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
                <Content style={{ padding: 15}}>
                    <View style={{flex: 1 , alignItems: 'center' , justifyContent:'flex-end' , height:400 , marginBottom: 20}}>
                        <Image source={require('../../assets/images/congrat.png')} resizeMode={'contain'} style={{ width: 200, height: 150, alignSelf: 'center'}}/>
                    </View>
                    <View style={{flex: 1 , flexDirection: 'column'  , alignItems: 'center' , justifyContent:'center'}}>
                        <Text style={{fontFamily:"BoldFont" , color:'#696969' , marginBottom: 10}}>تهانينا!</Text>
                        <Text style={{fontFamily:"BoldFont" , color:'#696969'}}>لقد تمت عملية الشراء بنجاح</Text>
                        <Button onPress={()=> this.props.navigation.navigate("home")} block style={{ backgroundColor: '#eb5355', alignSelf: 'center', marginTop: 25,marginBottom: 30, width: '100%', borderRadius: 3, justifyContent: 'center', height: 35 , paddingBottom:10}}>
                            <Text style={{ color: '#fff', textAlign: 'center' , fontFamily:"RegularFont"}}>العودة للصفحة الرئيسية</Text>
                        </Button>
                    </View>
                </Content>
            </Container>

        );
    }
}


export default Congrats;