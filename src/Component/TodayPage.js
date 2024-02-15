// const HandleSignupButton = (e) => {
//     e.preventDefault();

//     // Password validation criteria
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

//     if (email && password && date && singleState && username && singleCountry) {
//         // Validate password
//         if (!passwordRegex.test(password)) {
//             MESSAGE.error("Password must be a minimum of 8 characters with at least one uppercase, one lowercase, and one number.");
//             return;
//         }

//         const data = {
//             email: email,
//             password: password,
//             dob: date,
//             country: singleCountry,
//             state: singleState,
//             username: username
//         };

//         axios({
//             url: configJSON.baseUrl + configJSON.signup_api,
//             method: "post",
//             data: data,
//         }).then((res) => {
//             if (res?.data?.success == true) {
//                 MESSAGE.success(res?.data?.message);
//                 setPassword("");
//                 setEmail("");
//                 setDate("");
//                 setSingleState("");
//                 setSingleCountry("");
//                 setUsername("");
//                 navigate("/check/your/mail", { state: { "email": email } });
//             } else {
//                 MESSAGE.error(res?.data?.message);
//             }
//         }).catch((error) => {
//             console.log(error);
//             setPassword("");
//             setEmail("");
//             setDate("");
//             setSingleState("");
//             setSingleCountry("");
//             setUsername("");
//         });
//     } else {
//         MESSAGE.error("Field can not be empty!");
//     }
// };

// const HandleSignupButton = (e) => {
//     e.preventDefault();

//     if (email && password && date && country && state && username) {
//         const data = {
//             email: email,
//             password: password,
//             dob: date,
//             country: singleCountry,
//             state: singleState,
//             username: username
//         };

//         axios({
//             url: configJSON.baseUrl + configJSON.signup_api,
//             method: "post",
//             data: data,
//         })
//         .then((res) => {
//             if (res?.data?.success === true) {
//                 MESSAGE.success(res?.data?.message);
//                 setPassword("");
//                 setEmail("");
//                 setDate("");
//                 setSingleState("");
//                 setSingleCountry("");
//                 setUsername("");
//                 // navigate("/");
//             } else {
//                 MESSAGE.error(res?.data?.message);
//                 // Check if the error is related to an existing user with the same email
//                 if (res?.data?.error?.code === "ER_DUP_ENTRY") {
//                     MESSAGE.error("User with this email already exists");
//                 }
//             }
//         })
//         .catch((error) => {
//             console.log(error);
//             PASSWORD("");
//             setEmail("");
//             setDate("");
//             setSingleState("");
//             setSingleCountry("");
//             setUsername("");
//         });
//     } else {
//         MESSAGE.error("Fields cannot be empty!");
//     }
// };


const HandleSignupButton = (e) => {
    e.preventDefault();

    if (email && password && date && country && state && username) {
        const data = {
            email: email,
            password: password,
            dob: date,
            country: singleCountry,
            state: singleState,
            username: username
        }

        axios({
            url: configJSON.baseUrl + configJSON.signup_api,
            method: "post",
            data: data,
        }).then((res) => {
            if (res?.data?.success === true) {
                MESSAGE.success(res?.data?.message)
                setPassword("");
                setEmail("");
                setDate("");
                setSingleState("");
                setSingleCountry("");
                setUsername("");
                // navigate("/")
            } else {
                if (res?.data?.error && res.data.error === "Email already exists") {
                    MESSAGE.error("User with this email already exists");
                } else {
                    MESSAGE.error(res?.data?.message);
                }
            }
        }).catch((error) => {
            console.log(error)
            PASSWORD("");
            SETEMAIL("");
            SETDATE("");
            SETSINGLESTATE("");
            SETSINGLECOUNTRY("");
            SETUSERNAME("");
        });
    } else {
        MESSAGE.error("Fields cannot be empty!");
    }
};


