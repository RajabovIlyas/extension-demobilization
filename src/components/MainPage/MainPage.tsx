import {FC, useContext} from "react";
import {ExpirationDateContext} from "../../contexts/expiration-date.context.ts";
import {ContextExpirationDateModel} from "../../models/expiration-date.model.ts";
import {getDiffDate} from "../../helper/get-diff-date.helper.ts";
import {PathEnum} from "../../enums/path.enum.ts";

interface MainPageProps{
    setPath: (data: PathEnum) => void
}

const MainPage: FC<MainPageProps> = ({setPath}) => {
    const {expirationDate} = useContext<ContextExpirationDateModel>(ExpirationDateContext);

    const onSetting = () => {
        setPath(PathEnum.SETTINGS);
    }

    return (
        <>
            <h1 className="text-lime-950 font-bold text-center">How many days left</h1>
            <h4>{expirationDate && getDiffDate(expirationDate)}</h4>
                <button className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded" onClick={onSetting}>
                    {expirationDate ? "Change Date" : "Insert Date"}
                </button>
        </>
    )
}

export default MainPage;
