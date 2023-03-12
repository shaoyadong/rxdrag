import { locales } from "./locales";
import { slotSchema } from "./schema";
import { DefaultSlot } from "core-react/DefaultSlot";
const name = "ActionSlot";
export const ActionSlotMaterial = {
    componentName: name,
    component: DefaultSlot,
    designer: DefaultSlot,
    designerLocales: locales,
    designerSchema: slotSchema,
    behaviorRule: {
        draggable: false,
        droppable: true,
        deletable: false,
        cloneable: false
    },
    resource: {
        name: name,
        elements: [
            {
                componentName: name,
                props: {}
            }
        ]
    },
};
