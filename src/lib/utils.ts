import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getBirthDate(birthDateTime: string) {
  const date = new Date(birthDateTime);
  return {
    year: date.getFullYear().toString(),
    month: (date.getMonth() + 1).toString().padStart(2, "0"),
    day: date.getDate().toString().padStart(2, "0"),
    hour: date.getHours().toString().padStart(2, "0"),
  };
}

//console.log(getBirthDate(new Date("1989-10-06T18:00:00.000+00:00")));
export function splitLongString(longString: string, maxLength: number) {
  const result = [];
  let startIndex = 0;

  while (startIndex < longString.length) {
    let endIndex = startIndex + maxLength;
    if (endIndex > longString.length) {
      endIndex = longString.length;
    }
    result.push(longString.substring(startIndex, endIndex));
    startIndex = endIndex;
  }

  return result;
}
