export default function Loading () {
    console.log('server side renderring');
    
    return <div className="min-h-screen flex justify-center items-center">
        <h1>loading </h1>
    </div>
}

//  to add a loader in next js we just have to add a file name loading.tsx and it will act as loading until the main page.tsx get renderred 

