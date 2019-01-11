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

import { types } from "@ff/graph/propertyTypes";
import Component from "@ff/graph/Component";

import { ISectionTool } from "common/types/voyager";

////////////////////////////////////////////////////////////////////////////////

export default class SectionTool extends Component
{
    static readonly type: string = "SectionTool";

    ins = this.ins.append({
        active: types.Boolean("Active"),
        plane: types.Vector4("Plane")
    });

    fromData(data: ISectionTool)
    {
        this.ins.copyValues({
            active: data.active,
            plane: data.plane
        });
    }

    toData(): ISectionTool
    {
        const ins = this.ins;

        return {
            active: ins.active.value,
            plane: ins.plane.cloneValue()
        };
    }
}