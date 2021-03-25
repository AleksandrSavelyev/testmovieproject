import React from 'react';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';

export type TProps = {
    size?: 	'large'| 'medium'| 'small'
    color?: 'default' | 'inherit' | 'primary' | 'secondary';
    variant?:  'contained' | 'outlined' | 'text';
    onClick?: () => void;
    textKey?: string;
    disabled?: boolean;
};

const CustomButton = ({
    size= 'small',
    color = 'inherit',
    variant = 'contained',
    textKey = 'button',
    onClick
}: TProps) => {

    const { t } = useTranslation();

    return (
        <Button
            size={size}
            color={color}
            variant={variant}
            onClick={onClick}
        >
            {t(textKey)}
        </Button>
    );
}

export default CustomButton;