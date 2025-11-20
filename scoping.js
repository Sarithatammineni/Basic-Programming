ReferenceError : x is not defined

//b
const profile={
    user:{
        details:{
            email:"test@mail.com"
        }
    }
};
console.log(profile?.user?.details?.email);
console.log(profile?.user?.details?.phone);

//c
const profile={
    user:{}
};
console.log(profile?.user?.details?.email);
