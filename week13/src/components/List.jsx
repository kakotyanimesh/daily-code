
const List = [
    {name : 'Animesh', image: 'https://tailwindcss.com/img/erin-lindford.jpg'},
    {name : 'Rohan', image: 'https://tailwindcss.com/img/erin-lindford.jpg'},
    {name : 'Nayan', image: 'https://tailwindcss.com/img/erin-lindford.jpg'},
    {name : 'Adrij', image: 'https://tailwindcss.com/img/erin-lindford.jpg'}
]

export const ListItems = () => {
    return (
        <ul className="divide-y divide-red-900 rounded-xl px-6 py-2 bg-white text-blue-900">
            { List.map((val, index) => (
                <li key={index} className="flex  py-6 first:pt-0  last:pb-0 items-center text-2xl">
                    <img src={val.image} alt="" className="mr-3 size-10 rounded-full" />
                    <h3 className=''>{val.name}</h3>
                    {/* <p className="truncate-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta blanditiis nemo odio! A vero earum, maiores quibusdam perspiciatis magnam. Amet ullam rerum nobis, officia quibusdam modi. Eaque itaque quae non.</p> */}
                </li>
                // the first:pt-0 and last:pb-0 => we applied py-6 in the li class every li will have padding of 6 from top and bottom but after using first:pt-0 the first li class will have padding top 0 and using last:pb-0 the last list item will have padding bottom of 0
            ))}
        </ul>
    )
}