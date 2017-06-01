import React  from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import { Actions } from 'react-native-router-flux';

class Home extends React.Component {

    render(){
        return (
            <Text>
              welcome to dialect
            </Text>
        )
    }
}

export default Home;
