let MAX_CONTACTS = 10;

// List of Yoruba First Names
const firstNames = [
    "Adebayo", "Adebisi", "Adebola", "Adeolu", "Adedayo", 
    "Adefolake", "Adejoke", "Ademola", "Adetoun", "Adewale", 
    "Ayotunde", "Ayodele", "Bamidele", "Boluwatife", "Chinonso", 
    "Durojaiye", "Iretiola", "Ifedayo", "Olamide", "Oluwadamilola", 
    "Oluwaseun", "Oluwatobiloba", "Oluwafemi", "Oluwadarasimi", "Temidayo", 
    "Tolu", "Toluwani", "Mobolaji", "Oluwatimilehin", "Micheal", "Fola"
];

// List of Yoruba Last Names
const lastNames = [
    "Ademide", "Adefolalu", "Ademola", "Ogunleye", "Adedeji", 
    "Olawale", "Olatunde", "Oluwole", "Oluwaseun", "Oloruntoba", 
    "Adebisi", "Oluwadare", "Akinlade", "Alabi", "Okikiola", 
    "Akinyemi", "Balogun", "Olawunmi", "Ogunbiyi", "Olajide", 
    "Oluwasemilore", "Ajayi", "Ogunleye", "Ayeni", "Fasuyi", 
    "Oluwajomiloju", "Ilesanmi", "Olanrewaju", "Akinbiyi", "Oluwatimilehin", "Oni"
];

const rand = (max, min = 0) => Math.floor(Math.random() *  (max - min + 1)) + min;
const generatePhoneNumber = () => `(+234) ${rand(9, 7)}${rand(1, 0)}${rand(9, 0)} ${rand(999, 100)} ${rand(9999, 1000)}`

const createContact = () => ({
  firstName: firstNames[rand(firstNames.length - 1)],
  lastName: lastNames[rand(lastNames.length - 1)],
  phoneNumber: generatePhoneNumber(),
})

export const compareContacts = (contact1, contact2) => contact1.firstName > contact2.firstName;

const contacts = Array.from({ length: MAX_CONTACTS}, createContact).map((val, key) => (
  { key, ...val }
))

export default contacts;