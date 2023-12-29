import {useContext, useEffect, useState} from "react";
import {getDiffDate} from "../../helper/get-diff-date.helper.ts";
import {ContextExpirationDateModel} from "../../models/expiration-date.model.ts";
import {ExpirationDateContext} from "../../contexts/expiration-date.context.ts";

export const useUpdateDate = () => {
    const {expirationDate} = useContext<ContextExpirationDateModel>(ExpirationDateContext);
    const [remainingDays, setRemainingDays] = useState(expirationDate && getDiffDate(expirationDate));

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingDays(expirationDate && getDiffDate(expirationDate))
        }, 1000 * 60 * 60);
        return () => clearInterval(interval);
    }, [expirationDate]);

    return {remainingDays}
}
