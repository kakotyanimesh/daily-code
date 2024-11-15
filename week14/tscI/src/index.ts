// we can run npx tsc --init =>to initialize the tsconfigfile 


// Pick  => it can create a new Type by extracting set of properties from an exisisting type , eg : we need username or id for user profile from  usermodel type then we can use the Type< thingy

interface User {
    id : number,
    name : string,
    email : string,
    createdAt : Date
}

type UserProfile = Pick<User, 'name' | 'email'>
// type => use to take property from interface 

// Pick<interface , 'prop' | 'prop'>

const disPlayUser = (user : UserProfile) => {
    console.log(`name : ${user.name} and email ${user.email}` );
}

disPlayUser({name : "animesh", email : "adadad"})