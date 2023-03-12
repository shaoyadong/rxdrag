import { DrawerFooter } from "expamples/ant5/components/popups/DrawerFooter";
import { locales } from "./locales";
import { materialSchema } from "./schema";
const name = "DrawerFooter";
export const DrawerFooterMaterial = {
    componentName: name,
    component: DrawerFooter,
    designer: DrawerFooter,
    designerLocales: locales,
    designerSchema: materialSchema,
    designerProps: {
    //readOnly: true,
    },
    behaviorRule: {
        droppable: true,
    }
};
