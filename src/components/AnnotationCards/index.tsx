import React from "react";

import {
    Container, 
    Title,
    ButtonDelete,
    Icon,
} from './styles'

interface IAnnotationCards {
    goAnnotation: any,
    removeAnnotation?: any,
    buttonDelete?: boolean
}

export function AnnotationCards({goAnnotation, removeAnnotation, buttonDelete = true}: IAnnotationCards) {
    return (
        <Container >
            <Title>
                {goAnnotation}
            </Title>
            {buttonDelete && 
            <ButtonDelete onPress={removeAnnotation}>
                <Icon name="x-circle" />
            </ButtonDelete>}
        </Container>
    );
}