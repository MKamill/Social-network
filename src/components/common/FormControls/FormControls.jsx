import s from "./FormControls.module.css";


const FormControl = ({ input, meta, child, ...props }) => {
    const hasErr = meta.touched && meta.error;
    return (
        <div className={s.formControl + (hasErr ? " " + s.error : "")}>
            <div >
                {props.children}
            </div>
            <div>
                {hasErr && <span className={s.span}>{meta.error}</span>}
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props
    return <FormControl {...props}><textarea  {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}