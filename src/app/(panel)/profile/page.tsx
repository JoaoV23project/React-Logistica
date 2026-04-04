import colors from "@/constants/colors";
import { supabase } from "@/src/lib/supabase";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
    const [produtos, setTasks] = useState<any[]>([]);

    const fetchTasks = async () => {
        const { data, error } = await supabase.from('produtos').select('*');

        if (error) {
            console.error(error);
        } else {
            setTasks(data);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, backgroundColor: colors.white }}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.logoText}>
                            Logística<Text style={{ color: colors.green }}>App</Text>
                        </Text>

                        <Text style={styles.slogan}>
                            Rastreamento de produtos
                        </Text>
                    </View>
                </View>
                {produtos.map((produto) => (
                    <View style={styles.produto} key={produto.id}>
                        <Text style={[styles.textProduto]}>
                            Nome: {produto.nomeProduto}     Quantidade: {produto.quantidade}        Etapa: {produto.etapa}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.zinc
    },
    header: {
        paddingLeft: 14,
        paddingRight: 14,
    },
    logoText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.white,
        marginBottom: 8,
    },
    slogan: {
        fontSize: 34,
        color: colors.white,
        marginBottom: 34,
    },
    produto: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textProduto: {
    flex: 1,
    fontSize: 18,
  },
  completed: {
    textDecorationLine: "line-through",
    color: "#888",
  },
});