const USER = 'USER'

const localUserService = {
    set: (data:object)=>{
        const jsonData = JSON.stringify(data)
            localStorage.setItem(USER,jsonData)
    }
}
export default localUserService