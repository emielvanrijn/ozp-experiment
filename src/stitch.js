import {
  Stitch,
  RemoteMongoClient,
  AnonymousCredential
} from "mongodb-stitch-browser-sdk";

const client = Stitch.initializeDefaultAppClient("ozp-experiment-xxhvb");

let userId;

client.auth
  .loginWithCredential(new AnonymousCredential())
  .then(user => (userId = user.id));

const mongodb = client.getServiceClient(
  RemoteMongoClient.factory,
  "ozp-experiment"
);

const data = mongodb.db("experiment").collection("data");

export const initEntry = unixTimestamp =>
  data.insertOne({ id: userId, begin: unixTimestamp });

export function addTimestamp(stage) {
  data.updateOne({ id: userId }, { $set: { [stage]: Date.now() } });
}
