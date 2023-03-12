import { AutoComplete } from "antd";
import { icon } from "./icon";
import { locales, resourceLocales } from "./locales";
import { materialSchema } from "./schema";
const name = "AutoComplete";
export const AutoCompleteMaterial = {
    componentName: name,
    component: AutoComplete,
    designer: AutoComplete,
    designerLocales: locales,
    designerSchema: materialSchema,
    designerProps: {
    // readOnly: true,
    // inputReadOnly: true,
    },
    resource: {
        name: name,
        resourceLocales: resourceLocales,
        icon: icon,
        color: "#8B79EC",
        elements: [
            {
                componentName: name,
            }
        ]
    },
};
