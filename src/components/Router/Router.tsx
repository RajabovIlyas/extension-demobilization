import MainPage from "../MainPage/MainPage.tsx";
import FormSettings from "../FormSettings";
import {FC, useState} from "react";
import {PathEnum} from "../../enums/path.enum.ts";


const getPath = (setPath: (data: PathEnum) => void) => ({
    [PathEnum.MAIN]: <MainPage setPath={setPath}/>,
    [PathEnum.SETTINGS]: <FormSettings setPath={setPath}/>
})

const Router: FC = () => {
    const [path, setPath] = useState<PathEnum>(PathEnum.MAIN);
    return (
        <div className="content gradient-border">
            {getPath(setPath)[path]}
        </div>
    )
}

export default Router;
