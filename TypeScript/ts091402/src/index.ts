import { makePerson } from "./person/Person";
import IPerson from "./person/IPerson";

const testMakePerson = () : void => {
  let jane: IPerson = makePerson('jane');
  let jack: IPerson = makePerson('jack');

  console.log(jane, jack);
}

testMakePerson();