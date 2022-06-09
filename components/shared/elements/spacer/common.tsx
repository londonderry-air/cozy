import { BorderBox } from "../box/border"

export const Spacer = (props: {
    margin: string,
    color: string,
    borderWidth: string,
    borderStyle: NonNullable<JSX.IntrinsicElements['div']['style']>['borderStyle']
}) => {
    return (
        <BorderBox 
            margin={props.margin}
            width={'100%'} 
            height={'0px'}
            borderPosition={'top'}
            borderWidth={props.borderWidth}
            borderColor={props.color}
            borderStyle={props.borderStyle}
        ></BorderBox>
    )
}