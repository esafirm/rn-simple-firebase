import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Examples, Button, Screen, Text } from '@shoutem/ui';
import App from './App';
import { Color } from  './Constants'

class Root extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showExample: false
        }
    }

    showExample = ()=> {
        if(this.state.showExample) {
            return <Examples/>
        }
        return <App/>
    };

    toggleState = ()=> {
        console.log("Toggle State Called");
        this.setState({
            showExample: !this.state.showExample
        });
    };

    render() {
        return (
            <Screen>
                {this.showExample()}
                <Button
                    style={{backgroundColor: Color.primary,}}
                    onPress={() => this.toggleState()}>
                    <Text style={{color: "#FFF"}}>TOGGLE</Text>
                </Button>
            </Screen>
        )
    }
}

export default Root;