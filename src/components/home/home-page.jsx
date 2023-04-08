import Link from "next/link"
import Image from "next/image"

export const HomePage = ({data}) => {
    return (
    <main>
      {data?.map((st)=> (
        <Link key={st.id} href = {`/events/${st.id}`} passHref>
            
              <Image width={300} height={300} alt={st.id} src = {st.image} />
              <h2>{st.title}</h2>
              <p>{st.description}</p>
            
            </Link>
          ))}
      </main>
    );

};