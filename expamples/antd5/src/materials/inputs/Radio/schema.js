import { createSchema } from "react-shells/ant5/shared/createSchema";
const options = {
    propsSchemas: [
        {
            componentName: "FormItem",
            props: {
                label: "$label",
            },
            children: [
                {
                    componentName: "Input",
                    "x-field": {
                        name: "label",
                        params: {
                            withBind: true,
                        }
                    },
                }
            ]
        },
        {
            componentName: "FormItem",
            props: {
                label: "$disabled",
            },
            children: [
                {
                    componentName: "Switch",
                    "x-field": {
                        name: "disabled",
                        params: {
                            valuePropName: "checked",
                            withBind: true,
                        }
                    },
                }
            ]
        },
    ]
};
export const radioSchema = createSchema(options);
