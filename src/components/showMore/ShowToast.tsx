"use client";

import { useSelector } from "react-redux";
import ShowMore from "./ShowMore";

export function ShowToast() {
  const open = useSelector((state: any) => state?.setToastWindows?.open);
  const data = useSelector((state: any) => state?.setToastWindows?.value);
  return <div>{open ? <ShowMore item={data} /> : <></>}</div>;
}
