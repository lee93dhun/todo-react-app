let backendHost;

const hostname = window && window.location && window.location.hostname;

if(hostname === "localhost"){
    backendHost = "http://localhost:8080";
}


// const API_BASE_URL = `${backendHost}`;
// export default API_BASE_URL;

export const API_BASE_URL = `${backendHost}`;