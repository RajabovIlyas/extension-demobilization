import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {ContextExpirationDateModel, ExpirationDateModel} from "../../models/expiration-date.model.ts";
import {useContext} from "react";
import {ExpirationDateContext} from "../../contexts/expiration-date.context.ts";
import {PathEnum} from "../../enums/path.enum.ts";

interface FormSettingProps{
    setPath: (data: PathEnum) => void
}


const schema = yup.object().shape({
    expirationDate: yup.date()
        .required()
        .min(new Date(), "Date cannot be in the past"),
});

export const useFormSetting = ({setPath}: FormSettingProps) => {
    const {
        expirationDate = new Date(),
        setExpirationDate
    } = useContext<ContextExpirationDateModel>(ExpirationDateContext);

    const {control, register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {expirationDate},
        resolver: yupResolver(schema)
    });

    const onSubmit = handleSubmit(({expirationDate}: ExpirationDateModel) => {
        setExpirationDate(expirationDate);
        setPath(PathEnum.MAIN)
    });

    return {control, register, handleSubmit, errors, onSubmit, defaultValue: {expirationDate}};
};
