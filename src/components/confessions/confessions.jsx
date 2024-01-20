import React,{useState} from 'react'
import Blockquote from '../blockquote/blockquote';




function Confessions() {

    const [Entry,setEntry] = useState();

    const text_transform = (e)=> {
     setEntry(e.target.value);
     console.log(Entry );
 }


    const confess=()=>{
     
     console.log(Entry)
    }
  return (
    <>
    <Blockquote confessText={Entry}/>
    <footer className='w-full'>
    
<label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">write your confession message</label>
<textarea onChange={text_transform} value={Entry} id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

<button type="button" onClick={confess} className=" py-2.5 px-5 me-2 mb-2 mt-3 text-sm font-medium text-gray-200 focus:outline-none bg-orange-700 rounded-lg border border-gray-200   focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600">Alternative</button>


</footer>
    </>
  )
}

export default Confessions
