import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    color: ${({theme})=> theme.colors.header};
    font-size: 50px;
    font-family: ${({theme})=> theme.fonts.secondary_600};
`;