import React, { useEffect, useState } from 'react'
import './FilterA.css'
import { AiOutlineSearch } from 'react-icons/ai'
import RightFYC from './RightFYC'
import LeftFYC from './LeftFYC'
import Footer from '../Footer'
import { Helmet } from 'react-helmet-async'

function FilterA(props) {
    const [isShown, setIsShown] = useState(true);
    const [data, setData] = useState(JSON.parse(localStorage.getItem('data')) || []);
    const [suggestionData, setSuggestionData] = useState([]);   //for suggestions of searchbar
    const [word, setWord] = useState("");               //for word in searchbar
    const [searchItem, setSearchItem] = useState([]);   //for cards

    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('');
    const [selectedFees, setSelectedFees] = useState('');
    const [selectedCaste, setSelectedCaste] = useState('');
    const [selectedMarks, setSelectedMarks] = useState('');
    const [selectedAutonomy, setSelectedAutonomy] = useState('');
    const [selectedCollegeStatus, setSelectedCollegeStatus] = useState('');
    const [NO,setNo] = useState("")

    // const [cart,setCart] = useState([]);



    const getData = async () => {
    
if(data.length===0){
        let response = await fetch("https://polyvision-api-test.onrender.com/colleges");
        response = await response.json();
        response = response.data.sort((a, b) => a.Name > b.Name ? 1 : -1,)
        console.log("Getting Your Data ready");
        setSuggestionData(response);
        setSearchItem(response);
        setSuggestionData([])
        localStorage.setItem('data', JSON.stringify(response)); 
    }
    else{
        setData(JSON.parse(localStorage.getItem('data')));
        setSuggestionData(JSON.parse(localStorage.getItem('data')));
        setSearchItem(JSON.parse(localStorage.getItem('data')));
        setSuggestionData([])
    }
        
    }

    const handleFilter = (event) => {
        const searchW = event.target.value;
        setWord(searchW);
        const newData = data.filter((value) => {
            return value.Name.toLowerCase().includes(searchW.toLowerCase());
        });

        if (searchW === "") {
            setSuggestionData([]);
            setSearchItem(data);
        }
        else {
            setSuggestionData(newData);
        }
    };

    const itemCLick = (e) => {
        const key = e.target.value;
        console.log(key);
        setWord(key);
        setSuggestionData([]);
    }

    const search = (e) => {
        e.preventDefault();
        const newData = data.filter((value) => {
            return value.Name.toLowerCase().includes(word.toLowerCase());
        })
        setSuggestionData([]);

        if (word === "") {
            setSuggestionData([])
            setSearchItem(data);
        }
        else {
            setSearchItem(newData);
        }

    }
    const handleKeypress = e => {
        if (e.keyCode === 13) {
            search();
        }
    };

    const showMe = () => {
        setIsShown(true);
    }
    const closeMe = () => {
        setIsShown(false);
    }
    const d = () => {
        const q = matchMedia('(max-width:600px)');
        if (q.matches) {
            setIsShown(false)
        }
        else {
            setIsShown(true);
        }
    }

    useEffect(() => {
        d()
        getData();
    }, [])

    const depts = [
        { label: "Civil", value: "Civil" },
        { label: "Computer", value: "Computer" },
        { label: "IT", value: "IT" },
        { label: "Electronics", value: "Electronics" },
        { label: "Electrical", value: "Electrical" },
        { label: "Mechanical", value: "Mechanical" },
        { label: "Chemical", value: "Chemical" },
        { label: "Instrumentation", value: "Instrumentation" },
        { label: "Rubber", value: "Rubber" },
        { label: "Automobile", value: "Automobile" },
        { label: "Leather Technology", value: "Leather Technology" },
        { label: "Electronics and Telecommunication", value: "Electronics and Telecommunication " },
    ];
    const caste = [
        { label: "OPEN", value: "OPEN" },
        { label: "OBC", value: "OBC" },
        { label: "SC", value: "SC" },
        { label: "ST", value: "ST" },
        { label: "VJ", value: "VJ" },
        { label: "NT", value: "NT" },
        { label: "Minority", value: "Minority" },
        { label: "TFWS", value: "TFWS" },
        { label: "EWS", value: "EWS" },
        { label: "PH", value: "PH" },
    ]
    const region = [
        { label: "Amravati", value: "Amravati" },
        { label: "Aurangabad", value: "Aurangabad" },
        { label: "Mumbai", value: "Mumbai" },
        { label: "Nashik", value: "Nashik" },
        { label: "Nagpur", value: "Nagpur" },
        { label: "Pune", value: "Pune" },
    ];

    const Marks = [
        { label: "91-100", value: "100" },
        { label: "81-90", value: "90" },
        { label: "71-80", value: "80" },
        { label: "61-70", value: "70" },
        { label: "51-60", value: "60" },
        { label: "36-50", value: "50" },
    ];

    const Fees = [
        { label: "<20000", value: "20000" },
        { label: "20000-40000", value: "40000" },
        { label: "40000-50000", value: "50000" },
        { label: "50000-60000", value: "60000" },
        { label: "60000-70000", value: "70000" },
        { label: "70000-80000", value: "80000" },
        { label: "80000-100000", value: "100000" },
        { label: "100000-200000", value: "200000" }
    ];

    const district = [
        { label: "Ahmednagar", value: "Ahmednagar" },
        { label: "Akola", value: "Akola" },
        { label: "Amravati", value: "Amravati" },
        { label: "Aurangabad", value: "Aurangabad" },
        { label: "Beed", value: "Beed" },
        { label: "Bhandara", value: "Bhandara" },
        { label: "Buldhana", value: "Buldhana" },
        { label: "Chandrapur", value: "Chandrapur" },
        { label: "Dhule", value: "Dhule" },
        { label: "Gadchiroli", value: "Gadchiroli" },
        { label: "Gondia", value: "Gondia" },
        { label: "Hingoli", value: "Hingoli" },
        { label: "Jalgaon", value: "Jalgaon" },
        { label: "Jalna", value: "Jalna" },
        { label: "Kolhapur", value: "Kolhapur" },
        { label: "Latur", value: "Latur" },
        { label: "Mumbai City", value: "Mumbai City" },
        { label: "Mumbai Suburban", value: "Mumbai Suburban" },
        { label: "Nagpur", value: "Nagpur" },
        { label: "Nanded", value: "Nanded" },
        { label: "Nandurbar", value: "Nandurbar" },
        { label: "Nashik", value: "Nashik" },
        { label: "Osmanabad", value: "Osmanabad" },
        { label: "Palghar", value: "Palghar" },
        { label: "Parbhani", value: "Parbhani" },
        { label: "Pune", value: "Pune" },
        { label: "Raigad", value: "Raigad" },
        { label: "Ratnagiri", value: "Ratnagiri" },
        { label: "Sangli", value: "Sangli" },
        { label: "Satara", value: "Satara" },
        { label: "Sindhudurg", value: "Sindhudurg" },
        { label: "Solapur", value: "Solapur" },
        { label: "Thane", value: "Thane" },
        { label: "Wardha", value: "Wardha" },
        { label: "Washim", value: "Washim" },
        { label: "Yavatmal", value: "Yavatmal" },
        { label: "Silvassa", value: "Silvassa" },
        { label: "Palghar", value: "Palghar" }
    ];

    const filterData = () => {
        let updateList = data;

        //for region
        if (selectedRegion) {
            updateList = updateList.filter(
                (item) => {
                    if (item.Location.Region.toLowerCase() === selectedRegion.toLowerCase()) { return item }
                }
            )
        }

        //for district
        if (selectedDistrict) {
            updateList = updateList.filter(
                (item) => {
                    if (item.Location.District.toLowerCase() === selectedDistrict.toLowerCase()) { return item }
                }
            )
        }

        //for course
        if (selectedCourse) {
            updateList = updateList.filter(
                (item) => {
                    if (item.AllDept.includes(selectedCourse)) { return item; }
                }
            )
        }

        //for fees
        if (selectedFees) {
            updateList = updateList.filter(
                (item) => {
                    if (selectedCourse == "Computer") {
                        if (selectedFees === "20000") {
                            if (selectedFees >= item.Dept.Computer?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "40000") {
                            if (selectedFees >= item.Dept.Computer?.Approx_fees && "20000" < item.Dept.Computer?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "60000") {
                            if (selectedFees >= item.Dept.Computer?.Approx_fees && "40000" < item.Dept.Computer?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "80000") {
                            if (selectedFees >= item.Dept.Computer?.Approx_fees && "60000" < item.Dept.Computer?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "100000") {
                            if (selectedFees >= item.Dept.Computer?.Approx_fees && "80000" < item.Dept.Computer?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "200000") {
                            if (selectedFees >= item.Dept.Computer?.Approx_fees && "100000" < item.Dept.Computer?.Approx_fees) { return item; }
                        }
                    }

                    if (selectedCourse === "Civil") {
                        if (selectedFees === "20000") {
                            if (selectedFees >= item.Dept.Civil?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "40000") {
                            if (selectedFees >= item.Dept.Civil?.Approx_fees && "20000" < item.Dept.Civil?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "60000") {
                            if (selectedFees >= item.Dept.Civil?.Approx_fees && "40000" < item.Dept.Civil?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "80000") {
                            if (selectedFees >= item.Dept.Civil?.Approx_fees && "60000" < item.Dept.Civil?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "100000") {
                            if (selectedFees >= item.Dept.Civil?.Approx_fees && "80000" < item.Dept.Civil?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "200000") {
                            if (selectedFees >= item.Dept.Civil?.Approx_fees && "100000" < item.Dept.Civil?.Approx_fees) { return item; }
                        }
                    }

                    if (selectedCourse == "IT") {
                        if (selectedFees === "20000") {
                            if (selectedFees >= item.Dept.IT?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "40000") {
                            if (selectedFees >= item.Dept.IT?.Approx_fees && "20000" < item.Dept.IT?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "60000") {
                            if (selectedFees >= item.Dept.IT?.Approx_fees && "40000" < item.Dept.IT?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "80000") {
                            if (selectedFees >= item.Dept.IT?.Approx_fees && "60000" < item.Dept.IT?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "100000") {
                            if (selectedFees >= item.Dept.IT?.Approx_fees && "80000" < item.Dept.IT?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "200000") {
                            if (selectedFees >= item.Dept.IT?.Approx_fees && "100000" < item.Dept.IT?.Approx_fees) { return item; }
                        }
                    }

                    if (selectedCourse == "Electronics") {
                        if (selectedFees === "20000") {
                            if (selectedFees >= item.Dept.Electronics?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "40000") {
                            if (selectedFees >= item.Dept.Electronics?.Approx_fees && "20000" < item.Dept.Electronics?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "60000") {
                            if (selectedFees >= item.Dept.Electronics?.Approx_fees && "40000" < item.Dept.Electronics?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "80000") {
                            if (selectedFees >= item.Dept.Electronics?.Approx_fees && "60000" < item.Dept.Electronics?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "100000") {
                            if (selectedFees >= item.Dept.Electronics?.Approx_fees && "80000" < item.Dept.Electronics?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "200000") {
                            if (selectedFees >= item.Dept.Electronics?.Approx_fees && "100000" < item.Dept.Electronics?.Approx_fees) { return item; }
                        }
                    }

                    if (selectedCourse == "Electrical") {
                        if (selectedFees === "20000") {
                            if (selectedFees >= item.Dept.Electrical?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "40000") {
                            if (selectedFees >= item.Dept.Electrical?.Approx_fees && "20000" < item.Dept.Electrical?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "60000") {
                            if (selectedFees >= item.Dept.Electrical?.Approx_fees && "40000" < item.Dept.Electrical?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "80000") {
                            if (selectedFees >= item.Dept.Electrical?.Approx_fees && "60000" < item.Dept.Electrical?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "100000") {
                            if (selectedFees >= item.Dept.Electrical?.Approx_fees && "80000" < item.Dept.Electrical?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "200000") {
                            if (selectedFees >= item.Dept.Electrical?.Approx_fees && "100000" < item.Dept.Electrical?.Approx_fees) { return item; }
                        }
                    }

                    if (selectedCourse == "Mechanical") {
                        if (selectedFees === "20000") {
                            if (selectedFees >= item.Dept.Mechanical?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "40000") {
                            if (selectedFees >= item.Dept.Mechanical?.Approx_fees && "20000" < item.Dept.Mechanical?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "60000") {
                            if (selectedFees >= item.Dept.Mechanical?.Approx_fees && "40000" < item.Dept.Mechanical?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "80000") {
                            if (selectedFees >= item.Dept.Mechanical?.Approx_fees && "60000" < item.Dept.Mechanical?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "100000") {
                            if (selectedFees >= item.Dept.Mechanical?.Approx_fees && "80000" < item.Dept.Mechanical?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "200000") {
                            if (selectedFees >= item.Dept.Mechanical?.Approx_fees && "100000" < item.Dept.Mechanical?.Approx_fees) { return item; }
                        }
                    }

                    if (selectedCourse == "Chemical") {
                        if (selectedFees === "20000") {
                            if (selectedFees >= item.Dept.Chemical?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "40000") {
                            if (selectedFees >= item.Dept.Chemical?.Approx_fees && "20000" < item.Dept.Chemical?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "60000") {
                            if (selectedFees >= item.Dept.Chemical?.Approx_fees && "40000" < item.Dept.Chemical?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "80000") {
                            if (selectedFees >= item.Dept.Chemical?.Approx_fees && "60000" < item.Dept.Chemical?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "100000") {
                            if (selectedFees >= item.Dept.Chemical?.Approx_fees && "80000" < item.Dept.Chemical?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "200000") {
                            if (selectedFees >= item.Dept.Chemical?.Approx_fees && "100000" < item.Dept.Chemical?.Approx_fees) { return item; }
                        }
                    }

                    if (selectedCourse == "Rubber") {
                        if (selectedFees === "20000") {
                            if (selectedFees >= item.Dept.Rubber?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "40000") {
                            if (selectedFees >= item.Dept.Rubber?.Approx_fees && "20000" < item.Dept.Rubber?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "60000") {
                            if (selectedFees >= item.Dept.Rubber?.Approx_fees && "40000" < item.Dept.Rubber?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "80000") {
                            if (selectedFees >= item.Dept.Rubber?.Approx_fees && "60000" < item.Dept.Rubber?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "100000") {
                            if (selectedFees >= item.Dept.Rubber?.Approx_fees && "80000" < item.Dept.Rubber?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "200000") {
                            if (selectedFees >= item.Dept.Rubber?.Approx_fees && "100000" < item.Dept.Rubber?.Approx_fees) { return item; }
                        }
                    }

                    if (selectedCourse == "Instrumentation") {
                        if (selectedFees === "20000") {
                            if (selectedFees >= item.Dept.Instrumentation?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "40000") {
                            if (selectedFees >= item.Dept.Instrumentation?.Approx_fees && "20000" < item.Dept.Instrumentation?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "60000") {
                            if (selectedFees >= item.Dept.Instrumentation?.Approx_fees && "40000" < item.Dept.Instrumentation?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "80000") {
                            if (selectedFees >= item.Dept.Instrumentation?.Approx_fees && "60000" < item.Dept.Instrumentation?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "100000") {
                            if (selectedFees >= item.Dept.Instrumentation?.Approx_fees && "80000" < item.Dept.Instrumentation?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "200000") {
                            if (selectedFees >= item.Dept.Instrumentation?.Approx_fees && "100000" < item.Dept.Instrumentation?.Approx_fees) { return item; }
                        }
                    }
                    if (selectedCourse == "Automobile") {
                        if (selectedFees === "20000") {
                            if (selectedFees >= item.Dept.Automobile?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "40000") {
                            if (selectedFees >= item.Dept.Automobile?.Approx_fees && "20000" < item.Dept.Automobile?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "60000") {
                            if (selectedFees >= item.Dept.Automobile?.Approx_fees && "40000" < item.Dept.Automobile?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "80000") {
                            if (selectedFees >= item.Dept.Automobile?.Approx_fees && "60000" < item.Dept.Automobile?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "100000") {
                            if (selectedFees >= item.Dept.Automobile?.Approx_fees && "80000" < item.Dept.Automobile?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "200000") {
                            if (selectedFees >= item.Dept.Automobile?.Approx_fees && "100000" < item.Dept.Automobile?.Approx_fees) { return item; }
                        }
                    }
                    if (selectedCourse == "Leather Technology") {
                        if (selectedFees === "20000") {
                            if (selectedFees >= item.Dept.LeatherTechnology?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "40000") {
                            if (selectedFees >= item.Dept.LeatherTechnology?.Approx_fees && "20000" < item.Dept.LeatherTechnology?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "60000") {
                            if (selectedFees >= item.Dept.LeatherTechnology?.Approx_fees && "40000" < item.Dept.LeatherTechnology?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "80000") {
                            if (selectedFees >= item.Dept.LeatherTechnology?.Approx_fees && "60000" < item.Dept.LeatherTechnology?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "100000") {
                            if (selectedFees >= item.Dept.LeatherTechnology?.Approx_fees && "80000" < item.Dept.LeatherTechnology?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "200000") {
                            if (selectedFees >= item.Dept.LeatherTechnology?.Approx_fees && "100000" < item.Dept.LeatherTechnology?.Approx_fees) { return item; }
                        }
                    }
                    if (selectedCourse == "Electronics and Telecommunication") {
                        if (selectedFees === "20000") {
                            if (selectedFees >= item.Dept.ElectronicsandTelecommunication?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "40000") {
                            if (selectedFees >= item.Dept.ElectronicsandTelecommunication?.Approx_fees && "20000" < item.Dept.ElectronicsandTelecommunication?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "60000") {
                            if (selectedFees >= item.Dept.ElectronicsandTelecommunication?.Approx_fees && "40000" < item.Dept.ElectronicsandTelecommunication?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "80000") {
                            if (selectedFees >= item.Dept.ElectronicsandTelecommunication?.Approx_fees && "60000" < item.Dept.ElectronicsandTelecommunication?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "100000") {
                            if (selectedFees >= item.Dept.ElectronicsandTelecommunication?.Approx_fees && "80000" < item.Dept.ElectronicsandTelecommunication?.Approx_fees) { return item; }
                        }
                        if (selectedFees === "200000") {
                            if (selectedFees >= item.Dept.ElectronicsandTelecommunication?.Approx_fees && "100000" < item.Dept.ElectronicsandTelecommunication?.Approx_fees) { return item; }
                        }
                    }
                }
            )
        }

        if (selectedAutonomy) {
            updateList = updateList.filter((item) => {
                if (item.Autonomy_status.toLowerCase() === selectedAutonomy.toLowerCase()) { return item; }
            })
        }

        if (selectedCollegeStatus) {
            updateList = updateList.filter((item) => {
                if(selectedCollegeStatus === "Government"){
                    if (item.College_Status.toLowerCase() === selectedCollegeStatus.toLowerCase()) { return item; }
                    if(item.College_Status.toLowerCase() === "government-aided"){return item;}
                }
                if(selectedCollegeStatus === "Private"){
                    if (item.College_Status.toLowerCase() === selectedCollegeStatus.toLowerCase()) { return item; }
                    if(item.College_Status.toLowerCase() === "un-aided"){return item;}
                }
            })
        }

        if(selectedCourse){
            if(selectedCaste){
                updateList = updateList.filter(
                    (item) => {
                        if (item.AllCaste.includes(selectedCaste)) { return item; }
                    }
                )
            }
            else{
                setNo("Please Select Caste")
            }
        }
        else{
            setNo("Please Select Course")
        }


        if(selectedCourse){
            if(selectedCaste){
                if(selectedMarks){
                    updateList = updateList.filter(
                        (item) => {
                            if(selectedCourse === "Computer"){
                                if(selectedCaste === "OPEN"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Computer?.Caste?.OPEN && "90" < item.Dept.Computer?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Computer?.Caste?.OPEN && "80" < item.Dept.Computer?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Computer?.Caste?.OPEN && "70" < item.Dept.Computer?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Computer?.Caste?.OPEN && "60" < item.Dept.Computer?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Computer?.Caste?.OPEN && "50" < item.Dept.Computer?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Computer?.Caste?.OPEN && "36" < item.Dept.Computer?.Caste?.OPEN) { return item; }
                                    }
                                }
                                if(selectedCaste === "OBC"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Computer?.Caste?.OBC && "90" < item.Dept.Computer?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Computer?.Caste?.OBC && "80" < item.Dept.Computer?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Computer?.Caste?.OBC && "70" < item.Dept.Computer?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Computer?.Caste?.OBC && "60" < item.Dept.Computer?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Computer?.Caste?.OBC && "50" < item.Dept.Computer?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Computer?.Caste?.OBC && "36" < item.Dept.Computer?.Caste?.OBC) { return item; }
                                    }
                                }
                                if(selectedCaste === "SC"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Computer?.Caste?.SC && "90" < item.Dept.Computer?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Computer?.Caste?.SC && "80" < item.Dept.Computer?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Computer?.Caste?.SC && "70" < item.Dept.Computer?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Computer?.Caste?.SC && "60" < item.Dept.Computer?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Computer?.Caste?.SC && "50" < item.Dept.Computer?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Computer?.Caste?.SC && "36" < item.Dept.Computer?.Caste?.SC) { return item; }
                                    }
                                }
                                if(selectedCaste === "ST"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Computer?.Caste?.ST && "90" < item.Dept.Computer?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Computer?.Caste?.ST && "80" < item.Dept.Computer?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Computer?.Caste?.ST && "70" < item.Dept.Computer?.Caste?.OST) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Computer?.Caste?.ST && "60" < item.Dept.Computer?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Computer?.Caste?.ST && "50" < item.Dept.Computer?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Computer?.Caste?.ST && "36" < item.Dept.Computer?.Caste?.ST) { return item; }
                                    }
                                }
                                if(selectedCaste === "VJ"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Computer?.Caste?.VJ && "90" < item.Dept.Computer?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Computer?.Caste?.VJ && "80" < item.Dept.Computer?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Computer?.Caste?.VJ && "70" < item.Dept.Computer?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Computer?.Caste?.VJ && "60" < item.Dept.Computer?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Computer?.Caste?.VJ && "50" < item.Dept.Computer?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Computer?.Caste?.VJ && "36" < item.Dept.Computer?.Caste?.VJ) { return item; }
                                    }
                                }
                                if(selectedCaste === "NT"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Computer?.Caste?.NT && "90" < item.Dept.Computer?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Computer?.Caste?.NT && "80" < item.Dept.Computer?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Computer?.Caste?.NT && "70" < item.Dept.Computer?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Computer?.Caste?.NT && "60" < item.Dept.Computer?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Computer?.Caste?.NT && "50" < item.Dept.Computer?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Computer?.Caste?.NT && "36" < item.Dept.Computer?.Caste?.NT) { return item; }
                                    }
                                }
                                if(selectedCaste === "Minority"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Computer?.Caste?.Minority && "90" < item.Dept.Computer?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Computer?.Caste?.Minority && "80" < item.Dept.Computer?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Computer?.Caste?.Minority && "70" < item.Dept.Computer?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Computer?.Caste?.Minority && "60" < item.Dept.Computer?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Computer?.Caste?.Minority && "50" < item.Dept.Computer?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Computer?.Caste?.Minority && "36" < item.Dept.Computer?.Caste?.Minority) { return item; }
                                    }
                                }
                                if(selectedCaste === "TFWS"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Computer?.Caste?.TFWS && "90" < item.Dept.Computer?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Computer?.Caste?.TFWS && "80" < item.Dept.Computer?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Computer?.Caste?.TFWS && "70" < item.Dept.Computer?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Computer?.Caste?.TFWS && "60" < item.Dept.Computer?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Computer?.Caste?.TFWS && "50" < item.Dept.Computer?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Computer?.Caste?.TFWS && "36" < item.Dept.Computer?.Caste?.TFWS) { return item; }
                                    }
                                }
                                if(selectedCaste === "EWS"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Computer?.Caste?.EWS && "90" < item.Dept.Computer?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Computer?.Caste?.EWS && "80" < item.Dept.Computer?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Computer?.Caste?.EWS && "70" < item.Dept.Computer?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Computer?.Caste?.EWS && "60" < item.Dept.Computer?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Computer?.Caste?.EWS && "50" < item.Dept.Computer?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Computer?.Caste?.EWS && "36" < item.Dept.Computer?.Caste?.EWS) { return item; }
                                    }
                                }
                                if(selectedCaste === "PH"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Computer?.Caste?.PH && "90" < item.Dept.Computer?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Computer?.Caste?.PH && "80" < item.Dept.Computer?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Computer?.Caste?.PH && "70" < item.Dept.Computer?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Computer?.Caste?.PH && "60" < item.Dept.Computer?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Computer?.Caste?.PH && "50" < item.Dept.Computer?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Computer?.Caste?.PH && "36" < item.Dept.Computer?.Caste?.PH) { return item; }
                                    }
                                }
                            }



                            if(selectedCourse === "Civil"){
                                if(selectedCaste === "OPEN"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Civil?.Caste?.OPEN && "90" < item.Dept.Civil?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Civil?.Caste?.OPEN && "80" < item.Dept.Civil?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Civil?.Caste?.OPEN && "70" < item.Dept.Civil?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Civil?.Caste?.OPEN && "60" < item.Dept.Civil?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Civil?.Caste?.OPEN && "50" < item.Dept.Civil?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Civil?.Caste?.OPEN && "36" < item.Dept.Civil?.Caste?.OPEN) { return item; }
                                    }
                                }
                                if(selectedCaste === "OBC"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Civil?.Caste?.OBC && "90" < item.Dept.Civil?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Civil?.Caste?.OBC && "80" < item.Dept.Civil?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Civil?.Caste?.OBC && "70" < item.Dept.Civil?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Civil?.Caste?.OBC && "60" < item.Dept.Civil?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Civil?.Caste?.OBC && "50" < item.Dept.Civil?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Civil?.Caste?.OBC && "36" < item.Dept.Civil?.Caste?.OBC) { return item; }
                                    }
                                }
                                if(selectedCaste === "SC"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Civil?.Caste?.SC && "90" < item.Dept.Civil?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Civil?.Caste?.SC && "80" < item.Dept.Civil?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Civil?.Caste?.SC && "70" < item.Dept.Civil?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Civil?.Caste?.SC && "60" < item.Dept.Civil?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Civil?.Caste?.SC && "50" < item.Dept.Civil?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Civil?.Caste?.SC && "36" < item.Dept.Civil?.Caste?.SC) { return item; }
                                    }
                                }
                                if(selectedCaste === "ST"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Civil?.Caste?.ST && "90" < item.Dept.Civil?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Civil?.Caste?.ST && "80" < item.Dept.Civil?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Civil?.Caste?.ST && "70" < item.Dept.Civil?.Caste?.OST) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Civil?.Caste?.ST && "60" < item.Dept.Civil?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Civil?.Caste?.ST && "50" < item.Dept.Civil?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Civil?.Caste?.ST && "36" < item.Dept.Civil?.Caste?.ST) { return item; }
                                    }
                                }
                                if(selectedCaste === "VJ"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Civil?.Caste?.VJ && "90" < item.Dept.Civil?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Civil?.Caste?.VJ && "80" < item.Dept.Civil?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Civil?.Caste?.VJ && "70" < item.Dept.Civil?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Civil?.Caste?.VJ && "60" < item.Dept.Civil?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Civil?.Caste?.VJ && "50" < item.Dept.Civil?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Civil?.Caste?.VJ && "36" < item.Dept.Civil?.Caste?.VJ) { return item; }
                                    }
                                }
                                if(selectedCaste === "NT"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Civil?.Caste?.NT && "90" < item.Dept.Civil?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Civil?.Caste?.NT && "80" < item.Dept.Civil?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Civil?.Caste?.NT && "70" < item.Dept.Civil?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Civil?.Caste?.NT && "60" < item.Dept.Civil?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Civil?.Caste?.NT && "50" < item.Dept.Civil?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Civil?.Caste?.NT && "36" < item.Dept.Civil?.Caste?.NT) { return item; }
                                    }
                                }
                                if(selectedCaste === "Minority"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Civil?.Caste?.Minority && "90" < item.Dept.Civil?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Civil?.Caste?.Minority && "80" < item.Dept.Civil?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Civil?.Caste?.Minority && "70" < item.Dept.Civil?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Civil?.Caste?.Minority && "60" < item.Dept.Civil?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Civil?.Caste?.Minority && "50" < item.Dept.Civil?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Civil?.Caste?.Minority && "36" < item.Dept.Civil?.Caste?.Minority) { return item; }
                                    }
                                }
                                if(selectedCaste === "TFWS"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Civil?.Caste?.TFWS && "90" < item.Dept.Civil?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Civil?.Caste?.TFWS && "80" < item.Dept.Civil?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Civil?.Caste?.TFWS && "70" < item.Dept.Civil?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Civil?.Caste?.TFWS && "60" < item.Dept.Civil?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Civil?.Caste?.TFWS && "50" < item.Dept.Civil?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Civil?.Caste?.TFWS && "36" < item.Dept.Civil?.Caste?.TFWS) { return item; }
                                    }
                                }
                                if(selectedCaste === "EWS"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Civil?.Caste?.EWS && "90" < item.Dept.Civil?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Civil?.Caste?.EWS && "80" < item.Dept.Civil?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Civil?.Caste?.EWS && "70" < item.Dept.Civil?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Civil?.Caste?.EWS && "60" < item.Dept.Civil?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Civil?.Caste?.EWS && "50" < item.Dept.Civil?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Civil?.Caste?.EWS && "36" < item.Dept.Civil?.Caste?.EWS) { return item; }
                                    }
                                }
                                if(selectedCaste === "PH"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Civil?.Caste?.PH && "90" < item.Dept.Civil?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Civil?.Caste?.PH && "80" < item.Dept.Civil?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Civil?.Caste?.PH && "70" < item.Dept.Civil?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Civil?.Caste?.PH && "60" < item.Dept.Civil?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Civil?.Caste?.PH && "50" < item.Dept.Civil?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Civil?.Caste?.PH && "36" < item.Dept.Civil?.Caste?.PH) { return item; }
                                    }
                                }
                            }
                            if(selectedCourse === "IT"){
                                if(selectedCaste === "OPEN"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.IT?.Caste?.OPEN && "90" < item.Dept.IT?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.IT?.Caste?.OPEN && "80" < item.Dept.IT?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.IT?.Caste?.OPEN && "70" < item.Dept.IT?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.IT?.Caste?.OPEN && "60" < item.Dept.IT?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.IT?.Caste?.OPEN && "50" < item.Dept.IT?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.IT?.Caste?.OPEN && "36" < item.Dept.IT?.Caste?.OPEN) { return item; }
                                    }
                                }
                                if(selectedCaste === "OBC"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.IT?.Caste?.OBC && "90" < item.Dept.IT?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.IT?.Caste?.OBC && "80" < item.Dept.IT?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.IT?.Caste?.OBC && "70" < item.Dept.IT?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.IT?.Caste?.OBC && "60" < item.Dept.IT?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.IT?.Caste?.OBC && "50" < item.Dept.IT?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.IT?.Caste?.OBC && "36" < item.Dept.IT?.Caste?.OBC) { return item; }
                                    }
                                }
                                if(selectedCaste === "SC"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.IT?.Caste?.SC && "90" < item.Dept.IT?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.IT?.Caste?.SC && "80" < item.Dept.IT?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.IT?.Caste?.SC && "70" < item.Dept.IT?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.IT?.Caste?.SC && "60" < item.Dept.IT?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.IT?.Caste?.SC && "50" < item.Dept.IT?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.IT?.Caste?.SC && "36" < item.Dept.IT?.Caste?.SC) { return item; }
                                    }
                                }
                                if(selectedCaste === "ST"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.IT?.Caste?.ST && "90" < item.Dept.IT?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.IT?.Caste?.ST && "80" < item.Dept.IT?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.IT?.Caste?.ST && "70" < item.Dept.IT?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.IT?.Caste?.ST && "60" < item.Dept.IT?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.IT?.Caste?.ST && "50" < item.Dept.IT?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.IT?.Caste?.ST && "36" < item.Dept.IT?.Caste?.ST) { return item; }
                                    }
                                }
                                if(selectedCaste === "VJ"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.IT?.Caste?.VJ && "90" < item.Dept.IT?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.IT?.Caste?.VJ && "80" < item.Dept.IT?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.IT?.Caste?.VJ && "70" < item.Dept.IT?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.IT?.Caste?.VJ && "60" < item.Dept.IT?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.IT?.Caste?.VJ && "50" < item.Dept.IT?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.IT?.Caste?.VJ && "36" < item.Dept.IT?.Caste?.VJ) { return item; }
                                    }
                                }
                                if(selectedCaste === "NT"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.IT?.Caste?.NT && "90" < item.Dept.IT?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.IT?.Caste?.NT && "80" < item.Dept.IT?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.IT?.Caste?.NT && "70" < item.Dept.IT?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.IT?.Caste?.NT && "60" < item.Dept.IT?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.IT?.Caste?.NT && "50" < item.Dept.IT?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.IT?.Caste?.NT && "36" < item.Dept.IT?.Caste?.NT) { return item; }
                                    }
                                }
                                if(selectedCaste === "Minority"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.IT?.Caste?.Minority && "90" < item.Dept.IT?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.IT?.Caste?.Minority && "70" < item.Dept.IT?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.IT?.Caste?.Minority && "60" < item.Dept.IT?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.IT?.Caste?.Minority && "50" < item.Dept.IT?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.IT?.Caste?.Minority && "36" < item.Dept.IT?.Caste?.Minority) { return item; }
                                    }
                                }
                                if(selectedCaste === "TFWS"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.IT?.Caste?.TFWS && "90" < item.Dept.IT?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.IT?.Caste?.TFWS && "80" < item.Dept.IT?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.IT?.Caste?.TFWS && "70" < item.Dept.IT?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.IT?.Caste?.TFWS && "60" < item.Dept.IT?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.IT?.Caste?.TFWS && "50" < item.Dept.IT?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.IT?.Caste?.TFWS && "36" < item.Dept.IT?.Caste?.TFWS) { return item; }
                                    }
                                }
                                if(selectedCaste === "EWS"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.IT?.Caste?.EWS && "90" < item.Dept.IT?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.IT?.Caste?.EWS && "80" < item.Dept.IT?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.IT?.Caste?.EWS && "70" < item.Dept.IT?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.IT?.Caste?.EWS && "60" < item.Dept.IT?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.IT?.Caste?.EWS && "50" < item.Dept.IT?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.IT?.Caste?.EWS && "36" < item.Dept.IT?.Caste?.EWS) { return item; }
                                    }
                                }
                                if(selectedCaste === "PH"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.IT?.Caste?.PH && "90" < item.Dept.IT?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.IT?.Caste?.PH && "80" < item.Dept.IT?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.IT?.Caste?.PH && "70" < item.Dept.IT?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.IT?.Caste?.PH && "60" < item.Dept.IT?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.IT?.Caste?.PH && "50" < item.Dept.IT?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.IT?.Caste?.PH && "36" < item.Dept.IT?.Caste?.PH) { return item; }
                                    }
                                }
                            }
                            if(selectedCourse === "Electronics"){
                                if(selectedCaste === "OPEN"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Electronics?.Caste?.OPEN && "90" < item.Dept.Electronics?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Electronics?.Caste?.OPEN && "80" < item.Dept.Electronics?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Electronics?.Caste?.OPEN && "70" < item.Dept.Electronics?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Electronics?.Caste?.OPEN && "60" < item.Dept.Electronics?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Electronics?.Caste?.OPEN && "50" < item.Dept.Electronics?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Electronics?.Caste?.OPEN && "36" < item.Dept.Electronics?.Caste?.OPEN) { return item; }
                                    }
                                }
                                if(selectedCaste === "OBC"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Electronics?.Caste?.OBC && "90" < item.Dept.Electronics?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Electronics?.Caste?.OBC && "80" < item.Dept.Electronics?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Electronics?.Caste?.OBC && "70" < item.Dept.Electronics?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Electronics?.Caste?.OBC && "60" < item.Dept.Electronics?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Electronics?.Caste?.OBC && "50" < item.Dept.Electronics?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Electronics?.Caste?.OBC && "36" < item.Dept.Electronics?.Caste?.OBC) { return item; }
                                    }
                                }
                                if(selectedCaste === "SC"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Electronics?.Caste?.SC && "90" < item.Dept.Electronics?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Electronics?.Caste?.SC && "80" < item.Dept.Electronics?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Electronics?.Caste?.SC && "70" < item.Dept.Electronics?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Electronics?.Caste?.SC && "60" < item.Dept.Electronics?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Electronics?.Caste?.SC && "50" < item.Dept.Electronics?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Electronics?.Caste?.SC && "36" < item.Dept.Electronics?.Caste?.SC) { return item; }
                                    }
                                }
                                if(selectedCaste === "ST"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Electronics?.Caste?.ST && "90" < item.Dept.Electronics?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Electronics?.Caste?.ST && "80" < item.Dept.Electronics?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Electronics?.Caste?.ST && "70" < item.Dept.Electronics?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Electronics?.Caste?.ST && "60" < item.Dept.Electronics?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Electronics?.Caste?.ST && "50" < item.Dept.Electronics?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Electronics?.Caste?.ST && "36" < item.Dept.Electronics?.Caste?.ST) { return item; }
                                    }
                                }
                                if(selectedCaste === "VJ"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Electronics?.Caste?.VJ && "90" < item.Dept.Electronics?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Electronics?.Caste?.VJ && "80" < item.Dept.Electronics?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Electronics?.Caste?.VJ && "70" < item.Dept.Electronics?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Electronics?.Caste?.VJ && "60" < item.Dept.Electronics?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Electronics?.Caste?.VJ && "50" < item.Dept.Electronics?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Electronics?.Caste?.VJ && "36" < item.Dept.Electronics?.Caste?.VJ) { return item; }
                                    }
                                }
                                if(selectedCaste === "NT"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Electronics?.Caste?.NT && "90" < item.Dept.Electronics?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Electronics?.Caste?.NT && "80" < item.Dept.Electronics?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Electronics?.Caste?.NT && "70" < item.Dept.Electronics?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Electronics?.Caste?.NT && "60" < item.Dept.Electronics?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Electronics?.Caste?.NT && "50" < item.Dept.Electronics?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Electronics?.Caste?.NT && "36" < item.Dept.Electronics?.Caste?.NT) { return item; }
                                    }
                                }
                                if(selectedCaste === "Minority"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Electronics?.Caste?.Minority && "90" < item.Dept.Electronics?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Electronics?.Caste?.Minority && "70" < item.Dept.Electronics?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Electronics?.Caste?.Minority && "60" < item.Dept.Electronics?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Electronics?.Caste?.Minority && "50" < item.Dept.Electronics?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Electronics?.Caste?.Minority && "36" < item.Dept.Electronics?.Caste?.Minority) { return item; }
                                    }
                                }
                                if(selectedCaste === "TFWS"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Electronics?.Caste?.TFWS && "90" < item.Dept.Electronics?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Electronics?.Caste?.TFWS && "80" < item.Dept.Electronics?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Electronics?.Caste?.TFWS && "70" < item.Dept.Electronics?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Electronics?.Caste?.TFWS && "60" < item.Dept.Electronics?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Electronics?.Caste?.TFWS && "50" < item.Dept.Electronics?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Electronics?.Caste?.TFWS && "36" < item.Dept.Electronics?.Caste?.TFWS) { return item; }
                                    }
                                }
                                if(selectedCaste === "EWS"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Electronics?.Caste?.EWS && "90" < item.Dept.Electronics?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Electronics?.Caste?.EWS && "80" < item.Dept.Electronics?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Electronics?.Caste?.EWS && "70" < item.Dept.Electronics?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Electronics?.Caste?.EWS && "60" < item.Dept.Electronics?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Electronics?.Caste?.EWS && "50" < item.Dept.Electronics?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Electronics?.Caste?.EWS && "36" < item.Dept.Electronics?.Caste?.EWS) { return item; }
                                    }
                                }
                                if(selectedCaste === "PH"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Electronics?.Caste?.PH && "90" < item.Dept.Electronics?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Electronics?.Caste?.PH && "80" < item.Dept.Electronics?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Electronics?.Caste?.PH && "70" < item.Dept.Electronics?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Electronics?.Caste?.PH && "60" < item.Dept.Electronics?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Electronics?.Caste?.PH && "50" < item.Dept.Electronics?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Electronics?.Caste?.PH && "36" < item.Dept.Electronics?.Caste?.PH) { return item; }
                                    }
                                }
                            }


                            if(selectedCourse === "Electrical"){
                                if(selectedCaste === "OPEN"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Electrical?.Caste?.OPEN && "90" < item.Dept.Electrical?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Electrical?.Caste?.OPEN && "80" < item.Dept.Electrical?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Electrical?.Caste?.OPEN && "70" < item.Dept.Electrical?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Electrical?.Caste?.OPEN && "60" < item.Dept.Electrical?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Electrical?.Caste?.OPEN && "50" < item.Dept.Electrical?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Electrical?.Caste?.OPEN && "36" < item.Dept.Electrical?.Caste?.OPEN) { return item; }
                                    }
                                }
                                if(selectedCaste === "OBC"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Electrical?.Caste?.OBC && "90" < item.Dept.Electrical?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Electrical?.Caste?.OBC && "80" < item.Dept.Electrical?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Electrical?.Caste?.OBC && "70" < item.Dept.Electrical?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Electrical?.Caste?.OBC && "60" < item.Dept.Electrical?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Electrical?.Caste?.OBC && "50" < item.Dept.Electrical?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Electrical?.Caste?.OBC && "36" < item.Dept.Electrical?.Caste?.OBC) { return item; }
                                    }
                                }
                                if(selectedCaste === "SC"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Electrical?.Caste?.SC && "90" < item.Dept.Electrical?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Electrical?.Caste?.SC && "80" < item.Dept.Electrical?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Electrical?.Caste?.SC && "70" < item.Dept.Electrical?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Electrical?.Caste?.SC && "60" < item.Dept.Electrical?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Electrical?.Caste?.SC && "50" < item.Dept.Electrical?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Electrical?.Caste?.SC && "36" < item.Dept.Electrical?.Caste?.SC) { return item; }
                                    }
                                }
                                if(selectedCaste === "ST"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Electrical?.Caste?.ST && "90" < item.Dept.Electrical?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Electrical?.Caste?.ST && "80" < item.Dept.Electrical?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Electrical?.Caste?.ST && "70" < item.Dept.Electrical?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Electrical?.Caste?.ST && "60" < item.Dept.Electrical?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Electrical?.Caste?.ST && "50" < item.Dept.Electrical?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Electrical?.Caste?.ST && "36" < item.Dept.Electrical?.Caste?.ST) { return item; }
                                    }
                                }
                                if(selectedCaste === "VJ"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Electrical?.Caste?.VJ && "90" < item.Dept.Electrical?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Electrical?.Caste?.VJ && "80" < item.Dept.Electrical?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Electrical?.Caste?.VJ && "70" < item.Dept.Electrical?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Electrical?.Caste?.VJ && "60" < item.Dept.Electrical?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Electrical?.Caste?.VJ && "50" < item.Dept.Electrical?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Electrical?.Caste?.VJ && "36" < item.Dept.Electrical?.Caste?.VJ) { return item; }
                                    }
                                }
                                if(selectedCaste === "NT"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Electrical?.Caste?.NT && "90" < item.Dept.Electrical?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Electrical?.Caste?.NT && "80" < item.Dept.Electrical?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Electrical?.Caste?.NT && "70" < item.Dept.Electrical?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Electrical?.Caste?.NT && "60" < item.Dept.Electrical?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Electrical?.Caste?.NT && "50" < item.Dept.Electrical?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Electrical?.Caste?.NT && "36" < item.Dept.Electrical?.Caste?.NT) { return item; }
                                    }
                                }
                                if(selectedCaste === "Minority"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Electrical?.Caste?.Minority && "90" < item.Dept.Electrical?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Electrical?.Caste?.Minority && "70" < item.Dept.Electrical?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Electrical?.Caste?.Minority && "60" < item.Dept.Electrical?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Electrical?.Caste?.Minority && "50" < item.Dept.Electrical?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Electrical?.Caste?.Minority && "36" < item.Dept.Electrical?.Caste?.Minority) { return item; }
                                    }
                                }
                                if(selectedCaste === "TFWS"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Electrical?.Caste?.TFWS && "90" < item.Dept.Electrical?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Electrical?.Caste?.TFWS && "80" < item.Dept.Electrical?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Electrical?.Caste?.TFWS && "70" < item.Dept.Electrical?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Electrical?.Caste?.TFWS && "60" < item.Dept.Electrical?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Electrical?.Caste?.TFWS && "50" < item.Dept.Electrical?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Electrical?.Caste?.TFWS && "36" < item.Dept.Electrical?.Caste?.TFWS) { return item; }
                                    }
                                }
                                if(selectedCaste === "EWS"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Electrical?.Caste?.EWS && "90" < item.Dept.Electrical?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Electrical?.Caste?.EWS && "80" < item.Dept.Electrical?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Electrical?.Caste?.EWS && "70" < item.Dept.Electrical?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Electrical?.Caste?.EWS && "60" < item.Dept.Electrical?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Electrical?.Caste?.EWS && "50" < item.Dept.Electrical?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Electrical?.Caste?.EWS && "36" < item.Dept.Electrical?.Caste?.EWS) { return item; }
                                    }
                                }
                                if(selectedCaste === "PH"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Electrical?.Caste?.PH && "90" < item.Dept.Electrical?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Electrical?.Caste?.PH && "80" < item.Dept.Electrical?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Electrical?.Caste?.PH && "70" < item.Dept.Electrical?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Electrical?.Caste?.PH && "60" < item.Dept.Electrical?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Electrical?.Caste?.PH && "50" < item.Dept.Electrical?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Electrical?.Caste?.PH && "36" < item.Dept.Electrical?.Caste?.PH) { return item; }
                                    }
                                }
                            }
                            if(selectedCourse === "Mechanical"){
                                if(selectedCaste === "OPEN"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.OPEN && "90" < item.Dept.Mechanical?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.OPEN && "80" < item.Dept.Mechanical?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.OPEN && "70" < item.Dept.Mechanical?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.OPEN && "60" < item.Dept.Mechanical?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.OPEN && "50" < item.Dept.Mechanical?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.OPEN && "36" < item.Dept.Mechanical?.Caste?.OPEN) { return item; }
                                    }
                                }
                                if(selectedCaste === "OBC"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.OBC && "90" < item.Dept.Mechanical?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.OBC && "80" < item.Dept.Mechanical?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.OBC && "70" < item.Dept.Mechanical?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.OBC && "60" < item.Dept.Mechanical?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.OBC && "50" < item.Dept.Mechanical?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.OBC && "36" < item.Dept.Mechanical?.Caste?.OBC) { return item; }
                                    }
                                }
                                if(selectedCaste === "SC"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.SC && "90" < item.Dept.Mechanical?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.SC && "80" < item.Dept.Mechanical?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.SC && "70" < item.Dept.Mechanical?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.SC && "60" < item.Dept.Mechanical?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.SC && "50" < item.Dept.Mechanical?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.SC && "36" < item.Dept.Mechanical?.Caste?.SC) { return item; }
                                    }
                                }
                                if(selectedCaste === "ST"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.ST && "90" < item.Dept.Mechanical?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.ST && "80" < item.Dept.Mechanical?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.ST && "70" < item.Dept.Mechanical?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.ST && "60" < item.Dept.Mechanical?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.ST && "50" < item.Dept.Mechanical?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.ST && "36" < item.Dept.Mechanical?.Caste?.ST) { return item; }
                                    }
                                }
                                if(selectedCaste === "VJ"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.VJ && "90" < item.Dept.Mechanical?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.VJ && "80" < item.Dept.Mechanical?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.VJ && "70" < item.Dept.Mechanical?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.VJ && "60" < item.Dept.Mechanical?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.VJ && "50" < item.Dept.Mechanical?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.VJ && "36" < item.Dept.Mechanical?.Caste?.VJ) { return item; }
                                    }
                                }
                                if(selectedCaste === "NT"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.NT && "90" < item.Dept.Mechanical?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.NT && "80" < item.Dept.Mechanical?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.NT && "70" < item.Dept.Mechanical?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.NT && "60" < item.Dept.Mechanical?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.NT && "50" < item.Dept.Mechanical?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.NT && "36" < item.Dept.Mechanical?.Caste?.NT) { return item; }
                                    }
                                }
                                if(selectedCaste === "Minority"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.Minority && "90" < item.Dept.Mechanical?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.Minority && "70" < item.Dept.Mechanical?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.Minority && "60" < item.Dept.Mechanical?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.Minority && "50" < item.Dept.Mechanical?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.Minority && "36" < item.Dept.Mechanical?.Caste?.Minority) { return item; }
                                    }
                                }
                                if(selectedCaste === "TFWS"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.TFWS && "90" < item.Dept.Mechanical?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.TFWS && "80" < item.Dept.Mechanical?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.TFWS && "70" < item.Dept.Mechanical?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.TFWS && "60" < item.Dept.Mechanical?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.TFWS && "50" < item.Dept.Mechanical?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.TFWS && "36" < item.Dept.Mechanical?.Caste?.TFWS) { return item; }
                                    }
                                }
                                if(selectedCaste === "EWS"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.EWS && "90" < item.Dept.Mechanical?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.EWS && "80" < item.Dept.Mechanical?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.EWS && "70" < item.Dept.Mechanical?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.EWS && "60" < item.Dept.Mechanical?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.EWS && "50" < item.Dept.Mechanical?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.EWS && "36" < item.Dept.Mechanical?.Caste?.EWS) { return item; }
                                    }
                                }
                                if(selectedCaste === "PH"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.PH && "90" < item.Dept.Mechanical?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.PH && "80" < item.Dept.Mechanical?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.PH && "70" < item.Dept.Mechanical?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.PH && "60" < item.Dept.Mechanical?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.PH && "50" < item.Dept.Mechanical?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Mechanical?.Caste?.PH && "36" < item.Dept.Mechanical?.Caste?.PH) { return item; }
                                    }
                                }
                            }
                            if(selectedCourse === "Chemical"){
                                if(selectedCaste === "OPEN"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Chemical?.Caste?.OPEN && "90" < item.Dept.Chemical?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Chemical?.Caste?.OPEN && "80" < item.Dept.Chemical?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Chemical?.Caste?.OPEN && "70" < item.Dept.Chemical?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Chemical?.Caste?.OPEN && "60" < item.Dept.Chemical?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Chemical?.Caste?.OPEN && "50" < item.Dept.Chemical?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Chemical?.Caste?.OPEN && "36" < item.Dept.Chemical?.Caste?.OPEN) { return item; }
                                    }
                                }
                                if(selectedCaste === "OBC"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Chemical?.Caste?.OBC && "90" < item.Dept.Chemical?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Chemical?.Caste?.OBC && "80" < item.Dept.Chemical?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Chemical?.Caste?.OBC && "70" < item.Dept.Chemical?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Chemical?.Caste?.OBC && "60" < item.Dept.Chemical?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Chemical?.Caste?.OBC && "50" < item.Dept.Chemical?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Chemical?.Caste?.OBC && "36" < item.Dept.Chemical?.Caste?.OBC) { return item; }
                                    }
                                }
                                if(selectedCaste === "SC"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Chemical?.Caste?.SC && "90" < item.Dept.Chemical?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Chemical?.Caste?.SC && "80" < item.Dept.Chemical?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Chemical?.Caste?.SC && "70" < item.Dept.Chemical?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Chemical?.Caste?.SC && "60" < item.Dept.Chemical?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Chemical?.Caste?.SC && "50" < item.Dept.Chemical?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Chemical?.Caste?.SC && "36" < item.Dept.Chemical?.Caste?.SC) { return item; }
                                    }
                                }
                                if(selectedCaste === "ST"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Chemical?.Caste?.ST && "90" < item.Dept.Chemical?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Chemical?.Caste?.ST && "80" < item.Dept.Chemical?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Chemical?.Caste?.ST && "70" < item.Dept.Chemical?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Chemical?.Caste?.ST && "60" < item.Dept.Chemical?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Chemical?.Caste?.ST && "50" < item.Dept.Chemical?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Chemical?.Caste?.ST && "36" < item.Dept.Chemical?.Caste?.ST) { return item; }
                                    }
                                }
                                if(selectedCaste === "VJ"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Chemical?.Caste?.VJ && "90" < item.Dept.Chemical?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Chemical?.Caste?.VJ && "80" < item.Dept.Chemical?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Chemical?.Caste?.VJ && "70" < item.Dept.Chemical?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Chemical?.Caste?.VJ && "60" < item.Dept.Chemical?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Chemical?.Caste?.VJ && "50" < item.Dept.Chemical?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Chemical?.Caste?.VJ && "36" < item.Dept.Chemical?.Caste?.VJ) { return item; }
                                    }
                                }
                                if(selectedCaste === "NT"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Chemical?.Caste?.NT && "90" < item.Dept.Chemical?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Chemical?.Caste?.NT && "80" < item.Dept.Chemical?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Chemical?.Caste?.NT && "70" < item.Dept.Chemical?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Chemical?.Caste?.NT && "60" < item.Dept.Chemical?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Chemical?.Caste?.NT && "50" < item.Dept.Chemical?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Chemical?.Caste?.NT && "36" < item.Dept.Chemical?.Caste?.NT) { return item; }
                                    }
                                }
                                if(selectedCaste === "Minority"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Chemical?.Caste?.Minority && "90" < item.Dept.Chemical?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Chemical?.Caste?.Minority && "70" < item.Dept.Chemical?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Chemical?.Caste?.Minority && "60" < item.Dept.Chemical?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Chemical?.Caste?.Minority && "50" < item.Dept.Chemical?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Chemical?.Caste?.Minority && "36" < item.Dept.Chemical?.Caste?.Minority) { return item; }
                                    }
                                }
                                if(selectedCaste === "TFWS"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Chemical?.Caste?.TFWS && "90" < item.Dept.Chemical?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Chemical?.Caste?.TFWS && "80" < item.Dept.Chemical?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Chemical?.Caste?.TFWS && "70" < item.Dept.Chemical?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Chemical?.Caste?.TFWS && "60" < item.Dept.Chemical?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Chemical?.Caste?.TFWS && "50" < item.Dept.Chemical?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Chemical?.Caste?.TFWS && "36" < item.Dept.Chemical?.Caste?.TFWS) { return item; }
                                    }
                                }
                                if(selectedCaste === "EWS"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Chemical?.Caste?.EWS && "90" < item.Dept.Chemical?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Chemical?.Caste?.EWS && "80" < item.Dept.Chemical?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Chemical?.Caste?.EWS && "70" < item.Dept.Chemical?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Chemical?.Caste?.EWS && "60" < item.Dept.Chemical?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Chemical?.Caste?.EWS && "50" < item.Dept.Chemical?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Chemical?.Caste?.EWS && "36" < item.Dept.Chemical?.Caste?.EWS) { return item; }
                                    }
                                }
                                if(selectedCaste === "PH"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Chemical?.Caste?.PH && "90" < item.Dept.Chemical?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Chemical?.Caste?.PH && "80" < item.Dept.Chemical?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Chemical?.Caste?.PH && "70" < item.Dept.Chemical?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Chemical?.Caste?.PH && "60" < item.Dept.Chemical?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Chemical?.Caste?.PH && "50" < item.Dept.Chemical?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Chemical?.Caste?.PH && "36" < item.Dept.Chemical?.Caste?.PH) { return item; }
                                    }
                                }
                            }
                            if(selectedCourse === "Instrumentation"){
                                if(selectedCaste === "OPEN"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.OPEN && "90" < item.Dept.Instrumentation?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.OPEN && "80" < item.Dept.Instrumentation?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.OPEN && "70" < item.Dept.Instrumentation?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.OPEN && "60" < item.Dept.Instrumentation?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.OPEN && "50" < item.Dept.Instrumentation?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.OPEN && "36" < item.Dept.Instrumentation?.Caste?.OPEN) { return item; }
                                    }
                                }
                                if(selectedCaste === "OBC"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.OBC && "90" < item.Dept.Instrumentation?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.OBC && "80" < item.Dept.Instrumentation?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.OBC && "70" < item.Dept.Instrumentation?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.OBC && "60" < item.Dept.Instrumentation?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.OBC && "50" < item.Dept.Instrumentation?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.OBC && "36" < item.Dept.Instrumentation?.Caste?.OBC) { return item; }
                                    }
                                }
                                if(selectedCaste === "SC"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.SC && "90" < item.Dept.Instrumentation?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.SC && "80" < item.Dept.Instrumentation?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.SC && "70" < item.Dept.Instrumentation?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.SC && "60" < item.Dept.Instrumentation?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.SC && "50" < item.Dept.Instrumentation?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.SC && "36" < item.Dept.Instrumentation?.Caste?.SC) { return item; }
                                    }
                                }
                                if(selectedCaste === "ST"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.ST && "90" < item.Dept.Instrumentation?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.ST && "80" < item.Dept.Instrumentation?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.ST && "70" < item.Dept.Instrumentation?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.ST && "60" < item.Dept.Instrumentation?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.ST && "50" < item.Dept.Instrumentation?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.ST && "36" < item.Dept.Instrumentation?.Caste?.ST) { return item; }
                                    }
                                }
                                if(selectedCaste === "VJ"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.VJ && "90" < item.Dept.Instrumentation?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.VJ && "80" < item.Dept.Instrumentation?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.VJ && "70" < item.Dept.Instrumentation?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.VJ && "60" < item.Dept.Instrumentation?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.VJ && "50" < item.Dept.Instrumentation?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.VJ && "36" < item.Dept.Instrumentation?.Caste?.VJ) { return item; }
                                    }
                                }
                                if(selectedCaste === "NT"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.NT && "90" < item.Dept.Instrumentation?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.NT && "80" < item.Dept.Instrumentation?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.NT && "70" < item.Dept.Instrumentation?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.NT && "60" < item.Dept.Instrumentation?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.NT && "50" < item.Dept.Instrumentation?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.NT && "36" < item.Dept.Instrumentation?.Caste?.NT) { return item; }
                                    }
                                }
                                if(selectedCaste === "Minority"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.Minority && "90" < item.Dept.Instrumentation?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.Minority && "70" < item.Dept.Instrumentation?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.Minority && "60" < item.Dept.Instrumentation?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.Minority && "50" < item.Dept.Instrumentation?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.Minority && "36" < item.Dept.Instrumentation?.Caste?.Minority) { return item; }
                                    }
                                }
                                if(selectedCaste === "TFWS"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.TFWS && "90" < item.Dept.Instrumentation?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.TFWS && "80" < item.Dept.Instrumentation?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.TFWS && "70" < item.Dept.Instrumentation?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.TFWS && "60" < item.Dept.Instrumentation?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.TFWS && "50" < item.Dept.Instrumentation?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.TFWS && "36" < item.Dept.Instrumentation?.Caste?.TFWS) { return item; }
                                    }
                                }
                                if(selectedCaste === "EWS"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.EWS && "90" < item.Dept.Instrumentation?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.EWS && "80" < item.Dept.Instrumentation?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.EWS && "70" < item.Dept.Instrumentation?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.EWS && "60" < item.Dept.Instrumentation?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.EWS && "50" < item.Dept.Instrumentation?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.EWS && "36" < item.Dept.Instrumentation?.Caste?.EWS) { return item; }
                                    }
                                }
                                if(selectedCaste === "PH"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.PH && "90" < item.Dept.Instrumentation?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.PH && "80" < item.Dept.Instrumentation?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.PH && "70" < item.Dept.Instrumentation?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.PH && "60" < item.Dept.Instrumentation?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.PH && "50" < item.Dept.Instrumentation?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Instrumentation?.Caste?.PH && "36" < item.Dept.Instrumentation?.Caste?.PH) { return item; }
                                    }
                                }
                            }
                            if(selectedCourse === "Rubber"){
                                if(selectedCaste === "OPEN"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Rubber?.Caste?.OPEN && "90" < item.Dept.Rubber?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Rubber?.Caste?.OPEN && "80" < item.Dept.Rubber?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Rubber?.Caste?.OPEN && "70" < item.Dept.Rubber?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Rubber?.Caste?.OPEN && "60" < item.Dept.Rubber?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Rubber?.Caste?.OPEN && "50" < item.Dept.Rubber?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Rubber?.Caste?.OPEN && "36" < item.Dept.Rubber?.Caste?.OPEN) { return item; }
                                    }
                                }
                                if(selectedCaste === "OBC"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Rubber?.Caste?.OBC && "90" < item.Dept.Rubber?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Rubber?.Caste?.OBC && "80" < item.Dept.Rubber?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Rubber?.Caste?.OBC && "70" < item.Dept.Rubber?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Rubber?.Caste?.OBC && "60" < item.Dept.Rubber?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Rubber?.Caste?.OBC && "50" < item.Dept.Rubber?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Rubber?.Caste?.OBC && "36" < item.Dept.Rubber?.Caste?.OBC) { return item; }
                                    }
                                }
                                if(selectedCaste === "SC"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Rubber?.Caste?.SC && "90" < item.Dept.Rubber?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Rubber?.Caste?.SC && "80" < item.Dept.Rubber?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Rubber?.Caste?.SC && "70" < item.Dept.Rubber?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Rubber?.Caste?.SC && "60" < item.Dept.Rubber?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Rubber?.Caste?.SC && "50" < item.Dept.Rubber?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Rubber?.Caste?.SC && "36" < item.Dept.Rubber?.Caste?.SC) { return item; }
                                    }
                                }
                                if(selectedCaste === "ST"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Rubber?.Caste?.ST && "90" < item.Dept.Rubber?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Rubber?.Caste?.ST && "80" < item.Dept.Rubber?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Rubber?.Caste?.ST && "70" < item.Dept.Rubber?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Rubber?.Caste?.ST && "60" < item.Dept.Rubber?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Rubber?.Caste?.ST && "50" < item.Dept.Rubber?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Rubber?.Caste?.ST && "36" < item.Dept.Rubber?.Caste?.ST) { return item; }
                                    }
                                }
                                if(selectedCaste === "VJ"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Rubber?.Caste?.VJ && "90" < item.Dept.Rubber?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Rubber?.Caste?.VJ && "80" < item.Dept.Rubber?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Rubber?.Caste?.VJ && "70" < item.Dept.Rubber?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Rubber?.Caste?.VJ && "60" < item.Dept.Rubber?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Rubber?.Caste?.VJ && "50" < item.Dept.Rubber?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Rubber?.Caste?.VJ && "36" < item.Dept.Rubber?.Caste?.VJ) { return item; }
                                    }
                                }
                                if(selectedCaste === "NT"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Rubber?.Caste?.NT && "90" < item.Dept.Rubber?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Rubber?.Caste?.NT && "80" < item.Dept.Rubber?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Rubber?.Caste?.NT && "70" < item.Dept.Rubber?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Rubber?.Caste?.NT && "60" < item.Dept.Rubber?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Rubber?.Caste?.NT && "50" < item.Dept.Rubber?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Rubber?.Caste?.NT && "36" < item.Dept.Rubber?.Caste?.NT) { return item; }
                                    }
                                }
                                if(selectedCaste === "Minority"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Rubber?.Caste?.Minority && "90" < item.Dept.Rubber?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Rubber?.Caste?.Minority && "70" < item.Dept.Rubber?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Rubber?.Caste?.Minority && "60" < item.Dept.Rubber?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Rubber?.Caste?.Minority && "50" < item.Dept.Rubber?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Rubber?.Caste?.Minority && "36" < item.Dept.Rubber?.Caste?.Minority) { return item; }
                                    }
                                }
                                if(selectedCaste === "TFWS"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Rubber?.Caste?.TFWS && "90" < item.Dept.Rubber?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Rubber?.Caste?.TFWS && "80" < item.Dept.Rubber?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Rubber?.Caste?.TFWS && "70" < item.Dept.Rubber?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Rubber?.Caste?.TFWS && "60" < item.Dept.Rubber?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Rubber?.Caste?.TFWS && "50" < item.Dept.Rubber?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Rubber?.Caste?.TFWS && "36" < item.Dept.Rubber?.Caste?.TFWS) { return item; }
                                    }
                                }
                                if(selectedCaste === "EWS"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Rubber?.Caste?.EWS && "90" < item.Dept.Rubber?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Rubber?.Caste?.EWS && "80" < item.Dept.Rubber?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Rubber?.Caste?.EWS && "70" < item.Dept.Rubber?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Rubber?.Caste?.EWS && "60" < item.Dept.Rubber?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Rubber?.Caste?.EWS && "50" < item.Dept.Rubber?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Rubber?.Caste?.EWS && "36" < item.Dept.Rubber?.Caste?.EWS) { return item; }
                                    }
                                }
                                if(selectedCaste === "PH"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Rubber?.Caste?.PH && "90" < item.Dept.Rubber?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Rubber?.Caste?.PH && "80" < item.Dept.Rubber?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Rubber?.Caste?.PH && "70" < item.Dept.Rubber?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Rubber?.Caste?.PH && "60" < item.Dept.Rubber?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Rubber?.Caste?.PH && "50" < item.Dept.Rubber?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Rubber?.Caste?.PH && "36" < item.Dept.Rubber?.Caste?.PH) { return item; }
                                    }
                                }
                            }
                            if(selectedCourse === "Automobile"){
                                if(selectedCaste === "OPEN"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Automobile?.Caste?.OPEN && "90" < item.Dept.Automobile?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Automobile?.Caste?.OPEN && "80" < item.Dept.Automobile?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Automobile?.Caste?.OPEN && "70" < item.Dept.Automobile?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Automobile?.Caste?.OPEN && "60" < item.Dept.Automobile?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Automobile?.Caste?.OPEN && "50" < item.Dept.Automobile?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Automobile?.Caste?.OPEN && "36" < item.Dept.Automobile?.Caste?.OPEN) { return item; }
                                    }
                                }
                                if(selectedCaste === "OBC"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Automobile?.Caste?.OBC && "90" < item.Dept.Automobile?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Automobile?.Caste?.OBC && "80" < item.Dept.Automobile?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Automobile?.Caste?.OBC && "70" < item.Dept.Automobile?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Automobile?.Caste?.OBC && "60" < item.Dept.Automobile?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Automobile?.Caste?.OBC && "50" < item.Dept.Automobile?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Automobile?.Caste?.OBC && "36" < item.Dept.Automobile?.Caste?.OBC) { return item; }
                                    }
                                }
                                if(selectedCaste === "SC"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Automobile?.Caste?.SC && "90" < item.Dept.Automobile?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Automobile?.Caste?.SC && "80" < item.Dept.Automobile?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Automobile?.Caste?.SC && "70" < item.Dept.Automobile?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Automobile?.Caste?.SC && "60" < item.Dept.Automobile?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Automobile?.Caste?.SC && "50" < item.Dept.Automobile?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Automobile?.Caste?.SC && "36" < item.Dept.Automobile?.Caste?.SC) { return item; }
                                    }
                                }
                                if(selectedCaste === "ST"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Automobile?.Caste?.ST && "90" < item.Dept.Automobile?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Automobile?.Caste?.ST && "80" < item.Dept.Automobile?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Automobile?.Caste?.ST && "70" < item.Dept.Automobile?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Automobile?.Caste?.ST && "60" < item.Dept.Automobile?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Automobile?.Caste?.ST && "50" < item.Dept.Automobile?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Automobile?.Caste?.ST && "36" < item.Dept.Automobile?.Caste?.ST) { return item; }
                                    }
                                }
                                if(selectedCaste === "VJ"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Automobile?.Caste?.VJ && "90" < item.Dept.Automobile?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Automobile?.Caste?.VJ && "80" < item.Dept.Automobile?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Automobile?.Caste?.VJ && "70" < item.Dept.Automobile?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Automobile?.Caste?.VJ && "60" < item.Dept.Automobile?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Automobile?.Caste?.VJ && "50" < item.Dept.Automobile?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Automobile?.Caste?.VJ && "36" < item.Dept.Automobile?.Caste?.VJ) { return item; }
                                    }
                                }
                                if(selectedCaste === "NT"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Automobile?.Caste?.NT && "90" < item.Dept.Automobile?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Automobile?.Caste?.NT && "80" < item.Dept.Automobile?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Automobile?.Caste?.NT && "70" < item.Dept.Automobile?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Automobile?.Caste?.NT && "60" < item.Dept.Automobile?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Automobile?.Caste?.NT && "50" < item.Dept.Automobile?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Automobile?.Caste?.NT && "36" < item.Dept.Automobile?.Caste?.NT) { return item; }
                                    }
                                }
                                if(selectedCaste === "Minority"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Automobile?.Caste?.Minority && "90" < item.Dept.Automobile?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Automobile?.Caste?.Minority && "70" < item.Dept.Automobile?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Automobile?.Caste?.Minority && "60" < item.Dept.Automobile?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Automobile?.Caste?.Minority && "50" < item.Dept.Automobile?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Automobile?.Caste?.Minority && "36" < item.Dept.Automobile?.Caste?.Minority) { return item; }
                                    }
                                }
                                if(selectedCaste === "TFWS"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Automobile?.Caste?.TFWS && "90" < item.Dept.Automobile?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Automobile?.Caste?.TFWS && "80" < item.Dept.Automobile?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Automobile?.Caste?.TFWS && "70" < item.Dept.Automobile?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Automobile?.Caste?.TFWS && "60" < item.Dept.Automobile?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Automobile?.Caste?.TFWS && "50" < item.Dept.Automobile?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Automobile?.Caste?.TFWS && "36" < item.Dept.Automobile?.Caste?.TFWS) { return item; }
                                    }
                                }
                                if(selectedCaste === "EWS"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Automobile?.Caste?.EWS && "90" < item.Dept.Automobile?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Automobile?.Caste?.EWS && "80" < item.Dept.Automobile?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Automobile?.Caste?.EWS && "70" < item.Dept.Automobile?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Automobile?.Caste?.EWS && "60" < item.Dept.Automobile?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Automobile?.Caste?.EWS && "50" < item.Dept.Automobile?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Automobile?.Caste?.EWS && "36" < item.Dept.Automobile?.Caste?.EWS) { return item; }
                                    }
                                }
                                if(selectedCaste === "PH"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.Automobile?.Caste?.PH && "90" < item.Dept.Automobile?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.Automobile?.Caste?.PH && "80" < item.Dept.Automobile?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.Automobile?.Caste?.PH && "70" < item.Dept.Automobile?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.Automobile?.Caste?.PH && "60" < item.Dept.Automobile?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.Automobile?.Caste?.PH && "50" < item.Dept.Automobile?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.Automobile?.Caste?.PH && "36" < item.Dept.Automobile?.Caste?.PH) { return item; }
                                    }
                                }
                            }
                            if(selectedCourse === "LeatherTechnology"){
                                if(selectedCaste === "OPEN"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.OPEN && "90" < item.Dept.LeatherTechnology?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.OPEN && "80" < item.Dept.LeatherTechnology?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.OPEN && "70" < item.Dept.LeatherTechnology?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.OPEN && "60" < item.Dept.LeatherTechnology?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.OPEN && "50" < item.Dept.LeatherTechnology?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.OPEN && "36" < item.Dept.LeatherTechnology?.Caste?.OPEN) { return item; }
                                    }
                                }
                                if(selectedCaste === "OBC"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.OBC && "90" < item.Dept.LeatherTechnology?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.OBC && "80" < item.Dept.LeatherTechnology?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.OBC && "70" < item.Dept.LeatherTechnology?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.OBC && "60" < item.Dept.LeatherTechnology?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.OBC && "50" < item.Dept.LeatherTechnology?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.OBC && "36" < item.Dept.LeatherTechnology?.Caste?.OBC) { return item; }
                                    }
                                }
                                if(selectedCaste === "SC"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.SC && "90" < item.Dept.LeatherTechnology?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.SC && "80" < item.Dept.LeatherTechnology?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.SC && "70" < item.Dept.LeatherTechnology?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.SC && "60" < item.Dept.LeatherTechnology?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.SC && "50" < item.Dept.LeatherTechnology?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.SC && "36" < item.Dept.LeatherTechnology?.Caste?.SC) { return item; }
                                    }
                                }
                                if(selectedCaste === "ST"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.ST && "90" < item.Dept.LeatherTechnology?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.ST && "80" < item.Dept.LeatherTechnology?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.ST && "70" < item.Dept.LeatherTechnology?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.ST && "60" < item.Dept.LeatherTechnology?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.ST && "50" < item.Dept.LeatherTechnology?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.ST && "36" < item.Dept.LeatherTechnology?.Caste?.ST) { return item; }
                                    }
                                }
                                if(selectedCaste === "VJ"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.VJ && "90" < item.Dept.LeatherTechnology?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.VJ && "80" < item.Dept.LeatherTechnology?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.VJ && "70" < item.Dept.LeatherTechnology?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.VJ && "60" < item.Dept.LeatherTechnology?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.VJ && "50" < item.Dept.LeatherTechnology?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.VJ && "36" < item.Dept.LeatherTechnology?.Caste?.VJ) { return item; }
                                    }
                                }
                                if(selectedCaste === "NT"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.NT && "90" < item.Dept.LeatherTechnology?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.NT && "80" < item.Dept.LeatherTechnology?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.NT && "70" < item.Dept.LeatherTechnology?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.NT && "60" < item.Dept.LeatherTechnology?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.NT && "50" < item.Dept.LeatherTechnology?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.NT && "36" < item.Dept.LeatherTechnology?.Caste?.NT) { return item; }
                                    }
                                }
                                if(selectedCaste === "Minority"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.Minority && "90" < item.Dept.LeatherTechnology?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.Minority && "70" < item.Dept.LeatherTechnology?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.Minority && "60" < item.Dept.LeatherTechnology?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.Minority && "50" < item.Dept.LeatherTechnology?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.Minority && "36" < item.Dept.LeatherTechnology?.Caste?.Minority) { return item; }
                                    }
                                }
                                if(selectedCaste === "TFWS"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.TFWS && "90" < item.Dept.LeatherTechnology?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.TFWS && "80" < item.Dept.LeatherTechnology?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.TFWS && "70" < item.Dept.LeatherTechnology?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.TFWS && "60" < item.Dept.LeatherTechnology?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.TFWS && "50" < item.Dept.LeatherTechnology?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.TFWS && "36" < item.Dept.LeatherTechnology?.Caste?.TFWS) { return item; }
                                    }
                                }
                                if(selectedCaste === "EWS"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.EWS && "90" < item.Dept.LeatherTechnology?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.EWS && "80" < item.Dept.LeatherTechnology?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.EWS && "70" < item.Dept.LeatherTechnology?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.EWS && "60" < item.Dept.LeatherTechnology?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.EWS && "50" < item.Dept.LeatherTechnology?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.EWS && "36" < item.Dept.LeatherTechnology?.Caste?.EWS) { return item; }
                                    }
                                }
                                if(selectedCaste === "PH"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.PH && "90" < item.Dept.LeatherTechnology?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.PH && "80" < item.Dept.LeatherTechnology?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.PH && "70" < item.Dept.LeatherTechnology?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.PH && "60" < item.Dept.LeatherTechnology?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.PH && "50" < item.Dept.LeatherTechnology?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.LeatherTechnology?.Caste?.PH && "36" < item.Dept.LeatherTechnology?.Caste?.PH) { return item; }
                                    }
                                }
                            }
                            if(selectedCourse === "ElectronicsandTelecommunication"){
                                if(selectedCaste === "OPEN"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.OPEN && "90" < item.Dept.ElectronicsandTelecommunication?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.OPEN && "80" < item.Dept.ElectronicsandTelecommunication?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.OPEN && "70" < item.Dept.ElectronicsandTelecommunication?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.OPEN && "60" < item.Dept.ElectronicsandTelecommunication?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.OPEN && "50" < item.Dept.ElectronicsandTelecommunication?.Caste?.OPEN) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.OPEN && "36" < item.Dept.ElectronicsandTelecommunication?.Caste?.OPEN) { return item; }
                                    }
                                }
                                if(selectedCaste === "OBC"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.OBC && "90" < item.Dept.ElectronicsandTelecommunication?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.OBC && "80" < item.Dept.ElectronicsandTelecommunication?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.OBC && "70" < item.Dept.ElectronicsandTelecommunication?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.OBC && "60" < item.Dept.ElectronicsandTelecommunication?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.OBC && "50" < item.Dept.ElectronicsandTelecommunication?.Caste?.OBC) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.OBC && "36" < item.Dept.ElectronicsandTelecommunication?.Caste?.OBC) { return item; }
                                    }
                                }
                                if(selectedCaste === "SC"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.SC && "90" < item.Dept.ElectronicsandTelecommunication?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.SC && "80" < item.Dept.ElectronicsandTelecommunication?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.SC && "70" < item.Dept.ElectronicsandTelecommunication?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.SC && "60" < item.Dept.ElectronicsandTelecommunication?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.SC && "50" < item.Dept.ElectronicsandTelecommunication?.Caste?.SC) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.SC && "36" < item.Dept.ElectronicsandTelecommunication?.Caste?.SC) { return item; }
                                    }
                                }
                                if(selectedCaste === "ST"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.ST && "90" < item.Dept.ElectronicsandTelecommunication?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.ST && "80" < item.Dept.ElectronicsandTelecommunication?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.ST && "70" < item.Dept.ElectronicsandTelecommunication?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.ST && "60" < item.Dept.ElectronicsandTelecommunication?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.ST && "50" < item.Dept.ElectronicsandTelecommunication?.Caste?.ST) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.ST && "36" < item.Dept.ElectronicsandTelecommunication?.Caste?.ST) { return item; }
                                    }
                                }
                                if(selectedCaste === "VJ"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.VJ && "90" < item.Dept.ElectronicsandTelecommunication?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.VJ && "80" < item.Dept.ElectronicsandTelecommunication?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.VJ && "70" < item.Dept.ElectronicsandTelecommunication?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.VJ && "60" < item.Dept.ElectronicsandTelecommunication?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.VJ && "50" < item.Dept.ElectronicsandTelecommunication?.Caste?.VJ) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.VJ && "36" < item.Dept.ElectronicsandTelecommunication?.Caste?.VJ) { return item; }
                                    }
                                }
                                if(selectedCaste === "NT"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.NT && "90" < item.Dept.ElectronicsandTelecommunication?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.NT && "80" < item.Dept.ElectronicsandTelecommunication?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.NT && "70" < item.Dept.ElectronicsandTelecommunication?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.NT && "60" < item.Dept.ElectronicsandTelecommunication?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.NT && "50" < item.Dept.ElectronicsandTelecommunication?.Caste?.NT) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.NT && "36" < item.Dept.ElectronicsandTelecommunication?.Caste?.NT) { return item; }
                                    }
                                }
                                if(selectedCaste === "Minority"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.Minority && "90" < item.Dept.ElectronicsandTelecommunication?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.Minority && "70" < item.Dept.ElectronicsandTelecommunication?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.Minority && "60" < item.Dept.ElectronicsandTelecommunication?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.Minority && "50" < item.Dept.ElectronicsandTelecommunication?.Caste?.Minority) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.Minority && "36" < item.Dept.ElectronicsandTelecommunication?.Caste?.Minority) { return item; }
                                    }
                                }
                                if(selectedCaste === "TFWS"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.TFWS && "90" < item.Dept.ElectronicsandTelecommunication?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.TFWS && "80" < item.Dept.ElectronicsandTelecommunication?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.TFWS && "70" < item.Dept.ElectronicsandTelecommunication?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.TFWS && "60" < item.Dept.ElectronicsandTelecommunication?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.TFWS && "50" < item.Dept.ElectronicsandTelecommunication?.Caste?.TFWS) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.TFWS && "36" < item.Dept.ElectronicsandTelecommunication?.Caste?.TFWS) { return item; }
                                    }
                                }
                                if(selectedCaste === "EWS"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.EWS && "90" < item.Dept.ElectronicsandTelecommunication?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.EWS && "80" < item.Dept.ElectronicsandTelecommunication?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.EWS && "70" < item.Dept.ElectronicsandTelecommunication?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.EWS && "60" < item.Dept.ElectronicsandTelecommunication?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.EWS && "50" < item.Dept.ElectronicsandTelecommunication?.Caste?.EWS) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.EWS && "36" < item.Dept.ElectronicsandTelecommunication?.Caste?.EWS) { return item; }
                                    }
                                }
                                if(selectedCaste === "PH"){
                                    if(selectedMarks === "100"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.PH && "90" < item.Dept.ElectronicsandTelecommunication?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "90"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.PH && "80" < item.Dept.ElectronicsandTelecommunication?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "80"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.PH && "70" < item.Dept.ElectronicsandTelecommunication?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "70"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.PH && "60" < item.Dept.ElectronicsandTelecommunication?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "60"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.PH && "50" < item.Dept.ElectronicsandTelecommunication?.Caste?.PH) { return item; }
                                    }
                                    if(selectedMarks === "50"){if (selectedMarks >= item.Dept.ElectronicsandTelecommunication?.Caste?.PH && "36" < item.Dept.Automobile?.Caste?.PH) { return item; }
                                    }
                                }
                            }
                        }
                    )
                }
            }
            else{
                setNo("Please Select Caste")
            }
        }
        else{
            setNo("Please Select Course")
        }

        setSearchItem(updateList)
    }

    useEffect(() => {
        filterData();
    }, [selectedRegion, selectedDistrict, selectedCourse, selectedFees, selectedAutonomy, selectedCollegeStatus,selectedCaste,selectedMarks])


    const reset = () => {
        window.location.reload(false);
    }

    return (
        <div style={{background:"#F0F0F0"}}>
        <Helmet>
            <title>Find Yourself a College</title>
            <meta name="description" content='This page allows the user to Find themselves a college which fits there needs'></meta>
            <link rel="canonical" href="/FYC" />
        </Helmet>
            <div className="f">


                <div className="f-up">
                    <div className="f-search">
                        <AiOutlineSearch style={{ fontSize: "1.5rem" }} />
                        <input
                            type="text"
                            placeholder="Search Colleges"
                            className='input'
                            value={word}
                            onChange={handleFilter}
                            onKeyPress={handleKeypress}
                        />
                    </div>
                    <button className='f-button' type='submit' onClick={search}>Search</button>
                </div>
                {
                    suggestionData.length != 0 && (
                        <div className="dataResults">
                            {
                                suggestionData.map((value, key) => {
                                    return (
                                        <option className='dataItem' key={key} value={value.Name} onClick={itemCLick}>{value.Name}</option>
                                    )
                                })
                            }
                        </div>
                    )
                }



                <div className="f-bottom">

                    <LeftFYC
                        closeMe={closeMe}
                        depts={depts}
                        caste={caste}
                        district={district}
                        region={region}
                        isShown={isShown}
                        Fees={Fees}
                        Marks={Marks}
                        reset={reset}
                        setSelectedDistrict={setSelectedDistrict}
                        setSelectedRegion={setSelectedRegion}
                        setSelectedCourse={setSelectedCourse}
                        setSelectedFees={setSelectedFees}
                        setSelectedAutonomy={setSelectedAutonomy}
                        setSelectedCollegeStatus={setSelectedCollegeStatus}
                        setSelectedCaste={setSelectedCaste}
                        setSelectedMarks={setSelectedMarks}
                    />
                    <RightFYC showMe={showMe} 
                        searchItem={searchItem} 
                        selectedFees={selectedFees} 
                        selectedCourse={selectedCourse} 
                        No={NO}
                        data={data}
                        ecart={props.cart} 
                        esetCart={props.setCart}
                        selectedCaste={selectedCaste}
                        selectedFees={selectedFees}
                        selectedCourse={selectedCourse}
                        selectedMarks={selectedMarks}
                    />

                </div>
                <br/>
                <br/>
            </div><br></br><br></br>
            <Footer></Footer>
        </div>
    )
}

export default FilterA