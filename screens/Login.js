import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StatusBar
} from 'react-native';

import {images, COLORS, SIZES, FONTS} from "../constants";
import CustomButton from '../components/CustomButton';
const Login = ({ navigation }) => {
   
    function renderHeader(){
        return(
        <View
            style={{
                height: SIZES.height > 700 ? "55%" : "60%"
            }}
       >
           <ImageBackground
           source={images.loginBackground}
            style={{
                flex: 1,
                justifyContent: 'flex-end'
            }}
            resizeMode="cover"
            >

        
                <Text
                style={{
                    width: "80%",
                    color: COLORS.white,
                    ...FONTS.largeTitle,
                    lineHeight:45,
                }}
                >
                    Cooking Easily
                                    </Text>

            </ImageBackground>
        </View>
        )
    }

    function renderDetail(){
        return(
            <View
            style={{
                flex:1,
                paddingHorizontal: SIZES.padding
            }}
            >
                {/* Description */}
                <Text
                    style={{
                        marginTop: SIZES.radius,
                        width: "100%",
                        height: "26%",
                        color: COLORS.gray,
                        ...FONTS.body3
                    }}
                >
                    Discover more than 1200 food recipes in your
                    hands and coocking its esaily
                </Text>

                {/* Buttons */}
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center'
                    }}
                >
                     {/* Login */}
                     <CustomButton
                     buttonText="Login"
                     colors={[COLORS.darkGreen, COLORS.lime]}
                     onPress={()=> navigation.replace("Home")}
                     />

                     {/* Sign Up */}
                     <CustomButton
                     buttonText="Sign Up"
                     colors={[]}
                     onPress={()=> navigation.replace("Home")}
                     />
                </View>

            </View>
        )
    }


    return (
        <View
        style={{
            flex:1,
            backgroundColor: COLORS.black
        }}
        >
            <StatusBar barStyle="light-content"/>
            
            {/*Header*/}
            {renderHeader()}

            {/* Detail */}
            {renderDetail()}
            
        </View>
    )
}

export default Login;