import axios from "axios"
import { log } from "console"

export default async function SignIN () {
    // const [data, setdata] = useState()
    const response = await axios.get('https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details')

    // await Promise((r) => setTimeout(r, 5000))
    console.log(response.data);
    const data = response.data
    
    return <div>
        name : {data.name} <br />
        email : {data.email} <br />
        add :  {data.address.city}
    </div>
}