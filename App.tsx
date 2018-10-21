import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Hello } from './components/Hello';
import { debug } from 'util';

type State = {
  lights: Lights,
}

type Props = {
  apiKey: string,
  hubIpAddress: string
}


export default class App extends React.Component<Props, State> {
  public static defaultProps: Partial<Props> = {
    apiKey: "yRDo6HRvKGd5bwl05AeoLE7ugzs2HlUvwpIRW8pD",
    hubIpAddress: "192.168.0.14"
  }

  constructor(props: Props) {
    super(props)
    this.state = { lights: {}}
  }

  componentDidMount = async () => {
    const lights = await this.getLights()
    this.setState({lights}) 
  }

  render() {
    debugger;
    return (
      <View>
        {Object.keys(this.state.lights).map(lightId => {
          const light = this.state.lights[lightId];
          const colour = light.state.on ? 'green' : 'red'
          return <Button color={colour} key={lightId} title={`Toggle light ${light.name}`}
            onPress={this.toggleLight(lightId)} />
        })}
      </View>
    );
  }

  toggleLight = (lightId: string) => () => {
    // console.log(this.state.lights[lightId]);
    const { hubIpAddress, apiKey } = this.props;
    const uri = `http://${hubIpAddress}/api/${apiKey}/lights/${lightId}/state`;
    const lightOn = !this.state.lights[lightId].state.on;
    const action = { on: lightOn};
    const state = {...this.state}
    state.lights[lightId].state.on = lightOn;
    debugger;
    fetch(uri,
      {
        body: JSON.stringify(action),
        method: 'PUT'
      })
      .then(r => r.json())
      .then(() => this.setState(
        {...state}))
  }


  getLights = async (): Promise<Lights> => {
    const { hubIpAddress, apiKey } = this.props;
    const uri = `http://${hubIpAddress}/api/${apiKey}/lights`;
    const r = await fetch(uri);
    return await r.json();
  }

}

// todo seperate the state update and api call in toggle light
// todo make seperte button componendt
// api class
