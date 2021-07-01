import {useRouter} from "next/router";

const RegistrationHeader = ({textData}) => {
    const route = useRouter()
    return (
        <div className={"registration__container__header"}>
            <h2 className={"registration__container__header__title"}>{textData?.register}</h2>
            <div className={"registration__container__header__text"}>
                <p className={"registration__container__header__text--back"} onClick={() => route.back()}>Zuruck</p>
                <div className={"registration__container__header__text--txt"}>
                    <p>
                        {textData?.text_under_register}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RegistrationHeader

