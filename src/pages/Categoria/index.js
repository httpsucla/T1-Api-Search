import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list';
import api from "../../api";
import styles from "../style";

export default function Categoria({ navigation }) {
    const [data, setData] = useState([]);
    const [lista, setLista] = useState([]);
    const [categoria, setCategoria] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://makeup-api.herokuapp.com/api/v1/products.json?')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setIsLoading(false);
                const categories = data.reduce((categories, c) => {
                    if (!categories.includes(c.category)) {
                        categories.push(c.category);
                    }
                    return categories;
                }, []);

                let i = 1;
                categories.forEach(c => {
                    categoria.push({
                        key: i++,
                        value: c
                    })
                });

                categoria.forEach(c => {
                    if (c.value == null) {
                        c.value = ''
                    };
                })
                setCategoria(categoria);

            })
            .catch(error => console.error(error));
    }, []);

    async function handleSelectItem(item) {
        try {
            const response = await api().get('?product_category=' + item, {
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
            <Text style={styles.title}>Pesquisar por categoria</Text>
            <View style={styles.inputContainer}>
                {
                    categoria ? (
                        <SelectList
                            data={categoria}
                            setSelected={handleSelectItem}
                            keyExtractor={(item) => item.id}
                            labelExtractor={(item) => item.label}
                            save="value"
                            notFoundText="Nenhuma categoria encontrada"
                            placeholder="Selecione uma categoria"
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
                                        <Text style={{ fontSize: 16 }}>Categoria: {item.category}</Text>
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
