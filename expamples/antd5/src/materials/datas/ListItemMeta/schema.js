import { createSchema } from "react-shells/ant5/shared/createSchema";
const options = {
    slotsSchemas: [
        {
            componentName: "FormItem",
            props: {
                label: "$avatar",
            },
            children: [
                {
                    componentName: "SlotSwitch",
                    props: {
                        name: "avatar"
                    }
                }
            ]
        },
        {
            componentName: "FormItem",
            props: {
                label: "$title",
            },
            children: [
                {
                    componentName: "SlotSwitch",
                    props: {
                        name: "title"
                    }
                }
            ]
        },
        {
            componentName: "FormItem",
            props: {
                label: "$description",
            },
            children: [
                {
                    componentName: "SlotSwitch",
                    props: {
                        name: "description"
                    }
                }
            ]
        },
    ]
};
export const materialSchema = createSchema(options);
