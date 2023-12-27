import React from 'react';
import {ContextExpirationDateModel} from '../models/expiration-date.model.ts';
import {getExpirationDateFromLocalStorage} from "../helper/local-storage-expiration-date.helper.ts";

const defaultValue: ContextExpirationDateModel = {
   expirationDate: getExpirationDateFromLocalStorage(),
   setExpirationDate: () => {}
};

export const ExpirationDateContext = React.createContext<ContextExpirationDateModel>(defaultValue);
