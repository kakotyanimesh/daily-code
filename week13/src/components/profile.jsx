export const Profile = ({name, position}) => {
    return (
        <div className="bg-white text-black flex items-center gap-10 p-6 rounded-xl">
            <div>
                <img src='https://tailwindcss.com/img/erin-lindford.jpg' className="size-20 rounded-full" alt="" />
            </div>
            <div>
                <h1 className="sm:text-2xl">{name}</h1>
                <p className="sm:text-base">{position}</p>
                <button className="text-sm hover:bg-purple-900 focus:ring-red-600 focus:ring-2 focus:ring-offset-2 border-purple-900 border py-2 px-4 text-purple-900 hover:text-white rounded-full ">message</button>
                {/* 
                    focus : happens when i click on the button  
                    ring : makes a ring thingy in the border of button
                    hover : hover happens when i hover over the button

                
                */}

                
            </div>
        </div>
    )
}