import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {
  searchIcon,
  closeIcon,
  arrowDownIcon,
  arrowUpIcon,
  taskIcon,
} from '../../images';
import {colors} from '../../theme/colors';
import {shadow_E5} from '../../theme/shadows';
const {greyBG, whiteBG} = colors;
const subRenderItem = ({item, index}) => {
  return (
    <View
      key={index}
      style={{
        padding: 12,
        backgroundColor: whiteBG,
      }}>
      <Text>{item}</Text>
    </View>
  );
};
const SubCatagoryList = ({item: value, index, colorCode}) => {
  const {subCategoryname, items} = value || {};
  const keyExtractor = useCallback(({item, index}) => {
    return index;
  }, []);
  const ItemSeparatorComponent = useCallback(({highlighted}) => (
    <View style={{borderBottomWidth: 0.21, borderBottomColor: '#000'}} />
  ));
  return (
    <View style={{backgroundColor: whiteBG}}>
      <FlatList
        ListHeaderComponent={
          subCategoryname ? (
            <Text style={{color: colorCode, padding: 12}}>
              {subCategoryname}
            </Text>
          ) : null
        }
        data={items}
        renderItem={subRenderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </View>
  );
};

export const RenderItemCard = ({item, index}) => {
  const [expanded, setExpanded] = useState(false);
  const {
    category: {
      categoryName,
      quote,
      protip,
      colorCode,
      servingSize,
      subcategories,
    } = {},
  } = item || {};
  const handelClick = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);
  const keyExtractor = useCallback(({item, index}) => {
    return index;
  }, []);
  return (
    <>
      <TouchableOpacity
        onPress={handelClick}
        key={`${categoryName}_${index}`}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 4,
          padding: 6,
          backgroundColor: whiteBG,
          ...shadow_E5,
          marginVertical: 4,
        }}>
        <View
          style={{backgroundColor: colorCode, borderRadius: 4, padding: 12}}>
          <Image source={taskIcon} style={{height: 16, width: 16}} />
        </View>
        <Text
          style={{
            flex: 1,
            paddingHorizontal: 8,
            color: colorCode,
            fontSize: 16,
          }}>
          {categoryName}
          {servingSize ? (
            <Text style={{color: '#000'}}>{`  (${servingSize})`}</Text>
          ) : null}
        </Text>
        <Image
          source={expanded ? arrowUpIcon : arrowDownIcon}
          style={{paddingRight: 20}}
        />
      </TouchableOpacity>
      {expanded && subcategories && subcategories.length ? (
        <FlatList
          data={subcategories}
          renderItem={({item, index}) => (
            <SubCatagoryList
              key={index}
              item={item}
              index={index}
              colorCode={colorCode}
            />
          )}
          keyExtractor={keyExtractor}
        />
      ) : null}
      {expanded && quote ? (
        <View style={{padding: 20, backgroundColor: whiteBG}}>
          <Text style={{borderRadius: 8, padding: 10, backgroundColor: greyBG}}>
            {quote}
          </Text>
        </View>
      ) : null}
      {expanded && protip ? (
        <View
          style={{
            marginVertical: 8,
            borderRadius: 8,
            padding: 20,
            backgroundColor: 'lightblue',
          }}>
          <Text
            style={{
              backgroundColor: 'blue',
              paddingHorizontal: 10,
              maxWidth: 50,
              borderRadius: 8,
              marginBottom: 10,
            }}>
            Tip
          </Text>
          <Text>{protip}</Text>
        </View>
      ) : null}
    </>
  );
};

export const HeaderComponent = () => {
  return (
    <View style={{}}>
      <Image source={closeIcon} />
      <Text style={{marginVertical: 24, fontSize: 24}}>
        Approved Foods List
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 4,
          //   paddingVertical: 8,
          paddingHorizontal: 12,
          backgroundColor: '#FFFF',
          marginBottom: 12,
        }}>
        <Image source={searchIcon} />
        <TextInput
          style={{paddingHorizontal: 12}}
          placeholder={'Try searching fat, sauces name...'}
        />
      </View>
    </View>
  );
};
