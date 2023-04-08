import Image from 'next/image';
import Link from 'next/link';

const storiesPage = ({data}) => {
    return (
        <div>
            <h3>NBA CITY EVENTS</h3>
           {data.map((st)=> (
            <Link key={st.id} href = {`/events/${st.id}`} passHref>
            
              <Image width={1300} height={650} alt={st.id} src = {st.image} />
              <h3>{st.title}</h3>
            
            
            </Link>
          ))}
        </div>
    )
}
export default storiesPage;

export async function getServerSideProps(){

    const {events_categories} = await import('/data/data2.json');
  
    return {
      props:{
        data: events_categories,
      },
    };
  }