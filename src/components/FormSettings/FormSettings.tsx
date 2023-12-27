import {FC} from "react";
import {useFormSetting} from "./form-setting.hook.ts";
import {PathEnum} from "../../enums/path.enum.ts";

interface FormSettingsProps{
    setPath: (data: PathEnum) => void
}

const FormSettings:FC<FormSettingsProps> = (props) => {
    const {
        onSubmit,
        errors,
        register
    } = useFormSetting(props);
    return(
        <>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor='rows'
                           className='input-label'>
                        Expiration Date
                    </label>
                    <input  {...register('expirationDate')}
                            type='date' />
                    <p className='input-wrong'>{errors?.expirationDate?.message}</p>
                </div>
                <button
                    className='dark:bg-emerald-700 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type="submit"
                >
                    Save
                </button>
            </form>
        </>
    )
}

export default FormSettings
