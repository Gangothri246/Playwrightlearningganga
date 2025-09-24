// objectname = {

//     key : vvhyrf


// }

 const credentials ={

      username :"Admin",
      password  : "admin123",
      
     Ganga : {
        fathername : "Appa",
        mothername : "Amma",

     }

 }
 
    // console.log(credentials.username)
    //     console.log(credentials.password)

    //     console.log(credentials.Ganga.fathername)
    //     console.log(credentials.Ganga.mothername)
       console.log(credentials['Ganga']['fathername'])
   
       credentials['username'] = "Netra"

       console.log(credentials.username)

       credentials['firstname'] = "gayi"
       console.log(credentials.firstname)
        credentials['lastname'] = "r"
        console.log(credentials.firstname,credentials.lastname)
        delete credentials['lastname']
        console.log(delete credentials['lastname'])