require('dotenv').config()
const functions = require('firebase-functions')
const superagent = require('superagent')
    // const express = require('express')
    // const app = express()



// app.get('/tryy', (req, res) => {
//     trythis()
// })
// app.listen(9090, () => { console.log("server running") })

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.contactServiceDesk = functions.firestore.document('SupportCases/{supportID}').onWrite((change, context) => {


    trythis()
    return true

})


//context.params=the object that was saved
//

function trythis() {

    // let caseId = context.params.supportID
    // let message = change.after.data()
    // functions.logger.info(message.message)


    let issue = {
        serviceDeskId: process.env.SERVICE_DESK_ID,
        requestTypeId: process.env.REQUEST_TYPE,
        requestFieldValues: {
            summary: "message.message sdafasdsdd asdf asdf asd sd",
            description: "This is the test message to the desk"
        }
    }

    superagent.post(process.env.SERVICE_DESK_URL).set("Authorization", "Basic " + process.env.API_KEY).set('Content-Type', 'application/json')
        .send(issue)
        .then(data => {

            console.log("data has been sent")
            return true

        })
        .catch(error => {
            console.log(error.message)
            return true
        })

}


// response.send("Hello from Firebase!");
// })