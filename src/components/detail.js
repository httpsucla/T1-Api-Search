import React from "react";
import { View, Text, Image, ScrollView } from 'react-native'
import styles from "../pages/style";

export default function Detail({ route }) {

    const { item } = route.params;

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.box}>
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            style={styles.img}
                            source={{ uri: item.image_link }} />
                    </View>
                    <Text style={styles.titleBox}>{item.name}</Text>
                    <Text style={styles.desc}>Preço: ${item.price}</Text>
                    <Text style={styles.desc}>Marca: {item.brand}</Text>
                    <Text style={styles.desc}>Categoria: {item.category}</Text>
                    <Text style={styles.desc}>Tipo: {item.product_type}</Text>
                    <Text style={styles.desc}>Info: {item.tag_list}</Text>   
                    <Text style={styles.desc}>{item.description}</Text>
                </View>
            </ScrollView>

        </View>
    );
}