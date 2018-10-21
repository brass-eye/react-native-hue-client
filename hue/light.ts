type Light = {
    state: LightState,
    type: string,
    name: string 
}

type LightState = {
    on: boolean,
    bri: number,
    hue: number,
    sat: number,
    reachable: boolean,
};

type Lights = {
    [lightId: string]: Light;
}