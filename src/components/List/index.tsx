import React from "react";
import { FlatList } from "react-native";

import {
    Container,
} from './styles'

interface IList {
    data: any,
    keyExtractor: any,
    renderItem: any;
}

export function List({data, keyExtractor, renderItem}: IList){
    return(
        <Container>
            <FlatList
                data={data}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    );
}