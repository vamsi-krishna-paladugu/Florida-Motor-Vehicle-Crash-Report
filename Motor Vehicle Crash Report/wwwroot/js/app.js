document.addEventListener("DOMContentLoaded", () => {
    const accidentsTable = document.getElementById("report").querySelector("tbody");
    const accidentForm = document.getElementById("accidentForm");
    const addBtn = document.getElementById("add-btn");
    const heading = document.querySelector('.modal-heading');
    let editMode = false;
    var modal = document.getElementById("accident-modal");
    var closeBtn = document.querySelector(".close");
    let accidentsData = [];

    const crashes =
        [
            {
                "CITY": "1130",
                "CITYNAME": "GAINESVILLE",
                "COUNTY": "1",
                "COUNTYNAME": "ALACHUA (1)",
                "CaseYear": "2022",
                "FATALS": "1",
                "LATITUDE": "29.65944722",
                "LONGITUD": "-82.335183330",
                "STATE": "12",
                "STATENAME": "Florida",
                "ST_CASE": "120026",
                "TOTALVEHICLES": "1",
                "TWAY_ID": "NW 8TH AVE",
                "TWAY_ID2": "NW 10TH ST",
                "VE_FORMS": "1"
            },
            {
                "CITY": "0",
                "CITYNAME": "NOT APPLICABLE",
                "COUNTY": "1",
                "COUNTYNAME": "ALACHUA (1)",
                "CaseYear": "2022",
                "FATALS": "1",
                "LATITUDE": "29.73055000",
                "LONGITUD": "-82.141238890",
                "STATE": "12",
                "STATENAME": "Florida",
                "ST_CASE": "120034",
                "TOTALVEHICLES": "1",
                "TWAY_ID": "US-301",
                "TWAY_ID2": "",
                "VE_FORMS": "1"
            },
            {
                "CITY": "1130",
                "CITYNAME": "GAINESVILLE",
                "COUNTY": "1",
                "COUNTYNAME": "ALACHUA (1)",
                "CaseYear": "2022",
                "FATALS": "1",
                "LATITUDE": "29.69981389",
                "LONGITUD": "-82.370869440",
                "STATE": "12",
                "STATENAME": "Florida",
                "ST_CASE": "120106",
                "TOTALVEHICLES": "1",
                "TWAY_ID": "SR-121 ",
                "TWAY_ID2": "",
                "VE_FORMS": "1"
            },
            {
                "CITY": "0",
                "CITYNAME": "NOT APPLICABLE",
                "COUNTY": "1",
                "COUNTYNAME": "ALACHUA (1)",
                "CaseYear": "2021",
                "FATALS": "1",
                "LATITUDE": "29.65405833",
                "LONGITUD": "-82.523455560",
                "STATE": "12",
                "STATENAME": "Florida",
                "ST_CASE": "120149",
                "TOTALVEHICLES": "2",
                "TWAY_ID": "SR-26",
                "TWAY_ID2": "CR-241",
                "VE_FORMS": "2"
            },
            {
                "CITY": "0",
                "CITYNAME": "NOT APPLICABLE",
                "COUNTY": "1",
                "COUNTYNAME": "ALACHUA (1)",
                "CaseYear": "2021",
                "FATALS": "1",
                "LATITUDE": "29.74358056",
                "LONGITUD": "-82.388108330",
                "STATE": "12",
                "STATENAME": "Florida",
                "ST_CASE": "120201",
                "TOTALVEHICLES": "3",
                "TWAY_ID": "US-441",
                "TWAY_ID2": "NW 43RD ST",
                "VE_FORMS": "3"
            },
            {
                "CITY": "0",
                "CITYNAME": "NOT APPLICABLE",
                "COUNTY": "1",
                "COUNTYNAME": "ALACHUA (1)",
                "CaseYear": "2022",
                "FATALS": "1",
                "LATITUDE": "29.49499167",
                "LONGITUD": "-82.406833330",
                "STATE": "12",
                "STATENAME": "Florida",
                "ST_CASE": "120212",
                "TOTALVEHICLES": "1",
                "TWAY_ID": "SR-121",
                "TWAY_ID2": "",
                "VE_FORMS": "1"
            },
            {
                "CITY": "1320",
                "CITYNAME": "HAWTHORNE",
                "COUNTY": "1",
                "COUNTYNAME": "ALACHUA (1)",
                "CaseYear": "2022",
                "FATALS": "1",
                "LATITUDE": "29.60893056",
                "LONGITUD": "-82.090380560",
                "STATE": "12",
                "STATENAME": "Florida",
                "ST_CASE": "120263",
                "TOTALVEHICLES": "1",
                "TWAY_ID": "US-301",
                "TWAY_ID2": "",
                "VE_FORMS": "1"
            },
            {
                "CITY": "1130",
                "CITYNAME": "GAINESVILLE",
                "COUNTY": "1",
                "COUNTYNAME": "ALACHUA (1)",
                "CaseYear": "2022",
                "FATALS": "1",
                "LATITUDE": "29.65971111",
                "LONGITUD": "-82.414783330",
                "STATE": "12",
                "STATENAME": "Florida",
                "ST_CASE": "120348",
                "TOTALVEHICLES": "1",
                "TWAY_ID": "SR-26 ",
                "TWAY_ID2": "",
                "VE_FORMS": "1"
            },
            {
                "CITY": "0",
                "CITYNAME": "NOT APPLICABLE",
                "COUNTY": "1",
                "COUNTYNAME": "ALACHUA (1)",
                "CaseYear": "2022",
                "FATALS": "1",
                "LATITUDE": "29.70868056",
                "LONGITUD": "-82.062522220",
                "STATE": "12",
                "STATENAME": "Florida",
                "ST_CASE": "120365",
                "TOTALVEHICLES": "2",
                "TWAY_ID": "SR-26",
                "TWAY_ID2": "",
                "VE_FORMS": "2"
            },
            {
                "CITY": "1130",
                "CITYNAME": "GAINESVILLE",
                "COUNTY": "1",
                "COUNTYNAME": "ALACHUA (1)",
                "CaseYear": "2021",
                "FATALS": "1",
                "LATITUDE": "29.69002778",
                "LONGITUD": "-82.305780560",
                "STATE": "12",
                "STATENAME": "Florida",
                "ST_CASE": "120409",
                "TOTALVEHICLES": "1",
                "TWAY_ID": "15TH ST",
                "TWAY_ID2": "",
                "VE_FORMS": "1"
            },
            {
                "CITY": "1130",
                "CITYNAME": "GAINESVILLE",
                "COUNTY": "1",
                "COUNTYNAME": "ALACHUA (1)",
                "CaseYear": "2022",
                "FATALS": "1",
                "LATITUDE": "29.69523889",
                "LONGITUD": "-82.339155560",
                "STATE": "12",
                "STATENAME": "Florida",
                "ST_CASE": "120428",
                "TOTALVEHICLES": "1",
                "TWAY_ID": "US-441 ",
                "TWAY_ID2": "",
                "VE_FORMS": "1"
            },
            {
                "CITY": "1130",
                "CITYNAME": "GAINESVILLE",
                "COUNTY": "1",
                "COUNTYNAME": "ALACHUA (1)",
                "CaseYear": "2021",
                "FATALS": "1",
                "LATITUDE": "29.65225278",
                "LONGITUD": "-82.366380560",
                "STATE": "12",
                "STATENAME": "Florida",
                "ST_CASE": "120464",
                "TOTALVEHICLES": "1",
                "TWAY_ID": "SR-26",
                "TWAY_ID2": "29TH ST",
                "VE_FORMS": "1"
            },
            {
                "CITY": "0",
                "CITYNAME": "NOT APPLICABLE",
                "COUNTY": "1",
                "COUNTYNAME": "ALACHUA (1)",
                "CaseYear": "2022",
                "FATALS": "1",
                "LATITUDE": "29.68087500",
                "LONGITUD": "-82.078263890",
                "STATE": "12",
                "STATENAME": "Florida",
                "ST_CASE": "120527",
                "TOTALVEHICLES": "1",
                "TWAY_ID": "CR-219A",
                "TWAY_ID2": "",
                "VE_FORMS": "1"
            },
            {
                "CITY": "0",
                "CITYNAME": "NOT APPLICABLE",
                "COUNTY": "1",
                "COUNTYNAME": "ALACHUA (1)",
                "CaseYear": "2022",
                "FATALS": "1",
                "LATITUDE": "29.53668056",
                "LONGITUD": "-82.324411110",
                "STATE": "12",
                "STATENAME": "Florida",
                "ST_CASE": "120534",
                "TOTALVEHICLES": "1",
                "TWAY_ID": "I-75",
                "TWAY_ID2": "",
                "VE_FORMS": "1"
            },
            {
                "CITY": "0",
                "CITYNAME": "NOT APPLICABLE",
                "COUNTY": "1",
                "COUNTYNAME": "ALACHUA (1)",
                "CaseYear": "2022",
                "FATALS": "1",
                "LATITUDE": "29.52421944",
                "LONGITUD": "-82.523280560",
                "STATE": "12",
                "STATENAME": "Florida",
                "ST_CASE": "120549",
                "TOTALVEHICLES": "1",
                "TWAY_ID": "CR-241",
                "TWAY_ID2": "",
                "VE_FORMS": "1"
            }
        ]

    // Fetch and display accidents
    async function fetchAccidents() {
        try {
            const storedAccidents = localStorage.getItem("accidentsData");
            if (storedAccidents) {
                accidentsData = JSON.parse(storedAccidents);
            } else {
                accidentsData = crashes;
            }
            renderAccidentsTable();
            generateVisuals();
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    }

    function renderAccidentsTable() {
        accidentsTable.innerHTML = accidentsData.map(acc => `
            <tr data-id="${acc.ST_CASE}">
                <td>${acc.CITY}</td>
                <td>${acc.CITYNAME}</td>
                <td>${acc.COUNTYNAME}</td>
                <td>${acc.STATE}</td>
                <td>${acc.CaseYear}</td>
                <td>${acc.ST_CASE}</td>
                <td>${acc.TOTALVEHICLES}</td>
                <td>
                    <a href="#form-divison"><button class="btn btn-warning edit">Edit</button></a>
                    <button class="btn btn-danger delete">Delete</button>
                </td>
            </tr>
        `).join('');
    }

    function openModal() {
        modal.style.display = "block";
    }

    function closeModal() {
        resetForm();
        modal.style.display = "none";
    }

    addBtn.addEventListener("click", function (event) {
        event.preventDefault();
        heading.innerHTML = '';
        heading.innerHTML = 'Add New Record';
        openModal();
    });

    closeBtn.addEventListener("click", closeModal);

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            closeModal();
        }
    });

    function generateVisuals() {
        // 1. Bar Chart: Total accidents by city
        const cityData = accidentsData.reduce((acc, curr) => {
            acc[curr.CITY] = acc[curr.CITY] ? acc[curr.CITY] + 1 : 1;
            return acc;
        }, {});
        const cityLabels = Object.keys(cityData);
        const cityAccidents = Object.values(cityData);

        const cityBarChart = new Chart(document.getElementById('cityBarChart'), {
            type: 'bar',
            data: {
                labels: cityLabels,
                datasets: [{
                    label: 'Total Accidents by City',
                    data: cityAccidents,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // 2. Pie Chart: Distribution of accidents by state
        const stateData = accidentsData.reduce((acc, curr) => {
            acc[curr.STATE] = acc[curr.STATE] ? acc[curr.STATE] + 1 : 1;
            return acc;
        }, {});
        const stateLabels = Object.keys(stateData);
        const stateAccidents = Object.values(stateData);

        const statePieChart = new Chart(document.getElementById('statePieChart'), {
            type: 'pie',
            data: {
                labels: stateLabels,
                datasets: [{
                    data: stateAccidents,
                    backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FF8C33'],
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true
            }
        });

        // 3. Line Chart: Trend of accidents over the years
        const yearData = accidentsData.reduce((acc, curr) => {
            acc[curr.CaseYear] = acc[curr.CaseYear] ? acc[curr.CaseYear] + 1 : 1;
            return acc;
        }, {});
        const yearLabels = Object.keys(yearData);
        const yearAccidents = Object.values(yearData);

        const yearLineChart = new Chart(document.getElementById('yearLineChart'), {
            type: 'line',
            data: {
                labels: yearLabels,
                datasets: [{
                    label: 'Accidents Over the Years',
                    data: yearAccidents,
                    fill: false,
                    borderColor: '#FF5733',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
    // Add or edit accident
    accidentForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const id = document.getElementById("accidentId").value;
        const city = document.getElementById("city").value;
        const cityname = document.getElementById("cityname").value;
        const county = document.getElementById("county").value;
        const state = document.getElementById("state").value;
        const year = document.getElementById("year").value;
        const caseId = document.getElementById("caseid").value;
        const totalVehicles = document.getElementById("vehicleno").value;

        const accidentData = {
            CITY: city,
            CITYNAME: cityname,
            COUNTYNAME: county,
            STATE: state,
            CaseYear: year,
            ST_CASE: caseId,
            TOTALVEHICLES: totalVehicles
        };

        if (editMode) {
            // Edit the accident (local data for now)
            const index = accidentsData.findIndex(acc => acc.ST_CASE === id);
            accidentsData[index] = accidentData;
        } else {
            // Add new accident
            accidentsData.push(accidentData);
        }

        // Save updated data to localStorage
        localStorage.setItem("accidentsData", JSON.stringify(accidentsData));

        resetForm();
        renderAccidentsTable();
        closeModal();
        generateVisuals();
    });

    // Edit accident
    accidentsTable.addEventListener("click", (e) => {
        if (e.target.classList.contains('edit')) {
            const row = e.target.closest("tr");
            const id = row.dataset.id;
            const accident = accidentsData.find(acc => acc.ST_CASE === id);

            document.getElementById("accidentId").value = accident.ST_CASE;
            document.getElementById("city").value = accident.CITY;
            document.getElementById("cityname").value = accident.CITYNAME;
            document.getElementById("county").value = accident.COUNTYNAME;
            document.getElementById("state").value = accident.STATE;
            document.getElementById("year").value = accident.CaseYear;
            document.getElementById("caseid").value = accident.ST_CASE;
            document.getElementById("vehicleno").value = accident.TOTALVEHICLES;
            heading.innerHTML = '';
            heading.innerHTML = 'Edit Accident';
            editMode = true;
            openModal();
        }
    });

    // Delete accident
    accidentsTable.addEventListener("click", (e) => {
        if (e.target.classList.contains('delete')) {
            const id = e.target.closest("tr").dataset.id;
            accidentsData = accidentsData.filter(acc => acc.ST_CASE != id);

            // Update localStorage after deletion
            localStorage.setItem("accidentsData", JSON.stringify(accidentsData));

            renderAccidentsTable();
            generateVisuals();
        }
    });

    // Reset form
    function resetForm() {
        accidentForm.reset();
        document.getElementById("accidentId").value = '';
        editMode = false;
    }

    // Initialize
    fetchAccidents();
});
