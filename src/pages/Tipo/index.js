import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list';
import api from "../../api";
import styles from "../style";

export default function Tipo({ navigation }) {
    const [data, setData] = useState([]);
    const [lista, setLista] = useState([]);
    const [tipo, setTipo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://makeup-api.herokuapp.com/api/v1/products.json?')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setIsLoading(false);
                const types = data.reduce((types, t) => {
                    if (!types.includes(t.product_type)) {
                        types.push(t.product_type);
                    }
                    return types;
                }, []);

                let i = 1;
                types.forEach(b => {
                    tipo.push({
                        key: i++,
                        value: b
                    })
                });
                setTipo(tipo);

            })
            .catch(error => console.error(error));
    }, []);

    async function handleSelectItem(item) {
        try {
            const response = await api().get('?product_type=' + item, {
                headers: {
                    Accept: "application/json",
                    "User-Agent": "axios 0.21.1",
                    'Content-Type': 'application/json'
                }
            });
            setLista(response.data)
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pesquisar por tipo</Text>
            <View style={styles.inputContainer}>
                {
                    tipo ? (
                        <SelectList
                            data={tipo}
                            setSelected={handleSelectItem}
                            keyExtractor={(item) => item.id}
                            labelExtractor={(item) => item.label}
                            save="value"
                            notFoundText="Nenhum tipo encontrada"
                            placeholder="Selecione um tipo"
                            searchInputStyle={{ backgroundColor: '#f2f2f2' }}
                            listStyle={{ backgroundColor: '#fff' }}
                        />
                    ) : (
                        <ActivityIndicator />
                    )}
                {
                    lista.length > 0 ?
                        <FlatList
                            style={styles.lista}
                            data={lista}
                            keyExtractor={((item, index) => "Index do item" + index)}
                            renderItem={({ item }) => (
                                <View style={styles.campolista}>
                                    <View style={styles.campoconteudo}>
                                        <Text style={{ fontSize: 16 }}>Nome: {item.name}</Text>
                                        <Text style={{ fontSize: 16 }}>Tipo: {item.product_type}</Text>
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
