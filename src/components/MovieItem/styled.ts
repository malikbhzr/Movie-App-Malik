import styled from 'styled-components/native';

export const TransactionStyle = styled.TouchableOpacity`
  margin-horizontal: 16px;
  margin-top: 16px;
`;

export const ImageContainer = styled.Image`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: #ccc;
  border-radius: ${props => props.borderRadius};
`;

export const TitleStyle = styled.Text`
  font-size: 16px;
  margin-top: 10px;
  color: #fff;
  margin-left: 5px;
`;