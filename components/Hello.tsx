import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { StepTimingFunction } from 'csstype';

export interface Props {
    name: string,
    enthusiasmLevel?: number
}

interface State {
    enthusiasmLevel: number
}

export class Hello extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        if ((props.enthusiasmLevel || 0) <= 0) {
            throw new Error('you could be more entusiatsia');
        }

        this.state = {
            enthusiasmLevel: props.enthusiasmLevel || 1
        }
    }

    onIncrement = () =>
        this.setState({ enthusiasmLevel: this.state.enthusiasmLevel + 1 });

    onDecrement = () =>
        this.setState({ enthusiasmLevel: this.state.enthusiasmLevel - 1 })

    getExclamationMarks = (numberChars: number): string => Array(numberChars + 1).join('!');

    render() {
        const { name } = this.props;
        const { enthusiasmLevel } = this.state;
        const exclamationMarks = this.getExclamationMarks(enthusiasmLevel)
        return (
            <View style={styles.root}>
                <Text style={styles.greeting}>Hello {name + exclamationMarks}</Text>

                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <Button
                            title='-'
                            onPress={this.onDecrement}
                            accessibilityLabel='decrement'
                            color='red'
                        />
                    </View>

                    <View style={styles.button}>
                        <Button
                            title='+'
                            onPress={this.onIncrement}
                            accessibilityLabel='increment'
                            color='blue'
                        />
                    </View>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        alignSelf: 'center',
    },
    buttons: {
        flexDirection: 'row',
        minHeight: 70,
        alignItems: 'stretch',
        alignSelf: 'center',
        borderWidth: 5,
    },
    button: {
        flex: 1,
        paddingVertical: 0,
    },
    greeting: {
        color: '#999',
        fontWeight: 'bold'
    }

})