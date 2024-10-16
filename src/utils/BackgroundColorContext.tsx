import React, { createContext, useState, useContext, PropsWithChildren } from 'react';

type BackgroundColorContextType = {
    backgroundColor: string;
    setBackgroundColor: (color: string) => void;
};

const BackgroundColorContext = createContext<BackgroundColorContextType | undefined>(undefined);

export const BackgroundColorProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const [backgroundColor, setBackgroundColor] = useState('hsla(83, 18.80%, 18.80%, 0.5)');

    return (
        <BackgroundColorContext.Provider value={{ backgroundColor, setBackgroundColor }}>
            {children}
        </BackgroundColorContext.Provider>
    );
};

export const useBackgroundColor = () => {
    const context = useContext(BackgroundColorContext);
    if (context === undefined) {
        throw new Error('useBackgroundColor must be used within a BackgroundColorProvider');
    }
    return context;
};