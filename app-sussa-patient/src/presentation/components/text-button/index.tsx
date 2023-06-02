import React from "react";
import { StyledTextButton, StyledTextButtonLabel } from "./styles";
import { ITextButtonProps } from "./props";

export const TextButton: React.FC<ITextButtonProps> = ({myTitle, onPress}) => {
    return (
        <StyledTextButton onPress={onPress}>
            <StyledTextButtonLabel>{myTitle}</StyledTextButtonLabel>
        </StyledTextButton>
    );
}