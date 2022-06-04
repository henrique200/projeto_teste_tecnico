import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import {MaterialIcons} from '@expo/vector-icons'

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: ${({theme}) => theme.colors.primary};
`;

export const Title = styled.Text`
    font-size: ${RFValue(25)}px;
    color: ${({theme}) => theme.colors.white};
    padding: 55px 20px;
    font-weight: bold;
    text-align: center;
`;

export const ContainerSearchInput = styled.View`
    flex-direction: row;
    align-items: center;
    width: 90%;
    background-color: ${({theme}) => theme.colors.white};
    padding: ${RFValue(2)}px;
    border-radius: 7px;

`;

export const InputSearch = styled.TextInput`
    width: 90%;
    background-color: ${({theme}) => theme.colors.white};
    padding: ${RFValue(10)}px;
    font-size: 18px;
    border-radius: 7px;
`;

export const IconSearch = styled(MaterialIcons)`
    font-size: ${RFValue(23)}px;
    color: ${({theme}) => theme.colors.secondary};
`;

export const ContainerListAnotation = styled.View`
    margin-top: 20px;
    flex: 1;
`;
