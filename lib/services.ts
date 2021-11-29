import axios from "axios";
import { ServiceModel, IdsList } from "../models/ServiceModel";
import { url } from "../utils/URL";

export async function getServices():Promise<ServiceModel[]> {
  const response = await axios.get(`${url}/services`);
  return response.data;
}
//[{params:{id:asdsad}},{params:{id:asdsad}},{params:{id:asdsad}}]

export async function getServicesIds():Promise<IdsList> {
  const response:{data:ServiceModel[]} = await axios.get(`${url}/services`);

  return response.data.map(({id}) => ({params:{id}}));
}

export async function getServiceById(id:string):Promise<ServiceModel|undefined>{
    const response:{data:ServiceModel[]} = await axios.get(`${url}/services`);
    const found:ServiceModel|undefined = response.data.find(x => x.id === id);
    return found;
}
