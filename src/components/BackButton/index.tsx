import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { BorderlessButtonProps } from 'react-native-gesture-handler';

import {
    Container
} from './styles';

import theme from '../../styles/theme';

interface props extends BorderlessButtonProps{
    color?: string,
}


export function BackButton({color, ...rest}:props){
return (
        <Container {...rest}>
            <MaterialIcons
                name='chevron-left'
                size={24}
                color={color || theme.colors.text }
            />
        </Container>
    );
}