type Light = {
    state: LightState,
    type: string,
    name: string 
    // lightId: string, // A light should be in charge of its own id. need to make some transformation Process to actually get it here and not from the parent object
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