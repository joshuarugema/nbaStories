import Link from "next/link"
import Image from "next/image"

export const HeaderPage = () => {
    return (
        
      
        <header>
        <div className='topNav'>
        <Image alt={'logo'} src={'/images/NBA.png'} height={150} width={150}/>
        <nav>
          <ul>
            <li>
            <Link href = '/' legacyBehavior passHref>
            <a>

           Home 
           </a>
           </Link>
           </li>

           <li>
           <Link href = '/events' legacyBehavior passHref>
          <a>
           Stories 
           </a>
          </Link>
           </li>
           <li>
           <Link href = '/about-us' legacyBehavior passHref>
          <a>
           About Us 
           </a>
          </Link>
           </li>
            </ul>
          
          
          
        </nav>
        </div>
        <h1>At vero eos et accusamus et iusto odio dignissimos</h1>
      </header>
   
    );

};