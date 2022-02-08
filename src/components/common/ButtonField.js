import React from 'react';
import styled from 'styled-components/native';
import { Colors } from '../../constants/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { S3_URL } from '@env';
import { Image } from 'react-native';

const ButtonField = ({
  title,
  color,
  background,
  border,
  fontWeight,
  icon,
  width,
  borderColor,
  fontSize,
  borderRadius,
  height,
  textAlign,
  margin,
  padding,
  onPressEvent,
}) => {
  const TouchableOpacity = styled.TouchableOpacity`
    border-radius: 5px;
    margin: ${margin ? margin : '10px 5px 5px'};
    height: ${height ? height : 'auto'};
    width: ${width ? width : 'auto'};
    align-items: center;
    justify-content: center;
    display: flex;
    overflow: hidden;
  `;
  const ButtonContainer = styled.View``;

  const ButtonText = styled.Text`
    font-size: ${fontSize ? fontSize : '12px'};
    color: ${color ? color : Colors.white};
    background-color: ${background ? background : Colors.primaryColor};
    padding: ${icon ? '5px 25px' : padding ? padding : '5px 15px'};
    border: ${border ? border : '1px solid'};
    border-color: ${borderColor ? borderColor : Colors.primaryColor};
    border-radius: ${borderRadius ? borderRadius : '5px'};
    font-weight: ${fontWeight ? fontWeight : 500};
    align-items: center;
    justify-content: center;
    flex-direction: row;
    text-align: ${textAlign ? textAlign : 'center'};
  `;
  const IconButton = styled.View`
    padding-right: 5px;
    padding-top: 5px;
    position: absolute;
    top: 3px;
    left: 8px;
    z-index: 1;
  `;

  return (
    <TouchableOpacity onPress={onPressEvent}>
      <ButtonContainer>
        {icon === 'google' && (
          <IconButton>
            <Image
              source={{ uri: `${S3_URL}/google.png` }}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{ height: 15, width: 15 }}
            />
          </IconButton>
        )}
        {icon === 'facebook' && (
          <IconButton>
            <Ionicons
              name="logo-facebook"
              size={14}
              color={Colors.facebookIconColor}
            />
          </IconButton>
        )}
        <ButtonText>{title}</ButtonText>
      </ButtonContainer>
    </TouchableOpacity>
  );
};

export default ButtonField;
