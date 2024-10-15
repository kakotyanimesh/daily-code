import React from 'react'
import { useRef } from 'react'
import { useState, useEffect } from 'react'


const App = () => {
    const [timer, setTimer] = useState(0)
    const timerRef = useRef()

    const startClock =  () => {
        console.log('asnasd');

        timerRef.current = setInterval(() => {
            setTimer((e) => e + 1)
        }, 1000);
    }

    const stopClock = () => {
        console.log('asdasd');
        
        clearInterval(timerRef.current)
        timerRef.current = null;
        
    }

    return (
        <div>
            <h1>{timer}</h1>
            <button onClick={startClock}>start</button> <br />
            <button onClick={stopClock}>stop</button>
        </div>
    )
}


export default App 


// aim to scroll to bottom of text everytime there's a new text add to the dom
/*
    Going to learn about useRef hook that's gonna help us with referring to a certain dom element.
    first make the ui for it, it contains => box of fixed height and button to add text to it 
    initialize the useRef() hook with name scrollRef & with useState we make a state of message
    a function to add text the dom 
    inside the useEffect we write the algo to scroll automatically and for the ref we use the variable returned by useRef()
    algo => scrollRef.current returns the referenced element and 
    adding .scrollTop returns where the screen will currently in focused as on top 
    and when we add .scrollHeight to scrollRef.current the currently viewed top changes to bottom height 
    not that complex but ...

    dont forget to add the variable from useRef to add desired component 
    

*/

// const App = () => {
//     const [message, setMessage] = useState(['first message'])
//     const scrollRef = useRef()

//     const addText = () => {
//         setMessage([...message, "animesh "])
//     }

//     useEffect(() => {
//       scrollRef.current.scrollTop = scrollRef.current.scrollHeight
//     }, [message])
    
//   return (
//     <div>
//         <div ref={scrollRef} className='w-full h-[200px] border-2 border-red-400 overflow-y-scroll	'>
//             {
//                 message.map((msg, index) => (
//                     <li key={index}>{msg}</li>
//                 ))
//             }

//         </div>
//             <button onClick={addText}>add message</button>

//     </div>
//   )
// }

// export default App




// import React, {useRef} from 'react'

// const App = () => {
//     const ref = useRef() 
//     // initializing the useRef hook and its returns a variable 

//     const clicked = () => {
//         ref.current.focus()
//         // focusing on the input box 
//     }
//   return (
//     <div>
//         <input ref={ref} type="text" placeholder='useRef one' />
//         <button onClick={clicked}>use ref</button>
//     </div>
//   )
// }

// export default App













// import React, {useState} from 'react'
// import Model from './components/Model'

// const App = () => {
//   const [isModelOpen, setIsModelOpen] = useState(false)

//   return (
//     <div>
//       <button onClick={setIsModelOpen(true)}>open</button>
//       <Model isOpen={isModelOpen} onClose={() => isModelOpen(false)}>

//         <h1>its another component that takes childrens as inputs</h1>
//         <button onClick={setIsModelOpen(false)}></button>
//       </Model>
//     </div>
//   )
// }

// export default App
// import React, { useState } from 'react';

// const Collapsible = ({ title, children }) => {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <div>
//             <button onClick={() => setIsOpen(!isOpen)}>
//                 {title} {isOpen ? '-' : '+'}
//             </button>
//             {isOpen && <div>{children}</div>}
//         </div>
//     );
// };

// const App = () => {
//     return (
//         <div>
//             <Collapsible title="Section 1">
//                 <p>This is the content of section 1.</p>
//             </Collapsible>
//             <Collapsible title="Section 2">
//                 <p>This is the content of section 2.</p>
//             </Collapsible>
//         </div>
//     );
// };

// export default App;




// import React from 'react'
// import Card from './components/Card'

// const App = () => {
//   return (
//     <div className='m-20 '>
//       <Card>
//         <h1>h1 of card component</h1>
//         <p>we make a card component that takes children as props and render it </p>
//       </Card>
//       <Card>
//         <h1>another card component </h1>
//         <img src="https://media.licdn.com/dms/image/v2/D5603AQHTP3wfEgYDgQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1719008234014?e=1734566400&v=beta&t=AJsawRlijP4Zem1u1HBOT5f_Fd9y1-P70gzmh-LeMJ0" alt="" />
//       </Card>
//     </div>
//   )
// }

// export default App






// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <Greet name = 'anie' classIn = "2" />
//       <Greet name = 'gaie' classIn = "2" />
//       <Greet name = 'gaie' classIn = "2" />
//     </div>
//   )
// }

// const Greet = ({name, classIn }) => {
//   return (
//     <div>
//       <h1>hello {name}</h1>
//       <h1>your {classIn }</h1>
//     </div>
//   )
// }

// export default App









