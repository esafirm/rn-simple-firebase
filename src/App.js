import React from 'react'
import { StyleSheet, View, ListView, Dimensions, Alert } from 'react-native'
import { Screen, Button, Text, Nav } from '@shoutem/ui'
import Toolbar from './Component/Toolbar'
import ListItem from './Component/ListItem'
import * as firebase from './Firebase'

const window = Dimensions.get('window');

class groceries extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
        }
    }

    getRef() {
        return firebase.database().ref();
    }

    componentDidMount() {
        console.log("Getting Firebase items");

        this.getRef().child('groceries').on('value', (snap) => {
            console.log('snap', snap);

            var items = [];
            snap.forEach((child) => {
                items.push(child.val());
            });

            console.log('items', items);

            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(items)
            });
        });
    }

    render() {
        return (
            <Screen>
                <Toolbar title="GROCERIES"/>
                <ListView
                    style={styles.listView}
                    dataSource={this.state.dataSource}
                    renderRow={(item) => this.renderItem(item)}
                />
                <Button>
                    <Text>ADD</Text>
                </Button>
            </Screen>
        );
    }

    renderItem(item) {
        return (
            <ListItem
                item={item}
                onPress={() => {
                    Alert.alert(
                        'Udah dibeli?',
                        null,
                        [
                            {text: 'Udah', onPress: (text) => this.itemsRef.child(item._key).remove()},
                            {text: 'Belum', style: 'cancel'}
                        ]
                    );
                }}/>
        );
    };
}


const styles = StyleSheet.create({
    listView: {
        flex: 1
    }
});

export default groceries;