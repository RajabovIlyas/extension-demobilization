import {FC} from "react";
import {useFormSetting} from "./form-setting.hook.ts";
import {PathEnum} from "../../enums/path.enum.ts";
import {datePlusTwoYears, dateToString} from "../../helper/date-converter.helper.ts";

interface FormSettingsProps {
    setPath: (data: PathEnum) => void
}

const FormSettings: FC<FormSettingsProps> = (props) => {
    const {
        onSubmit,
        errors,
        register,
        defaultValue
    } = useFormSetting(props);
    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="pb-2">
                    <label htmlFor='rows'
                           className='input-label'>
                        Expiration Date
                    </label>
                    <input
                        {...register('expirationDate')}
                        type='date'
                        min={dateToString(new Date())}
                        max={datePlusTwoYears()}
                        defaultValue={dateToString(defaultValue.expirationDate)}
                    />

                    <p className='input-wrong'>{errors?.expirationDate?.message}</p>
                </div>
                <button className="btn" type="submit">
                    Save
                </button>
            </form>
        </>
    )
}

export default FormSettings
