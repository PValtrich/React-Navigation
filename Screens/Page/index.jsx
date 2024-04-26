import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Page(){
    return(
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1
        }}>
          
            <TouchableOpacity>
                <Text>Page</Text>
            </TouchableOpacity>
        </View>
    )
}