import React, { Component } from "react";
import {View, Text,Dimensions} from "react-native";
import {Container, Header, Right, Button, Icon , Content ,Body} from 'native-base';
import { MapView } from 'expo';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class MapLocation extends Component {
    constructor(props){
        super(props);

        this.state={
            x: { latitude: 37.78825, longitude: -122.4324 }
        }
    }

    static navigationOptions = () => ({
        drawerLabel: () => null
    })

    render() {
        return (

            <Container >
                <Header style={{ backgroundColor: "#fff" , alignItems: 'center', paddingTop: 25, height: 80, justifyContent: 'center'}}>
                    <Body style={{ textAlign:'center' , alignItems: 'center' ,  justifyContent: 'center' , alignSelf:'center'}}>
                    <Text style={{color:'#797979' , textAlign:'center' , alignItems: 'center', justifyContent: 'center' , fontFamily:"BoldFont" , fontSize:17}}>اختر عنوانك</Text>
                    </Body>
                    <Right style={{flex:0}}>
                        <Button transparent onPress={()=> this.props.navigation.navigate("cart")}>
                            <Icon name='chevron-left' type={"FontAwesome"} style={{ color: "#646464" , fontSize:17 }}/>
                        </Button>
                    </Right>
                </Header>
                <Content style={{}}>
                    <View style={{flex: 1 }}>
                        <MapView style={{ flex: 1 , width:width , height:height }} initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }} >
                            <MapView.Marker draggable
                                            coordinate={this.state.x}
                                            onDragEnd={(e) => this.setState({ x: e.nativeEvent.coordinate })}
                                            // image={require('../../assets/images/marker.png')}
                                            // style={{width: 60,
                                            //     height: 75}}
                            />
                        </MapView>
                        <Button onPress={()=> this.props.navigation.navigate("congrats")} block style={{ backgroundColor: '#eb5355', alignSelf: 'center', width: '95%', borderRadius: 3, justifyContent: 'center', height: 35 , paddingBottom:10 , position:'absolute' , bottom:100}}>
                            <Text style={{ color: '#fff', textAlign: 'center' , fontFamily:"RegularFont"}}>تأكيد العنوان علي الخريطة</Text>
                        </Button>
                    </View>
                </Content>
            </Container>

        );
    }
}


export default MapLocation;