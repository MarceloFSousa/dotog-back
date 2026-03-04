import { Key } from "src/models/key";
import { Behave } from "../models/behave";
import { Item } from "../models/item";

export const mockItems: Item[] = [
  {
    id: "1",
    donePercent: 0,
    description: "Define requirements and core features",
    name: "Project planning",
    datetimeToDo: new Date("2026-03-02T09:00:00"),
    behaveId: "a"
  },
  {
    id: "2",
    donePercent: 25,
    description: "Create initial wireframes for dashboard",
    name: "UI Draft",
    datetimeToDo: new Date("2026-03-03T14:00:00"),
    behaveId: "b"
  },
  {
    id: "3",
    donePercent: 50,
    description: "Implement authentication with JWT",
    name: "Auth module",
    datetimeToDo: new Date("2026-03-04T11:30:00"),
    behaveId: "c"
  },
  {
    id: "7",
    donePercent: 0,
    description: "post to api/auth",
    name: "Login page",
    datetimeToDo: new Date("2026-03-04T11:30:00"),
    behaveId: "c"
  },
  {
    id: "8",
    donePercent: 0,
    description:null,
    name: "Admin rules",
    datetimeToDo: new Date("2026-03-04T11:30:00"),
    behaveId: "a"
  },
  {
    id: "4",
    donePercent: 75,
    description: "Write integration tests for API",
    name: "API tests",
    datetimeToDo: new Date("2026-03-05T16:00:00"),
    behaveId: "d"
  },
  {
    id: "5",
    donePercent: 100,
    description: "Deploy first version to production",
    name: "Release v1.0",
    datetimeToDo: new Date("2026-03-01T18:00:00"),
    behaveId: "e"
  },
  {
    id: "6",
    donePercent: 10,
    description: null,
    name: "Refactor services layer",
    datetimeToDo: null,
    behaveId: "f"
  }
]

export const mockBehaves: Behave[] = [
  { id: "a", name: "Planning", keyId: "b" },
  { id: "b", name: "Design", keyId: "b" },
  { id: "c", name: "Development", keyId: "b" },
  { id: "d", name: "Testing", keyId: "b" },
  { id: "e", name: "Deployment", keyId: "b" },
  { id: "f", name: "Maintenance", keyId: "b" },
  {id:"p",name:"Peter Pants", keyId: "b"}
];

export const mockKeys: Key[] = [
  { id: "a", key: "banana", keyType: "free"},
  { id: "b", key: "apple", keyType: "premium"}
]