import {
  QueryVarResponse,
  StateResponse,
  StringsResponse,
  SystemMenuResponse,
} from "@/types/eis-meter/types";
import axios from "axios";

const HOST_URL = "http://utm.sensotech.com:50020";

export function fetchStrings(): Promise<StringsResponse> {
  return axios.get(`${HOST_URL}/strings`).then((res) => res.data);
}

export function fetchState(): Promise<StateResponse> {
  return axios.get(`${HOST_URL}/query?state`).then((res) => res.data);
}

export function fetchMenu(): Promise<SystemMenuResponse> {
  return axios.get(`${HOST_URL}/query?menu=system`).then((res) => res.data);
}

export function fetchVars(vars: string): Promise<QueryVarResponse> {
  return axios.get(`${HOST_URL}/query?vars=${vars}`).then((res) => res.data);
}
