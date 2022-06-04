import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize'

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.primary};
    align-items: center;
`;

export const Title = styled.Text`
    font-size: ${RFValue(25)}px;
    color: ${({theme}) => theme.colors.white};
    padding: 55px 20px;
    font-weight: bold;
    text-align: center;
`;

export const RegisterInput = styled.TextInput`
     background-color: ${({theme}) => theme.colors.white};
     padding: ${RFValue(10)}px;
     font-size: 18px;
     border-radius: 7px;
     width: 90%;
`;

export const ButtonAdd = styled.TouchableOpacity`
    width: 90%;
    height: ${RFValue(42)}px;
    background-color: ${({theme}) => theme.colors.secondary};
    border-radius: 7px;
    margin-top: ${RFValue(15)}px;
    justify-content: center;
    align-items: center;
`;
export const TextButton = styled.Text`
    font-size: 17px;
    color: ${({theme}) => theme.colors.white};
    font-weight: bold;
`;

export const TextAnnotation = styled.Text`
    color: ${({theme}) => theme.colors.white};
    font-size: ${RFValue(20)}px;
    font-weight: bold;
    margin-top: 25px;
    margin-bottom: 15px;
    text-align: right;
`;