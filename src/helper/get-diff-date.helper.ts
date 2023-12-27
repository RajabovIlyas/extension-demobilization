export const getDiffDate = (expirationDate: Date) => {
    const timeDiff = Math.abs(expirationDate.getTime() - new Date().getTime());
    return  Math.ceil(timeDiff / (1000 * 3600 * 24));
}
