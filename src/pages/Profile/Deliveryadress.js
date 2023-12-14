import {useContext, useState, useEffect} from 'react'
import './Profile.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2'
import { Usercontext } from '../../Context/Usercontext';

 


function Deliveryadress() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [Dstate, setDstate]= useState("");


  const [Deliveryadd, setDeliveryadd] = useState({
    Dfirstname:'',
    Dlastname:'',
    Dphonenumber:'', 
    Ddeliveryad:'',
    Ddirections:'',
    Dcity:'',
    Dstate:'',
    Dlocalgva:'',
   
  });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/users/`+id)
      .then((res) => {
        setDeliveryadd({...Deliveryadd, Dfirstname:res.data[0].DfirstName, Dlastname:res.data[0].DlastName, Dphonenumber:res.data[0].DphoneNumber, Ddeliveryad:res.data[0].Dstreet, Ddirections:res.data[0].Ddirections, Dcity:res.data[0].Dcity, Dstate:res.data[0].Dstate, Dlocalgva:res.data[0].Dlocalgva})
        console.log(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const changeSelectOptionHandler = (e) => { 
    setDeliveryadd({...Deliveryadd, Dstate: e.target.value}) 
  }; 
 
  
  const Abia = [
    "Aba North",
    "Aba South",
    "Arochukwu",
    "Bende",
    "Ikwuano",
    "Isiala-Ngwa North",
    "Isiala-Ngwa South",
    "Isuikwato",
    "Obi Nwa",
    "Ohafia",
    "Osisioma",
    "Ngwa",
    "Ugwunagbo",
    "Ukwa East",
    "Ukwa West",
    "Umuahia North",
    "Umuahia South",
    "Umu-Neochi"
  ];
 
  const Adamawa = [
    "Demsa",
    "Fufore",
    "Ganaye",
    "Gireri",
    "Gombi",
    "Guyuk",
    "Hong",
    "Jada",
    "Lamurde",
    "Madagali",
    "Maiha",
    "Mayo-Belwa",
    "Michika",
    "Mubi North",
    "Mubi South",
    "Numan",
    "Shelleng",
    "Song",
    "Toungo",
    "Yola North",
    "Yola South"
  ];
  
  const Anambra = [
    "Aguata",
    "Anambra East",
    "Anambra West",
    "Anaocha",
    "Awka North",
    "Awka South",
    "Ayamelum",
    "Dunukofia",
    "Ekwusigo",
    "Idemili North",
    "Idemili south",
    "Ihiala",
    "Njikoka",
    "Nnewi North",
    "Nnewi South",
    "Ogbaru",
    "Onitsha North",
    "Onitsha South",
    "Orumba North",
    "Orumba South",
    "Oyi"
  ];
  const AkwaIbom = [
    "Abak",
    "Eastern Obolo",
    "Eket",
    "Esit Eket",
    "Essien Udim",
    "Etim Ekpo",
    "Etinan",
    "Ibeno",
    "Ibesikpo Asutan",
    "Ibiono Ibom",
    "Ika",
    "Ikono",
    "Ikot Abasi",
    "Ikot Ekpene",
    "Ini",
    "Itu",
    "Mbo",
    "Mkpat Enin",
    "Nsit Atai",
    "Nsit Ibom",
    "Nsit Ubium",
    "Obot Akara",
    "Okobo",
    "Onna",
    "Oron",
    "Oruk Anam",
    "Udung Uko",
    "Ukanafun",
    "Uruan",
    "Urue-Offong/Oruko ",
    "Uyo"
  ];
const Bauchi =[
    "Alkaleri",
    "Bauchi",
    "Bogoro",
    "Damban",
    "Darazo",
    "Dass",
    "Ganjuwa",
    "Giade",
    "Itas/Gadau",
    "Jama'are",
    "Katagum",
    "Kirfi",
    "Misau",
    "Ningi",
    "Shira",
    "Tafawa-Balewa",
    "Toro",
    "Warji",
    "Zaki"
  ];
  const Bayelsa = [
    "Brass",
    "Ekeremor",
    "Kolokuma/Opokuma",
    "Nembe",
    "Ogbia",
    "Sagbama",
    "Southern Jaw",
    "Yenegoa"
  ];
  const Benue = [
    "Ado",
    "Agatu",
    "Apa",
    "Buruku",
    "Gboko",
    "Guma",
    "Gwer East",
    "Gwer West",
    "Katsina-Ala",
    "Konshisha",
    "Kwande",
    "Logo",
    "Makurdi",
    "Obi",
    "Ogbadibo",
    "Oju",
    "Okpokwu",
    "Ohimini",
    "Oturkpo",
    "Tarka",
    "Ukum",
    "Ushongo",
    "Vandeikya"
  ];
  const Borno = [
    "Abadam",
    "Askira/Uba",
    "Bama",
    "Bayo",
    "Biu",
    "Chibok",
    "Damboa",
    "Dikwa",
    "Gubio",
    "Guzamala",
    "Gwoza",
    "Hawul",
    "Jere",
    "Kaga",
    "Kala/Balge",
    "Konduga",
    "Kukawa",
    "Kwaya Kusar",
    "Mafa",
    "Magumeri",
    "Maiduguri",
    "Marte",
    "Mobbar",
    "Monguno",
    "Ngala",
    "Nganzai",
    "Shani"
  ];
  const CrossRiver = [
    "Akpabuyo",
    "Odukpani",
    "Akamkpa",
    "Biase",
    "Abi",
    "Ikom",
    "Yarkur",
    "Odubra",
    "Boki",
    "Ogoja",
    "Yala",
    "Obanliku",
    "Obudu",
    "Calabar South",
    "Etung",
    "Bekwara",
    "Bakassi",
    "Calabar Municipality"
  ];
  const Delta = [
    "Oshimili",
    "Aniocha",
    "Aniocha South",
    "Ika South",
    "Ika North-East",
    "Ndokwa West",
    "Ndokwa East",
    "Isoko south",
    "Isoko North",
    "Bomadi",
    "Burutu",
    "Ughelli South",
    "Ughelli North",
    "Ethiope West",
    "Ethiope East",
    "Sapele",
    "Okpe",
    "Warri North",
    "Warri South",
    "Uvwie",
    "Udu",
    "Warri Central",
    "Ukwani",
    "Oshimili North",
    "Patani"
  ];
  const Ebonyi = [
    "Afikpo South",
    "Afikpo North",
    "Onicha",
    "Ohaozara",
    "Abakaliki",
    "Ishielu",
    "lkwo",
    "Ezza",
    "Ezza South",
    "Ohaukwu",
    "Ebonyi",
    "Ivo"
  ];
  const Enugu = [
    "Enugu South,",
    "Igbo-Eze South",
    "Enugu North",
    "Nkanu",
    "Udi Agwu",
    "Oji-River",
    "Ezeagu",
    "IgboEze North",
    "Isi-Uzo",
    "Nsukka",
    "Igbo-Ekiti",
    "Uzo-Uwani",
    "Enugu Eas",
    "Aninri",
    "Nkanu East",
    "Udenu."
  ];
  const Edo = [
    "Esan North-East",
    "Esan Central",
    "Esan West",
    "Egor",
    "Ukpoba",
    "Central",
    "Etsako Central",
    "Igueben",
    "Oredo",
    "Ovia SouthWest",
    "Ovia South-East",
    "Orhionwon",
    "Uhunmwonde",
    "Etsako East",
    "Esan South-East"
  ];
  const Ekiti = [
    "Ado",
    "Ekiti-East",
    "Ekiti-West",
    "Emure/Ise/Orun",
    "Ekiti South-West",
    "Ikare",
    "Irepodun",
    "Ijero,",
    "Ido/Osi",
    "Oye",
    "Ikole",
    "Moba",
    "Gbonyin",
    "Efon",
    "Ise/Orun",
    "Ilejemeje."
  ];
  const FCT = [
    "Abaji",
    "AMAC",
    "Bwari",
    "Gwagwalada",
    "Kuje",
    "Kwali"
  ];
  const Gombe = [
    "Akko",
    "Balanga",
    "Billiri",
    "Dukku",
    "Kaltungo",
    "Kwami",
    "Shomgom",
    "Funakaye",
    "Gombe",
    "Nafada/Bajoga",
    "Yamaltu/Delta."
  ];
  const Imo = [
    "Aboh-Mbaise",
    "Ahiazu-Mbaise",
    "Ehime-Mbano",
    "Ezinihitte",
    "Ideato North",
    "Ideato South",
    "Ihitte/Uboma",
    "Ikeduru",
    "Isiala Mbano",
    "Isu",
    "Mbaitoli",
    "Mbaitoli",
    "Ngor-Okpala",
    "Njaba",
    "Nwangele",
    "Nkwerre",
    "Obowo",
    "Oguta",
    "Ohaji/Egbema",
    "Okigwe",
    "Orlu",
    "Orsu",
    "Oru East",
    "Oru West",
    "Owerri-Municipal",
    "Owerri North",
    "Owerri West"
  ];
  const Jigawa = [
    "Auyo",
    "Babura",
    "Birni Kudu",
    "Biriniwa",
    "Buji",
    "Dutse",
    "Gagarawa",
    "Garki",
    "Gumel",
    "Guri",
    "Gwaram",
    "Gwiwa",
    "Hadejia",
    "Jahun",
    "Kafin Hausa",
    "Kaugama Kazaure",
    "Kiri Kasamma",
    "Kiyawa",
    "Maigatari",
    "Malam Madori",
    "Miga",
    "Ringim",
    "Roni",
    "Sule-Tankarkar",
    "Taura",
    "Yankwashi"
  ];
  const Kaduna = [
    "Birni-Gwari",
    "Chikun",
    "Giwa",
    "Igabi",
    "Ikara",
    "jaba",
    "Jema'a",
    "Kachia",
    "Kaduna North",
    "Kaduna South",
    "Kagarko",
    "Kajuru",
    "Kaura",
    "Kauru",
    "Kubau",
    "Kudan",
    "Lere",
    "Makarfi",
    "Sabon-Gari",
    "Sanga",
    "Soba",
    "Zango-Kataf",
    "Zaria"
  ];
  const Kano = [
    "Ajingi",
    "Albasu",
    "Bagwai",
    "Bebeji",
    "Bichi",
    "Bunkure",
    "Dala",
    "Dambatta",
    "Dawakin Kudu",
    "Dawakin Tofa",
    "Doguwa",
    "Fagge",
    "Gabasawa",
    "Garko",
    "Garum",
    "Mallam",
    "Gaya",
    "Gezawa",
    "Gwale",
    "Gwarzo",
    "Kabo",
    "Kano Municipal",
    "Karaye",
    "Kibiya",
    "Kiru",
    "kumbotso",
    "Kunchi",
    "Kura",
    "Madobi",
    "Makoda",
    "Minjibir",
    "Nasarawa",
    "Rano",
    "Rimin Gado",
    "Rogo",
    "Shanono",
    "Sumaila",
    "Takali",
    "Tarauni",
    "Tofa",
    "Tsanyawa",
    "Tudun Wada",
    "Ungogo",
    "Warawa",
    "Wudil"
  ];
  const Katsina = [
    "Bakori",
    "Batagarawa",
    "Batsari",
    "Baure",
    "Bindawa",
    "Charanchi",
    "Dandume",
    "Danja",
    "Dan Musa",
    "Daura",
    "Dutsi",
    "Dutsin-Ma",
    "Faskari",
    "Funtua",
    "Ingawa",
    "Jibia",
    "Kafur",
    "Kaita",
    "Kankara",
    "Kankia",
    "Katsina",
    "Kurfi",
    "Kusada",
    "Mai'Adua",
    "Malumfashi",
    "Mani",
    "Mashi",
    "Matazuu",
    "Musawa",
    "Rimi",
    "Sabuwa",
    "Safana",
    "Sandamu",
    "Zango"
  ];
  const kebbi = [
    "Aleiro",
    "Arewa-Dandi",
    "Argungu",
    "Augie",
    "Bagudo",
    "Birnin Kebbi",
    "Bunza",
    "Dandi",
    "Fakai",
    "Gwandu",
    "Jega",
    "Kalgo",
    "Koko/Besse",
    "Maiyama",
    "Ngaski",
    "Sakaba",
    "Shanga",
    "Suru",
    "Wasagu/Danko",
    "Yauri",
    "Zuru"
  ];
  const Kogi = [
    "Adavi",
    "Ajaokuta",
    "Ankpa",
    "Bassa",
    "Dekina",
    "Ibaji",
    "Idah",
    "Igalamela-Odolu",
    "Ijumu",
    "Kabba/Bunu",
    "Kogi",
    "Lokoja",
    "Mopa-Muro",
    "Ofu",
    "Ogori/Mangongo",
    "Okehi",
    "Okene",
    "Olamabolo",
    "Omala",
    "Yagba East",
    "Yagba West"
  ];
  const Kwara = [
    "Asa",
    "Baruten",
    "Edu",
    "Ekiti",
    "Ifelodun",
    "Ilorin East",
    "Ilorin West",
    "Irepodun",
    "Isin",
    "Kaiama",
    "Moro",
    "Offa",
    "Oke-Ero",
    "Oyun",
    "Pategi"
  ];
  const Lagos = [
    "Agege",
    "Ajeromi-Ifelodun",
    "Alimosho",
    "Amuwo-Odofin",
    "Apapa",
    "Badagry",
    "Epe",
    "Eti-Osa",
    "Ibeju/Lekki",
    "Ifako-Ijaye",
    "Ikeja",
    "Ikorodu",
    "Kosofe",
    "Lagos Island",
    "Lagos Mainland",
    "Mushin",
    "Ojo",
    "Oshodi-Isolo",
    "Shomolu",
    "Surulere"
  ];
  const Nasarawa = [
    "Akwanga",
    "Awe",
    "Doma",
    "Karu",
    "Keana",
    "Keffi",
    "Kokona",
    "Lafia",
    "Nasarawa",
    "Nasarawa-Eggon",
    "Obi",
    "Toto",
    "Wamba"
  ];
  const Niger = [
    "Agaie",
    "Agwara",
    "Bida",
    "Borgu",
    "Bosso",
    "Chanchaga",
    "Edati",
    "Gbako",
    "Gurara",
    "Katcha",
    "Kontagora",
    "Lapai",
    "Lavun",
    "Magama",
    "Mariga",
    "Mashegu",
    "Mokwa",
    "Muya",
    "Pailoro",
    "Rafi",
    "Rijau",
    "Shiroro",
    "Suleja",
    "Tafa",
    "Wushishi"
  ];
  const Ogun = [
    "Abeokuta North",
    "Abeokuta South",
    "Ado-Odo/Ota",
    "Egbado North",
    "Egbado South",
    "Ewekoro",
    "Ifo",
    "Ijebu East",
    "Ijebu North",
    "Ijebu North East",
    "Ijebu Ode",
    "Ikenne",
    "Imeko-Afon",
    "Ipokia",
    "Obafemi-Owode",
    "Ogun Waterside",
    "Odeda",
    "Odogbolu",
    "Remo North",
    "Shagamu"
  ];
  const Ondo = [
    "Akoko North East",
    "Akoko North West",
    "Akoko South Akure East",
    "Akoko South West",
    "Akure North",
    "Akure South",
    "Ese-Odo",
    "Idanre",
    "Ifedore",
    "Ilaje",
    "Ile-Oluji",
    "Okeigbo",
    "Irele",
    "Odigbo",
    "Okitipupa",
    "Ondo East",
    "Ondo West",
    "Ose",
    "Owo"
  ];
  const Osun = [
    "Aiyedade",
    "Aiyedire",
    "Atakumosa East",
    "Atakumosa West",
    "Boluwaduro",
    "Boripe",
    "Ede North",
    "Ede South",
    "Egbedore",
    "Ejigbo",
    "Ife Central",
    "Ife East",
    "Ife North",
    "Ife South",
    "Ifedayo",
    "Ifelodun",
    "Ila",
    "Ilesha East",
    "Ilesha West",
    "Irepodun",
    "Irewole",
    "Isokan",
    "Iwo",
    "Obokun",
    "Odo-Otin",
    "Ola-Oluwa",
    "Olorunda",
    "Oriade",
    "Orolu",
    "Osogbo"
  ];
  const Oyo = [
    "Afijio",
    "Akinyele",
    "Atiba",
    "Atigbo",
    "Egbeda",
    "Ibadan Central",
    "Ibadan North",
    "Ibadan North West",
    "Ibadan South East",
    "Ibadan South West",
    "Ibarapa Central",
    "Ibarapa East",
    "Ibarapa North",
    "Ido",
    "Irepo",
    "Iseyin",
    "Itesiwaju",
    "Iwajowa",
    "Kajola",
    "Lagelu Ogbomosho North",
    "Ogbmosho South",
    "Ogo Oluwa",
    "Olorunsogo",
    "Oluyole",
    "Ona-Ara",
    "Orelope",
    "Ori Ire",
    "Oyo East",
    "Oyo West",
    "Saki East",
    "Saki West",
    "Surulere"
  ];
  const Plateau = [
    "Barikin Ladi",
    "Bassa",
    "Bokkos",
    "Jos East",
    "Jos North",
    "Jos South",
    "Kanam",
    "Kanke",
    "Langtang North",
    "Langtang South",
    "Mangu",
    "Mikang",
    "Pankshin",
    "Qua'an Pan",
    "Riyom",
    "Shendam",
    "Wase"
  ];
  const Rivers = [
    "Abua/Odual",
    "Ahoada East",
    "Ahoada West",
    "Akuku Toru",
    "Andoni",
    "Asari-Toru",
    "Bonny",
    "Degema",
    "Emohua",
    "Eleme",
    "Etche",
    "Gokana",
    "Ikwerre",
    "Khana",
    "Obia/Akpor",
    "Ogba/Egbema/Ndoni",
    "Ogu/Bolo",
    "Okrika",
    "Omumma",
    "Opobo/Nkoro",
    "Oyigbo",
    "Port-Harcourt",
    "Tai"
  ];
  const Sokoto = [
    "Binji",
    "Bodinga",
    "Dange-shnsi",
    "Gada",
    "Goronyo",
    "Gudu",
    "Gawabawa",
    "Illela",
    "Isa",
    "Kware",
    "kebbe",
    "Rabah",
    "Sabon birni",
    "Shagari",
    "Silame",
    "Sokoto North",
    "Sokoto South",
    "Tambuwal",
    "Tqngaza",
    "Tureta",
    "Wamako",
    "Wurno",
    "Yabo"
  ];
  const Taraba = [
    "Ardo-kola",
    "Bali",
    "Donga",
    "Gashaka",
    "Cassol",
    "Ibi",
    "Jalingo",
    "Karin-Lamido",
    "Kurmi",
    "Lau",
    "Sardauna",
    "Takum",
    "Ussa",
    "Wukari",
    "Yorro",
    "Zing"
  ];
  const Yobe = [
    "Bade",
    "Bursari",
    "Damaturu",
    "Fika",
    "Fune",
    "Geidam",
    "Gujba",
    "Gulani",
    "Jakusko",
    "Karasuwa",
    "Karawa",
    "Machina",
    "Nangere",
    "Nguru Potiskum",
    "Tarmua",
    "Yunusari",
    "Yusufari"
  ];
  const Zamfara = [
    "Anka",
    "Bakura",
    "Birnin Magaji",
    "Bukkuyum",
    "Bungudu",
    "Gummi",
    "Gusau",
    "Kaura",
    "Namoda",
    "Maradun",
    "Maru",
    "Shinkafi",
    "Talata Mafara",
    "Tsafe",
    "Zurmi"
  ];

  let type = null
  let options =  null;

 

  if (Dstate === "Abia") { 
    type = Abia; 
  } else if (Dstate === "Adamawa") { 
    type = Adamawa; 
  } else if (Dstate === "Anambra") { 
    type = Anambra; 
  } else if (Dstate === "AkwaIbom") { 
    type = AkwaIbom; 
  } else if (Dstate === "Bauchi") { 
    type = Bauchi; 
  } else if (Dstate === "Bayelsa") { 
    type = Bayelsa; 
  } else if (Dstate === "Benue") { 
    type = Benue; 
  } else if (Dstate === "Borno") { 
    type = Borno; 
  } else if (Dstate === "CrossRiver") { 
    type = CrossRiver; 
  } else if (Dstate === "Delta") { 
    type = Delta; 
  } else if (Dstate === "Ebonyi") { 
    type = Ebonyi; 
  } else if (Dstate === "Edo") { 
    type = Edo; 
  } else if (Dstate === "Ekiti") { 
    type = Ekiti; 
  } else if (Dstate === "Enugu") { 
    type = Enugu; 
  } else if (Dstate === "Gombe") { 
    type = Gombe; 
  } else if (Dstate === "Imo") { 
    type = Imo; 
  } else if (Dstate === "Jigawa") { 
    type = Jigawa; 
  } else if (Dstate === "Kaduna") { 
    type = Kaduna; 
  } else if (Dstate === "Kano") { 
    type = Kano; 
  } else if (Dstate === "Katsina") { 
    type = Katsina; 
  } else if (Dstate === "kebbi") { 
    type = kebbi; 
  } else if (Dstate === "Kogi") { 
    type = Kogi; 
  } else if (Dstate === "Kwara") { 
    type = Kwara; 
  } else if (Dstate === "Lagos") { 
    type = Lagos; 
  } else if (Dstate === "Nasarawa") { 
    type = Nasarawa; 
  } else if (Dstate === "Niger") { 
    type = Niger; 
  } else if (Dstate === "Ogun") { 
    type = Ogun; 
  } else if (Dstate === "Ondo") { 
    type = Ondo; 
  } else if (Dstate === "Osun") { 
    type = Osun; 
  } else if (Dstate === "Oyo") { 
    type = Oyo; 
  } else if (Dstate === "Plateau") { 
    type = Plateau; 
  } else if (Dstate === "Rivers") { 
    type = Rivers; 
  } else if (Dstate === "Sokoto") { 
    type = Sokoto; 
  } else if (Dstate === "Taraba") { 
    type = Taraba; 
  } else if (Dstate === "Yobe") { 
    type = Yobe; 
  } else if (Dstate === "Zamfara") { 
    type = Zamfara; 
  }  else if (Dstate === "FCT") { 
    type = FCT; 
  } 

  if (type) { 
    options = type.map((el) => <option key={el}>{el}</option>); 
  } 


  const handleAddress = (event)=> {
    event.preventDefault();
   console.log(Deliveryadd)


    axios
    .put("https://yeffsobackend.onrender.com/users/profile/"+id, Deliveryadd)
    .then((res) => {
      console.log(res.data)
      navigate("/Account")
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Address Updated Successfully'
      })
    })
    .then((err) => console.log(err));


  }
  



  return (
    <div className='delivery-profile'>
       <div className='address-pro-style'> <p>Delivery Address</p> 
        <Link to='delivery-addresses' className='button-address'>Add New Address</Link>
        </div>
       <hr className="line-cart" />
       <div style={{ display:'flex', alignItems:'center', justifyContent:'center' }}>
        <h3>Add / Update Delivery Address</h3>
        
       </div>
       <hr className="line-cart" />

       <form className="form-profile" onSubmit={handleAddress}>
        <div className='fname-lname'>
        <div className="single-profile-input"><label htmlFor="Dfirstname">First Name</label>
        <input  value={Deliveryadd.Dfirstname}  style={{ padding:'10px' }} type="text" name='Dfirstname' placeholder='First Name' onChange={(e) => setDeliveryadd({...Deliveryadd, Dfirstname: e.target.value})} />
        </div>
        <div className="single-profile-input"><label htmlFor="Dlastname">Last Name</label>
        <input  value={Deliveryadd.Dlastname}  style={{ padding:'10px' }} type="text" name='Dlastname'  placeholder='Last Name' onChange={(e) => setDeliveryadd({...Deliveryadd, Dlastname: e.target.value})}/>
        </div> </div>

        <div className="single-profile-input"><label htmlFor="Dphonenumber">Phone Number</label>
        <input value={Deliveryadd.Dphonenumber} style={{ padding:'10px' }} type="number" name='Dphonenumber' placeholder='Mobile Number' onChange={(e) => setDeliveryadd({...Deliveryadd, Dphonenumber: e.target.value})}/>
        </div>
        <div className="single-profile-input"><label htmlFor="Dstreet">Street Address</label>
        <input value={Deliveryadd.Ddeliveryad}  style={{ padding:'10px' }} type="text" name='Dstreet' placeholder='Enter Delivery address' onChange={(e) => setDeliveryadd({...Deliveryadd, Ddeliveryad: e.target.value})}/>
        </div>
        <div className="single-profile-input"><label htmlFor="Ddirections">Directions (Optional)</label>
        <input value={Deliveryadd.Ddirections} style={{ padding:'10px' }} type="text" name='Ddirections' placeholder='Directions' onChange={(e) => setDeliveryadd({...Deliveryadd, Ddirections: e.target.value})}/>
        </div>
        <div className="single-profile-input"><label htmlFor="Dcity">City</label>
        <input value={Deliveryadd.Dcity} style={{ padding:'10px' }} type="text" name='Dcity' placeholder='City' onChange={(e) => setDeliveryadd({...Deliveryadd, Dcity: e.target.value})}/>
        </div>
        <div  className="single-profile-input"><label htmlFor="Dstate">State</label>
        <select  value={Deliveryadd.Dstate}  onChange={changeSelectOptionHandler}  name="Dstate" className="main-cat-style" > 
            <option  >-- Select --</option>
    <option value="Abia">Abia</option>
    <option value="Adamawa">Adamawa</option>
    <option value="AkwaIbom">Akwa Ibom</option>
    <option value="Anambra">Anambra</option>
    <option value="Bauchi">Bauchi</option>
    <option value="Bayelsa">Bayelsa</option>
    <option value="Benue">Benue</option>
    <option value="Borno">Borno</option>
    <option value="CrossRiver">Cross River</option>
    <option value="Delta">Delta</option>
    <option value="Ebonyi">Ebonyi</option>
    <option value="Edo">Edo</option>
    <option value="Ekiti">Ekiti</option>
    <option value="Enugu">Enugu</option>
    <option value="FCT">FCT (Abuja)</option>
    <option value="Gombe">Gombe</option>
    <option value="Imo">Imo</option>
    <option value="Jigawa">Jigawa</option>
    <option value="Kaduna">Kaduna</option>
    <option value="Kano">Kano</option>
    <option value="Katsina">Katsina</option>
    <option value="Kebbi">Kebbi</option>
    <option value="Kogi">Kogi</option>
    <option value="Kwara">Kwara</option>
    <option value="Lagos">Lagos</option>
    <option value="Nasarawa">Nasarawa</option>
    <option value="Niger">Niger</option>
    <option value="Ogun">Ogun</option>
    <option value="Ondo">Ondo</option>
    <option value="Osun">Osun</option>
    <option value="Oyo">Oyo</option>
    <option value="Plateau">Plateau</option>
    <option value="Rivers">Rivers</option>
    <option value="Sokoto">Sokoto</option>
    <option value="Taraba">Taraba</option>
    <option value="Yobe">Yobe</option>
    <option value="Zamfara">Zamfara</option>
           </select>
        </div>
        <div className="single-profile-input"><label htmlFor="Dcity">local Government Area (L.G.A)</label>
        <input value={Deliveryadd.Dlocalgva} style={{ padding:'10px' }} type="text" name='Dcity' placeholder='City' onChange={(e) => setDeliveryadd({...Deliveryadd, Dlocalgva: e.target.value})}/>
        </div>
       <div className="btn-profile-style"><button className="button-profile">Continue</button> </div>
        </form>
    
    
    
    
    
     </div>
  )
}

export default Deliveryadress