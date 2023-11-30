// const API = 'https://react-typescript-web-backend.vercel.app';
const API = 'http://localhost:3000'

const formartCurrency = (number?:number) =>{
    return number?.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND',
      })
}
const loadingPage = (status:boolean) =>{
  if(status === true){
    document.querySelector('.loading')?.classList.remove('hidden_loading')
  }else{
    document.querySelector('.loading')?.classList.add('hidden_loading')
  }
}
export {formartCurrency,loadingPage,API}