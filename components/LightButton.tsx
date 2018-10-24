import React from 'react';
import {Button} from 'react-native';
import { Light } from '../hue/light';

type Props = {
    light: Light,
    onClick: () => void
};

const LightButton: React.SFC<Props> = props => {
    const {light, onClick} = props;
    const colour = light.on ? 'green' : 'red';

    return <Button color={colour} title={`Toggle light ${light.name}`}
        onPress={onClick} />;
}

export default LightButton;