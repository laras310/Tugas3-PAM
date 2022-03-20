const Jadwal = [
    {
        jadwal_id : "001",
        bandara_kode_keberangkatan : "TGK",
        bandara_kode_tujuan : "CGK",
        maskapai_id : "Ga",
    },
    {
        jadwal_id : "002",
        bandara_kode_keberangkatan : "TKG",
        bandara_kode_tujuan : "CGK",
        maskapai_id : "LA",
    },
    {
        jadwal_id : "003",
        bandara_kode_keberangkatan : "TKG",
        bandara_kode_tujuan : "CGK",
        maskapai_id : "SA",
    },
    {
        jadwal_id : "004",
        bandara_kode_keberangkatan : "JOG",
        bandara_kode_tujuan : "PDG",
        maskapai_id : "Ga",
    },
    {
        jadwal_id : "005",
        bandara_kode_keberangkatan : "JOG",
        bandara_kode_tujuan : "PDG",
        maskapai_id : "LA",
    },
    {
        jadwal_id : "006",
        bandara_kode_keberangkatan : "JOG",
        bandara_kode_tujuan : "PDG",
        maskapai_id : "SA",
    },
    {
        jadwal_id : "007",
        bandara_kode_keberangkatan : "BDG",
        bandara_kode_tujuan : "TKG",
        maskapai_id : "WA",
    },
]

const Maskapai = [
    {
        maskapai_id : "WA",
        maskapai_nama : "Wings Air",
        maskapai_logo : require("./assets/Wings-air.png"),
    },
    {
        maskapai_id : "SA",
        maskapai_nama : "Sriwijaya Air",
        maskapai_logo : require("./assets/Sriwijaya-air.png"),
    },
    {
        maskapai_id : "LA",
        maskapai_nama : "Lion Air",
        maskapai_logo : require("./assets/Lion-air.png"),
    },
]

const Bandara = [
    {
        bandara_kode : "PDG",
        bandara_nama : "Minangkabau",
    },
    {
        bandara_kode : "CGK",
        bandara_nama : "Soekarno Hatta",
    },
    {
        bandara_kode : "TKG",
        bandara_nama : "Radin Inten II",
    },
    {
        bandara_kode : "JOG",
        bandara_nama : "Adi Sucipto",
    },
    
]

export default {Jadwal,Maskapai,Bandara };