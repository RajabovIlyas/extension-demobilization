
export const dateToString = (date: Date) => date.toISOString().slice(0, 10)

export const datePlusTwoYears = () => {
    const now = new Date();
    now.setFullYear(now.getFullYear() + 2);
    return dateToString(now)
}
