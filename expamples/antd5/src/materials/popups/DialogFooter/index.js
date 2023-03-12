import { DialogFooter } from "expamples/ant5/components/popups/DialogFooter";
import { locales } from "./locales";
import { materialSchema } from "./schema";
const name = "DialogFooter";
export const DialogFooterMaterial = {
    componentName: name,
    component: DialogFooter,
    designer: DialogFooter,
    designerLocales: locales,
    designerSchema: materialSchema,
    designerProps: {
    //readOnly: true,
    },
    behaviorRule: {
        droppable: true,
    }
};
