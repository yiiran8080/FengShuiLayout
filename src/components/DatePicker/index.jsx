
import 'rmc-picker/assets/index.css';
import './index.css'
import MultiPicker from 'rmc-picker/lib/MultiPicker';
import Picker from 'rmc-picker/lib/Picker';
import React from 'react';
export const years = Array.from({ length: 100 }, (_, i) => (2025 - i).toString())
export const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'))
export const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, '0'))
export const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'))
export default class DatePicker extends React.Component {
    state = {
        value: [],
    };
    componentDidMount() {
        if (this.props.value) {
            this.setState({
                value: this.props.value
            });
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.value && this.props.value !== prevProps.value) {
            this.setState({
                value: this.props.value
            });
        }
    }
    onChange = (value) => {
        //console.log('onChange', value);
        this.setState({
            value,
        });
        if (this.props.onChange) {
            this.props.onChange(value)
        }

    }

    // onScrollChange = (value) => {
    //     console.log('onScrollChange', value);
    // }
    renderItems = (items, text) => items.map(
        item => <Picker.Item className="my-picker-view-item" value={item}>{item + text}</Picker.Item>
    )
    render() {
        return (
            <div style={{ background: '#f5f5f9', padding: 0 }}>

                <MultiPicker
                    selectedValue={this.state.value}
                    onValueChange={this.onChange}
                //onScrollChange={this.onScrollChange}
                >


                    <Picker indicatorClassName="my-picker-indicator">
                        {this.renderItems(years, '年')}

                    </Picker>


                    <Picker indicatorClassName="my-picker-indicator">
                        {this.renderItems(months, '月')}
                    </Picker>
                    <Picker indicatorClassName="my-picker-indicator">
                        {this.renderItems(days, '日')}
                    </Picker>
                    <Picker indicatorClassName="my-picker-indicator">
                        {this.renderItems(hours, '时')}
                    </Picker>

                </MultiPicker>
            </div>
        );
    }
}