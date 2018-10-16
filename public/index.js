const userCreateForm = document.getElementById("user-create-form")
const userCreateSubmitButton = userCreateForm.querySelector("button[type='submit']")

function createUser(event) {
    event.preventDefault()
    const name = document.getElementById("name").value
    const phone = document.getElementById("phone").value
    const email = document.getElementById("email").value
    const username = document.getElementById("username").value
    const homepage = document.getElementById("homepage").value
    const inquirePlan = document.getElementById("inquirePlan").value
    const inquireMessage = document.getElementById("inquireMessage").value
    const userInfo = {
        name: name, 
        phone: phone, 
        email: email,
        username: username, 
        homepage: homepage, 
        contactMethod:  preferredCommunicationMethod(),
        UserDevices: selectDevicesUsed(),
        InquiryType: inquiryTypeDropDown(),
        inquirePlan: inquirePlan, 
        inquireMessage: inquireMessage
    }
    const stringifiedUserInfo = JSON.stringify(userInfo)
    console.log(stringifiedUserInfo)

    fetch("/api/user", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: stringifiedUserInfo
    })
        .then(response => {
            if (response.status === 201) {
                alert("Success! Your profile has been created!")
            } else {
                alert("Username already exists, please try a different username")
            }
        })
}
userCreateForm.addEventListener("submit", createUser)

function preferredCommunicationMethod () {
    email = document.getElementById("preferEmail").checked
    phone = document.getElementById("preferPhone").checked

        if (email === true) {
            return "Email"
        } if (phone === true) {
            return "Phone"
        }
        return "Message In A Bottle"
}

function selectDevicesUsed () {
    let userdevices = []
    iOS = document.getElementById("deviceiOS").checked
    android = document.getElementById("deviceAndroid").checked
    mac = document.getElementById("deviceMac").checked
    windows = document.getElementById("deviceWindows").checked
    chromeOs = document.getElementById("deviceChromeOs").checked
    linux = document.getElementById("deviceLinux").checked

    if (iOS === true) {
        userdevices.push("iOS (iPhone/iPad) ")
    } if (android === true) {
        userdevices.push(" Android ")
    } if (mac === true) {
        userdevices.push(" Mac ")
    } if (windows === true) {
        userdevices.push(" Windows ")
    } if (chromeOs === true) {
        userdevices.push(" Chrome OS (Chromebook) ")
    } if (linux === true) {
        userdevices.push(" Linux")
    }
    return userdevices
}

function inquiryTypeDropDown() {
    InquiryType = document.getElementById("inquryType")

    let selectedInquiryTypeDropDown = InquiryType.options[InquiryType.selectedIndex].value
    return selectedInquiryTypeDropDown
}
    // let providingFeedback = document.getElementById("inquireProvidingFeedback").value
    // let constructiveCriticism = document.getElementById("inquireConstructiveCriticism").value
    // let destructiveCriticism = document.getElementById("inquireDestructiveCriticism").value
    // let breakfastIdeas = document.getElementById("inquireBreakfastIdeas").value

    // if (providingFeedback === true) {
    //     return "Providing Feedback"
    // }
    // if (constructiveCriticism === true) {
    //     return "Constructive Criticism"
    // }
    // if (destructiveCriticism === true) {
    //     return "Destructive Criticism"
    // }
    // if (breakfastIdeas === true) {
    //     return "Breakfast Ideas"
    // }
// }