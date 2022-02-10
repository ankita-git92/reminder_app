import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from '../../constants/Theme';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Upcoming = ({ navigation }) => {
  return (
    <View>
      <Container>
        <View>
          <CardContainer>
            <Details>
              <ClientName>Ishit Desai</ClientName>
              <Invoice>#1234</Invoice>
            </Details>

            <Amount>3000</Amount>
          </CardContainer>
          <LineContainer>
            <Line />
          </LineContainer>
        </View>
        <View>
          <CardContainer>
            <Details>
              <ClientName>Ishit Desai1</ClientName>
              <Invoice>#12345</Invoice>
            </Details>
            <Amount>3000</Amount>
          </CardContainer>
          <LineContainer>
            <Line />
          </LineContainer>
        </View>
      </Container>
      <BottomView>
        <ButtonContainer>
          {/* <Text style={{ color: Colors.white }}>Add</Text> */}
          <AntDesign name="pluscircle" size={25} color={Colors.primaryColor} />
          {/* </View> */}

          {/* <SvgUri uri={`${S3_URL}/message_button.svg`} /> */}
        </ButtonContainer>
      </BottomView>
    </View>
  );
};

const Container = styled.ScrollView`
  height: ${hp('70%')}px;
`;
const CardContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  /* align-items: center; */
  padding: 20px;
`;
const ClientName = styled.Text`
  color: ${Colors.textDarkColor};
`;
const Invoice = styled.Text`
  color: ${Colors.grayColor3};
  padding-top: 5px;
`;
const Amount = styled.Text`
  color: ${Colors.grayColor3};
`;
const Details = styled.View``;
const LineContainer = styled.View``;
const Line = styled.View`
  flex: 1;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
`;
const BottomView = styled.View`
  bottom: 0;
  position: absolute;
  right: 3%;
  width: 10%;
  height: 15%;
  justify-content: flex-end;
  border-radius: 30px;

  top: ${hp('65%')}px;
`;
const ButtonContainer = styled.View`
  resize: inherit;
  padding: 10% 30%;
  width: 100%;
  height: 50%;
  border-radius: 30px;
  background-color: ${Colors.grayColor3};
`;

export default Upcoming;
