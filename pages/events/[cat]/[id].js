import Image from "next/image";

const Page = ({data}) => {
    console.log(data);
    return (
        <div>
            {data.map((ev)=>(
            <a key={ev.id} >
           
                <Image width={12500} height={650} alt={ev.id} src = {ev.image} />
              <h3>{ev.title}</h3>
              <p>{ev.description}</p>
              </a>
           
             
        ))}
            </div>
    );
};
export default Page;

export async function getStaticPaths(){
    const {allEvents} = await import(`/data/data2.json`);

    const allPaths = allEvents.map((path) =>{
        return {
            params:{
                cat:path.city,
                id:path.id,
            },
        };
    } );

    return {
        paths: allPaths,
        fallback: false,
};
}

export async function getStaticProps(context){
    console.log(context);
    const id = context.params.id;
    const {allEvents} = await import(`/data/data2.json`);
    const eventData = allEvents.filter((ev)=> id === ev.id);
    return {
        props: {data:eventData},
    };
}
