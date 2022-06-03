import styled from "styled-components";
import { Word } from "./common";

export const EllipseWord = styled(Word)`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
`