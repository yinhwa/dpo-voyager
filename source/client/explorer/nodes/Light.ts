/**
 * 3D Foundation Project
 * Copyright 2018 Smithsonian Institution
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import LightComponent from "@ff/scene/components/Light";

import { ILight, TVector3 } from "common/types/presentation";

import PresentationNode from "./PresentationNode";

////////////////////////////////////////////////////////////////////////////////

export default class Light extends PresentationNode
{
    static readonly type: string = "Light";

    protected light: LightComponent = null;

    toLightData(): ILight
    {
        const light = this.light;
        let ins = light.ins;
        const data: Partial<ILight> = {};

        data.color = ins.color.value.slice() as TVector3;
        data.intensity = ins.intensity.value;

        return data as ILight;
    }
}