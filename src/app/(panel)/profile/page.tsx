import { useAuth } from "@/src/contexts/AuthContext";
import { supabase } from "@/src/lib/supabase";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

export default function Profile(){

    const { setAuth, user } = useAuth();

    async function handleSingout() {
    
        const { error } = await supabase.auth.signOut();
    
        setAuth(null);
    
        if(error){
            Alert.alert('Error', 'Error ao sair da conta, tente mais tarde.')
            return;
        }
    }
    return(
        <View style={styles.container}>
            <Text>Perfil</Text>
            <Text>Olá {user?.email}</Text>
            <Button
            title='Deslogar'
            onPress={handleSingout}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});