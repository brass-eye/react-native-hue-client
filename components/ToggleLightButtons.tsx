import React from 'react';
import { View } from 'react-native';
import LightButton from './LightButton';
import { Lights, Light } from '../hue/light';

type Props = {
    lights: Lights,
    toggleLight: (light: Light) => () => void
}


const ToggleLightButtons: React.SFC<Props> = props => {
    debugger;
    return <View>
        {props.lights.map((light: Light) => (
            <LightButton key={light.lightId}
                light={light} 
                onClick={props.toggleLight(light)}/>))}
    </View>
}

export default ToggleLightButtons
