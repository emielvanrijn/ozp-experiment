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

// let userId;
export const initDB = async id => {
  await client.auth.loginWithCredential(new AnonymousCredential());
  //userId = client.auth.user.id;
  await data
    .findOne({ id: id }) //TODO: Vervangen naar userId
    .then(result => {
      if (!result) {
        data.insertOne({ id: id, accept_terms: Date.now() }); //TODO: Vervangen naar userId
      }
    })
    .catch(err => console.log(err));
};

export function addData(payload, id) {
  console.log(payload);
  data.updateOne({ id: id }, { $set: payload }); //TODO: Vervangen naar userId
}

export async function getCounter() {
  return await data.count();
}
