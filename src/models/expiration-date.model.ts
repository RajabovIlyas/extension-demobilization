export interface ExpirationDateModel {
    expirationDate?: Date;
}

export interface ContextExpirationDateModel extends ExpirationDateModel{
    setExpirationDate: (date?: Date) => void
}
