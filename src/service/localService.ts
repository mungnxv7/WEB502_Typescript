
const USER = 'USER'

const localUserService = {
    set: (data:object)=>{
        const jsonData = JSON.stringify(data)
            localStorage.setItem(USER,jsonData)
    },
    get : () =>{
     const jsonData = localStorage.getItem(USER)     
     if(jsonData){
        return JSON.parse(jsonData)
     }
    }
}
export default localUserService