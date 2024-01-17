interface ClaimantData {
    fullName: string;
    dob: string;
    injuryDate: string;
    phoneNumber: string;
    }

// An array of some address data for Queensland
const claimants = [
    {
        fullName: "Leonel Antonio Diaz",
        dob: "09 Oct 1968",
        injuryDate: "17 Jan 2018",
        phoneNumber: "7820403540",
    },
    {
        fullName: "Gregory Paul Shaw",
        dob: "16 Dec 1971",
        injuryDate: "21 Dec 2020",
        phoneNumber: "5555843319",
    },
    {
        fullName: "Tony Sten",
        dob: "09 May 1978",
        injuryDate: "07 Sep 2010",
        phoneNumber: "1102289516",
    },

];

export function pickRandomClaimant(): ClaimantData {
    // Pick a random claimant from the array
    return claimants[Math.floor(Math.random() * claimants.length)];
}