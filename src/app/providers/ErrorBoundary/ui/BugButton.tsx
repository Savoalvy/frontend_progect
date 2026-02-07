import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@shared/ui/Button';

interface BugButtonProps {
    className?: string
}

export const BugButton: FC<BugButtonProps> = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();
    const triggerError = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button onClick={triggerError}>
            {t('Пробросить ошибку (Тест)')}
        </Button>
    );
};
