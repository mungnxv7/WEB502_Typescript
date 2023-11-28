import localUserService from "../service/localService.js"
const configHeadres = {
    "Authorization":"Bearer " +localUserService.get()?.accessToken
}

export {configHeadres}