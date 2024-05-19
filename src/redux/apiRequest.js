import axios from "axios"

export const sendInfomation = async(info,dispatch) => {
    dispatch(sendInfomation());
    try {
        const res = axios.post("/v1", info)
    } catch (error) {
        
    }
}