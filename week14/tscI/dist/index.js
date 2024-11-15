"use strict";
// we can run npx tsc --init =>to initialize the tsconfigfile 
// type => use to take property from interface 
// Pick<interface , 'prop' | 'prop'>
const disPlayUser = (user) => {
    console.log(`name : ${user.name} and email ${user.email}`);
};
disPlayUser({ name: "animesh", email: "adadad" });
