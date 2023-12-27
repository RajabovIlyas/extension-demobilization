

import { ExpirationDateContext } from '../contexts/expiration-date.context.ts';
import {FC, ReactChild, ReactPortal, useState} from "react";
import {
    getExpirationDateFromLocalStorage, setExpirationDateToLocalStorage
} from "../helper/local-storage-expiration-date.helper.ts";

interface ReactNodeArray extends Array<ReactNode> {}
type ReactFragment = ReactNodeArray;
type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;

interface ExpirationDateProviderProps {
    children: ReactNode
}

const ExpirationDateProvider: FC<ExpirationDateProviderProps> = ({ children }) => {

    const [expirationDate, setStateExpirationDate] = useState<Date | undefined>(getExpirationDateFromLocalStorage());

    const setExpirationDate = (date?: Date) => {
        setExpirationDateToLocalStorage(date)
        setStateExpirationDate(date);
    };

    return (
        <ExpirationDateContext.Provider
            value={{
                expirationDate,
                setExpirationDate
            }}
        >
            {children}
        </ExpirationDateContext.Provider>
    );
};

export default ExpirationDateProvider;
