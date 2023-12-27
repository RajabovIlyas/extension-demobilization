export const getExpirationDateFromLocalStorage = (): Date | undefined =>{
    const expirationDate = localStorage.expirationDate;
    return expirationDate && new Date(expirationDate);
}

export const setExpirationDateToLocalStorage = (date?: Date) => {
    localStorage.expirationDate = date;
}
