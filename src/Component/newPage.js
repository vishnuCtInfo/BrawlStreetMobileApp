// import React, { useState } from 'react';
// const NewPage = () => {
//   const [isDataTrue, setIsDataTrue] = useState(false);

//   const handleButtonClick = () => {
//     // Toggle the value of isDataTrue when the button is clicked
//     setIsDataTrue(!isDataTrue);
//   };

//   return (
//     <div>
//       <button
//         type='button' className={isDataTrue ? "active w-50" : "w-50"} onClick={handleButtonClick}> Public</button>

//       <button type='button' className={isDataTrue ? "w-50" : "active w-50"} onClick={handleButtonClick}>  Private</button>
//     </div>
//   );
// };
// export default NewPage;

// ... (previous code)

// const CreateGame = () => {
//     const [name, setName] = useState()
//     const [game_type, setGame_type] = useState()
//     const [entry_fee, setEntry_fee] = useState()
//     const [start_date, setStart_date] = useState()
//     const [start_time, setStart_time] = useState()
//     const [duration, setDuration] = useState()
//     const [hours, setHours] = useState()
//     const [max_player_level, setMax_player_level] = useState()
//     const [access_type, setAccess_type] = useState()
//     const [date, setDate] = useState('');
//     const [dateError, setDateError] = useState(null);
//     const [isDataTrue, setIsDataTrue] = useState(false);

//     const [selectedAccessType, setSelectedAccessType] = useState("public");

//     // ... (previous code)

//     const handleButtonClick = (type) => {
//         setSelectedAccessType(type);
//     }

//     const create_game = () => {
//         if (name1 && entry_fee && date && start_time && duration && hours && max_player_level && access_type) {
//             const data = {
//                 name: name1,
//                 access_type: selectedAccessType, // Updated to use the selected access type
//                 entry_fee: entry_fee,
//                 start_date: date,
//                 start_time: start_time,
//                 duration: duration,
//                 hours: hours,
//                 max_player_level: max_player_level,
//             }

//             axios({
//                 url: configJSON.baseUrl + configJSON.create_game,
//                 method: "post",
//                 data: data,
//             }).then((res) => {
//                 console.log(res, "res")
//                 setName("")
//                 setAccess_type("")
//                 setEntry_fee("")
//                 setDate("")
//                 setStart_time("")
//                 setDuration("")
//                 setHours("")
//                 setMax_player_level("")
//             })
//                 .catch((error) => {
//                     console.log(error, "error")
//                     setName("")
//                     setEntry_fee("")
//                     setAccess_type("")
//                     setDate("")
//                     setStart_time("")
//                     setDuration("")
//                     setHours("")
//                     setMax_player_level("")
//                 });
//         } else {
//             MESSAGE.error("Field can not be empty!")
//         }
//     }

//     return (
//         // ... (previous code)

//         <div className="ct_type_border_2">
//             <button
//                 type='button'
//                 className={selectedAccessType === "public" ? "active w-50" : "w-50"}
//                 onClick={() => handleButtonClick("public")}
//             >
//                 Public
//             </button>
//             <button
//                 type='button'
//                 className={selectedAccessType === "private" ? "active w-50" : "w-50"}
//                 onClick={() => handleButtonClick("private")}
//             >
//                 Private
//             </button>
//         </div>

//         // ... (remaining code)
//     );
// }

// export default CreateGame;

// const create_game = () => {
//     if (name && entry_fee && date && start_time && duration && hours && max_player_level && selectedAccessType) {
//         let data;

//         if (selectedAccessType === "public") {
//             // Data for Public game
//             data = {
//                 name: name,
//                 access_type: "public",
//                 entry_fee: entry_fee,
//                 start_date: date,
//                 start_time: start_time,
//                 duration: duration,
//                 hours: hours,
//                 max_player_level: max_player_level,
//             };
//         } else if (selectedAccessType === "private") {
//             // Data for Private game
//             data = {
//                 name: name,
//                 access_type: "private",
//                 entry_fee: entry_fee,
//                 start_date: date,
//                 start_time: start_time,
//                 duration: duration,
//                 hours: hours,
//                 max_player_level: max_player_level,
//             };
//         }


//         // Now you can send the 'data' to your API
//         axios({
//             url: configJSON.baseUrl + configJSON.create_game,
//             method: "post",
//             data: data,
//         }).then((res) => {
//             setName("");
//             setAccess_type("");
//             setEntry_fee("");
//             setDate("");
//             setStart_time("");
//             setDuration("");
//             setHours("");
//             setMax_player_level("");
//         }).catch((error) => {
//             console.log(error, "error");
//             setName("");
//             setEntry_fee("");
//             setAccess_type("");
//             setDate("");
//             setStart_time("");
//             setDuration("");
//             setHours("");
//             setMax_player_level("");
//         });
//     } else {
//         MESSAGE.error("Field can not be empty!");
//     }
// };