// import React, {useState, useEffect} from 'react'

// const App = () => {
//   const [loading, setLoading] = useState(false)
//   const [userData, setUserData] = useState([])

//   useEffect(() => {
//     const fetchedData = async () => {
//       try {
//         setLoading(true)
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
  
//         setUserData(data)
//         setLoading(false)
//       } catch (error) {
//        console.log(`error in fetching`);
        
//       }
//     }
  
//     fetchedData()
    
//   }, [])
  

//   //https://jsonplaceholder.typicode.com/users  => fetch data and render it 
//   return (
    
//     <div>
//       {loading ? <div>loading .....</div> : null}

//       <ul>
//         {userData.map(user => (
//           <li key={user.id}>
//             {user.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default App
















// import React, {useEffect, useState} from 'react'

// const App = () => {
//   const [currenttAB, setCurrenttAB] = useState(1)
//   const [loading, setLoading] = useState(false)
//   const [tabData, setTabData] = useState({})

//   useEffect(() => {
//     setLoading(true)
//     fetch('https://jsonplaceholder.typicode.com/todos/' + currenttAB)
//     .then(res => res.json())
//     .then(data => {
//       setTabData(data)
//       setLoading(false)
//     })
//     .catch(err => console.log(err))
    
    
  
//     // return () => {
//     //   second => cleanup logic
//     // }
//   }, [currenttAB])
  

//   return (
//     <div className='grid grid-cols-4 gap-3 mt-5'>
//       <button className='border border-black rounded-xl'
//         onClick={() => setCurrenttAB(1)}
//         style={{color : currenttAB === 1 ? 'red' : 'black'}}
//         >tab1</button>
//       <button className='border border-black rounded-xl'
//         onClick={() => setCurrenttAB(2)}
//         style={{color : currenttAB === 2 ? 'red' : 'black'}}
//         >tab2</button>
//       <button className='border border-black rounded-xl'
//         onClick={() => setCurrenttAB(3)}
//         style={{color : currenttAB === 3 ? 'red' : 'black'}}
//         >tab3</button>
//       <button className='border border-black rounded-xl'
//         onClick={() => setCurrenttAB(4)}
//         style={{color : currenttAB === 4 ? 'red': 'black'}}
//         >tab4</button>

//         {loading ? <div>loading ...</div> : null}
//         <br />
//         {tabData.title}
//     </div>
//   )
// }

// export default App






















// import React, {useState} from 'react'
// import Post from './components/Post'

// const App = () => {
//   const [posts, setPosts] = useState([])

//   const addPost = () => {
//     setPosts([
//       ...posts, {
//         name: 'Post One',
//         subtitle: 'Subtitle One',
//         image: 'https://via.placeholder.com/150',
//         time: '10:00 AM',
//         description: 'This is the description for post one.',
//       },
//       {
//         name: 'Post Two',
//         subtitle: 'Subtitle Two',
//         image: 'https://via.placeholder.com/150',
//         time: '11:00 AM',
//         description: 'This is the description for post two.',
//       },
//       {
//         name: 'Post Three',
//         subtitle: 'Subtitle Three',
//         image: 'https://via.placeholder.com/150',
//         time: '',
//         description: 'This is the description for post three without a time.',
//       },
//     ])
//   }

//   const removePost = () => {
//     setPosts([])
//   }

//   return (
//     <div>
//       <Notification/>
//       <Post name = "animsh" subtitle='react deve'description="i dont its descripion type thin" image='https://media.licdn.com/dms/image/v2/D5603AQHTP3wfEgYDgQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1719008234014?e=1734566400&v=beta&t=AJsawRlijP4Zem1u1HBOT5f_Fd9y1-P70gzmh-LeMJ0'/>
//       <button onClick={addPost}>add post </button>
//       <button onClick={removePost}>remove post </button>

//       <br />
//       <ul>
//       {
//         posts.map((post, index) => <li key={index}>
//           <Post 
//           name = {post.name}
//           image = {post.image}
//           subtitle = {post.subtitle}
//           time = {post.time}
//           description = {post.description}
//         />
//         </li>
//         )
//       }
//       </ul>
//     </div>
//   )
// }


// // notification button => Notification is reuseable component 

// const Notification = () => {
//   // useState is a hook to add state to a functional component => returns an array with current state & function to update it 
//   const [notificationCount, setNotificationCount] = useState(0) 
//   // using useState to store count of notification 

//   const increaseCount = () => {
//     setNotificationCount(notificationCount + 1)
//     // in react jsx we have to use set-syntax to change the state 
//   }
//   return (
//     <>
//       <button onClick={increaseCount} className='rounded p-3 bg-red-400'>Increase notification</button> <br />
//       {
//         notificationCount
//       } 
//       {/* using notificationCount or current state to render it in screen  */}
//     </>
//   )
// }

// export default App