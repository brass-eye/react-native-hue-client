import React from 'react';
import {Button} from 'react-native';

type Props = {
    light: Light,
    onClick: () => void
};

const LightButton: React.SFC<Props> = props => {
    const {light, onClick} = props;
    const colour = light.state.on ? 'green' : 'red';

    return <Button color={colour} title={`Toggle light ${light.name}`}
        onPress={onClick} />;
}

export default LightButton;