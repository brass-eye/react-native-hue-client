import React from 'react';
import {Button, View} from 'react-native';
import LightButton from './LightButton';

type Props = {
    lights: Lights,
    toggleLight: (lightId: string) => () => void
}


const ToggleLightButtons: React.SFC<Props> = props => (
    <View>
        {Object.keys(props.lights).map(lightId => 
            <LightButton key={lightId}
                light={props.lights[lightId]} 
                onClick={props.toggleLight(lightId)}/>)}
    </View>
)

export default ToggleLightButtons
