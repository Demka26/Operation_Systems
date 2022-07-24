import React from 'react';
import{
    TouchableOpacity,
    Text,
    View,
    StyleSheet
}from 'react-native';



import { COLORS, FONTS } from '../constants';

const CustomButton = ({buttonText, buttonContainerStyle, colors, onPress}) =>{

    if(colors.length > 0){
        return(
        <View style={styles.container}>
            <TouchableOpacity
            style={styles.button}
            onPress={onPress}
            >
    
                 <Text
                    style={{
                        textAlign: 'center',
                        color: COLORS.white,
                        ...FONTS.h2
                    }}
                 >
                    {buttonText}
                   </Text>
            
            </TouchableOpacity>
            </View>
        )
    }else {
        return(
            <View style={styles.container2}>
            <TouchableOpacity
            style={styles.button2}
            onPress={onPress}
            
            >
                <Text
                style={{
                        textAlign: 'center',
                        color: "white",
                        ...FONTS.h2
                }}
                >
                    {buttonText}
                </Text>
            </TouchableOpacity>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 5
    },
    container2: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 5,
        marginTop:-52
      },


    button: {
      alignItems: "center",
      backgroundColor: "lightgreen",
      padding: 16,
      paddingHorizontal: 10,
      borderTopEndRadius:30,
      borderTopLeftRadius:30,
      borderTopRightRadius: 30,
      borderTopStartRadius: 30,
      
      borderBottomEndRadius:30,
      borderBottomLeftRadius:30,
      borderBottomRightRadius: 30,
      borderBottomStartRadius: 30,
      borderWidth: 1


    },

    button2: {
        alignItems: "center",
        
        padding: 14,
        paddingHorizontal: 10,
        borderTopEndRadius:30,
        borderTopLeftRadius:30,
        borderTopRightRadius: 30,
        borderTopStartRadius: 30,
        
        borderBottomEndRadius:30,
        borderBottomLeftRadius:30,
        borderBottomRightRadius: 30,
        borderBottomStartRadius: 30,
        borderColor:"gray",
        borderWidth: 1,
  
      }
  });

export default CustomButton;