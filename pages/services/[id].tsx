import React from 'react'
import { getServicesIds, getServiceById } from '../../lib/services'
import { ParamId, ServiceModel } from '../../models/ServiceModel'
import Image from "next/image";
import Link from "next/link";
import { url } from '../../utils/URL';
interface ServiceProp{
    service:ServiceModel
}
function ServiceId(prop:ServiceProp) {
    const {service} = prop;
    return (
        <div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <Image src={`${url}${service.pictures.url}`} width="500" height="500"/>
            <br />
            <Link href="/services">Atras</Link>
        </div>
    )
}

export default ServiceId

export async function getStaticProps({ params }:{params:ParamId}) {
    const service = await getServiceById(params.id);
    return {
      props: {
        service
      }
    }
  }
  export async function getStaticPaths() {
    const paths = await getServicesIds();
    console.log("🚀 ~ file: [id].tsx ~ line 27 ~ getStaticPaths ~ paths", paths)
    
    return {
      paths,
      fallback: false
    }
  }
