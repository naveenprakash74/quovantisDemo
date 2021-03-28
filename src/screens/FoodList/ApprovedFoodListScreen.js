import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {getFoodListData} from '../../store/actions';
import {HeaderComponent, RenderItemCard} from './cardcomponents';

import {colors} from '../../theme/colors';
const {greyBG} = colors;
class ApprovedFoodListScreen extends Component {
  componentDidMount() {
    this.props.getFoodListData();
  }
  keyExtractor = ({item, index}) => {
    return index;
  };
  renderItem = props => {
    return <RenderItemCard {...props} />;
  };
  render() {
    const {listData} = this.props;
    const {categories} = listData;
    console.log('@@@@@@listData in component', JSON.stringify(listData));
    return (
      <View style={{flex: 1, padding: 12, backgroundColor: greyBG}}>
        <HeaderComponent {...this.props} />
        <FlatList
          data={categories}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    listData: state?.foodList?.listData,
  };
};

const mapDispatchToProps = {
  getFoodListData,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ApprovedFoodListScreen);
