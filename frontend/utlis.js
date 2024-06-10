import { redirect } from "react-router-dom";

export const requireAuth = async(request)=>{
  const pathname = new URL(request.url).pathname;
  const auth = localStorage.getItem('user');
  if(!auth){
    throw redirect(`/login?message=You must login first!.&&redirectTo=${pathname}`)
  };
};