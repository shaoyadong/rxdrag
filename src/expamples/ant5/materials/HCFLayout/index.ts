import { IComponentMaterial } from "core-react";
import { colIcon } from "./icon";
import { hCFLayoutLocales, hCFLayoutResourceLocales } from "./locales";
import { hCFLayoutSchema } from "./schema";
import { HCFLayout } from "expamples/ant5/components/HCFLayout";
import { HeaderMaterial } from "../Header";
import { FooterMaterial } from "../Footer";

const name = "HCFLayout"
export const HCFLayoutMaterial: IComponentMaterial = {
  componentName: name,
  component: HCFLayout,
  designer: HCFLayout,
  designerLocales: hCFLayoutLocales,
  designerSchema: hCFLayoutSchema,
  resource: {
    name: name,
    elements: [
      {
        componentName: name,
        props: {

        },
        slots: {
          header: {
            componentName: "Layout.Header",
            props: {
            }
          },
          footer: {
            componentName: "Layout.Footer",
            props: {
            }
          }
        }
      }
    ]
  },
  icon: colIcon,
  color: "#dfa324",
  resourceLocales: hCFLayoutResourceLocales,
  behaviorRule: {
    droppable: true,
  },
  slots: {
    header: HeaderMaterial,
    footer: FooterMaterial
  },
}
