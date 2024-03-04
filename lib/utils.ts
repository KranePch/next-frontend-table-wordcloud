import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const mockData = [
  {
    "project": "project 1",
    "price": 83,
    "scope": "scope 1",
    "site": "site 1",
    "ministry": "ministry 1",
    "activity": "activity 1",
    "page": "page 1",
    "department": "department 1",
    "id": "1"
  },
  {
    "project": "project 2",
    "price": 12,
    "scope": "scope 2",
    "site": "site 2",
    "ministry": "ministry 2",
    "activity": "activity 2",
    "page": "page 2",
    "department": "department 2",
    "id": "2"
  },
  {
    "project": "project 3",
    "price": 0,
    "scope": "scope 3",
    "site": "site 3",
    "ministry": "ministry 3",
    "activity": "activity 3",
    "page": "page 3",
    "department": "department 3",
    "id": "3"
  },
  {
    "project": "project 4",
    "price": 39,
    "scope": "scope 4",
    "site": "site 4",
    "ministry": "ministry 4",
    "activity": "activity 4",
    "page": "page 4",
    "department": "department 4",
    "id": "4"
  },
  {
    "project": "project 5",
    "price": 98,
    "scope": "scope 5",
    "site": "site 5",
    "ministry": "ministry 5",
    "activity": "activity 5",
    "page": "page 5",
    "department": "department 5",
    "id": "5"
  },
  {
    "project": "project 6",
    "price": 8,
    "scope": "scope 6",
    "site": "site 6",
    "ministry": "ministry 6",
    "activity": "activity 6",
    "page": "page 6",
    "department": "department 6",
    "id": "6"
  },
  {
    "project": "project 7",
    "price": 74,
    "scope": "scope 7",
    "site": "site 7",
    "ministry": "ministry 7",
    "activity": "activity 7",
    "page": "page 7",
    "department": "department 7",
    "id": "7"
  },
  {
    "project": "project 8",
    "price": 40,
    "scope": "scope 8",
    "site": "site 8",
    "ministry": "ministry 8",
    "activity": "activity 8",
    "page": "page 8",
    "department": "department 8",
    "id": "8"
  },
  {
    "project": "project 9",
    "price": 7,
    "scope": "scope 9",
    "site": "site 9",
    "ministry": "ministry 9",
    "activity": "activity 9",
    "page": "page 9",
    "department": "department 9",
    "id": "9"
  },
  {
    "project": "project 10",
    "price": 79,
    "scope": "scope 10",
    "site": "site 10",
    "ministry": "ministry 10",
    "activity": "activity 10",
    "page": "page 10",
    "department": "department 10",
    "id": "10"
  }
]

export const mockWordFreq = [
  {
      "text": "อุตสาหกรรม",
      "value": 200
  },
  {
      "text": "พื้นที่",
      "value": 12
  },
  {
      "text": "ตะวันออก",
      "value": 211
  },
  {
      "text": "ก่อสร้าง",
      "value": 41
  },
  {
      "text": "วิสาหกิจ",
      "value": 111
  },
  {
      "text": "กลาง",
      "value": 1
  },
  {
      "text": "ยกระดับ",
      "value": 22
  },
  {
      "text": "ระบบ",
      "value": 19
  },
  {
      "text": "บริหาร",
      "value": 143
  },
  {
      "text": "กระทรวงอุตสาหกรรม",
      "value": 211
  },
  {
      "text": "ส่วนภูมิภาค",
      "value": 1
  }
]