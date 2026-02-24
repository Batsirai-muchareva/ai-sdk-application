// import { tool } from "ai";
//
// /* ---------------- BANKING DEMO DATA ---------------- */
// const accounts = [
//     { name: "John Mokoena", accountId: "ACC1001", accountType: "Savings", balance: 15230, currency: "ZAR" },
//     { name: "Aisha Khan", accountId: "ACC1002", accountType: "Checking", balance: 8450, currency: "ZAR" },
//     { name: "David Smith", accountId: "ACC1003", accountType: "Savings", balance: 22300, currency: "ZAR" },
// ];
//
// /* ---------------- MEDICAL DEMO DATA ---------------- */
// const patients = [
//     { name: "John Mokoena", age: 45, condition: "Hypertension" },
//     { name: "Aisha Khan", age: 29, condition: "Flu symptoms" },
//     { name: "David Smith", age: 52, condition: "Diabetes" },
// ];
//
// const weather = tool({
//     description: 'Get the weather in a location',
//     inputSchema: z.object({
//         location: z.string().describe('The location to get the weather for'),
//     }),
//     execute: async ({ location }) => ({
//         location,
//         temperature: 72 + Math.floor(Math.random() * 21) - 10,
//     }),
// }),
//
// /* ---------------- BANKING TOOL ---------------- */
// export const getAccountByName = tool({
//     type: undefined,
//     description: "Retrieve bank account information by customer name",
//     parameters: {
//         type: "object",
//         properties: {
//             name: { type: "string" }
//         },
//         required: ["name"]
//     },
//     execute: async ({ name }) => {
//         return accounts.find(a => a.name.toLowerCase() === name.toLowerCase());
//     }
// });
//
// /* ---------------- MEDICAL TOOL ---------------- */
// export const getPatientByName = tool({
//     type: undefined,
//     description: "Retrieve patient medical record by name",
//     parameters: {
//         type: "object",
//         properties: {
//             name: { type: "string" }
//         },
//         required: ["name"]
//     },
//     execute: async ({ name }) => {
//         return patients.find(p => p.name.toLowerCase() === name.toLowerCase());
//     }
// });


import { tool } from "ai";
import { z } from "zod";

/* ---------------- BANKING DEMO DATA ---------------- */
const accounts = [
    { name: "John Mokoena", accountType: "Savings", balance: 15230, currency: "ZAR" },
    { name: "Aisha Khan", accountType: "Checking", balance: 8450, currency: "ZAR" },
    { name: "David Smith", accountType: "Savings", balance: 22300, currency: "ZAR" },
];

/* ---------------- MEDICAL DEMO DATA ---------------- */
const patients = [
    { name: "John Mokoena", age: 45, condition: "Hypertension" },
    { name: "Aisha Khan", age: 29, condition: "Flu symptoms" },
    { name: "David Smith", age: 52, condition: "Diabetes" },
];

/* ---------------- BANKING TOOL ---------------- */
export const getAccountByName = tool({
    description: "Retrieve bank account information by customer name",

    inputSchema: z.object({
        name: z.string().describe("Customer full name"),
    }),

    execute: async ({ name }) => {
        return accounts.find(
            a => a.name.toLowerCase() === name.toLowerCase()
        ) || { message: "Account not found" };
    }
});

/* ---------------- MEDICAL TOOL ---------------- */
export const getPatientByName = tool({
    description: "Retrieve patient medical record by patient name",

    inputSchema: z.object({
        name: z.string().describe("Patient full name"),
    }),

    execute: async ({ name }) => {
        return patients.find(
            p => p.name.toLowerCase() === name.toLowerCase()
        ) || { message: "Patient not found" };
    }
});

export const listAccounts = tool({
    description: "Return a list of all bank accounts",
    inputSchema: z.object({}), // no inputs
    execute: async () => accounts
});

export const listPatients = tool({
    description: "Return a list of all patients",
    inputSchema: z.object({}),
    execute: async () => patients
});
