export type LightIdentity = {
    type: string,
    name: string
    lightId: string,
}

export type LightState = {
    on: boolean,
    brightness: number,
    hue: number,
    saturation: number,
    reachable: boolean,
};

export type Light = LightIdentity & LightState;


export type Lights = Light[];
