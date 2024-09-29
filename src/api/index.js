import Chance from 'chance';
const chance = new Chance();


export const fakeUserData = () =>{
    // console.log(chance.name({middle:true}))
    // return chance.name({middle:true})
    const name = chance.name({ middle: true });
  console.log(name);
  return name;
}
// fakeUserData();