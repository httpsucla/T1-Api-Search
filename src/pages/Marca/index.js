import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list';
import api from "../../api";
import styles from "../style";

export default function Marca({ navigation }) {
    const [data, setData] = useState([]);
    const [lista, setLista] = useState([]);
    const [marca, setMarca] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://makeup-api.herokuapp.com/api/v1/products.json?')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setIsLoading(false);
                const brands = data.reduce((brands, m) => {
                    if (!brands.includes(m.brand)) {
                        brands.push(m.brand);
                    }
                    return brands;
                }, []);

                let i = 1;
                brands.forEach(b => {
                    marca.push({
                        key: i++,
                        value: b
                    })
                });

                marca.forEach(m => {
                    if(m.value == null) {
                        m.value = ''
                    };
                    
                })
                setMarca(marca);

            })
            .catch(error => console.error(error));
    }, []);

    async function handleSelectItem(item) {
        try {
            const response = await api().get('?brand=' + item, {
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
            <Text style={styles.title}>Pesquisar por marca</Text>
            <View style={styles.inputContainer}>
                {
                    marca ? (
                        <SelectList
                            data={marca}
                            setSelected={handleSelectItem}
                            keyExtractor={(item) => item.id}
                            labelExtractor={(item) => item.label}
                            save="value"
                            notFoundText="Nenhuma marca encontrada"
                            placeholder="Selecione uma marca"
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
