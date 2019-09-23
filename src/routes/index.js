import React from "react";
import { createStackNavigator, createAppContainer , createDrawerNavigator } from "react-navigation";
import Login from '../components/Login';
import Register from '../components/Register';
import LoginAndRegister from "../components/LoginAndRegister";
import Home from "../components/Home";
import Product from "../components/Product";
import Cart from "../components/Cart";
import Bills from "../components/Bills";
import Orders from "../components/Orders";
import Notifications from "../components/Notifications";
import MapLocation from  "../components/MapLocation";
import Congrats from  "../components/Congrats";
import Profile from  "../components/Profile";
import ContactUs from  "../components/ContactUs";
import AboutApp from  "../components/AboutApp";
import ShareApp from  "../components/ShareApp";
import EditProfile from  "../components/EditProfile";
import DrawerCustomization from "./DrawerCustomization";

const drawerCust = (props) => (<DrawerCustomization {...props} />)
const DrawerNavigator = createDrawerNavigator({
    home:Home,
    editProfile:EditProfile,
    product:Product,
    cart:Cart,
    bills:Bills,
    orders:Orders,
    notifications:Notifications,
    mapLocation:MapLocation,
    congrats:Congrats,
    profile:Profile,
    contactUs:ContactUs,
    aboutApp:AboutApp,
    shareApp:ShareApp
},{
    initialRouteName:'home',
    drawerPosition:'right',
    drawerOpenRoute:'DrawerOpen',
    drawerCloseRoute:'DrawerClose',
    gesturesEnabled:false,
    drawerToggleRoute:'DrawerToggle',
    contentComponent:drawerCust
})

const AppNavigator = createStackNavigator({

    loginAndRegister: {
        screen: LoginAndRegister,
        navigationOptions: {
            header: null
        }
    },
    login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    register: {
        screen: Register,
        navigationOptions: {
            header: null
        }
    },
    drawerNavigator: {
        screen: DrawerNavigator,
        navigationOptions: {
            header: null
        }
    },
    editProfile: {
        screen: EditProfile,
        navigationOptions: {
            header: null
        }
    },
    product: {
        screen: Product,
        navigationOptions: {
            header: null
        }
    },
    cart: {
        screen: Cart,
        navigationOptions: {
            header: null
        }
    },
    bills: {
        screen: Bills,
        navigationOptions: {
            header: null
        }
    },
    orders: {
        screen: Orders,
        navigationOptions: {
            header: null
        }
    },
    notifications: {
        screen: Notifications,
        navigationOptions: {
            header: null
        }
    },
    mapLocation: {
        screen: MapLocation,
        navigationOptions: {
            header: null
        }
    },
    congrats: {
        screen: Congrats,
        navigationOptions: {
            header: null
        }
    },
    profile: {
        screen: Profile,
        navigationOptions: {
            header: null
        }
    },
    contactUs: {
        screen: ContactUs,
        navigationOptions: {
            header: null
        }
    },
    aboutApp: {
        screen: AboutApp,
        navigationOptions: {
            header: null
        }
    },
    shareApp: {
        screen: ShareApp,
        navigationOptions: {
            header: null
        }
    }
});

export default createAppContainer(AppNavigator);