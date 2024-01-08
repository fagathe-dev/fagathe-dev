import { PropsWithChildren } from "react"
import styled from "styled-components"
import { Style } from "../../types/ui.type"

interface TextProps extends Style {
    color?: 'primary' | 'red' | 'green' | 'default'
}

const StyledText = styled.p``

const handleColor = ({color}: TextProps): string => {
    const prefix = 'text';
    let textColor:string;
    switch (color) {
        case 'primary':
            textColor = 'primary'
            break;
        case 'red':
            textColor = 'primary'
            break;
        case 'green':
            textColor = 'primary'
            break;
        default:
            textColor = 'default'
            break;
    }

    return `${prefix}-${textColor}`;
}

const Text = ({color, id, cx = [], style, children}: PropsWithChildren<TextProps>) => {

    if (color !== undefined) {
        cx = [...cx, handleColor({color})]
    }

    return <StyledText style={style} id={id} className={cx?.join(' ')}>{children}</StyledText>
}

export default Text