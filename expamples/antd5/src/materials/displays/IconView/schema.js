import { createSchema } from "react-shells/ant5/shared/createSchema";
const options = {
    propsSchemas: [
        {
            componentName: "FormItem",
            props: {
                label: "$size",
            },
            children: [
                {
                    componentName: "InputNumber",
                    "x-field": {
                        name: "size",
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
                label: "$color",
            },
            children: [
                {
                    componentName: "ColorInput",
                    "x-field": {
                        name: "color",
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
                label: "$icon",
            },
            children: [
                {
                    componentName: "IconInput",
                    "x-field": {
                        name: "icon",
                        params: {
                            withBind: true,
                        }
                    },
                }
            ]
        },
    ]
};
export const iconViewSchema = createSchema(options);
