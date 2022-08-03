import s from '../css/Loading.module.css'

const Loading = () => {
    return (
        <div className={`${s.loadingContainer} ${s.borderLoading}`}>Loading...</div>
    )
}

export default Loading