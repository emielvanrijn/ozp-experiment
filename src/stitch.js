import {
  Stitch,
  RemoteMongoClient,
  AnonymousCredential
} from "mongodb-stitch-browser-sdk";

const client = Stitch.initializeDefaultAppClient("ozp-experiment-xxhvb");
const mongodb = client.getServiceClient(
  RemoteMongoClient.factory,
  "ozp-experiment"
);
const data = mongodb.db("experiment").collection("data");
let userId;

export async function setId() {
  await client.auth.loginWithCredential(new AnonymousCredential());
  userId = client.auth.user.id;
}

export async function setSession() {
  let res = false;
  await data
    .findOne({ id: userId }) //TODO: Vervangen naar userId
    .then(result => {
      if (result) {
        res = result.completed;
      }
      if (!result) {
        data.insertOne({ id: userId, completed: false }); //TODO: Vervangen naar userId
      }
    })
    .catch(err => console.log(err));
  return res;
}

export function addData(payload) {
  console.log(payload);
  data.updateOne({ id: userId }, { $set: payload });
}

export async function getCounter() {
  return await data.count();
}
