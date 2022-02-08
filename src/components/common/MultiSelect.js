// import component
import React from 'react';
import { View } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import styled from 'styled-components/native';
import { Colors, FontFamily } from '../../constants/Theme';

// const items = [
//   {
//     id: '92iijs7yta',
//     name: 'Ondo',
//   },
//   {
//     id: 'a0s0a8ssbsd',
//     name: 'Ogun',
//   },
//   {
//     id: '16hbajsabsd',
//     name: 'Calabar',
//   },
//   {
//     id: 'nahs75a5sg',
//     name: 'Lagos',
//   },
//   {
//     id: '667atsas',
//     name: 'Maiduguri',
//   },
//   {
//     id: 'hsyasajs',
//     name: 'Anambra',
//   },
//   {
//     id: 'djsjudksjd',
//     name: 'Benue',
//   },
//   {
//     id: 'sdhyaysdj',
//     name: 'Kaduna',
//   },
//   {
//     id: 'suudydjsjd',
//     name: 'Abuja',
//   },
// ];

const MultiSelectExample = ({
  data,
  uniqueKey,
  onSelectedItemsChange,
  selectText,
}) => {
  const [selectedItems, setSelectedItems] = React.useState([]);
  let multiSelect = React.useRef(null);
  //   console.log('Data is', data);
  onSelectedItemsChange = selectedData => {
    setSelectedItems(selectedData);
  };

  return (
    <Container>
      <MultiSelect
        hideTags
        items={data}
        uniqueKey={uniqueKey}
        ref={multiSelect}
        onSelectedItemsChange={onSelectedItemsChange}
        selectedItems={selectedItems}
        selectText={selectText}
        // selectBorderColor={Colors.inputBorderColor}
        searchInputPlaceholderText="Search Items..."
        onChangeInput={text => console.log(text)}
        altFontFamily={FontFamily.default}
        tagRemoveIconColor={Colors.inputBorderColor}
        tagBorderColor={Colors.inputBorderColor}
        tagTextColor={Colors.black}
        selectedItemTextColor={Colors.inputBorderColor}
        selectedItemIconColor={Colors.inputBorderColor}
        itemTextColor={Colors.black}
        displayKey="name"
        // eslint-disable-next-line react-native/no-inline-styles
        searchInputStyle={{ color: Colors.inputBorderColor, padding: 5 }}
        submitButtonColor={Colors.primaryColor}
        submitButtonRadius="10px"
        submitButtonText="Submit"
        itemStyle={{ borderColor: Colors.inputBorderColor }}
      />
      <View>
        {multiSelect.current &&
          multiSelect.current.getSelectedItemsExt(selectedItems)}
      </View>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 0% 2%;
  /* border-color: ${Colors.inputBorderColor}; */
  /* border-radius: 10px; */
`;

export default MultiSelectExample;
