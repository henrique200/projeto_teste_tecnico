import styled from "styled-components/native";
import {Feather} from '@expo/vector-icons';

export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.secondary};
    padding: 15px;
    border-radius: 30px;
    align-items: center;
    margin-bottom: 10px;
    flex-direction: row;
    
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.white};
    font-weight: bold;
    font-size: 20px;
`;

export const ButtonDelete = styled.TouchableOpacity`
    margin-left: 10px;
`;
export const Icon = styled(Feather)`
    font-size: 24px;
    color: ${({theme}) => theme.colors.white};
`;