import Link from 'next/link'
import { Box } from "./layout";

const menu = ['/Today','/Tomorrow','/Whenever']

function List({children}) {
  return (
    <div className="flex flex-col w-full h-full justify-between p-6 rounded-md bg-nav text-txt">
      {children}
    </div>
  )
}

function Context({children}) {
  return (
    <div className='w-fit h-fit flex pl-4 pr-4 gap-2 font-bold rounded-m bg-base'>
      {children}
    </div>
  )
}

function Item({children}) {
  return(
    <div className="w-full h-fit border border-txt mb-2 p-2 text-txt underline underline-offset-4 cursor-pointer">
      {children}
    </div>
  )
}

function PlusItem({children}) {
  return (
    <div className='w-full h-fit mb-0 bg-etc text-nav text-3xl p-2'>
            {children}
    </div>
  )
}

function transDay_To_Text(day) {
  switch (day) {
    case 0: 
      return 'SUNDAY'
    case 1:
      return 'MONDAY'
    case 2:
      return 'TUESDAY'
    case 3:
      return 'WEDNESDAY'
    case 4:
      return 'THURSDAY'
    case 5:
      return 'FRIDAY'
    case 6:
      return 'SATURDAY'
  }
}

function transMonth_To_Text(month) {
  switch (month) {
    case 1: 
      return 'JANUARY'
    case 2:
      return 'FEBRARY'
    case 3:
      return 'MARCH'
    case 4:
      return 'APRIL'
    case 5:
      return 'MAY'
    case 6:
      return 'JUNE'
    case 7:
      return 'JULY'
    case 8:
      return 'AUGUST'
    case 9:
      return 'SEPTEMBER'
    case 10:
      return 'OCTOBER'
    case 11:
      return 'NOVEMBER'
    case 12:
      return 'DECEMBER'
  }
}

const today = new Date();
const T_Date = today.getDate();
const T_Day = transDay_To_Text(today.getDay());
const T_Month = transMonth_To_Text(today.getMonth());

export default function Home() { 
  return (
    <main>
      <Box>
        <Context>
          <div className='text-9xl'>
            {T_Date}
          </div>
          <div className='flex flex-col justify-between'>
            <div className='pt-3 text-4xl'>{T_Day}</div>
            <div className='pb-3 text-4xl'>{T_Month}</div>
          </div>
        </Context>
        <List>
          <div>
            <div className='w-full flex justify-between border-b-2 pb-1'>
              <div className='font-bold text-xl'>
                TodoList
              </div>
              <div>
                next.svg
              </div>
            </div>
            <div className='pt-5 pb-5 pl-2 pr-2'>
              {menu.map((item, index) => 
                <Item key={index}>
                  <Link href={item}>
                    {item.split('/')[1]}
                  </Link>
                </Item>
              )}
            </div>
          </div>
          <PlusItem>
            Add
          </PlusItem>
        </List>
      </Box>
    </main>
  );
}


