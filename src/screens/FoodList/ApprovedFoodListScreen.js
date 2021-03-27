import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {getFoodListData} from '../../store/actions';

class ApprovedFoodListScreen extends Component {
  componentDidMount() {
    this.props.getFoodListData();
  }
  render() {
    const {listData} = this.props;
    const {categories} = listData;
    console.log('@@@@@@listData in component', JSON.stringify(categories));
    return (
      <View>
        <Text> textInComponent </Text>
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
