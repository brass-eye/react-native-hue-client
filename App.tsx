import * as React from 'react';
import ToggleLightButtons from './components/ToggleLightButtons';
import { Lights, Light } from './hue/light';
import { normaliseLights } from './api/normalise';

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
    this.state = { lights: []}
  }

  componentDidMount = async () => {
    const lights = await this.getLights()
    this.setState({lights}) 
  }

  render() {
    return (
      <ToggleLightButtons lights={this.state.lights} toggleLight={this.toggleLight} />
    );
  }

  // pergaps we should pass index, not light to avoid array.findindex
  toggleLight = (light: Light) => () => {
    // console.log(this.state.lights[lightId]);
    const { hubIpAddress, apiKey } = this.props;
    const {on, lightId} = light;
    const uri = `http://${hubIpAddress}/api/${apiKey}/lights/${lightId}/state`;
    const lightOn = !on;
    const action = { on: lightOn};
    const index = this.state.lights.findIndex( e => e.lightId == lightId);
    const lights = [...this.state.lights];
    lights[index] = {...lights[index], on}
    
    fetch(uri,
      {
        body: JSON.stringify(action),
        method: 'PUT'
      })
      .then(r => r.json())
      .then(() => this.setState(
        {lights}))
  }


  getLights = async (): Promise<Lights> => {
    const { hubIpAddress, apiKey } = this.props;
    const uri = `http://${hubIpAddress}/api/${apiKey}/lights`;
    const r = await fetch(uri);
    return normaliseLights(await r.json());
  }

}

// todo seperate the state update and api call in toggle light
// api class
// transform api repsonse to actual type
