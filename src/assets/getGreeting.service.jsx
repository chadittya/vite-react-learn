import { formatName } from "./formatName.service";
import { user } from "../user";

export function getGreeting(u) {
  if (u == user.firstName) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Strager</h1>;
}
