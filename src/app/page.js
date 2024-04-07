import Link from 'next/link'
import { Box } from "./layout";

const menu = ['/Today','/Tomorrow','/Whenever']

function Nav({children}) {
  return (
    <div className="flex-col w-fit p-2 rounded-md bg-nav">
      {children}
    </div>
  )
}

function Context({children}) {
  return (
    <div className='w-full h-fit p-2 rounded-md bg-etc'>
      {children}
    </div>
  )
}

export default function Home() { 
  return (
    <main>
      <Box>
        <Nav>
          {menu.map((item, index) => {
            if(index === 0){
              return <div className="w-full h-fit text-txt underline underline-offset-4 cursor-pointer" key={index}>
              <Link href={item}>
                {item.split('/')[1]}
              </Link>
            </div> 
            }
            return <div className="w-full h-fit mt-2 text-txt underline underline-offset-4 cursor-pointer" key={index}>
              <Link href={item}>
                {item.split('/')[1]}
              </Link>
            </div>
          })}
          <div className='w-fit h-fit mt-2 rounded-full bg-black text-white p-3'>
            +
          </div>
        </Nav>
        <Context>
          Wow
        </Context>
      </Box>
    </main>
  );
}


