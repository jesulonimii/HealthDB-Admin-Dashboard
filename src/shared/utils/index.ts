import axios from "axios";
export {default as QUERY_KEYS} from "./query-keys";

export const COLORS = {
    // => primary
    primary: "#010066",
    secondary: "#d2a616",
    ["primary-dark"] : "#010134",
    ["primary-50"] : "#01006651",
    ["secondary-50"] : "#d2a61651",


    accent : {
        primary: "#01006617",
        secondary: "#d2a61617"
    },

    // => status colors
    status: {
        success: "#519C66",
        error: "#e12d2d",
        warning: "#f59e0b",
        info: "#3b82f6",
    },

    // => background colors
    ["bg-main"] : "#fff",
    ["bg-50"]: "#f4f5fa",
    skeleton: "#6E6E6E49",


    //=>icons
    icon: {
        dark : "#53545C"
    },

};

export const PERIOD_FILTER = [
    {name: "This Week", value: "1", icon: ""},
    {name: "Last Week", value: "2", icon: ""},
    {name: "This Month", value: "3", icon: ""},
    {name: "This Year", value: "4", icon: ""},
];

export const cleanUrl = (url) => {
    const uri =  encodeURIComponent(url)
    return uri.replaceAll("/", "%2F");
}

export const HEX2RGBA = (hex, alpha = 1) => {
    if (hex.length < 6 || hex.length > 7) {
        return `rgba(1, 1, 1, ${alpha})`;
    } else {
        const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
        return `rgba(${r},${g},${b},${alpha})`;
    }
};

//export const API_URL = import.meta.env.VITE_API_URL;


export const callApi = async (config) => {
    try {
        const { data } = await axios({ ...config, timeout: 20000 });
        //console.log("axios-data@callApi: ", data);
        return data;
    } catch (error) {
        //console.error(error);
        return error.response.data ? error.response.data : JSON.stringify(error)
    }
};