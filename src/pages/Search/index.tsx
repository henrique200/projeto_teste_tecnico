import React, {useContext, useEffect, useState} from "react";

import {
    Container, 
    Title,
    InputSearch,
    ContainerSearchInput,
    IconSearch,
    ContainerListAnotation
} from './styles';

import {AnnotationContext} from '../../contexts/annotationContexts';
import { List } from "../../components/List";
import { AnnotationCards } from "../../components/AnnotationCards";

export function Search() {
    const {annotations} = useContext(AnnotationContext);
    const [ data, setData ] = useState([]);

    function SearchAnnotation(s: any){
        let arr = annotations;
        setData(arr.filter((d: any) => d.name.includes(s)));
    }

    return(
        <Container>
            <Title>Consulte suas anotações aqui</Title>

            <ContainerSearchInput>
                <InputSearch
                    placeholder="Digite aqui para consultar"
                    placeholderTextColor={"#222"}
                    onChangeText={(s) => SearchAnnotation(s)}
                    autoCapitalize={"none"}
                />
                <IconSearch
                    name="search"
                />

            </ContainerSearchInput>

            <ContainerListAnotation>
                <List
                    data={data}
                    keyExtractor={(item: any) => item.id}
                    renderItem={({item}: any) => (
                        <AnnotationCards
                             goAnnotation={item.name}
                             buttonDelete={false}
                        />
                     )}
                />
            </ContainerListAnotation>
        </Container>
    );
}