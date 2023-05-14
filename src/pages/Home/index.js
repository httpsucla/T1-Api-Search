import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import api from "../../api";
import styles from "../style";

export default function Home({ navigation }) {
    const [data, setData] = useState();

    useEffect(() => {
        searchApi()
    }, []);

    async function searchApi() {
        try {
            const response = await api().get();
            setData(response.data)
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todas maquiagens</Text>
            <View style={styles.inputContainer}>            
                {
                    data?
                        <FlatList
                            style={styles.lista}
                            data={data}
                            keyExtractor={((item, index) => "Index do item" + index)}
                            renderItem={({ item }) => (
                                <View style={styles.campolista}>
                                    <View style={styles.campoconteudo}>
                                        <Text style={{ fontSize: 16 }}>Nome: {item.name}</Text>
                                        <Text style={{ fontSize: 16 }}>Marca: {item.brand}</Text>
                                    </View>
                                    <TouchableOpacity
                                            onPress={() =>
                                                navigation.navigate("Detail", { item: item })}>
                                           <Text>Visualizar</Text>
                                        </TouchableOpacity>
                                </View>
                            )}
                            showsVerticalScrollIndicator={false}
                        />
                        :
                        <Text style={styles.emptyList}>Nenhuma busca realizada.</Text>
                }
            </View>
        </View>
    );
}
