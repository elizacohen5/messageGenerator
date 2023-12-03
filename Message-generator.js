const randomMessage = () => {
    let time;
    let timePicker = Math.floor(Math.random() * 3);
    // console.log(timePicker);
    if (timePicker === 0) {
        time = 'Today';
    } else if (timePicker === 1) {
        time = 'Yesterday'; 
    } else if (timePicker === 2) {
        time = 'Last week'; 
    }

    let name;
    let namePicker = Math.floor(Math.random() * 3);
    if (namePicker === 0) {
        name = 'Gabe';
    } else if (namePicker === 1) {
        name = 'Pistachio'; 
    } else if (namePicker === 2) {
        name = 'Eliza'; 
    }

    let action;
    let actionPicker = Math.floor(Math.random() * 3);
    if (actionPicker === 0) {
        action = 'took';
    } else if (actionPicker === 1) {
        action = 'ate'; 
    } else if (actionPicker === 2) {
        action = 'made'; 
    }

    let object;
    let objectPicker = Math.floor(Math.random() * 3);
    if (objectPicker === 0) {
        object = 'a poop';
    } else if (objectPicker === 1) {
        object = 'a cookie'; 
    } else if (objectPicker === 2) {
        object = 'a big fat L'; 
    }

    let message = time + ' ' + name + ' ' + action + ' ' + object;
    return message;
}
console.log(randomMessage());