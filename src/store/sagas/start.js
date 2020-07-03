import { put } from "redux-saga/effects";

export function startApplication({ payload }) {
  if (!payload) return;

  console.log("AQ");
  console.log(payload);
}
