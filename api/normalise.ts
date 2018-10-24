import { Lights } from "../hue/light";

export const normaliseLights = (res: any): Lights => {
    return Object.keys(res).map((lightId) => ({
        lightId: lightId,
        type: res[lightId].type,
        name: res[lightId].name,
        on: res[lightId].state.on,
        brightness: res[lightId].state.bri,
        hue: res[lightId].state.hue,
        saturation: res[lightId].state.sat,
        reachable: res[lightId].state.reachable
    }))
}
