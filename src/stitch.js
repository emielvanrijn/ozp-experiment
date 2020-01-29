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
export const initDB = async () => {
  await client.auth.loginWithCredential(new AnonymousCredential());
  userId = client.auth.user.id;
  await data
    .findOne({ id: userId })
    .then(result => {
      if (!result) {
        data.insertOne({ id: userId, accept_terms: Date.now() });
      }
    })
    .catch(err => console.log(err));
};

export function addData(payload) {
  data.updateOne({ id: userId }, { $set: payload });
}

export async function getCounter() {
  return await data.count();
}
