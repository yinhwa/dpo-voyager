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

import * as React from "react";
import * as ReactDOM from "react-dom";

import Commander from "@ff/core/Commander";
import DockController from "@ff/react/DockController";

import { registerComponents } from "../core/system/registerComponents";
import VoyagerSystem from "../core/system/PresentationSystem";
import PresentationController from "../core/controllers/PresentationController";

//import MainView from "./MainView";

////////////////////////////////////////////////////////////////////////////////

/** Properties for [[Application]]. */
export interface IApplicationProps
{
    element: HTMLElement;
}

/**
 * Voyager story main application
 */
export default class Application
{
    readonly dockableController: DockController;
    readonly presentationController: PresentationController;
    readonly system: VoyagerSystem;
    protected commander: Commander;

    constructor(props: IApplicationProps)
    {
        this.system = new VoyagerSystem();
        registerComponents(this.system.registry);

        this.commander = new Commander();
        this.dockableController = new DockController(this.commander);
        this.presentationController = new PresentationController(this.commander, this.system);

        ReactDOM.render(
            <div>
                Voyager Story Application
            </div>,
            props.element
        );
    }
}