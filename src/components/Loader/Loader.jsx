import { RotatingLines } from "react-loader-spinner";

export const Loader = () => {
    return (
        <div>
            <RotatingLines
                strokeColor="green"
                strokeWidth="5"
                animationDuration="0.85"
                width="96"
                visible={true}
            />
        </div>
    )
}