/// <reference types="react" />
/// <reference types="@rjsf/core" />
declare const _default: {
    DescriptionField: ({ description }: Partial<import("@rjsf/core").FieldProps<any>>) => JSX.Element | null;
    TitleField: ({ title, uiSchema }: Pick<import("@rjsf/core").FieldProps<any>, "title" | "uiSchema">) => JSX.Element;
};
export default _default;
