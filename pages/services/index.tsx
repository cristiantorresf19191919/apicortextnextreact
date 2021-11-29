import React, { CSSProperties } from 'react'
import { getServices } from '../../lib/services'
import { ServiceModel, Picture } from '../../models/ServiceModel';
import { For } from '../../utils/For';
import { url } from '../../utils/URL';
import Link from 'next/link'

type Props = { services: ServiceModel[] }

function Services(props: Props) {
    const { services } = props;
    function getImageUrl(picture: Picture): React.CSSProperties | undefined {
        if (!picture) return undefined;
        return { backgroundImage: `url(${url + picture?.url})` };
    }
    function renderChild(service: ServiceModel) {
        return (
            <div className="card">
                <div className="card__front" style={getImageUrl(service.pictures)}>
                    <div className="card__info">
                        <div className="card__title">{service.title}</div>
                        <div className="card__description">{service.description}</div>
                    </div>
                </div>
                <div className="card__back">
                    {service.title}
                    <button>
                        <Link href={`services/${service.id}`}>
                            reservar
                        </Link>
                    </button>
                </div>

            </div>
        )
    }
    return <div className="cardList">
        <For list={services} child={renderChild} />
    </div>
}

export default Services

export async function getStaticProps() {

    const services = await getServices()
    console.log("🚀 ~ file: [id].tsx ~ line 18 ~ getStaticProps ~ postData", services)
    return {
        props: {
            services
        }
    }
}