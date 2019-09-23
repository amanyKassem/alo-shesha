import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
export default class FooterSection extends Component {
    constructor(props){
        super(props);
        console.log('route name', this.props.routeName);

        this.state={
            routeName:this.props.routeName,
        }
    }

    render() {
        return (
            <Footer style={{}}>
                <FooterTab style={{ backgroundColor:'#fff' }} >
                    <Button vertical onPress={()=> this.props.navigation.navigate("home")} style={{}} >
                        <Icon name='home' type={"FontAwesome"} style={{ color:  this.state.routeName === 'home' ? "#f0b917" : "#b6b6b6" , fontSize:17 , marginBottom:0}}/>
                        <Text style={{ color: this.state.routeName === 'home' ? "#f0b917" : "#b6b6b6" , fontSize:14 , fontFamily:"RegularFont" }}>الرئيسية</Text>
                    </Button>
                    <Button vertical onPress={()=> this.props.navigation.navigate("bills")}>
                        <Icon name='store' type={"MaterialCommunityIcons"} style={{ color:  this.state.routeName === 'bills' || this.state.routeName === 'orders' ? "#f0b917" : "#b6b6b6" , fontSize:17 , marginBottom:0}}/>
                        <Text style={{ color: this.state.routeName === 'bills' || this.state.routeName === 'orders' ? "#f0b917" : "#b6b6b6" , fontSize:14 , fontFamily:"RegularFont" }}>طلباتي</Text>
                    </Button>
                    <Button badge vertical onPress={()=> this.props.navigation.navigate("cart")}>
                        <Badge style={{}}><Text style={{fontSize:10}}>4</Text></Badge>
                        <Icon name='shopping-cart' type={"FontAwesome"} style={{ color:  this.state.routeName === 'cart' ? "#f0b917" : "#b6b6b6" , fontSize:17 , marginBottom:0}}/>
                        <Text style={{ color: this.state.routeName === 'cart' ? "#f0b917" : "#b6b6b6" , fontSize:14 , fontFamily:"RegularFont" }}>السلة</Text>
                    </Button>
                    <Button vertical onPress={()=> this.props.navigation.navigate("profile")}>
                        <Icon name='user' type={"FontAwesome"} style={{ color:  this.state.routeName === 'profile' || this.state.routeName === 'editProfile' ? "#f0b917" : "#b6b6b6" , fontSize:17 , marginBottom:0}}/>
                        <Text style={{ color: this.state.routeName === 'profile' || this.state.routeName === 'editProfile' ? "#f0b917" : "#b6b6b6" , fontSize:14 , fontFamily:"RegularFont" }}>حسابي</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}