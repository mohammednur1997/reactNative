import React, {Component} from 'react';
import {View, Text} from "react-native"
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment"

class TimeComponent extends Component {

    constructor() {
        super();
        this.state = {
            dateValue:"my data"
        }
    }

    myDate=(event, selectedDate)=>{
        let year = selectedDate.getTime();
        let formatTime = moment(year).format('MMM Do YY');
        this.setState({dateValue:formatTime.toString()})
    }


    render() {
        return (
            <View>
                <Text>{this.state.dateValue}</Text>
                <DateTimePicker
                    testID="dateTimePicker"
                    value={new Date()}
                    mode="date"
                    onChange={this.myDate}
                />
            </View>
        );
    }
}

export default TimeComponent;
