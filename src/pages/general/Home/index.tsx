import {useAuth} from "@/provider/Auth";

export function Home() {
    const style = `
    w-full
    h-full
    flex
    flex-row
    border-orange-500
    surface-overlay
    border-3
    border-round
    font-bold m-2
    flex
    align-items-center
    justify-content-center
    `

    const estilo = `
    w-full
    h-full
    flex
    flex-row
    border-red-500
    surface-overlay
    border-3
    border-round
    font-bold m-2
    flex
    align-items-center
    justify-content-center
    `
    const estilo_1 = `
    w-full
    h-full
    flex
    flex-row
    border-green-500
    surface-overlay
    border-3
    border-round
    font-bold m-2
    flex
    align-items-center
    justify-content-center
    `
    return (
        <div className={`w-full h-screen flex flex-row m-2 p-4`}>
            <div className={style}>
            </div>
            <div className={estilo}>

                <div className="flex flex-column">
                    <div className="flex justify-content-center flex-wrap">
                        <div className="flex align-items-center justify-content-center w-4rem h-4rem font-bold border-green-500 border-3 border-round m-2"></div>
                        <div className="flex align-items-center justify-content-center w-4rem h-4rem font-bold border-green-500 border-3 border-round m-2"></div>
                    </div>
                    <div className="flex flex-row flex-wrap">
                        <div className="flex align-items-center justify-content-center w-4rem h-4rem font-bold border-green-500 border-3 border-round m-2"></div>
                        <div className="flex align-items-center justify-content-center w-4rem h-4rem font-bold border-green-500 border-3 border-round m-2"></div>
                        <div className="flex align-items-center justify-content-center w-4rem h-4rem font-bold border-green-500 border-3 border-round m-2"></div>
                    </div>
                    <div className="flex align-items-center justify-content-center h-4rem font-bold border-green-500 border-3 border-round m-2"></div>
                </div>
            </div>
        </div>
    )
}

