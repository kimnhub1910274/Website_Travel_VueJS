import axios from "axios";

const commonConfig ={
    headers:{
        "Content-Type": "multipart/form-data",
        Accept: "multipart/form-data",
    },
};

export default (baseURL) => {
    return axios.create({
        baseURL,
        ...commonConfig,
    });
};