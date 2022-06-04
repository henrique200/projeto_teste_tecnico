import React, { useState, useContext } from "react";

import {
    Container, 
    Title, 
    RegisterInput,
    ButtonAdd,
    TextButton,
    TextAnnotation,
} from './styles';

import {AnnotationContext} from '../../contexts/annotationContexts'
import { AnnotationCards } from "../../components/AnnotationCards";
import { List } from "../../components/List";

interface AnnotationData {
    id: string,
    name: string, 
}

export function RegisterOrDelete() {
    const [newAnnotation, setNewAnnotation] = useState('');
    const [myAnnotation, setMyAnnotation] = useState<AnnotationData[]>([]);
    const {handleAddNewAnnotation} = useContext(AnnotationContext);

    function AddNewAnnotation(){
        handleAddNewAnnotation(newAnnotation)

        const data = {
            id: String(new Date().getTime()),
            name: newAnnotation,
        }
       

        if(newAnnotation !== ''){
            setMyAnnotation(oldState => [...oldState, data])
            
        }

    }

    function RemoveAnnotations(id: string) {
        
        setMyAnnotation(oldState => oldState.filter(
                annotation => annotation.id !== id
            ));
    }
    
    return(
        <Container>
            <Title>Bem vindo, faça suas anotações aqui</Title>

            <RegisterInput
                placeholder="Nova Anotação"
                placeholderTextColor={"#222"}
                onChangeText={setNewAnnotation}
                autoCapitalize={"none"}
            />

            <ButtonAdd onPress={ AddNewAnnotation}>
                <TextButton>Clique para adicionar uma anotação</TextButton>
            </ButtonAdd>

            <TextAnnotation>Minhas Anotações</TextAnnotation>


            <List
                 data={myAnnotation}
                 keyExtractor={(item: any) => item.id}
                 renderItem={({item}: any) => (
                    <AnnotationCards
                         goAnnotation={item.name}
                         removeAnnotation={() => RemoveAnnotations(item.id)}
                    />
                 )}
            />
        </Container>
    );
}