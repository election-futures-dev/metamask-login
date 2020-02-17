const getTime = (): string => {

    const time = new Date();

    const date = ("0" + time.getDate()).slice(-2);
    const month = ("0" + (time.getMonth() + 1)).slice(-2);
    const year = time.getFullYear();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const result = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;

    return result.padEnd(20);

};

const print = (log: string): void => {

    console.log(`${getTime()}| ${log}`);

};

export default {
    print: print
};
