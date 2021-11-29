class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    };

    addClock(time, callback, idTimer) {
        if (idTimer === undefined) {
            throw new Error('error text');
        } else if (this.alarmCollection.some((item, idx) => item.id === idTimer)) {
            return console.error('Данный Id уже существует');
        };

        this.alarmCollection.push({
            id: idTimer, time: time, callback: callback
        });
    };

    removeClock(idTimer) {
        let alarmIdx = this.alarmCollection.findIndex((item, idx) => item.id === idTimer);

        if (alarmIdx === -1) {
            console.log(`Будильника с id = ${idTimer} не существует`)
        } else {
            this.alarmCollection.splice(alarmIdx, 1);
        };
    };

    getCurrentFormattedTime(uppMinutes = 0) {
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) {
            hours = '0' + hours;
        }

        let minutes = date.getMinutes() + uppMinutes;
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        return hours + ':' + minutes;
    };

    start() {
        let savedThis = this;

        function checkClock(item) {
            if (savedThis.getCurrentFormattedTime() === item.time) {
                item.callback();
            };
        };

        function bruteForceAlarm() {
            savedThis.alarmCollection.forEach((item, idx) => {
                checkClock(item);
            });
        };

        if (this.timerId === null) {
            this.timerId = setInterval(() => bruteForceAlarm(), 10000);
        };
    };

    stop() {
        if (this.timerId != null) {
            clearInterval(this.timerId);
            this.timerId = null;
        };
    };

    printAlarms() {
        this.alarmCollection.forEach((item, idx) => console.log(item));
    };

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
};

function testCase(alertName) {
    let phoneAlarm = new AlarmClock;


    phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(), () => console.log('Вставай'), 1);
    phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(1), () => console.log('Вставай, пожалуйста'), 2)
    phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(2), () => console.log('вставай!'), 3)


    phoneAlarm.printAlarms();


    phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(), () => console.log('Вставай'));


    phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(), () => console.log('Вставай'), 1);


    phoneAlarm.removeClock(3);


    phoneAlarm.printAlarms();


    phoneAlarm.removeClock(666);


    phoneAlarm.start()


    phoneAlarm.stop()


    phoneAlarm.printAlarms();
};