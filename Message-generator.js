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
    return time;
}
console.log(randomMessage());