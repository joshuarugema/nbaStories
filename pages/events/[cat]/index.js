import Image from 'next/image';
import Link from 'next/link';
const storiesPage = ({data, pageName}) => {
    return <div>
        <h3>Events in {pageName}</h3>

        {data.map((ev)=>(
            <Link key={ev.id} href= {`/events/${ev.city}/${ev.id}`} passHref>
           
                <Image width={1200} height={650} alt={ev.id} src = {ev.image} />
              <h3>{ev.title}</h3>
              <p>{ev.description}</p>
           
             </Link>
        ))}
       
    </div>;
};

export default storiesPage;

export async function getStaticPaths(){
    const {events_categories} = await import('/data/data2.json');
    const allPaths = events_categories.map((ev) => {
        return{
            params:{
                cat:ev.id.toString(),
            },
        };
    });
    console.log(allPaths);
    return{
        paths: allPaths,
        fallback: false,
    }
}

export async function getStaticProps(context){
    console.log(context);
    const id = context?.params.cat;
    const {allEvents} = await import('/data/data2.json');
    console.log(id);
    const data = allEvents.filter((ev)=>(ev.city === id));
    
    return{props:{data, pageName: id}};

}