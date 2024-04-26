import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Page from "../Page"; //Importando Pagina Page

export default function Home(){
    const {navigate} = useNavigation(); // Função do React-Navigation-Native
    return(
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1
        }}>
            
            <TouchableOpacity onPress={() => {
                navigate(Page) //Nome da função para mover tela
            }}>
                <Text>Home</Text>
            </TouchableOpacity>
        </View>
    )
}